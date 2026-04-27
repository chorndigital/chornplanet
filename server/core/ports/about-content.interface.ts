import {
    AboutContentResponse,
    PartialAboutContentPayload,
} from "@/core/domain/about-content.entity";

export interface AboutContentInterface {
    findByLocale(locale: string): Promise<AboutContentResponse | null>;
    findAll(): Promise<AboutContentResponse[]>;
    upsertByLocale(content: PartialAboutContentPayload): Promise<AboutContentResponse>;
    deleteByLocale(locale: string): Promise<void>;
}
