import {
    GalleryContentResponse,
    PartialGalleryContentPayload,
} from "@/core/domain/gallery-content.entity";
import {GalleryContentInterface} from "@/core/ports/gallery-content.interface";

export class GalleryContentService implements GalleryContentInterface {
    constructor(private readonly repository: GalleryContentInterface) {
    }

    async findByLocale(locale: string): Promise<GalleryContentResponse | null> {
        return this.repository.findByLocale(locale);
    }

    async findAll(): Promise<GalleryContentResponse[]> {
        return this.repository.findAll();
    }

    async upsertByLocale(content: PartialGalleryContentPayload): Promise<GalleryContentResponse> {
        return this.repository.upsertByLocale(content);
    }

    async deleteByLocale(locale: string): Promise<void> {
        return this.repository.deleteByLocale(locale);
    }
}
