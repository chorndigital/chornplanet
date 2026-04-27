const fs = require('fs');
const path = require('path');
const Module = require('module');
const dotenv = require('dotenv');
const {MongoClient} = require('mongodb');

const projectRoot = path.resolve(__dirname, '..');
const successLogPath = path.join(projectRoot, 'migrated-to-mongo.log');
const failureLogPath = path.join(projectRoot, 'migrated-failure.log');

function ensureFile(filePath, header) {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, `${header}\n`, 'utf8');
    }
}

function appendLog(filePath, message) {
    fs.appendFileSync(filePath, `${message}\n`, 'utf8');
}

function nowIso() {
    return new Date().toISOString();
}

function fileExistsWithExtension(basePath) {
    const candidates = [
        basePath,
        `${basePath}.ts`,
        `${basePath}.tsx`,
        `${basePath}.js`,
        `${basePath}.mjs`,
        path.join(basePath, 'index.ts'),
        path.join(basePath, 'index.tsx'),
        path.join(basePath, 'index.js'),
    ];

    return candidates.find((candidate) => fs.existsSync(candidate)) || null;
}

function patchAliasResolution() {
    const originalResolveFilename = Module._resolveFilename;

    Module._resolveFilename = function patchedResolveFilename(request, parent, isMain, options) {
        if (request.startsWith('@/')) {
            const subPath = request.slice(2);
            const roots = ['src', 'server', 'backend'];

            for (const root of roots) {
                const resolved = fileExistsWithExtension(path.join(projectRoot, root, subPath));
                if (resolved) {
                    return originalResolveFilename.call(this, resolved, parent, isMain, options);
                }
            }
        }

        return originalResolveFilename.call(this, request, parent, isMain, options);
    };
}

function parseArgs() {
    const args = process.argv.slice(2);
    const options = {
        env: '.env.development',
        locale: null,
        slug: null,
        dryRun: false,
    };

    for (const arg of args) {
        if (arg.startsWith('--env=')) options.env = arg.split('=')[1];
        if (arg.startsWith('--locale=')) options.locale = arg.split('=')[1];
        if (arg.startsWith('--slug=')) options.slug = arg.split('=')[1];
        if (arg === '--dry-run') options.dryRun = true;
    }

    return options;
}

const locales = ['da', 'de', 'en', 'fi', 'fr', 'ja', 'ko', 'nl', 'th', 'zh'];

function toImage(content) {
    return {
        title: content.title,
        link: content.link,
        media: content.media,
    };
}

function rotateRightItems(items, currentIndex, imageQty) {
    return Array.from(
        {length: imageQty},
        (_, index) => items[(currentIndex + 1 + index) % items.length]
    );
}

function buildTasks(options) {
    const {SmartMobility} = require('../src/data/smart-mobility/SmartMobility');
    const tasks = [];

    for (const locale of locales) {
        if (options.locale && locale !== options.locale) {
            continue;
        }

        const chiangMai = SmartMobility[locale].chiangMai;
        const allItems = [
            chiangMai.vision,
            chiangMai.urbanHub,
            chiangMai.connectivityMatrix.routes[0],
            chiangMai.connectivityMatrix.routes[1],
            chiangMai.connectivityMatrix.routes[2],
            chiangMai.vertiportDesign,
        ].map(toImage);

        const bottomCards = [
            chiangMai.urbanHub,
            chiangMai.connectivityMatrix.routes[0],
        ];

        const pageDefinitions = [
            {
                slug: 'vision-smart-mobility-northern-gateway',
                pageType: 'vision',
                currentIndex: 0,
                primaryContent: chiangMai.vision,
            },
            {
                slug: 'urban-hub-san-sai-doi-saket',
                pageType: 'urbanHub',
                currentIndex: 1,
                primaryContent: chiangMai.urbanHub,
            },
            {
                slug: 'hub-to-chiang-mai-airport',
                pageType: 'route',
                currentIndex: 2,
                primaryContent: chiangMai.connectivityMatrix.routes[0],
                connectivityMatrix: {
                    title: chiangMai.connectivityMatrix.title,
                    description: chiangMai.connectivityMatrix.description,
                },
            },
            {
                slug: 'hub-to-doi-suthep',
                pageType: 'route',
                currentIndex: 3,
                primaryContent: chiangMai.connectivityMatrix.routes[1],
                connectivityMatrix: {
                    title: chiangMai.connectivityMatrix.title,
                    description: chiangMai.connectivityMatrix.description,
                },
            },
            {
                slug: 'hub-to-doi-inthanon',
                pageType: 'route',
                currentIndex: 4,
                primaryContent: chiangMai.connectivityMatrix.routes[2],
                connectivityMatrix: {
                    title: chiangMai.connectivityMatrix.title,
                    description: chiangMai.connectivityMatrix.description,
                },
            },
            {
                slug: 'vertiport-design',
                pageType: 'vertiport',
                currentIndex: 5,
                primaryContent: chiangMai.vertiportDesign,
            },
        ];

        for (const page of pageDefinitions) {
            if (options.slug && page.slug !== options.slug) {
                continue;
            }

            tasks.push({
                locale,
                slug: page.slug,
                source: `src/data/smart-mobility/SmartMobility.ts::chiangMai.${page.slug}`,
                pageType: page.pageType,
                primaryContent: page.primaryContent,
                connectivityMatrix: page.connectivityMatrix,
                safeStatement: chiangMai.vision.safeStatement,
                rightItems: rotateRightItems(allItems, page.currentIndex, 4),
                bottomCards,
            });
        }
    }

    return tasks;
}

