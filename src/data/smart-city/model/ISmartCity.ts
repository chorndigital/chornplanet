// src/data/smart-city/_model/ISmartCity.ts

export interface ISmartCity {
    chiangMai: ISmartCityItem[]
}

export interface ISmartCityItem {
    sceneNumber: string
    sceneName: string
    title: string
    concept: string
    description: string
    features: IFeature[]
    link: string
    media: IMedia
}

export interface IFeature {
    title: string
    description: string
}

export interface IMedia {
    image_url: string
    image_tags: string[]
    video_url?: string
}