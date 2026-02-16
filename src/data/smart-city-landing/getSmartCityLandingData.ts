// src/data/smart-city-landing/getSmartCityLandingData.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";
import {
    WhenHumanLifeShapesTheCity
} from "@/data/smart-city-landing/WhenHumanLifeShapesTheCity/WhenHumanLifeShapesTheCity";
import {HumanDailyFlowMorning} from "@/data/smart-city-landing/HumanDailyFlowMorning/HumanDailyFlowMorning";
import {HumanDailyFlowMidday} from "@/data/smart-city-landing/HumanDailyFlowMidday/HumanDailyFlowMidday";
import {HumanDailyFlowEvening} from "@/data/smart-city-landing/HumanDailyFlowEvening/HumanDailyFlowEvening";
import {FromLocalLifeToGlobalPattern} from "./FromLocalLifeToGlobalPattern/FromLocalLifeToGlobalPattern";
import {
    MobilityPredictableMovement
} from "@/data/smart-city-landing/MobilityPredictableMovement/MobilityPredictableMovement";
import {MobilityMixedMobility} from "@/data/smart-city-landing/MobilityMixedMobility/MobilityMixedMobility";
import {
    CitySystemsMovementAndPause
} from "@/data/smart-city-landing/CitySystemsMovementAndPause/CitySystemsMovementAndPause";
import {
    CitySystemsDensityAndComfort
} from "@/data/smart-city-landing/CitySystemsDensityAndComfort/CitySystemsDensityAndComfort";
import {
    CitySystemsEfficiencyAndRhythm
} from "@/data/smart-city-landing/CitySystemsEfficiencyAndRhythm/CitySystemsEfficiencyAndRhythm";
import {
    GlobalPatternsPredictableSharedStreet
} from "@/data/smart-city-landing/GlobalPatternsPredictableSharedStreet/GlobalPatternsPredictableSharedStreet";
import {
    GlobalPatternsMixedMobilityCoexistence
} from "@/data/smart-city-landing/GlobalPatternsMixedMobilityCoexistence/GlobalPatternsMixedMobilityCoexistence";
import {
    GlobalPatternsUrbanLogistics
} from "@/data/smart-city-landing/GlobalPatternsUrbanLogistics/GlobalPatternsUrbanLogistics"
import {
    UrbanSignalsPredictableStreet
} from "@/data/smart-city-landing/UrbanSignalsPredictableStreet/UrbanSignalsPredictableStreet";
import {
    UrbanSignalsLogisticsIntegration
} from "@/data/smart-city-landing/UrbanSignalsLogisticsIntegration/UrbanSignalsLogisticsIntegration";
import {
    UrbanSignalsPublicSpaceUse
} from "@/data/smart-city-landing/UrbanSignalsPublicSpaceUse/UrbanSignalsPublicSpaceUse";

import {
    EditorialHumanFirstObservation
} from "@/data/smart-city-landing/EditorialHumanFirstObservation/EditorialHumanFirstObservation";
import {
    EditorialSystemBeforeTechnology
} from "@/data/smart-city-landing/EditorialSystemBeforeTechnology/EditorialSystemBeforeTechnology";
import {
    EditorialLocalAsGlobalPrototype
} from "@/data/smart-city-landing/EditorialLocalAsGlobalPrototype/EditorialLocalAsGlobalPrototype";

export function getSmartCityLandingData(
    {lang}: { lang: string }
): Record<string, ISmartCityLanding> {

    return {
        "when-human-life-shapes-the-city": WhenHumanLifeShapesTheCity[lang],

        // human daily flow morning
        "human-daily-flow-morning": HumanDailyFlowMorning[lang],
        "human-daily-flow-midday": HumanDailyFlowMidday[lang],
        "human-daily-flow-evening": HumanDailyFlowEvening[lang],

        // from local life to global pattern
        "from-local-life-to-global-pattern": FromLocalLifeToGlobalPattern[lang],

        // mobility fucus
        "mobility-focus-predictable-movement": MobilityPredictableMovement[lang],
        "mobility-focus-mixed-mobility": MobilityMixedMobility[lang],

        // city systems landings
        "city-systems-movement-and-pause": CitySystemsMovementAndPause[lang],
        "city-systems-density-and-comfort": CitySystemsDensityAndComfort[lang],
        "city-systems-efficiency-and-rhythm": CitySystemsEfficiencyAndRhythm[lang],

        // global patterns landings
        "global-patterns-predictable-shared-street": GlobalPatternsPredictableSharedStreet[lang],
        "global-patterns-mixed-mobility-coexistence": GlobalPatternsMixedMobilityCoexistence[lang],
        "global-patterns-urban-logistics": GlobalPatternsUrbanLogistics[lang],

        // urban signals landings
        "urban-signals-predictable-street": UrbanSignalsPredictableStreet[lang],
        "urban-signals-logistics-integration": UrbanSignalsLogisticsIntegration[lang],
        "urban-signals-public-space-use": UrbanSignalsPublicSpaceUse[lang],

        // editorial positioning landings
        "editorial-human-first-observation": EditorialHumanFirstObservation[lang],
        "editorial-system-before-technology": EditorialSystemBeforeTechnology[lang],
        "editorial-local-as-global-prototype": EditorialLocalAsGlobalPrototype[lang],
    };
}