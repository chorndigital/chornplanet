import {ISmartCity} from "./model/ISmartCity";
import {SmartCityDA} from "./SmartCityDA";
import {SmartCityDE} from "./SmartCityDE";
import {SmartCityEN} from "./SmartCityEN";
import {SmartCityFI} from "./SmartCityFI";
import {SmartCityFR} from "./SmartCityFR";
import {SmartCityJA} from "./SmartCityJA";
import {SmartCityKO} from "./SmartCityKO";
import {SmartCityNL} from "./SmartCityNL";
import {SmartCityTH} from "./SmartCityTH";
import {SmartCityZH_CN} from "./SmartCityZH_CN";

export const SmartCity: Record<string, ISmartCity> = {
    'da': SmartCityDA,
    'de': SmartCityDE,
    'en': SmartCityEN,
    'fi': SmartCityFI,
    'fr': SmartCityFR,
    'ko': SmartCityKO,
    'ja': SmartCityJA,
    'nl': SmartCityNL,
    'th': SmartCityTH,
    'zh': SmartCityZH_CN,
}