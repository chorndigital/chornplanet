// src/data/smart-city-landing/HumanDailyFlowMorning/HumanDailyFlowMorning.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";
import {HumanDailyFlowMorningDA} from "./HumanDailyFlowMorningDA";
import {HumanDailyFlowMorningDE} from "./HumanDailyFlowMorningDE";
import {HumanDailyFlowMorningEN} from "./HumanDailyFlowMorningEN";
import {HumanDailyFlowMorningFI} from "./HumanDailyFlowMorningFI";
import {HumanDailyFlowMorningFR} from "./HumanDailyFlowMorningFR";
import {HumanDailyFlowMorningJA} from "./HumanDailyFlowMorningJA";
import {HumanDailyFlowMorningKO} from "./HumanDailyFlowMorningKO";
import {HumanDailyFlowMorningNL} from "./HumanDailyFlowMorningNL";
import {HumanDailyFlowMorningTH} from "./HumanDailyFlowMorningTH";
import {HumanDailyFlowMorningZH_CN} from "./HumanDailyFlowMorningZH_CN";

export const HumanDailyFlowMorning: Record<string, ISmartCityLanding> = {
    da: HumanDailyFlowMorningDA,
    de: HumanDailyFlowMorningDE,
    en: HumanDailyFlowMorningEN,
    fi: HumanDailyFlowMorningFI,
    fr: HumanDailyFlowMorningFR,
    ja: HumanDailyFlowMorningJA,
    ko: HumanDailyFlowMorningKO,
    nl: HumanDailyFlowMorningNL,
    th: HumanDailyFlowMorningTH,
    zh: HumanDailyFlowMorningZH_CN,
};