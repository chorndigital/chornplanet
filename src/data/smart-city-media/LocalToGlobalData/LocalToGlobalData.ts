import {ILocalToGlobal} from "@/data/smart-city-media/_model/ISmartCityMedia";
import {LocalToGlobalDataDA} from "./LocalToGlobalDataDA";
import {LocalToGlobalDataDE} from "./LocalToGlobalDataDE";
import {LocalToGlobalDataEN} from "./LocalToGlobalDataEN";
import {LocalToGlobalDataFI} from "./LocalToGlobalDataFI";
import {LocalToGlobalDataFR} from "./LocalToGlobalDataFR";

import {LocalToGlobalDataJA} from "./LocalToGlobalDataJA";
import {LocalToGlobalDataKO} from "./LocalToGlobalDataKO";
import {LocalToGlobalDataNL} from "./LocalToGlobalDataNL";
import {LocalToGlobalDataTH} from "./LocalToGlobalDataTH";
import {LocalToGlobalDataZH_CN} from "./LocalToGlobalDataZH_CN";

export const LocalToGlobalData: Record<string, ILocalToGlobal> = {
    'da': LocalToGlobalDataDA,
    'de': LocalToGlobalDataDE,
    'en': LocalToGlobalDataEN,
    'fi': LocalToGlobalDataFI,
    'fr': LocalToGlobalDataFR,
    'ja': LocalToGlobalDataJA,
    'ko': LocalToGlobalDataKO,
    'nl': LocalToGlobalDataNL,
    'th': LocalToGlobalDataTH,
    'zh': LocalToGlobalDataZH_CN,
}