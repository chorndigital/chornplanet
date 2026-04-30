import {ObjectId, WithId} from "mongodb";
import {SmartCityChiangMaiContentPayload} from "@/lib/model/ISmartCityChiangMai";

export const SMART_CITY_CHIANG_MAI_CONTENT_LOCALES = ['da', 'de', 'en', 'fi', 'fr', 'ja', 'ko', 'nl', 'th', 'zh'] as const;

export type SmartCityChiangMaiContentLocale = typeof SMART_CITY_CHIANG_MAI_CONTENT_LOCALES[number];

export type PartialSmartCityChiangMaiContentPayload =
    { locale: string; slug: string } & Partial<Omit<SmartCityChiangMaiContentPayload, 'locale' | 'slug'>>;

export interface SmartCityChiangMaiContentRecord extends PartialSmartCityChiangMaiContentPayload {
    createdAt?: string;
    updatedAt?: string;
}

export interface SmartCityChiangMaiContentResponse extends PartialSmartCityChiangMaiContentPayload {
    id: string;
    createdAt?: string;
    updatedAt?: string;
}

export function normalizeSmartCityChiangMaiContentLocale(locale: string): SmartCityChiangMaiContentLocale {
    if (SMART_CITY_CHIANG_MAI_CONTENT_LOCALES.includes(locale as SmartCityChiangMaiContentLocale)) {
        return locale as SmartCityChiangMaiContentLocale;
    }

    return 'en';
}

export function mapSmartCityChiangMaiContentResponse(
    doc: WithId<SmartCityChiangMaiContentRecord> | (SmartCityChiangMaiContentRecord & {_id: ObjectId})
): SmartCityChiangMaiContentResponse {
    return {
        id: doc._id.toHexString(),
        locale: doc.locale,
        slug: doc.slug,
        item: doc.item,
        relatedItems: doc.relatedItems,
        bottomContent: doc.bottomContent,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
    };
}
