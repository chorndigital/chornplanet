// src/data/smart-city-landing/FromLocalLifeToGlobalPattern/FromLocalLifeToGlobalPattern.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";
import {FromLocalLifeToGlobalPatternDA} from "./FromLocalLifeToGlobalPatternDA";
import {FromLocalLifeToGlobalPatternDE} from "./FromLocalLifeToGlobalPatternDE";
import {FromLocalLifeToGlobalPatternEN} from "./FromLocalLifeToGlobalPatternEN";
import {FromLocalLifeToGlobalPatternFI} from "./FromLocalLifeToGlobalPatternFI";
import {FromLocalLifeToGlobalPatternFR} from "./FromLocalLifeToGlobalPatternFR";
import {FromLocalLifeToGlobalPatternJA} from "./FromLocalLifeToGlobalPatternJA";
import {FromLocalLifeToGlobalPatternKO} from "./FromLocalLifeToGlobalPatternKO";
import {FromLocalLifeToGlobalPatternNL} from "./FromLocalLifeToGlobalPatternNL";
import {FromLocalLifeToGlobalPatternTH} from "./FromLocalLifeToGlobalPatternTH";
import {FromLocalLifeToGlobalPatternZH_CN} from "./FromLocalLifeToGlobalPatternZH_CN";

export const FromLocalLifeToGlobalPattern: Record<string, ISmartCityLanding> = {
    da: FromLocalLifeToGlobalPatternDA,
    de: FromLocalLifeToGlobalPatternDE,
    en: FromLocalLifeToGlobalPatternEN,
    fi: FromLocalLifeToGlobalPatternFI,
    fr: FromLocalLifeToGlobalPatternFR,
    ja: FromLocalLifeToGlobalPatternJA,
    ko: FromLocalLifeToGlobalPatternKO,
    nl: FromLocalLifeToGlobalPatternNL,
    th: FromLocalLifeToGlobalPatternTH,
    zh: FromLocalLifeToGlobalPatternZH_CN,
};