import {ISystemExplainers} from "@/data/smart-city-media/_model/ISmartCityMedia";
import {SystemExplainersDataDA} from "./SystemExplainersDataDA";
import {SystemExplainersDataDE} from "./SystemExplainersDataDE";
import {SystemExplainersDataEN} from "./SystemExplainersDataEN";
import {SystemExplainersDataFI} from "./SystemExplainersDataFI";
import {SystemExplainersDataFR} from "./SystemExplainersDataFR";

import {SystemExplainersDataJA} from "./SystemExplainersDataJA";
import {SystemExplainersDataKO} from "./SystemExplainersDataKO";
import {SystemExplainersDataNL} from "./SystemExplainersDataNL";
import {SystemExplainersDataTH} from "./SystemExplainersDataTH";
import {SystemExplainersDataZH_CN} from "./SystemExplainersDataZH_CN";

export const SystemExplainersData: Record<string, ISystemExplainers> = {
    'da': SystemExplainersDataDA,
    'de': SystemExplainersDataDE,
    'en': SystemExplainersDataEN,
    'fi': SystemExplainersDataFI,
    'fr': SystemExplainersDataFR,
    'ja': SystemExplainersDataJA,
    'ko': SystemExplainersDataKO,
    'nl': SystemExplainersDataNL,
    'th': SystemExplainersDataTH,
    'zh': SystemExplainersDataZH_CN,
}