import {ObjectId, WithId} from "mongodb";
import {AboutContentMedia, IAbout} from "@/lib/model/about";

export const ABOUT_CONTENT_LOCALES = ['da', 'de', 'en', 'fi', 'fr', 'ja', 'ko', 'nl', 'th', 'zh'] as const;

export type AboutContentLocale = typeof ABOUT_CONTENT_LOCALES[number];

export interface AboutContentPayload {
    locale: string;
    about: IAbout;
    media: AboutContentMedia;
}

export type PartialAboutContentPayload =
    { locale: string } & Partial<Omit<AboutContentPayload, 'locale'>>;

export interface AboutContentRecord extends PartialAboutContentPayload {
    createdAt?: string;
    updatedAt?: string;
}

export interface AboutContentResponse extends PartialAboutContentPayload {
    id: string;
    createdAt?: string;
    updatedAt?: string;
}

export function normalizeAboutContentLocale(locale: string): AboutContentLocale {
    if (ABOUT_CONTENT_LOCALES.includes(locale as AboutContentLocale)) {
        return locale as AboutContentLocale;
    }

    return 'en';
}

export function mapAboutContentResponse(
    doc: WithId<AboutContentRecord> | (AboutContentRecord & {_id: ObjectId})
): AboutContentResponse {
    return {
        id: doc._id.toHexString(),
        locale: doc.locale,
        about: doc.about,
        media: doc.media,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
    };
}
