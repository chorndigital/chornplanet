import {
    PartialSmartCityChiangMaiContentPayload,
    SmartCityChiangMaiContentResponse,
} from "@/core/domain/smart-city-chiang-mai-content.entity";

export interface SmartCityChiangMaiContentInterface {
    findByLocaleAndSlug(locale: string, slug: string): Promise<SmartCityChiangMaiContentResponse | null>;
    findAll(): Promise<SmartCityChiangMaiContentResponse[]>;
    upsertByLocaleAndSlug(content: PartialSmartCityChiangMaiContentPayload): Promise<SmartCityChiangMaiContentResponse>;
    deleteByLocaleAndSlug(locale: string, slug: string): Promise<void>;
}
