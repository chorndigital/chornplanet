import {IImageResponsiveUnit} from "@/image/model/IImageResponsiveUnit";

export interface IAbout {
    title: string,
    span: string,
    subTitle: string,

    description: IAboutContent[],
    stacks: IAboutContent[],
}

export interface IAboutContent {
    title: string;
    description: string;
}

export interface AboutContentMedia {
    mainImage: IImageResponsiveUnit;
}
