import {Collection, MongoClient, MongoClientOptions} from 'mongodb';
import {User} from "@/core/domain/user.entity";
import {Task} from "@/core/domain/task.entity";
import {HomePageContentRecord} from "@/core/domain/homepage-content.entity";
import {ContactContentRecord} from "@/core/domain/contact-content.entity";
import {PolicyContentRecord} from "@/core/domain/policy-content.entity";
import {GalleryContentRecord} from "@/core/domain/gallery-content.entity";
import {AboutContentRecord} from "@/core/domain/about-content.entity";
import {AiCompanionsContentRecord} from "@/core/domain/ai-companions-content.entity";
import {SmartCityLandingContentRecord} from "@/core/domain/smart-city-landing-content.entity";
import {SmartCityChiangMaiContentRecord} from "@/core/domain/smart-city-chiang-mai-content.entity";
import {SmartMobilityChiangMaiContentRecord} from "@/core/domain/smart-mobility-chiang-mai-content.entity";

const uri = process.env.MONGODB_URI;
const databaseName = process.env.MONGODB_DATABASE;
const userCollectionName = process.env.MONGODB_COLLECTION_USERS;
const taskCollectionName = process.env.MONGODB_COLLECTION_TASKS;
const homePageContentCollectionName =
    process.env.MONGODB_COLLECTION_HOMEPAGE_CONTENT || 'homepage_content';
const contactContentCollectionName =
    process.env.MONGODB_COLLECTION_CONTACT_CONTENT || 'contact_content';
const policyContentCollectionName =
    process.env.MONGODB_COLLECTION_POLICY_CONTENT || 'policy_content';
const galleryContentCollectionName =
    process.env.MONGODB_COLLECTION_GALLERY_CONTENT || 'gallery_content';
const aboutContentCollectionName =
    process.env.MONGODB_COLLECTION_ABOUT_CONTENT || 'about_content';
const aiCompanionsContentCollectionName =
    process.env.MONGODB_COLLECTION_AI_COMPANIONS_CONTENT || 'ai_companions_content';
const smartCityLandingContentCollectionName =
    process.env.MONGODB_COLLECTION_SMART_CITY_LANDING_CONTENT || 'smart_city_landing_content';
const smartCityChiangMaiContentCollectionName =
    process.env.MONGODB_COLLECTION_SMART_CITY_CHIANG_MAI_CONTENT || 'smart_city_chiang_mai_content';
const smartMobilityChiangMaiContentCollectionName =
    process.env.MONGODB_COLLECTION_SMART_MOBILITY_CHIANG_MAI_CONTENT || 'smart_mobility_chiang_mai_content';

if (!uri) {
    throw new Error('MONGODB_URI is required');
}

if (!databaseName) {
    throw new Error('MONGODB_DATABASE is required');
}

if (!userCollectionName) {
    throw new Error('MONGODB_COLLECTION_USERS is required');
}

if (!taskCollectionName) {
    throw new Error('MONGODB_COLLECTION_TASKS is required');
}

const options: MongoClientOptions = {
    maxPoolSize: 10,
    minPoolSize: 1,
    maxIdleTimeMS: 60_000,
    retryWrites: true,
};

const globalForMongo = globalThis as typeof globalThis & {
    mongoClient?: MongoClient;
};

export const client = globalForMongo.mongoClient ?? new MongoClient(uri, options);

if (process.env.NODE_ENV !== 'production') {
    globalForMongo.mongoClient = client;
}

export const db = client.db(databaseName);

export const usersCollection: Collection<Omit<User, `id`>> = db.collection(userCollectionName);
export const taskCollection: Collection<Omit<Task, `id`>> = db.collection(taskCollectionName);
export const homePageContentCollection: Collection<HomePageContentRecord> =
    db.collection(homePageContentCollectionName);
export const contactContentCollection: Collection<ContactContentRecord> =
    db.collection(contactContentCollectionName);
export const policyContentCollection: Collection<PolicyContentRecord> =
    db.collection(policyContentCollectionName);
export const galleryContentCollection: Collection<GalleryContentRecord> =
    db.collection(galleryContentCollectionName);
export const aboutContentCollection: Collection<AboutContentRecord> =
    db.collection(aboutContentCollectionName);
export const aiCompanionsContentCollection: Collection<AiCompanionsContentRecord> =
    db.collection(aiCompanionsContentCollectionName);
export const smartCityLandingContentCollection: Collection<SmartCityLandingContentRecord> =
    db.collection(smartCityLandingContentCollectionName);
export const smartCityChiangMaiContentCollection: Collection<SmartCityChiangMaiContentRecord> =
    db.collection(smartCityChiangMaiContentCollectionName);
export const smartMobilityChiangMaiContentCollection: Collection<SmartMobilityChiangMaiContentRecord> =
    db.collection(smartMobilityChiangMaiContentCollectionName);
