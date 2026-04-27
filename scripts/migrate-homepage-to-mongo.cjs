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

function removeFailureEntries(keys) {
    if (!fs.existsSync(failureLogPath) || keys.size === 0) {
        return;
    }

    const lines = fs.readFileSync(failureLogPath, 'utf8').split(/\r?\n/);
    const filteredLines = lines.filter((line) => {
        if (!line || line.startsWith('#')) {
            return true;
        }

        const match = line.match(/\bkey=([^|]+)\b/);
        if (!match) {
            return true;
        }

        return !keys.has(match[1].trim());
    });

    fs.writeFileSync(failureLogPath, `${filteredLines.join('\n').replace(/\n+$/u, '')}\n`, 'utf8');
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

function readSuccessKeys() {
    if (!fs.existsSync(successLogPath)) {
        return new Set();
    }

    return new Set(
        fs.readFileSync(successLogPath, 'utf8')
            .split(/\r?\n/)
            .filter(Boolean)
            .filter((line) => !line.startsWith('#'))
            .map((line) => {
                const match = line.match(/\bkey=([^|]+)\b/);
                return match ? match[1].trim() : null;
            })
            .filter(Boolean)
    );
}

function parseArgs() {
    const args = process.argv.slice(2);
    const options = {
        env: '.env.production',
        section: null,
        locale: null,
        force: false,
    };

    for (const arg of args) {
        if (arg.startsWith('--env=')) options.env = arg.split('=')[1];
        if (arg.startsWith('--section=')) options.section = arg.split('=')[1];
        if (arg.startsWith('--locale=')) options.locale = arg.split('=')[1];
        if (arg === '--force') options.force = true;
    }

    return options;
}

const localeFileNames = {
    da: 'DA',
    de: 'DE',
    en: 'EN',
    fi: 'FI',
    fr: 'FR',
    ja: 'JA',
    ko: 'KO',
    nl: 'NL',
    th: 'TH',
    zh: 'ZH_CN',
};

function getSectionDefinitions() {
    return [
        {
            section: 'smartCityHighlight',
            sourceDirectory: 'src/data/smart-city',
            sourcePrefix: 'SmartCity',
            getValue: (locale) => require('../src/data/smart-city/SmartCity').SmartCity[locale]?.chiangMai?.[3],
        },
        {
            section: 'smartCityTags',
            sourceDirectory: 'src/data/tags',
            sourcePrefix: 'Tag',
            getValue: (locale) => require('../src/data/tags/Tag').Tag[locale]?.smartCity,
        },
    ];
}

function buildTasks(sectionDefinitions, options) {
    const tasks = [];

    for (const definition of sectionDefinitions) {
        if (options.section && definition.section !== options.section) {
            continue;
        }

        for (const [locale, suffix] of Object.entries(localeFileNames)) {
            if (options.locale && locale !== options.locale) {
                continue;
            }

            tasks.push({
                section: definition.section,
                locale,
                source: `${definition.sourceDirectory}/${definition.sourcePrefix}${suffix}.ts`,
                getValue: () => definition.getValue(locale),
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
    ensureFile(successLogPath, '# Successful homepage migrations');
    ensureFile(failureLogPath, '# Failed homepage migrations');

    patchAliasResolution();
    require('ts-node').register({
        transpileOnly: true,
        compilerOptions: {
            module: 'CommonJS',
            moduleResolution: 'node',
        },
    });

    const sectionDefinitions = getSectionDefinitions();
    const tasks = buildTasks(sectionDefinitions, options);
    const processedKeys = readSuccessKeys();

    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();

    const collection = client
        .db(process.env.MONGODB_DATABASE)
        .collection(process.env.MONGODB_COLLECTION_HOMEPAGE_CONTENT);

    let migratedCount = 0;
    let skippedCount = 0;
    let failedCount = 0;

    try {
        for (const task of tasks) {
            const key = `${task.source}::${task.section}::${task.locale}`;
            if (!options.force && processedKeys.has(key)) {
                skippedCount += 1;
                continue;
            }

            try {
                const value = task.getValue();

                if (value === undefined || value === null) {
                    throw new Error('Resolved value is empty');
                }

                const timestamp = nowIso();
                await collection.updateOne(
                    {locale: task.locale},
                    {
                        $set: {
                            locale: task.locale,
                            [task.section]: value,
                            updatedAt: timestamp,
                        },
                        $setOnInsert: {
                            createdAt: timestamp,
                        },
                    },
                    {upsert: true}
                );

                const savedDocument = await collection.findOne({locale: task.locale});
                if (!savedDocument || savedDocument[task.section] === undefined) {
                    throw new Error('Verification failed after Mongo upsert');
                }

                appendLog(
                    successLogPath,
                    `${timestamp} | OK | key=${key} | section=${task.section} | locale=${task.locale} | source=${task.source} | target=${process.env.MONGODB_COLLECTION_HOMEPAGE_CONTENT}`
                );
                removeFailureEntries(new Set([key]));
                migratedCount += 1;
            } catch (error) {
                const message = error instanceof Error ? error.message : String(error);
                appendLog(
                    failureLogPath,
                    `${nowIso()} | FAIL | key=${key} | section=${task.section} | locale=${task.locale} | source=${task.source} | target=${process.env.MONGODB_COLLECTION_HOMEPAGE_CONTENT} | error=${message}`
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
                target: process.env.MONGODB_COLLECTION_HOMEPAGE_CONTENT,
                migratedCount,
                skippedCount,
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
        `${nowIso()} | FAIL | key=process | section=process | locale=all | source=scripts/migrate-homepage-to-mongo.cjs | error=${error.message}`
    );
    console.error(error);
    process.exit(1);
});
