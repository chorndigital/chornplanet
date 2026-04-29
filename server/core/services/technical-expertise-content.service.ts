import {
    PartialTechnicalExpertiseContentPayload,
    TechnicalExpertiseContentResponse,
} from "@/core/domain/technical-expertise-content.entity";
import {TechnicalExpertiseContentInterface} from "@/core/ports/technical-expertise-content.interface";

export class TechnicalExpertiseContentService implements TechnicalExpertiseContentInterface {
    constructor(private readonly repository: TechnicalExpertiseContentInterface) {
    }

    async findByLocale(locale: string): Promise<TechnicalExpertiseContentResponse | null> {
        return this.repository.findByLocale(locale);
    }

    async findAll(): Promise<TechnicalExpertiseContentResponse[]> {
        return this.repository.findAll();
    }

    async upsertByLocale(content: PartialTechnicalExpertiseContentPayload): Promise<TechnicalExpertiseContentResponse> {
        return this.repository.upsertByLocale(content);
    }

    async deleteByLocale(locale: string): Promise<void> {
        return this.repository.deleteByLocale(locale);
    }
}
