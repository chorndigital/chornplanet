import {ObjectId, WithId} from "mongodb";
import {IFeature} from "@/lib/model/IFeature";
import {IFrontEnd} from "@/lib/model/IFrontEnd";
import {IFullStack} from "@/lib/model/IFullStack";
import {IDevOps} from "@/lib/model/IDevOps";
import {ICloud} from "@/lib/model/ICloud";
import {IWeb3} from "@/lib/model/IWeb3";
import {ICloudSolution} from "@/lib/model/ICloudSolution";

export const TECHNICAL_EXPERTISE_CONTENT_LOCALES = ['da', 'de', 'en', 'fi', 'fr', 'ja', 'ko', 'nl', 'th', 'zh'] as const;

export type TechnicalExpertiseContentLocale = typeof TECHNICAL_EXPERTISE_CONTENT_LOCALES[number];

export interface TechnicalExpertiseContentPayload {
    locale: string;
    mobileDevelopment: {
        pageTitle: string;
    };
    feature: IFeature;
    frontEnd: IFrontEnd;
    fullStack: IFullStack;
    devOps: IDevOps;
    cloud: ICloud;
    web3: IWeb3;
    cloudSolution: ICloudSolution;
}

export type PartialTechnicalExpertiseContentPayload =
    { locale: string } & Partial<Omit<TechnicalExpertiseContentPayload, 'locale'>>;

export interface TechnicalExpertiseContentRecord extends PartialTechnicalExpertiseContentPayload {
    createdAt?: string;
    updatedAt?: string;
}

export interface TechnicalExpertiseContentResponse extends PartialTechnicalExpertiseContentPayload {
    id: string;
    createdAt?: string;
    updatedAt?: string;
}

export function normalizeTechnicalExpertiseContentLocale(locale: string): TechnicalExpertiseContentLocale {
    if (TECHNICAL_EXPERTISE_CONTENT_LOCALES.includes(locale as TechnicalExpertiseContentLocale)) {
        return locale as TechnicalExpertiseContentLocale;
    }

    return 'en';
}

export function mapTechnicalExpertiseContentResponse(
    doc: WithId<TechnicalExpertiseContentRecord> | (TechnicalExpertiseContentRecord & {_id: ObjectId})
): TechnicalExpertiseContentResponse {
    return {
        id: doc._id.toHexString(),
        locale: doc.locale,
        mobileDevelopment: doc.mobileDevelopment,
        feature: doc.feature,
        frontEnd: doc.frontEnd,
        fullStack: doc.fullStack,
        devOps: doc.devOps,
        cloud: doc.cloud,
        web3: doc.web3,
        cloudSolution: doc.cloudSolution,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
    };
}
