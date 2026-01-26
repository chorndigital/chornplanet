import {ISmartMobility} from "./model/ISmartMobility";
import {SmartMobilityDA} from "./SmartMobilityDA";
import {SmartMobilityDE} from "./SmartMobilityDE";
import {SmartMobilityEN} from "./SmartMobilityEN";
import {SmartMobilityFI} from "./SmartMobilityFI";
import {SmartMobilityFR} from "./SmartMobilityFR";
import {SmartMobilityJA} from "./SmartMobilityJA";
import {SmartMobilityKO} from "./SmartMobilityKO";
import {SmartMobilityNL} from "./SmartMobilityNL";
import {SmartMobilityTH} from "./SmartMobilityTH";
import {SmartMobilityZH} from "./SmartMobilityZH";

export const SmartMobility: Record<string, ISmartMobility> = {
    'en': SmartMobilityEN,
    'th': SmartMobilityTH,
    'fr': SmartMobilityFR,
    'ja': SmartMobilityJA,
    'zh': SmartMobilityZH,
    'de': SmartMobilityDE,
    'nl': SmartMobilityNL,
    'da': SmartMobilityDA,
    'fi': SmartMobilityFI,
    'ko': SmartMobilityKO
}