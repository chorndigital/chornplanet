import {
    AboutContentResponse,
    mapAboutContentResponse,
    normalizeAboutContentLocale,
    PartialAboutContentPayload,
} from "@/core/domain/about-content.entity";
import {AboutContentInterface} from "@/core/ports/about-content.interface";
import {aboutContentCollection} from "@/infrastructure/db/infra.mongodb";
import {getNowTimeBangkokAsia} from "@/utils/timezone";

export class AboutContentRepository implements AboutContentInterface {

    constructor() {
        this.ensureIndexes().catch((error) => {
            console.error('Failed to create about content indexes:', error);
        });
    }

    private async ensureIndexes() {
        await aboutContentCollection.createIndex(
            {locale: 1},
            {unique: true, name: 'unique_about_content_locale_index'}
        );
    }

    async findByLocale(locale: string): Promise<AboutContentResponse | null> {
        const normalizedLocale = normalizeAboutContentLocale(locale);
        const document = await aboutContentCollection.findOne({locale: normalizedLocale});
        return document ? mapAboutContentResponse(document) : null;
    }

    async findAll(): Promise<AboutContentResponse[]> {
        const documents = await aboutContentCollection
            .find({})
            .sort({locale: 1})
            .toArray();

        return documents.map(mapAboutContentResponse);
    }

    async upsertByLocale(content: PartialAboutContentPayload): Promise<AboutContentResponse> {
        const now = getNowTimeBangkokAsia().toISOString();
        const normalizedLocale = normalizeAboutContentLocale(content.locale);
        const payload = {
            ...content,
            locale: normalizedLocale,
            updatedAt: now,
        };

        const result = await aboutContentCollection.findOneAndUpdate(
            {locale: normalizedLocale},
            {
                $set: payload,
                $setOnInsert: {
                    createdAt: now,
                },
            },
            {
                upsert: true,
                returnDocument: 'after',
            }
        );

        if (!result) {
            throw new Error(`Failed to upsert about content for locale "${normalizedLocale}"`);
        }

        return mapAboutContentResponse(result);
    }

    async deleteByLocale(locale: string): Promise<void> {
        const normalizedLocale = normalizeAboutContentLocale(locale);
        await aboutContentCollection.deleteOne({locale: normalizedLocale});
    }
}
