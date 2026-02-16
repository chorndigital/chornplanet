// src/data/smart-city-landing/CitySystemsMovementAndPause/CitySystemsMovementAndPause.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";
import {CitySystemsMovementAndPauseDA} from "./CitySystemsMovementAndPauseDA";
import {CitySystemsMovementAndPauseDE} from "./CitySystemsMovementAndPauseDE";
import {CitySystemsMovementAndPauseEN} from "./CitySystemsMovementAndPauseEN";
import {CitySystemsMovementAndPauseFI} from "./CitySystemsMovementAndPauseFI";
import {CitySystemsMovementAndPauseFR} from "./CitySystemsMovementAndPauseFR";
import {CitySystemsMovementAndPauseJA} from "./CitySystemsMovementAndPauseJA";
import {CitySystemsMovementAndPauseKO} from "./CitySystemsMovementAndPauseKO";
import {CitySystemsMovementAndPauseNL} from "./CitySystemsMovementAndPauseNL";
import {CitySystemsMovementAndPauseTH} from "./CitySystemsMovementAndPauseTH";
import {CitySystemsMovementAndPauseZH_CN} from "./CitySystemsMovementAndPauseZH_CN";

export const CitySystemsMovementAndPause: Record<string, ISmartCityLanding> = {
    da: CitySystemsMovementAndPauseDA,
    de: CitySystemsMovementAndPauseDE,
    en: CitySystemsMovementAndPauseEN,
    fi: CitySystemsMovementAndPauseFI,
    fr: CitySystemsMovementAndPauseFR,
    ja: CitySystemsMovementAndPauseJA,
    ko: CitySystemsMovementAndPauseKO,
    nl: CitySystemsMovementAndPauseNL,
    th: CitySystemsMovementAndPauseTH,
    zh: CitySystemsMovementAndPauseZH_CN,
};