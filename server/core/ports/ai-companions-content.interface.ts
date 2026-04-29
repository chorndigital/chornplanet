import {
    AiCompanionsContentResponse,
    PartialAiCompanionsContentPayload,
} from "@/core/domain/ai-companions-content.entity";

export interface AiCompanionsContentInterface {
    findByLocale(locale: string): Promise<AiCompanionsContentResponse | null>;
    findAll(): Promise<AiCompanionsContentResponse[]>;
    upsertByLocale(content: PartialAiCompanionsContentPayload): Promise<AiCompanionsContentResponse>;
    deleteByLocale(locale: string): Promise<void>;
}
