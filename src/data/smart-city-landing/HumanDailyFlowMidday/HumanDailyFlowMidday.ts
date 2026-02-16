// src/data/smart-city-landing/HumanDailyFlowMidday/HumanDailyFlowMidday.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";
import {HumanDailyFlowMiddayDA} from "./HumanDailyFlowMiddayDA";
import {HumanDailyFlowMiddayDE} from "./HumanDailyFlowMiddayDE";
import {HumanDailyFlowMiddayEN} from "./HumanDailyFlowMiddayEN";
import {HumanDailyFlowMiddayFI} from "./HumanDailyFlowMiddayFI";
import {HumanDailyFlowMiddayFR} from "./HumanDailyFlowMiddayFR";
import {HumanDailyFlowMiddayJA} from "./HumanDailyFlowMiddayJA";
import {HumanDailyFlowMiddayKO} from "./HumanDailyFlowMiddayKO";
import {HumanDailyFlowMiddayNL} from "./HumanDailyFlowMiddayNL";
import {HumanDailyFlowMiddayTH} from "./HumanDailyFlowMiddayTH";
import {HumanDailyFlowMiddayZH_CN} from "./HumanDailyFlowMiddayZH_CN";

export const HumanDailyFlowMidday: Record<string, ISmartCityLanding> = {
    da: HumanDailyFlowMiddayDA,
    de: HumanDailyFlowMiddayDE,
    en: HumanDailyFlowMiddayEN,
    fi: HumanDailyFlowMiddayFI,
    fr: HumanDailyFlowMiddayFR,
    ja: HumanDailyFlowMiddayJA,
    ko: HumanDailyFlowMiddayKO,
    nl: HumanDailyFlowMiddayNL,
    th: HumanDailyFlowMiddayTH,
    zh: HumanDailyFlowMiddayZH_CN,
};