import {IImageResponsiveUnit} from "@/image/model/IImageResponsiveUnit";

export interface IGallery {
    slides: IGalleryItemImage[],
    global: IGalleryItem
}

export interface IGalleryItem {
    title: string,
    description: string
}

export interface IGalleryItemImage {
    title: string,
    description: string,
    image: IImageResponsiveUnit
}

export interface GalleryContentMedia {
    bottomSlides: IImageResponsiveUnit[];
}
