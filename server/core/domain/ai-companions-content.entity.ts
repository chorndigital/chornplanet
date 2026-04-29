import {ObjectId, WithId} from "mongodb";
import {AiCompanionsPageContent} from "@/lib/model/ai-companions";

export const AI_COMPANIONS_CONTENT_LOCALES = ['da', 'de', 'en', 'fi', 'fr', 'ja', 'ko', 'nl', 'th', 'zh'] as const;

export type AiCompanionsContentLocale = typeof AI_COMPANIONS_CONTENT_LOCALES[number];

export interface AiCompanionsContentPayload extends AiCompanionsPageContent {
    locale: string;
}

export type PartialAiCompanionsContentPayload =
    { locale: string } & Partial<Omit<AiCompanionsContentPayload, 'locale'>>;

export interface AiCompanionsContentRecord extends PartialAiCompanionsContentPayload {
    createdAt?: string;
    updatedAt?: string;
}

export interface AiCompanionsContentResponse extends PartialAiCompanionsContentPayload {
    id: string;
    createdAt?: string;
    updatedAt?: string;
}

export function normalizeAiCompanionsContentLocale(locale: string): AiCompanionsContentLocale {
    if (AI_COMPANIONS_CONTENT_LOCALES.includes(locale as AiCompanionsContentLocale)) {
        return locale as AiCompanionsContentLocale;
    }

    return 'en';
}

export function mapAiCompanionsContentResponse(
    doc: WithId<AiCompanionsContentRecord> | (AiCompanionsContentRecord & {_id: ObjectId})
): AiCompanionsContentResponse {
    return {
        id: doc._id.toHexString(),
        locale: doc.locale,
        demo: doc.demo,
        service: doc.service,
        aiCompanions: doc.aiCompanions,
        feature: doc.feature,
        media: doc.media,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
    };
}
