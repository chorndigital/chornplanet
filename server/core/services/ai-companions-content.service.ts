import {
    AiCompanionsContentResponse,
    PartialAiCompanionsContentPayload,
} from "@/core/domain/ai-companions-content.entity";
import {AiCompanionsContentInterface} from "@/core/ports/ai-companions-content.interface";

export class AiCompanionsContentService {
    constructor(private readonly repository: AiCompanionsContentInterface) {}

    async findByLocale(locale: string): Promise<AiCompanionsContentResponse | null> {
        return this.repository.findByLocale(locale);
    }

    async findAll(): Promise<AiCompanionsContentResponse[]> {
        return this.repository.findAll();
    }

    async upsertByLocale(content: PartialAiCompanionsContentPayload): Promise<AiCompanionsContentResponse> {
        return this.repository.upsertByLocale(content);
    }

    async deleteByLocale(locale: string): Promise<void> {
        return this.repository.deleteByLocale(locale);
    }
}
