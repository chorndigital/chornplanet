// src/metadata/smart-city-landing/getMetaSmartCityLanding.ts

import {Metadata} from "next";
import {MetaLiteBeneathTheRoute} from "@/metadata/smart-city/chiang-mai/MetaLiteBeneathTheRoute";
import {MetaPlazaThatConnectsTheHub} from "@/metadata/smart-city/chiang-mai/MetaPlazaThatConnectsTheHub";
import {MetaVertiportReflectedInWater} from "@/metadata/smart-city/chiang-mai/MetaVertiportReflectedInWater";
import {
    MetaWhenHumanFlowAlignsWithSystemFlow
} from "@/metadata/smart-city/chiang-mai/MetaWhenHumanFlowAlignsWithSystemFlow";
import {MetaTheCityInBalance} from "@/metadata/smart-city/chiang-mai/MetaTheCityInBalance";

export function getMetaSmartCity(
    {lang}: { lang: string }
): Record<string, Metadata> {

    return {
        "life-beneath-the-route": MetaLiteBeneathTheRoute[lang],
        "plaza-that-connects-the-hub": MetaPlazaThatConnectsTheHub[lang],
        "vertiport-reflected-in-water": MetaVertiportReflectedInWater[lang],
        "when-human-flow-aligns-with-system-flow": MetaWhenHumanFlowAlignsWithSystemFlow[lang],
        "the-city-in-balance": MetaTheCityInBalance[lang],
    };
}