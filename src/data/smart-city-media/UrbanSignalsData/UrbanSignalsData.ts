import {IUrbanSignals} from "@/data/smart-city-media/_model/ISmartCityMedia";
import {UrbanSignalsDataDA} from "./UrbanSignalsDataDA";
import {UrbanSignalsDataDE} from "./UrbanSignalsDataDE";
import {UrbanSignalsDataEN} from "./UrbanSignalsDataEN";
import {UrbanSignalsDataFI} from "./UrbanSignalsDataFI";
import {UrbanSignalsDataFR} from "./UrbanSignalsDataFR";

import {UrbanSignalsDataJA} from "./UrbanSignalsDataJA";
import {UrbanSignalsDataKO} from "./UrbanSignalsDataKO";
import {UrbanSignalsDataNL} from "./UrbanSignalsDataNL";
import {UrbanSignalsDataTH} from "./UrbanSignalsDataTH";
import {UrbanSignalsDataZH_CN} from "./UrbanSignalsDataZH_CN";

export const UrbanSignalsData: Record<string, IUrbanSignals> = {
    'da': UrbanSignalsDataDA,
    'de': UrbanSignalsDataDE,
    'en': UrbanSignalsDataEN,
    'fi': UrbanSignalsDataFI,
    'fr': UrbanSignalsDataFR,
    'ja': UrbanSignalsDataJA,
    'ko': UrbanSignalsDataKO,
    'nl': UrbanSignalsDataNL,
    'th': UrbanSignalsDataTH,
    'zh': UrbanSignalsDataZH_CN,
}