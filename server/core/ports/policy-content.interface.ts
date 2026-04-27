import {
    PartialPolicyContentPayload,
    PolicyContentResponse,
} from "@/core/domain/policy-content.entity";

export interface PolicyContentInterface {
    findByLocale(locale: string): Promise<PolicyContentResponse | null>;
    findAll(): Promise<PolicyContentResponse[]>;
    upsertByLocale(content: PartialPolicyContentPayload): Promise<PolicyContentResponse>;
    deleteByLocale(locale: string): Promise<void>;
}
