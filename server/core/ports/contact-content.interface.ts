import {
    ContactContentResponse,
    PartialContactContentPayload,
} from "@/core/domain/contact-content.entity";

export interface ContactContentInterface {
    findByLocale(locale: string): Promise<ContactContentResponse | null>;
    findAll(): Promise<ContactContentResponse[]>;
    upsertByLocale(content: PartialContactContentPayload): Promise<ContactContentResponse>;
    deleteByLocale(locale: string): Promise<void>;
}