async function migrate() {
    const options = parseArgs();
    const envPath = path.join(projectRoot, options.env);

    if (!fs.existsSync(envPath)) {
        throw new Error(`Env file not found: ${options.env}`);
    }

    dotenv.config({path: envPath, override: true});
    ensureFile(successLogPath, '# Successful migrations');
    ensureFile(failureLogPath, '# Failed migrations');

    patchAliasResolution();
    require('ts-node').register({
        transpileOnly: true,
        compilerOptions: {
            module: 'CommonJS',
            moduleResolution: 'node',
        },
    });

    const tasks = buildTasks(options);
    const collectionName = process.env.MONGODB_COLLECTION_SMART_MOBILITY_CHIANG_MAI_CONTENT || 'smart_mobility_chiang_mai_content';

    if (options.dryRun) {
        console.log(
            JSON.stringify(
                {
                    env: options.env,
                    target: `${process.env.MONGODB_DATABASE}.${collectionName}`,
                    dryRun: true,
                    tasks: tasks.map((task) => ({locale: task.locale, slug: task.slug, source: task.source})),
                },
                null,
                2
            )
        );
        return;
    }

    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();

    const collection = client
        .db(process.env.MONGODB_DATABASE)
        .collection(collectionName);

    let migratedCount = 0;
    let failedCount = 0;

    try {
        await collection.createIndex(
            {locale: 1, slug: 1},
            {unique: true, name: 'unique_smart_mobility_chiang_mai_locale_slug_index'}
        );

        for (const task of tasks) {
            const key = `${task.source}::smart-mobility-chiang-mai::${task.locale}`;

            try {
                if (!task.primaryContent?.title || !task.rightItems?.length || !task.bottomCards?.length) {
                    throw new Error('Resolved smart mobility Chiang Mai content is incomplete');
                }

                const timestamp = nowIso();
                await collection.updateOne(
                    {locale: task.locale, slug: task.slug},
                    {
                        $set: {
                            locale: task.locale,
                            slug: task.slug,
                            pageType: task.pageType,
                            primaryContent: task.primaryContent,
                            connectivityMatrix: task.connectivityMatrix,
                            safeStatement: task.safeStatement,
                            rightItems: task.rightItems,
                            bottomCards: task.bottomCards,
                            updatedAt: timestamp,
                        },
                        $setOnInsert: {
                            createdAt: timestamp,
                        },
                    },
                    {upsert: true}
                );

                const savedDocument = await collection.findOne({locale: task.locale, slug: task.slug});
                if (!savedDocument?.primaryContent || !savedDocument?.rightItems?.length) {
                    throw new Error('Verification failed after Mongo upsert');
                }

                appendLog(
                    successLogPath,
                    `${timestamp} | OK | key=${key} | section=smart-mobility-chiang-mai | locale=${task.locale} | slug=${task.slug} | source=${task.source} | target=${collectionName}`
                );
                migratedCount += 1;
            } catch (error) {
                const message = error instanceof Error ? error.message : String(error);
                appendLog(
                    failureLogPath,
                    `${nowIso()} | FAIL | key=${key} | section=smart-mobility-chiang-mai | locale=${task.locale} | slug=${task.slug} | source=${task.source} | target=${collectionName} | error=${message}`
                );
                failedCount += 1;
            }
        }
    } finally {
        await client.close();
    }

    console.log(
        JSON.stringify(
            {
                env: options.env,
                target: collectionName,
                migratedCount,
                failedCount,
            },
            null,
            2
        )
    );
}

migrate().catch((error) => {
    appendLog(
        failureLogPath,
        `${nowIso()} | FAIL | key=process | section=smart-mobility-chiang-mai | locale=all | source=scripts/migrate-smart-mobility-chiang-mai-to-mongo.cjs | error=${error.message}`
    );
    console.error(error);
    process.exit(1);
});
