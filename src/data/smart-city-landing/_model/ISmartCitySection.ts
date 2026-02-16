// src/data/smart-city-landing/_model/ISmartCitySection.ts

export interface ISmartCitySection {
    lang?: string;
    headline: string
    paragraphs: string[]
    image?: {
        url: string
        alt: string
    }
    cta?: {
        label: string
        href: string
    },
    landingUrl?: string;
    points?: IPoint[];
}

export interface IPoint {
    title: string;
    description: string;
}