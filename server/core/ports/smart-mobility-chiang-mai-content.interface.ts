import {
    PartialSmartMobilityChiangMaiContentPayload,
    SmartMobilityChiangMaiContentResponse,
} from "@/core/domain/smart-mobility-chiang-mai-content.entity";

export interface SmartMobilityChiangMaiContentInterface {
    findByLocaleAndSlug(locale: string, slug: string): Promise<SmartMobilityChiangMaiContentResponse | null>;
    findAll(): Promise<SmartMobilityChiangMaiContentResponse[]>;
    upsertByLocaleAndSlug(content: PartialSmartMobilityChiangMaiContentPayload): Promise<SmartMobilityChiangMaiContentResponse>;
    deleteByLocaleAndSlug(locale: string, slug: string): Promise<void>;
}
