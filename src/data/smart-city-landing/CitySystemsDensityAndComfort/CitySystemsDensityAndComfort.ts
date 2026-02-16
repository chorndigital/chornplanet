// src/data/smart-city-landing/CitySystemsDensityAndComfort/CitySystemsDensityAndComfort.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";
import {CitySystemsDensityAndComfortDA} from "./CitySystemsDensityAndComfortDA";
import {CitySystemsDensityAndComfortDE} from "./CitySystemsDensityAndComfortDE";
import {CitySystemsDensityAndComfortEN} from "./CitySystemsDensityAndComfortEN";
import {CitySystemsDensityAndComfortFI} from "./CitySystemsDensityAndComfortFI";
import {CitySystemsDensityAndComfortFR} from "./CitySystemsDensityAndComfortFR";
import {CitySystemsDensityAndComfortJA} from "./CitySystemsDensityAndComfortJA";
import {CitySystemsDensityAndComfortKO} from "./CitySystemsDensityAndComfortKO";
import {CitySystemsDensityAndComfortNL} from "./CitySystemsDensityAndComfortNL";
import {CitySystemsDensityAndComfortTH} from "./CitySystemsDensityAndComfortTH";
import {CitySystemsDensityAndComfortZH_CN} from "./CitySystemsDensityAndComfortZH_CN";

export const CitySystemsDensityAndComfort: Record<string, ISmartCityLanding> = {
    da: CitySystemsDensityAndComfortDA,
    de: CitySystemsDensityAndComfortDE,
    en: CitySystemsDensityAndComfortEN,
    fi: CitySystemsDensityAndComfortFI,
    fr: CitySystemsDensityAndComfortFR,
    ja: CitySystemsDensityAndComfortJA,
    ko: CitySystemsDensityAndComfortKO,
    nl: CitySystemsDensityAndComfortNL,
    th: CitySystemsDensityAndComfortTH,
    zh: CitySystemsDensityAndComfortZH_CN,
};