import {
    PartialPolicyContentPayload,
    PolicyContentResponse,
} from "@/core/domain/policy-content.entity";
import {PolicyContentInterface} from "@/core/ports/policy-content.interface";

export class PolicyContentService implements PolicyContentInterface {
    constructor(private readonly repository: PolicyContentInterface) {
    }

    async findByLocale(locale: string): Promise<PolicyContentResponse | null> {
        return this.repository.findByLocale(locale);
    }

    async findAll(): Promise<PolicyContentResponse[]> {
        return this.repository.findAll();
    }

    async upsertByLocale(content: PartialPolicyContentPayload): Promise<PolicyContentResponse> {
        return this.repository.upsertByLocale(content);
    }

    async deleteByLocale(locale: string): Promise<void> {
        return this.repository.deleteByLocale(locale);
    }
}
