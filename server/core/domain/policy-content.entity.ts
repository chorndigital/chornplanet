import {ObjectId, WithId} from "mongodb";
import {IPolicy} from "@/lib/model/IPolicy";

export const POLICY_CONTENT_LOCALES = ['da', 'de', 'en', 'fi', 'fr', 'ja', 'ko', 'nl', 'th', 'zh'] as const;

export type PolicyContentLocale = typeof POLICY_CONTENT_LOCALES[number];

export interface PolicyContentPayload {
    locale: string;
    privacyPolicy: IPolicy;
    termOfService: IPolicy;
    workplacePolicy: IPolicy;
}

export type PartialPolicyContentPayload =
    { locale: string } & Partial<Omit<PolicyContentPayload, 'locale'>>;

export interface PolicyContentRecord extends PartialPolicyContentPayload {
    createdAt?: string;
    updatedAt?: string;
}

export interface PolicyContentResponse extends PartialPolicyContentPayload {
    id: string;
    createdAt?: string;
    updatedAt?: string;
}

export function normalizePolicyContentLocale(locale: string): PolicyContentLocale {
    if (POLICY_CONTENT_LOCALES.includes(locale as PolicyContentLocale)) {
        return locale as PolicyContentLocale;
    }

    return 'en';
}

export function mapPolicyContentResponse(
    doc: WithId<PolicyContentRecord> | (PolicyContentRecord & {_id: ObjectId})
): PolicyContentResponse {
    return {
        id: doc._id.toHexString(),
        locale: doc.locale,
        privacyPolicy: doc.privacyPolicy,
        termOfService: doc.termOfService,
        workplacePolicy: doc.workplacePolicy,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
    };
}
