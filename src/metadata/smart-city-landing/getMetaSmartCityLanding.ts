// src/metadata/smart-city-landing/getMetaSmartCityLanding.ts

import {Metadata} from "next";
import {
    MetaWhenHumanLifeShapesTheCity
} from "@/metadata/smart-city-landing/when-human-life-shapes-the-city/MetaWhenHumanLifeShapesTheCity";
import {
    MetaHumanDailyFlowMorning
} from "@/metadata/smart-city-landing/human-daily-flow-morning/MetaHumanDailyFlowMorning";
import {MetaHumanDailyFlowMidday} from "@/metadata/smart-city-landing/human-daily-flow-midday/MetaHumanDailyFlowMidday";
import {
    MetaHumanDailyFlowEvening
} from "@/metadata/smart-city-landing/human-daily-flow-evening/MetaHumanDailyFlowEvening";
import {
    MetaFromLocalLifeToGlobalPattern
} from "@/metadata/smart-city-landing/from-local-life-to-global-pattern/MetaFromLocalLifeToGlobalPattern";
import {
    MetaMobilityPredictableMovement
} from "@/metadata/smart-city-landing/mobility-focus-predictable-movement/MetaMobilityPredictableMovement";
import {
    MetaMobilityMixedMobility
} from "@/metadata/smart-city-landing/mobility-focus-mixed-mobility/MetaMobilityMixedMobility";
import {
    MetaCitySystemsMovementAndPause
} from "@/metadata/smart-city-landing/city-systems-movement-and-pause/MetaCitySystemsMovementAndPause";
import {
    MetaCitySystemsDensityAndComfort
} from "@/metadata/smart-city-landing/city-systems-density-and-comfort/MetaCitySystemsDensityAndComfort";
import {
    MetaCitySystemsEfficiencyAndRhythm
} from "@/metadata/smart-city-landing/city-systems-efficiency-and-rhythm/MetaCitySystemsEfficiencyAndRhythm";
import {
    MetaGlobalPatternsPredictableSharedStreet
} from "@/metadata/smart-city-landing/global-patterns-predictable-shared-street/MetaGlobalPatternsPredictableSharedStreet";
import {
    MetaGlobalPatternsMixedMobilityCoexistence
} from "@/metadata/smart-city-landing/global-patterns-mixed-mobility-coexistence/MetaGlobalPatternsMixedMobilityCoexistence";
import {
    MetaGlobalPatternsUrbanLogistics
} from "@/metadata/smart-city-landing/global-patterns-urban-logistics/MetaGlobalPatternsUrbanLogistics";
import {
    MetaUrbanSignalsPredictableStreet
} from "@/metadata/smart-city-landing/urban-signals-predictable-street/MetaUrbanSignalsPredictableStreet";
import {
    MetaUrbanSignalsLogisticsIntegration
} from "@/metadata/smart-city-landing/urban-signals-logistics-integration/MetaUrbanSignalsLogisticsIntegration";
import {
    MetaUrbanSignalsPublicSpaceUse
} from "@/metadata/smart-city-landing/urban-signals-public-space-use/MetaUrbanSignalsPublicSpaceUse";
import {
    MetaEditorialHumanFirstObservation
} from "@/metadata/smart-city-landing/editorial-human-first-observation/MetaEditorialHumanFirstObservation";
import {
    MetaEditorialLocalAsGlobalPrototype
} from "@/metadata/smart-city-landing/editorial-local-as-global-prototype/MetaEditorialLocalAsGlobalPrototype";
import {
    MetaEditorialSystemBeforeTechnology
} from "@/metadata/smart-city-landing/editorial-system-before-technology/MetaEditorialSystemBeforeTechnology";

export function getMetaSmartCityLanding(
    {lang}: { lang: string }
): Record<string, Metadata> {

    return {
        "when-human-life-shapes-the-city": MetaWhenHumanLifeShapesTheCity[lang],

        // human daily flow morning
        "human-daily-flow-morning": MetaHumanDailyFlowMorning[lang],
        "human-daily-flow-midday": MetaHumanDailyFlowMidday[lang],
        "human-daily-flow-evening": MetaHumanDailyFlowEvening[lang],

        // from local life to global pattern
        "from-local-life-to-global-pattern": MetaFromLocalLifeToGlobalPattern[lang],

        // mobility fucus
        "mobility-focus-predictable-movement": MetaMobilityPredictableMovement[lang],
        "mobility-focus-mixed-mobility": MetaMobilityMixedMobility[lang],

        // city systems landings
        "city-systems-movement-and-pause": MetaCitySystemsMovementAndPause[lang],
        "city-systems-density-and-comfort": MetaCitySystemsDensityAndComfort[lang],
        "city-systems-efficiency-and-rhythm": MetaCitySystemsEfficiencyAndRhythm[lang],

        // global patterns landings
        "global-patterns-predictable-shared-street": MetaGlobalPatternsPredictableSharedStreet[lang],
        "global-patterns-mixed-mobility-coexistence": MetaGlobalPatternsMixedMobilityCoexistence[lang],
        "global-patterns-urban-logistics": MetaGlobalPatternsUrbanLogistics[lang],

        // urban signals landings
        "urban-signals-predictable-street": MetaUrbanSignalsPredictableStreet[lang],
        "urban-signals-logistics-integration": MetaUrbanSignalsLogisticsIntegration[lang],
        "urban-signals-public-space-use": MetaUrbanSignalsPublicSpaceUse[lang],

        // editorial positioning landings
        "editorial-human-first-observation": MetaEditorialHumanFirstObservation[lang],
        "editorial-system-before-technology": MetaEditorialSystemBeforeTechnology[lang],
        "editorial-local-as-global-prototype": MetaEditorialLocalAsGlobalPrototype[lang],
    };
}