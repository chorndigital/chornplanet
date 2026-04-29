import {
    ContactContentResponse,
    PartialContactContentPayload,
} from "@/core/domain/contact-content.entity";
import {ContactContentInterface} from "@/core/ports/contact-content.interface";

export class ContactContentService implements ContactContentInterface {
    constructor(private readonly repository: ContactContentInterface) {
    }

    async findByLocale(locale: string): Promise<ContactContentResponse | null> {
        return this.repository.findByLocale(locale);
    }

    async findAll(): Promise<ContactContentResponse[]> {
        return this.repository.findAll();
    }

    async upsertByLocale(content: PartialContactContentPayload): Promise<ContactContentResponse> {
        return this.repository.upsertByLocale(content);
    }

    async deleteByLocale(locale: string): Promise<void> {
        return this.repository.deleteByLocale(locale);
    }
}
