import {
    AboutContentResponse,
    PartialAboutContentPayload,
} from "@/core/domain/about-content.entity";
import {AboutContentInterface} from "@/core/ports/about-content.interface";

export class AboutContentService implements AboutContentInterface {
    constructor(private readonly repository: AboutContentInterface) {
    }

    async findByLocale(locale: string): Promise<AboutContentResponse | null> {
        return this.repository.findByLocale(locale);
    }

    async findAll(): Promise<AboutContentResponse[]> {
        return this.repository.findAll();
    }

    async upsertByLocale(content: PartialAboutContentPayload): Promise<AboutContentResponse> {
        return this.repository.upsertByLocale(content);
    }

    async deleteByLocale(locale: string): Promise<void> {
        return this.repository.deleteByLocale(locale);
    }
}
