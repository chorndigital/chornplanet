import {IAiCompanions} from "@/lib/model/IAi";
import {IFeature} from "@/lib/model/IFeature";
import {IService} from "@/lib/model/IService";
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
