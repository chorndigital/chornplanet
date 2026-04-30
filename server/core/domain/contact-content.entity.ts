import {ObjectId, WithId} from "mongodb";
import {IContact, IContactSocialLink} from "@/lib/model/IContact";

export const CONTACT_CONTENT_LOCALES = ['da', 'de', 'en', 'fi', 'fr', 'ja', 'ko', 'nl', 'th', 'zh'] as const;

export type ContactContentLocale = typeof CONTACT_CONTENT_LOCALES[number];

export interface ContactContentPayload {
    locale: string;
    contact: IContact;
    socialLinks: IContactSocialLink[];
}

export type PartialContactContentPayload =
    { locale: string } & Partial<Omit<ContactContentPayload, 'locale'>>;

export interface ContactContentRecord extends PartialContactContentPayload {
    createdAt?: string;
    updatedAt?: string;
}

export interface ContactContentResponse extends PartialContactContentPayload {
    id: string;
    createdAt?: string;
    updatedAt?: string;
}

export function normalizeContactContentLocale(locale: string): ContactContentLocale {
    if (CONTACT_CONTENT_LOCALES.includes(locale as ContactContentLocale)) {
        return locale as ContactContentLocale;
    }

    return 'en';
}

export function mapContactContentResponse(
    doc: WithId<ContactContentRecord> | (ContactContentRecord & {_id: ObjectId})
): ContactContentResponse {
    return {
        id: doc._id.toHexString(),
        locale: doc.locale,
        contact: doc.contact,
        socialLinks: doc.socialLinks,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
    };
}
