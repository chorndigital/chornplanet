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
        dryRun: false,
    };

    for (const arg of args) {
        if (arg.startsWith('--env=')) options.env = arg.split('=')[1];
        if (arg.startsWith('--locale=')) options.locale = arg.split('=')[1];
        if (arg === '--dry-run') options.dryRun = true;
    }

    return options;
}

const localeDefinitions = {
    da: {suffix: 'DA'},
    de: {suffix: 'DE'},
    en: {suffix: 'EN'},
    fi: {suffix: 'FI'},
    fr: {suffix: 'FR'},
    ja: {suffix: 'JA'},
    ko: {suffix: 'KO'},
    nl: {suffix: 'NL'},
    th: {suffix: 'TH'},
    zh: {suffix: 'ZH'},
};

function buildTasks(options) {
    return Object.entries(localeDefinitions)
        .filter(([locale]) => !options.locale || options.locale === locale)
        .map(([locale, definition]) => ({
            locale,
            sources: [
                `src/data/feature/Feature${definition.suffix}.ts`,
                `src/data/frontend/FrontEnd${definition.suffix}.ts`,
                `src/data/fullstack/FullStack${definition.suffix}.ts`,
                `src/data/devops/DevOps${definition.suffix}.ts`,
                `src/data/cloud/Cloud${definition.suffix}.ts`,
                `src/data/web3/Web3${definition.suffix}.ts`,
                `src/data/cloud-solutions/CloudSolution${definition.suffix}.ts`,
            ],
            getValue: () => ({
                mobileDevelopment: {
                    pageTitle: 'Mobile App Development',
                },
                feature: require(`../src/data/feature/Feature${definition.suffix}`)[`Feature${definition.suffix}`],
                frontEnd: require(`../src/data/frontend/FrontEnd${definition.suffix}`)[`FrontEnd${definition.suffix}`],
                fullStack: require(`../src/data/fullstack/FullStack${definition.suffix}`)[`FullStack${definition.suffix}`],
                devOps: require(`../src/data/devops/DevOps${definition.suffix}`)[`DevOps${definition.suffix}`],
                cloud: require(`../src/data/cloud/Cloud${definition.suffix}`)[`Cloud${definition.suffix}`],
                web3: require(`../src/data/web3/Web3${definition.suffix}`)[`Web3${definition.suffix}`],
                cloudSolution: require(`../src/data/cloud-solutions/CloudSolution${definition.suffix}`)[`CloudSolution${definition.suffix}`],
            }),
        }));
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
    const collectionName = process.env.MONGODB_COLLECTION_TECHNICAL_EXPERTISE_CONTENT || 'technical_expertise_content';

    if (options.dryRun) {
        console.log(
            JSON.stringify(
                {
                    env: options.env,
                    target: `${process.env.MONGODB_DATABASE}.${collectionName}`,
                    dryRun: true,
                    tasks: tasks.map((task) => ({locale: task.locale, sources: task.sources})),
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
        for (const task of tasks) {
            const key = `${task.sources.join(',')}::technical-expertise::${task.locale}`;

            try {
                const payload = task.getValue();

                if (
                    !payload.feature ||
                    !payload.mobileDevelopment ||
                    !payload.frontEnd ||
                    !payload.fullStack ||
                    !payload.devOps ||
                    !payload.cloud ||
                    !payload.web3 ||
                    !payload.cloudSolution
                ) {
                    throw new Error('Resolved technical expertise content is incomplete');
                }

                const timestamp = nowIso();
                await collection.updateOne(
                    {locale: task.locale},
                    {
                        $set: {
                            locale: task.locale,
                            ...payload,
                            updatedAt: timestamp,
                        },
                        $setOnInsert: {
                            createdAt: timestamp,
                        },
                    },
                    {upsert: true}
                );

                const savedDocument = await collection.findOne({locale: task.locale});
                if (
                    !savedDocument ||
                    !savedDocument.feature ||
                    !savedDocument.frontEnd ||
                    !savedDocument.fullStack ||
                    !savedDocument.devOps ||
                    !savedDocument.cloud ||
                    !savedDocument.web3 ||
                    !savedDocument.cloudSolution
                ) {
                    throw new Error('Verification failed after Mongo upsert');
                }

                appendLog(
                    successLogPath,
                    `${timestamp} | OK | key=${key} | section=technical-expertise | locale=${task.locale} | source=${task.sources.join(',')} | target=${collectionName}`
                );
                migratedCount += 1;
            } catch (error) {
                const message = error instanceof Error ? error.message : String(error);
                appendLog(
                    failureLogPath,
                    `${nowIso()} | FAIL | key=${key} | section=technical-expertise | locale=${task.locale} | source=${task.sources.join(',')} | target=${collectionName} | error=${message}`
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
        `${nowIso()} | FAIL | key=process | section=technical-expertise | locale=all | source=scripts/migrate-technical-expertise-to-mongo.cjs | error=${error.message}`
    );
    console.error(error);
    process.exit(1);
});
