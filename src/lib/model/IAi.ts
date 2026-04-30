import {IImageUnit} from "@/image/model/IImageUnit";


// IAiCompanions.ts

export interface IAiCompanions {
    fah: IAiLanding,
    aom: IAiLanding,
    ploy: IAiLanding,
}

// IAiDetail.ts

export interface IAiDetail {
    name: string;
    category: string;
    thumbnail: string;
    pages: {
        home: {
            link: string;
            image: IImageUnit,
        },
        landing: {
            link: string;
            image: IImageUnit
        };
    },

    title: string,
    content: string,
    images: IAiImage[],
    line: {
        link: string,
        button: string
    }
}

// IAiImage.ts
export interface IAiImage {
    src: string,
    alt: string,
}

// IAiLanding.ts

export interface IAiLanding {
    name: string;
    category: string;
    thumbnail?: string;
    pages: {
        landing: {
            link: string;
            image: IImageUnit
        };
    },
    title: string,
    features: ILandingFeature[],
    sidebars: ILandingSidebarItem[],
    line: {
        link: string;
        button: string;
    },
    relevants: IAiDetail[],
}

// ILandingFeature.ts

export interface ILandingFeature {
    title: string,
    description: string,
    items: ILandingItem[]
}

// ILandingImage.ts
export interface ILandingImage {
    src: string,
    alt: string,
}

// ILandingItem.ts
export interface ILandingItem {
    title: string,
    description: string
}

// ILandingSidebarItem.ts
export interface ILandingSidebarItem {
    icon: string,
    caption: string,
    text: string,
}