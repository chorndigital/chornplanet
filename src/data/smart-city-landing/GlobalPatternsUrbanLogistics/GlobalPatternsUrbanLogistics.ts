// src/data/smart-city-landing/GlobalPatternsUrbanLogistics/GlobalPatternsUrbanLogistics.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";
import {GlobalPatternsUrbanLogisticsDA} from "./GlobalPatternsUrbanLogisticsDA";
import {GlobalPatternsUrbanLogisticsDE} from "./GlobalPatternsUrbanLogisticsDE";
import {GlobalPatternsUrbanLogisticsEN} from "./GlobalPatternsUrbanLogisticsEN";
import {GlobalPatternsUrbanLogisticsFI} from "./GlobalPatternsUrbanLogisticsFI";
import {GlobalPatternsUrbanLogisticsFR} from "./GlobalPatternsUrbanLogisticsFR";
import {GlobalPatternsUrbanLogisticsJA} from "./GlobalPatternsUrbanLogisticsJA";
import {GlobalPatternsUrbanLogisticsKO} from "./GlobalPatternsUrbanLogisticsKO";
import {GlobalPatternsUrbanLogisticsNL} from "./GlobalPatternsUrbanLogisticsNL";
import {GlobalPatternsUrbanLogisticsTH} from "./GlobalPatternsUrbanLogisticsTH";
import {GlobalPatternsUrbanLogisticsZH_CN} from "./GlobalPatternsUrbanLogisticsZH_CN";

export const GlobalPatternsUrbanLogistics: Record<string, ISmartCityLanding> = {
    da: GlobalPatternsUrbanLogisticsDA,
    de: GlobalPatternsUrbanLogisticsDE,
    en: GlobalPatternsUrbanLogisticsEN,
    fi: GlobalPatternsUrbanLogisticsFI,
    fr: GlobalPatternsUrbanLogisticsFR,
    ja: GlobalPatternsUrbanLogisticsJA,
    ko: GlobalPatternsUrbanLogisticsKO,
    nl: GlobalPatternsUrbanLogisticsNL,
    th: GlobalPatternsUrbanLogisticsTH,
    zh: GlobalPatternsUrbanLogisticsZH_CN,
};