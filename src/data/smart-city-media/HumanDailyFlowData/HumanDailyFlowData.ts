import {IHumanDailyFlow} from "@/data/smart-city-media/_model/ISmartCityMedia";
import {HumanDailyFlowDataDA} from "./HumanDailyFlowDataDA";
import {HumanDailyFlowDataDE} from "./HumanDailyFlowDataDE";
import {HumanDailyFlowDataEN} from "./HumanDailyFlowDataEN";
import {HumanDailyFlowDataFI} from "./HumanDailyFlowDataFI";
import {HumanDailyFlowDataFR} from "./HumanDailyFlowDataFR";

import {HumanDailyFlowDataJA} from "./HumanDailyFlowDataJA";
import {HumanDailyFlowDataKO} from "./HumanDailyFlowDataKO";
import {HumanDailyFlowDataNL} from "./HumanDailyFlowDataNL";
import {HumanDailyFlowDataTH} from "./HumanDailyFlowDataTH";
import {HumanDailyFlowDataZH_CN} from "./HumanDailyFlowDataZH_CN";

export const HumanDailyFlowData: Record<string, IHumanDailyFlow> = {
    'da': HumanDailyFlowDataDA,
    'de': HumanDailyFlowDataDE,
    'en': HumanDailyFlowDataEN,
    'fi': HumanDailyFlowDataFI,
    'fr': HumanDailyFlowDataFR,
    'ja': HumanDailyFlowDataJA,
    'ko': HumanDailyFlowDataKO,
    'nl': HumanDailyFlowDataNL,
    'th': HumanDailyFlowDataTH,
    'zh': HumanDailyFlowDataZH_CN,
}