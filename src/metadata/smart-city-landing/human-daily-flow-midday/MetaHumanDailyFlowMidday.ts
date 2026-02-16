import {Metadata} from "next";

import {MetaHumanDailyFlowMiddayEN} from "./MetaHumanDailyFlowMiddayEN";
import {MetaHumanDailyFlowMiddayTH} from "./MetaHumanDailyFlowMiddayTH";
import {MetaHumanDailyFlowMiddayDA} from "./MetaHumanDailyFlowMiddayDA";
import {MetaHumanDailyFlowMiddayFR} from "./MetaHumanDailyFlowMiddayFR";
import {MetaHumanDailyFlowMiddayFI} from "./MetaHumanDailyFlowMiddayFI";
import {MetaHumanDailyFlowMiddayDE} from "./MetaHumanDailyFlowMiddayDE";
import {MetaHumanDailyFlowMiddayJA} from "./MetaHumanDailyFlowMiddayJA";
import {MetaHumanDailyFlowMiddayKO} from "./MetaHumanDailyFlowMiddayKO";
import {MetaHumanDailyFlowMiddayNL} from "./MetaHumanDailyFlowMiddayNL";
import {MetaHumanDailyFlowMiddayZH_CN} from "./MetaHumanDailyFlowMiddayZH_CN";

export const MetaHumanDailyFlowMidday: Record<string, Metadata> = {
    da: MetaHumanDailyFlowMiddayDA,
    de: MetaHumanDailyFlowMiddayDE,
    en: MetaHumanDailyFlowMiddayEN,
    fi: MetaHumanDailyFlowMiddayFI,
    fr: MetaHumanDailyFlowMiddayFR,
    ja: MetaHumanDailyFlowMiddayJA,
    ko: MetaHumanDailyFlowMiddayKO,
    nl: MetaHumanDailyFlowMiddayNL,
    th: MetaHumanDailyFlowMiddayTH,
    zh: MetaHumanDailyFlowMiddayZH_CN
}