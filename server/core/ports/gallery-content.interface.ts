import {
    GalleryContentResponse,
    PartialGalleryContentPayload,
} from "@/core/domain/gallery-content.entity";

export interface GalleryContentInterface {
    findByLocale(locale: string): Promise<GalleryContentResponse | null>;
    findAll(): Promise<GalleryContentResponse[]>;
    upsertByLocale(content: PartialGalleryContentPayload): Promise<GalleryContentResponse>;
    deleteByLocale(locale: string): Promise<void>;
}
