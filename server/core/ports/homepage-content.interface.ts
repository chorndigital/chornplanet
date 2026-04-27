import {
    PartialHomePageContentPayload,
    HomePageContentResponse,
} from "@/core/domain/homepage-content.entity";

export interface HomePageContentInterface {
    findByLocale(locale: string): Promise<HomePageContentResponse | null>;
    findAll(): Promise<HomePageContentResponse[]>;
    upsertByLocale(content: PartialHomePageContentPayload): Promise<HomePageContentResponse>;
    deleteByLocale(locale: string): Promise<void>;
}
