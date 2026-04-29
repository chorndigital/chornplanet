import {
    PartialSmartCityLandingContentPayload,
    SmartCityLandingContentResponse,
} from "@/core/domain/smart-city-landing-content.entity";
import {SmartCityLandingContentInterface} from "@/core/ports/smart-city-landing-content.interface";

export class SmartCityLandingContentService {
    constructor(private readonly repository: SmartCityLandingContentInterface) {}

    async findByLocaleAndSlug(locale: string, slug: string): Promise<SmartCityLandingContentResponse | null> {
        return this.repository.findByLocaleAndSlug(locale, slug);
    }

    async findAll(): Promise<SmartCityLandingContentResponse[]> {
        return this.repository.findAll();
    }

    async upsertByLocaleAndSlug(
        content: PartialSmartCityLandingContentPayload
    ): Promise<SmartCityLandingContentResponse> {
        return this.repository.upsertByLocaleAndSlug(content);
    }

    async deleteByLocaleAndSlug(locale: string, slug: string): Promise<void> {
        return this.repository.deleteByLocaleAndSlug(locale, slug);
    }
}
