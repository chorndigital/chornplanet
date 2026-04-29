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

function buildTasks(options) {
    const {getSmartCityLandingData} = require('../src/data/smart-city-landing/getSmartCityLandingData');
    const tasks = [];

    for (const locale of locales) {
        if (options.locale && locale !== options.locale) {
            continue;
        }

        const landingData = getSmartCityLandingData({lang: locale});
        for (const [slug, content] of Object.entries(landingData)) {
            if (options.slug && slug !== options.slug) {
                continue;
            }

            tasks.push({
                locale,
                slug,
                source: `src/data/smart-city-landing/getSmartCityLandingData.ts::${slug}`,
                content,
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
    const collectionName = process.env.MONGODB_COLLECTION_SMART_CITY_LANDING_CONTENT || 'smart_city_landing_content';

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
            {unique: true, name: 'unique_smart_city_landing_locale_slug_index'}
        );

        for (const task of tasks) {
            const key = `${task.source}::smart-city-landing::${task.locale}`;

            try {
                if (!task.content?.heroObservation?.headline) {
                    throw new Error('Resolved smart city landing content is incomplete');
                }

                const timestamp = nowIso();
                await collection.updateOne(
                    {locale: task.locale, slug: task.slug},
                    {
                        $set: {
                            locale: task.locale,
                            slug: task.slug,
                            content: task.content,
                            updatedAt: timestamp,
                        },
                        $setOnInsert: {
                            createdAt: timestamp,
                        },
                    },
                    {upsert: true}
                );

                const savedDocument = await collection.findOne({locale: task.locale, slug: task.slug});
                if (!savedDocument?.content?.heroObservation) {
                    throw new Error('Verification failed after Mongo upsert');
                }

                appendLog(
                    successLogPath,
                    `${timestamp} | OK | key=${key} | section=smart-city-landing | locale=${task.locale} | slug=${task.slug} | source=${task.source} | target=${collectionName}`
                );
                migratedCount += 1;
            } catch (error) {
                const message = error instanceof Error ? error.message : String(error);
                appendLog(
                    failureLogPath,
                    `${nowIso()} | FAIL | key=${key} | section=smart-city-landing | locale=${task.locale} | slug=${task.slug} | source=${task.source} | target=${collectionName} | error=${message}`
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
        `${nowIso()} | FAIL | key=process | section=smart-city-landing | locale=all | source=scripts/migrate-smart-city-landing-to-mongo.cjs | error=${error.message}`
    );
    console.error(error);
    process.exit(1);
});
