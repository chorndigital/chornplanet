// src/data/smart-city-landing/GlobalPatternsPredictableSharedStreet/GlobalPatternsPredictableSharedStreet.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";
import {GlobalPatternsPredictableSharedStreetDA} from "./GlobalPatternsPredictableSharedStreetDA";
import {GlobalPatternsPredictableSharedStreetDE} from "./GlobalPatternsPredictableSharedStreetDE";
import {GlobalPatternsPredictableSharedStreetEN} from "./GlobalPatternsPredictableSharedStreetEN";
import {GlobalPatternsPredictableSharedStreetFI} from "./GlobalPatternsPredictableSharedStreetFI";
import {GlobalPatternsPredictableSharedStreetFR} from "./GlobalPatternsPredictableSharedStreetFR";
import {GlobalPatternsPredictableSharedStreetJA} from "./GlobalPatternsPredictableSharedStreetJA";
import {GlobalPatternsPredictableSharedStreetKO} from "./GlobalPatternsPredictableSharedStreetKO";
import {GlobalPatternsPredictableSharedStreetNL} from "./GlobalPatternsPredictableSharedStreetNL";
import {GlobalPatternsPredictableSharedStreetTH} from "./GlobalPatternsPredictableSharedStreetTH";
import {GlobalPatternsPredictableSharedStreetZH_CN} from "./GlobalPatternsPredictableSharedStreetZH_CN";

export const GlobalPatternsPredictableSharedStreet: Record<string, ISmartCityLanding> = {
    da: GlobalPatternsPredictableSharedStreetDA,
    de: GlobalPatternsPredictableSharedStreetDE,
    en: GlobalPatternsPredictableSharedStreetEN,
    fi: GlobalPatternsPredictableSharedStreetFI,
    fr: GlobalPatternsPredictableSharedStreetFR,
    ja: GlobalPatternsPredictableSharedStreetJA,
    ko: GlobalPatternsPredictableSharedStreetKO,
    nl: GlobalPatternsPredictableSharedStreetNL,
    th: GlobalPatternsPredictableSharedStreetTH,
    zh: GlobalPatternsPredictableSharedStreetZH_CN,
};