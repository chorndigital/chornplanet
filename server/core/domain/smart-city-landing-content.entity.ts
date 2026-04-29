import {ObjectId, WithId} from "mongodb";
import {SmartCityLandingContentPayload} from "@/lib/model/smart-city-landing";

export const SMART_CITY_LANDING_CONTENT_LOCALES = ['da', 'de', 'en', 'fi', 'fr', 'ja', 'ko', 'nl', 'th', 'zh'] as const;

export type SmartCityLandingContentLocale = typeof SMART_CITY_LANDING_CONTENT_LOCALES[number];

export type PartialSmartCityLandingContentPayload =
    { locale: string; slug: string } & Partial<Omit<SmartCityLandingContentPayload, 'locale' | 'slug'>>;

export interface SmartCityLandingContentRecord extends PartialSmartCityLandingContentPayload {
    createdAt?: string;
    updatedAt?: string;
}

export interface SmartCityLandingContentResponse extends PartialSmartCityLandingContentPayload {
    id: string;
    createdAt?: string;
    updatedAt?: string;
}

export function normalizeSmartCityLandingContentLocale(locale: string): SmartCityLandingContentLocale {
    if (SMART_CITY_LANDING_CONTENT_LOCALES.includes(locale as SmartCityLandingContentLocale)) {
        return locale as SmartCityLandingContentLocale;
    }

    return 'en';
}

export function mapSmartCityLandingContentResponse(
    doc: WithId<SmartCityLandingContentRecord> | (SmartCityLandingContentRecord & {_id: ObjectId})
): SmartCityLandingContentResponse {
    return {
        id: doc._id.toHexString(),
        locale: doc.locale,
        slug: doc.slug,
        content: doc.content,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
    };
}
