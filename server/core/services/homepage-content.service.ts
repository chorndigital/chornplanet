import {
    PartialHomePageContentPayload,
    HomePageContentResponse,
} from "@/core/domain/homepage-content.entity";
import {HomePageContentInterface} from "@/core/ports/homepage-content.interface";

export class HomePageContentService implements HomePageContentInterface {
    constructor(private readonly repository: HomePageContentInterface) {
    }

    async findByLocale(locale: string): Promise<HomePageContentResponse | null> {
        return this.repository.findByLocale(locale);
    }

    async findAll(): Promise<HomePageContentResponse[]> {
        return this.repository.findAll();
    }

    async upsertByLocale(content: PartialHomePageContentPayload): Promise<HomePageContentResponse> {
        return this.repository.upsertByLocale(content);
    }

    async deleteByLocale(locale: string): Promise<void> {
        return this.repository.deleteByLocale(locale);
    }
}
