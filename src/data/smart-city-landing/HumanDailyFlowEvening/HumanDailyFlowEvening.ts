// src/data/smart-city-landing/HumanDailyFlowEvening/HumanDailyFlowEvening.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";
import {HumanDailyFlowEveningDA} from "./HumanDailyFlowEveningDA";
import {HumanDailyFlowEveningDE} from "./HumanDailyFlowEveningDE";
import {HumanDailyFlowEveningEN} from "./HumanDailyFlowEveningEN";
import {HumanDailyFlowEveningFI} from "./HumanDailyFlowEveningFI";
import {HumanDailyFlowEveningFR} from "./HumanDailyFlowEveningFR";
import {HumanDailyFlowEveningJA} from "./HumanDailyFlowEveningJA";
import {HumanDailyFlowEveningKO} from "./HumanDailyFlowEveningKO";
import {HumanDailyFlowEveningNL} from "./HumanDailyFlowEveningNL";
import {HumanDailyFlowEveningTH} from "./HumanDailyFlowEveningTH";
import {HumanDailyFlowEveningZH_CN} from "./HumanDailyFlowEveningZH_CN";

export const HumanDailyFlowEvening: Record<string, ISmartCityLanding> = {
    da: HumanDailyFlowEveningDA,
    de: HumanDailyFlowEveningDE,
    en: HumanDailyFlowEveningEN,
    fi: HumanDailyFlowEveningFI,
    fr: HumanDailyFlowEveningFR,
    ja: HumanDailyFlowEveningJA,
    ko: HumanDailyFlowEveningKO,
    nl: HumanDailyFlowEveningNL,
    th: HumanDailyFlowEveningTH,
    zh: HumanDailyFlowEveningZH_CN,
};