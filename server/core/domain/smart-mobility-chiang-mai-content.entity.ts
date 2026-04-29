import {ObjectId, WithId} from "mongodb";
import {SmartMobilityChiangMaiContentPayload} from "@/lib/model/smart-mobility-chiang-mai";

export const SMART_MOBILITY_CHIANG_MAI_CONTENT_LOCALES = ['da', 'de', 'en', 'fi', 'fr', 'ja', 'ko', 'nl', 'th', 'zh'] as const;

export type SmartMobilityChiangMaiContentLocale = typeof SMART_MOBILITY_CHIANG_MAI_CONTENT_LOCALES[number];

export type PartialSmartMobilityChiangMaiContentPayload =
    { locale: string; slug: string } & Partial<Omit<SmartMobilityChiangMaiContentPayload, 'locale' | 'slug'>>;

export interface SmartMobilityChiangMaiContentRecord extends PartialSmartMobilityChiangMaiContentPayload {
    createdAt?: string;
    updatedAt?: string;
}

export interface SmartMobilityChiangMaiContentResponse extends PartialSmartMobilityChiangMaiContentPayload {
    id: string;
    createdAt?: string;
    updatedAt?: string;
}

export function normalizeSmartMobilityChiangMaiContentLocale(locale: string): SmartMobilityChiangMaiContentLocale {
    if (SMART_MOBILITY_CHIANG_MAI_CONTENT_LOCALES.includes(locale as SmartMobilityChiangMaiContentLocale)) {
        return locale as SmartMobilityChiangMaiContentLocale;
    }

    return 'en';
}

export function mapSmartMobilityChiangMaiContentResponse(
    doc: WithId<SmartMobilityChiangMaiContentRecord> | (SmartMobilityChiangMaiContentRecord & {_id: ObjectId})
): SmartMobilityChiangMaiContentResponse {
    return {
        id: doc._id.toHexString(),
        locale: doc.locale,
        slug: doc.slug,
        pageType: doc.pageType,
        primaryContent: doc.primaryContent,
        connectivityMatrix: doc.connectivityMatrix,
        safeStatement: doc.safeStatement,
        rightItems: doc.rightItems,
        bottomCards: doc.bottomCards,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
    };
}
