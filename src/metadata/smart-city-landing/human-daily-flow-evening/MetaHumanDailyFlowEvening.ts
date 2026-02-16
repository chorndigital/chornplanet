import {Metadata} from "next";

import {MetaHumanDailyFlowEveningEN} from "./MetaHumanDailyFlowEveningEN";
import {MetaHumanDailyFlowEveningTH} from "./MetaHumanDailyFlowEveningTH";
import {MetaHumanDailyFlowEveningDA} from "./MetaHumanDailyFlowEveningDA";
import {MetaHumanDailyFlowEveningFR} from "./MetaHumanDailyFlowEveningFR";
import {MetaHumanDailyFlowEveningFI} from "./MetaHumanDailyFlowEveningFI";
import {MetaHumanDailyFlowEveningDE} from "./MetaHumanDailyFlowEveningDE";
import {MetaHumanDailyFlowEveningJA} from "./MetaHumanDailyFlowEveningJA";
import {MetaHumanDailyFlowEveningKO} from "./MetaHumanDailyFlowEveningKO";
import {MetaHumanDailyFlowEveningNL} from "./MetaHumanDailyFlowEveningNL";
import {MetaHumanDailyFlowEveningZH_CN} from "./MetaHumanDailyFlowEveningZH_CN";

export const MetaHumanDailyFlowEvening: Record<string, Metadata> = {
    da: MetaHumanDailyFlowEveningDA,
    de: MetaHumanDailyFlowEveningDE,
    en: MetaHumanDailyFlowEveningEN,
    fi: MetaHumanDailyFlowEveningFI,
    fr: MetaHumanDailyFlowEveningFR,
    ja: MetaHumanDailyFlowEveningJA,
    ko: MetaHumanDailyFlowEveningKO,
    nl: MetaHumanDailyFlowEveningNL,
    th: MetaHumanDailyFlowEveningTH,
    zh: MetaHumanDailyFlowEveningZH_CN
}