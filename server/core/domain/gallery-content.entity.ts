import {ObjectId, WithId} from "mongodb";
import {GalleryContentMedia, IGallery} from "@/lib/model/IGallery";

export const GALLERY_CONTENT_LOCALES = ['da', 'de', 'en', 'fi', 'fr', 'ja', 'ko', 'nl', 'th', 'zh'] as const;

export type GalleryContentLocale = typeof GALLERY_CONTENT_LOCALES[number];

export interface GalleryContentPayload {
    locale: string;
    gallery: IGallery;
    media: GalleryContentMedia;
}

export type PartialGalleryContentPayload =
    { locale: string } & Partial<Omit<GalleryContentPayload, 'locale'>>;

export interface GalleryContentRecord extends PartialGalleryContentPayload {
    createdAt?: string;
    updatedAt?: string;
}

export interface GalleryContentResponse extends PartialGalleryContentPayload {
    id: string;
    createdAt?: string;
    updatedAt?: string;
}

export function normalizeGalleryContentLocale(locale: string): GalleryContentLocale {
    if (GALLERY_CONTENT_LOCALES.includes(locale as GalleryContentLocale)) {
        return locale as GalleryContentLocale;
    }

    return 'en';
}

export function mapGalleryContentResponse(
    doc: WithId<GalleryContentRecord> | (GalleryContentRecord & {_id: ObjectId})
): GalleryContentResponse {
    return {
        id: doc._id.toHexString(),
        locale: doc.locale,
        gallery: doc.gallery,
        media: doc.media,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
    };
}
