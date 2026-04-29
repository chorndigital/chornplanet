import {
    PartialSmartMobilityChiangMaiContentPayload,
    SmartMobilityChiangMaiContentResponse,
} from "@/core/domain/smart-mobility-chiang-mai-content.entity";
import {SmartMobilityChiangMaiContentInterface} from "@/core/ports/smart-mobility-chiang-mai-content.interface";

export class SmartMobilityChiangMaiContentService {
    constructor(private readonly repository: SmartMobilityChiangMaiContentInterface) {}

    async findByLocaleAndSlug(locale: string, slug: string): Promise<SmartMobilityChiangMaiContentResponse | null> {
        return this.repository.findByLocaleAndSlug(locale, slug);
    }

    async findAll(): Promise<SmartMobilityChiangMaiContentResponse[]> {
        return this.repository.findAll();
    }

    async upsertByLocaleAndSlug(
        content: PartialSmartMobilityChiangMaiContentPayload
    ): Promise<SmartMobilityChiangMaiContentResponse> {
        return this.repository.upsertByLocaleAndSlug(content);
    }

    async deleteByLocaleAndSlug(locale: string, slug: string): Promise<void> {
        return this.repository.deleteByLocaleAndSlug(locale, slug);
    }
}
