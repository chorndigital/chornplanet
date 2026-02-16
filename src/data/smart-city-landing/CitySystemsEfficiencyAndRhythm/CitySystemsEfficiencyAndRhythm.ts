// src/data/smart-city-landing/CitySystemsEfficiencyAndRhythm/CitySystemsEfficiencyAndRhythm.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";
import {CitySystemsEfficiencyAndRhythmDA} from "./CitySystemsEfficiencyAndRhythmDA";
import {CitySystemsEfficiencyAndRhythmDE} from "./CitySystemsEfficiencyAndRhythmDE";
import {CitySystemsEfficiencyAndRhythmEN} from "./CitySystemsEfficiencyAndRhythmEN";
import {CitySystemsEfficiencyAndRhythmFI} from "./CitySystemsEfficiencyAndRhythmFI";
import {CitySystemsEfficiencyAndRhythmFR} from "./CitySystemsEfficiencyAndRhythmFR";
import {CitySystemsEfficiencyAndRhythmJA} from "./CitySystemsEfficiencyAndRhythmJA";
import {CitySystemsEfficiencyAndRhythmKO} from "./CitySystemsEfficiencyAndRhythmKO";
import {CitySystemsEfficiencyAndRhythmNL} from "./CitySystemsEfficiencyAndRhythmNL";
import {CitySystemsEfficiencyAndRhythmTH} from "./CitySystemsEfficiencyAndRhythmTH";
import {CitySystemsEfficiencyAndRhythmZH_CN} from "./CitySystemsEfficiencyAndRhythmZH_CN";

export const CitySystemsEfficiencyAndRhythm: Record<string, ISmartCityLanding> = {
    da: CitySystemsEfficiencyAndRhythmDA,
    de: CitySystemsEfficiencyAndRhythmDE,
    en: CitySystemsEfficiencyAndRhythmEN,
    fi: CitySystemsEfficiencyAndRhythmFI,
    fr: CitySystemsEfficiencyAndRhythmFR,
    ja: CitySystemsEfficiencyAndRhythmJA,
    ko: CitySystemsEfficiencyAndRhythmKO,
    nl: CitySystemsEfficiencyAndRhythmNL,
    th: CitySystemsEfficiencyAndRhythmTH,
    zh: CitySystemsEfficiencyAndRhythmZH_CN,
};