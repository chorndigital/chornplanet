import {ObjectId, WithId} from "mongodb";
import {IConsent} from "@/lib/model/IConsent";
import {IFooter} from "@/lib/model/IFooter";
import {INavbar} from "@/lib/model/INavbar";
import {ILanguageOption} from "@/lib/model/ILanguage";

export const LAYOUT_CONTENT_LOCALES = ['da', 'de', 'en', 'fi', 'fr', 'ja', 'ko', 'nl', 'th', 'zh'] as const;

export type LayoutContentLocale = typeof LAYOUT_CONTENT_LOCALES[number];

export interface LayoutContentPayload {
    locale: string;
    navbar: INavbar[];
    footer: IFooter;
    consent: IConsent;
    languageOptions: ILanguageOption[];
}

export type PartialLayoutContentPayload =
    { locale: string } & Partial<Omit<LayoutContentPayload, 'locale'>>;

export interface LayoutContentRecord extends PartialLayoutContentPayload {
    createdAt?: string;
    updatedAt?: string;
}

export interface LayoutContentResponse extends PartialLayoutContentPayload {
    id: string;
    createdAt?: string;
    updatedAt?: string;
}

export function normalizeLayoutContentLocale(locale: string): LayoutContentLocale {
    if (LAYOUT_CONTENT_LOCALES.includes(locale as LayoutContentLocale)) {
        return locale as LayoutContentLocale;
    }

    return 'en';
}

export function mapLayoutContentResponse(
    doc: WithId<LayoutContentRecord> | (LayoutContentRecord & {_id: ObjectId})
): LayoutContentResponse {
    return {
        id: doc._id.toHexString(),
        locale: doc.locale,
        navbar: doc.navbar,
        footer: doc.footer,
        consent: doc.consent,
        languageOptions: doc.languageOptions,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
    };
}
