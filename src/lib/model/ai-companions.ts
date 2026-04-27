import {IAiCompanions} from "@/data/ai/model/IAiCompanions";
import {IFeature} from "@/data/feature/model/IFeature";
import {IService} from "@/data/service/model/IService";
import {IImageUnit} from "@/image/model/IImageUnit";
import {IImageResponsiveUnit} from "@/image/model/IImageResponsiveUnit";

export type AiCompanionsDemo = IService['demo'];

export interface AiCompanionsContentMedia {
    featureImage: IImageUnit;
    llmSlides: IImageResponsiveUnit[];
}

export interface AiCompanionsPageContent {
    demo: AiCompanionsDemo;
    service: IService;
    aiCompanions: IAiCompanions;
    feature: IFeature;
    media: AiCompanionsContentMedia;
}
