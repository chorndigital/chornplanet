import {
    LayoutContentResponse,
    PartialLayoutContentPayload,
} from "@/core/domain/layout-content.entity";
import {LayoutContentInterface} from "@/core/ports/layout-content.interface";

export class LayoutContentService implements LayoutContentInterface {
    constructor(private readonly repository: LayoutContentInterface) {
    }

    async findByLocale(locale: string): Promise<LayoutContentResponse | null> {
        return this.repository.findByLocale(locale);
    }

    async findAll(): Promise<LayoutContentResponse[]> {
        return this.repository.findAll();
    }

    async upsertByLocale(content: PartialLayoutContentPayload): Promise<LayoutContentResponse> {
        return this.repository.upsertByLocale(content);
    }

    async deleteByLocale(locale: string): Promise<void> {
        return this.repository.deleteByLocale(locale);
    }
}
