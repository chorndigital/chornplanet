import {ICitySystems, IGlobalPatterns} from "@/data/smart-city-media/_model/ISmartCityMedia";
import {GlobalPatternsDataDA} from "./GlobalPatternsDataDA";
import {GlobalPatternsDataDE} from "./GlobalPatternsDataDE";
import {GlobalPatternsDataEN} from "./GlobalPatternsDataEN";
import {GlobalPatternsDataFI} from "./GlobalPatternsDataFI";
import {GlobalPatternsDataFR} from "./GlobalPatternsDataFR";

import {GlobalPatternsDataJA} from "./GlobalPatternsDataJA";
import {GlobalPatternsDataKO} from "./GlobalPatternsDataKO";
import {GlobalPatternsDataNL} from "./GlobalPatternsDataNL";
import {GlobalPatternsDataTH} from "./GlobalPatternsDataTH";
import {GlobalPatternsDataZH_CN} from "./GlobalPatternsDataZH_CN";

export const GlobalPatternsData: Record<string, IGlobalPatterns> = {
    'da': GlobalPatternsDataDA,
    'de': GlobalPatternsDataDE,
    'en': GlobalPatternsDataEN,
    'fi': GlobalPatternsDataFI,
    'fr': GlobalPatternsDataFR,
    'ja': GlobalPatternsDataJA,
    'ko': GlobalPatternsDataKO,
    'nl': GlobalPatternsDataNL,
    'th': GlobalPatternsDataTH,
    'zh': GlobalPatternsDataZH_CN,
}