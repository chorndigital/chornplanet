import {IEditorialPositioning} from "@/data/smart-city-media/_model/ISmartCityMedia";
import {EditorialPositioningDataDA} from "./EditorialPositioningDataDA";
import {EditorialPositioningDataDE} from "./EditorialPositioningDataDE";
import {EditorialPositioningDataEN} from "./EditorialPositioningDataEN";
import {EditorialPositioningDataFI} from "./EditorialPositioningDataFI";
import {EditorialPositioningDataFR} from "./EditorialPositioningDataFR";

import {EditorialPositioningDataJA} from "./EditorialPositioningDataJA";
import {EditorialPositioningDataKO} from "./EditorialPositioningDataKO";
import {EditorialPositioningDataNL} from "./EditorialPositioningDataNL";
import {EditorialPositioningDataTH} from "./EditorialPositioningDataTH";
import {EditorialPositioningDataZH_CN} from "./EditorialPositioningDataZH_CN";

export const EditorialPositioningData: Record<string, IEditorialPositioning> = {
    'da': EditorialPositioningDataDA,
    'de': EditorialPositioningDataDE,
    'en': EditorialPositioningDataEN,
    'fi': EditorialPositioningDataFI,
    'fr': EditorialPositioningDataFR,
    'ja': EditorialPositioningDataJA,
    'ko': EditorialPositioningDataKO,
    'nl': EditorialPositioningDataNL,
    'th': EditorialPositioningDataTH,
    'zh': EditorialPositioningDataZH_CN,
}