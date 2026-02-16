import {Metadata} from "next";

import {MetaHumanDailyFlowMorningEN} from "./MetaHumanDailyFlowMorningEN";
import {MetaHumanDailyFlowMorningTH} from "./MetaHumanDailyFlowMorningTH";
import {MetaHumanDailyFlowMorningDA} from "./MetaHumanDailyFlowMorningDA";
import {MetaHumanDailyFlowMorningFR} from "./MetaHumanDailyFlowMorningFR";
import {MetaHumanDailyFlowMorningFI} from "./MetaHumanDailyFlowMorningFI";
import {MetaHumanDailyFlowMorningDE} from "./MetaHumanDailyFlowMorningDE";
import {MetaHumanDailyFlowMorningJA} from "./MetaHumanDailyFlowMorningJA";
import {MetaHumanDailyFlowMorningKO} from "./MetaHumanDailyFlowMorningKO";
import {MetaHumanDailyFlowMorningNL} from "./MetaHumanDailyFlowMorningNL";
import {MetaHumanDailyFlowMorningZH_CN} from "./MetaHumanDailyFlowMorningZH_CN";

export const MetaHumanDailyFlowMorning: Record<string, Metadata> = {
    da: MetaHumanDailyFlowMorningDA,
    de: MetaHumanDailyFlowMorningDE,
    en: MetaHumanDailyFlowMorningEN,
    fi: MetaHumanDailyFlowMorningFI,
    fr: MetaHumanDailyFlowMorningFR,
    ja: MetaHumanDailyFlowMorningJA,
    ko: MetaHumanDailyFlowMorningKO,
    nl: MetaHumanDailyFlowMorningNL,
    th: MetaHumanDailyFlowMorningTH,
    zh: MetaHumanDailyFlowMorningZH_CN
}