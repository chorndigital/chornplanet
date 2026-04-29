import {
    PartialSmartCityChiangMaiContentPayload,
    SmartCityChiangMaiContentResponse,
} from "@/core/domain/smart-city-chiang-mai-content.entity";
import {SmartCityChiangMaiContentInterface} from "@/core/ports/smart-city-chiang-mai-content.interface";

export class SmartCityChiangMaiContentService {
    constructor(private readonly repository: SmartCityChiangMaiContentInterface) {}

    async findByLocaleAndSlug(locale: string, slug: string): Promise<SmartCityChiangMaiContentResponse | null> {
        return this.repository.findByLocaleAndSlug(locale, slug);
    }

    async findAll(): Promise<SmartCityChiangMaiContentResponse[]> {
        return this.repository.findAll();
    }

    async upsertByLocaleAndSlug(
        content: PartialSmartCityChiangMaiContentPayload
    ): Promise<SmartCityChiangMaiContentResponse> {
        return this.repository.upsertByLocaleAndSlug(content);
    }

    async deleteByLocaleAndSlug(locale: string, slug: string): Promise<void> {
        return this.repository.deleteByLocaleAndSlug(locale, slug);
    }
}
