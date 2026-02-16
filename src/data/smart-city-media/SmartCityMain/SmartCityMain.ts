import {ISmartCityMain} from "@/data/smart-city-media/_model/ISmartCityMain";
import {SmartCityMainDA} from "./SmartCityMainDA";
import {SmartCityMainDE} from "./SmartCityMainDE";
import {SmartCityMainEN} from "./SmartCityMainEN";
import {SmartCityMainFI} from "./SmartCityMainFI";
import {SmartCityMainFR} from "./SmartCityMainFR";

import {SmartCityMainJA} from "./SmartCityMainJA";
import {SmartCityMainKO} from "./SmartCityMainKO";
import {SmartCityMainNL} from "./SmartCityMainNL";
import {SmartCityMainTH} from "./SmartCityMainTH";
import {SmartCityMainZH_CN} from "./SmartCityMainZH_CN";

export const SmartCityMain: Record<string, ISmartCityMain> = {
    'da': SmartCityMainDA,
    'de': SmartCityMainDE,
    'en': SmartCityMainEN,
    'fi': SmartCityMainFI,
    'fr': SmartCityMainFR,
    'ja': SmartCityMainJA,
    'ko': SmartCityMainKO,
    'nl': SmartCityMainNL,
    'th': SmartCityMainTH,
    'zh': SmartCityMainZH_CN,
}