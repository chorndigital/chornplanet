// src/data/smart-city-landing/getSmartCityLandingData.ts

import {ISmartCityItem} from "@/data/smart-city/model/ISmartCity";
import {SmartCity} from "@/data/smart-city/SmartCity";

export function getSmartCityData(
    {lang}: { lang: string }
): Record<string, ISmartCityItem> {

    return {
        "life-beneath-the-route": SmartCity[lang].chiangMai[0],
        "plaza-that-connects-the-hub": SmartCity[lang].chiangMai[1],
        "vertiport-reflected-in-water": SmartCity[lang].chiangMai[2],
        "when-human-flow-aligns-with-system-flow": SmartCity[lang].chiangMai[3],
        "the-city-in-balance": SmartCity[lang].chiangMai[4],
    };
}