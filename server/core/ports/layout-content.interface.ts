import {
    LayoutContentResponse,
    PartialLayoutContentPayload,
} from "@/core/domain/layout-content.entity";

export interface LayoutContentInterface {
    findByLocale(locale: string): Promise<LayoutContentResponse | null>;
    findAll(): Promise<LayoutContentResponse[]>;
    upsertByLocale(content: PartialLayoutContentPayload): Promise<LayoutContentResponse>;
    deleteByLocale(locale: string): Promise<void>;
}
