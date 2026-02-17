// src/metadata/smart-city/MetaSmartCityChiangMai.ts

import {Metadata} from "next";
import {MetaLiteBeneathTheRoute} from "@/metadata/smart-city/chiang-mai/MetaLiteBeneathTheRoute";
import {MetaPlazaThatConnectsTheHub} from "@/metadata/smart-city/chiang-mai/MetaPlazaThatConnectsTheHub";
import {MetaTheCityInBalance} from "@/metadata/smart-city/chiang-mai/MetaTheCityInBalance";
import {MetaVertiportReflectedInWater} from "@/metadata/smart-city/chiang-mai/MetaVertiportReflectedInWater";
import {
    MetaWhenHumanFlowAlignsWithSystemFlow
} from "@/metadata/smart-city/chiang-mai/MetaWhenHumanFlowAlignsWithSystemFlow";

interface MetaParams {
    slug: string;
    lang: string;
}

export function MetaSmartCityChiangMai(
    {slug, lang}: MetaParams
): Metadata {
    switch (slug) {
        case "life-beneath-the-route":
            return MetaLiteBeneathTheRoute[lang];

        case "plaza-that-connects-the-hub":
            return MetaPlazaThatConnectsTheHub[lang];

        case "the-city-in-balance":
            return MetaTheCityInBalance[lang];

        case "vertiport-reflected-in-water":
            return MetaVertiportReflectedInWater[lang];

        case "when-human-flow-aligns-with-system-flow":
            return MetaWhenHumanFlowAlignsWithSystemFlow[lang];

        default:
            return {
                title: "Chiang Mai Smart City",
                description:
                    "A system-level exploration of mobility, public space, and urban balance in Chiang Mai.",
            };
    }
}