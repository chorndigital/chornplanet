import {
    PartialSmartCityLandingContentPayload,
    SmartCityLandingContentResponse,
} from "@/core/domain/smart-city-landing-content.entity";

export interface SmartCityLandingContentInterface {
    findByLocaleAndSlug(locale: string, slug: string): Promise<SmartCityLandingContentResponse | null>;
    findAll(): Promise<SmartCityLandingContentResponse[]>;
    upsertByLocaleAndSlug(content: PartialSmartCityLandingContentPayload): Promise<SmartCityLandingContentResponse>;
    deleteByLocaleAndSlug(locale: string, slug: string): Promise<void>;
}
