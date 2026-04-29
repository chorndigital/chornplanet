const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const {MongoClient} = require('mongodb');

const projectRoot = path.resolve(__dirname, '..');

function parseArgs() {
    const args = process.argv.slice(2);
    const options = {
        sourceEnv: '.env.production',
        targetEnv: '.env.development',
    };

    for (const arg of args) {
        if (arg.startsWith('--source-env=')) options.sourceEnv = arg.split('=')[1];
        if (arg.startsWith('--target-env=')) options.targetEnv = arg.split('=')[1];
    }

    return options;
}

function loadEnv(fileName) {
    const envPath = path.join(projectRoot, fileName);
    if (!fs.existsSync(envPath)) {
        throw new Error(`Env file not found: ${fileName}`);
    }

    const parsed = dotenv.parse(fs.readFileSync(envPath, 'utf8'));
    const requiredKeys = ['MONGODB_URI', 'MONGODB_DATABASE', 'MONGODB_COLLECTION_HOMEPAGE_CONTENT'];

    for (const key of requiredKeys) {
        if (!parsed[key]) {
            throw new Error(`Missing ${key} in ${fileName}`);
        }
    }

    return {
        envFile: fileName,
        uri: parsed.MONGODB_URI,
        database: parsed.MONGODB_DATABASE,
        collection: parsed.MONGODB_COLLECTION_HOMEPAGE_CONTENT,
    };
}

async function syncCollections() {
    const options = parseArgs();
    const source = loadEnv(options.sourceEnv);
    const target = loadEnv(options.targetEnv);

    const sourceClient = new MongoClient(source.uri);
    const targetClient = new MongoClient(target.uri);

    await sourceClient.connect();
    await targetClient.connect();

    try {
        const sourceCollection = sourceClient.db(source.database).collection(source.collection);
        const targetCollection = targetClient.db(target.database).collection(target.collection);

        const documents = await sourceCollection.find({}).toArray();
        await targetCollection.deleteMany({});

        if (documents.length > 0) {
            await targetCollection.insertMany(documents);
        }

        const verificationCount = await targetCollection.countDocuments();

        console.log(
            JSON.stringify(
                {
                    source: `${source.database}.${source.collection}`,
                    target: `${target.database}.${target.collection}`,
                    copiedCount: documents.length,
                    verificationCount,
                },
                null,
                2
            )
        );
    } finally {
        await sourceClient.close();
        await targetClient.close();
    }
}

syncCollections().catch((error) => {
    console.error(error);
    process.exit(1);
});
