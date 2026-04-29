import {
    PartialTechnicalExpertiseContentPayload,
    TechnicalExpertiseContentResponse,
} from "@/core/domain/technical-expertise-content.entity";

export interface TechnicalExpertiseContentInterface {
    findByLocale(locale: string): Promise<TechnicalExpertiseContentResponse | null>;
    findAll(): Promise<TechnicalExpertiseContentResponse[]>;
    upsertByLocale(content: PartialTechnicalExpertiseContentPayload): Promise<TechnicalExpertiseContentResponse>;
    deleteByLocale(locale: string): Promise<void>;
}
