import {IMobilityFocus} from "@/data/smart-city-media/_model/ISmartCityMedia";
import {MobilityFocusDataDA} from "./MobilityFocusDataDA";
import {MobilityFocusDataDE} from "./MobilityFocusDataDE";
import {MobilityFocusDataEN} from "./MobilityFocusDataEN";
import {MobilityFocusDataFI} from "./MobilityFocusDataFI";
import {MobilityFocusDataFR} from "./MobilityFocusDataFR";

import {MobilityFocusDataJA} from "./MobilityFocusDataJA";
import {MobilityFocusDataKO} from "./MobilityFocusDataKO";
import {MobilityFocusDataNL} from "./MobilityFocusDataNL";
import {MobilityFocusDataTH} from "./MobilityFocusDataTH";
import {MobilityFocusDataZH_CN} from "./MobilityFocusDataZH_CN";

export const MobilityFocusData: Record<string, IMobilityFocus> = {
    'da': MobilityFocusDataDA,
    'de': MobilityFocusDataDE,
    'en': MobilityFocusDataEN,
    'fi': MobilityFocusDataFI,
    'fr': MobilityFocusDataFR,
    'ja': MobilityFocusDataJA,
    'ko': MobilityFocusDataKO,
    'nl': MobilityFocusDataNL,
    'th': MobilityFocusDataTH,
    'zh': MobilityFocusDataZH_CN,
}