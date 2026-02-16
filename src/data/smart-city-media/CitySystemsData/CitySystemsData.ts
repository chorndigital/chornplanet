import {ICitySystems} from "@/data/smart-city-media/_model/ISmartCityMedia";
import {CitySystemsDataDA} from "./CitySystemsDataDA";
import {CitySystemsDataDE} from "./CitySystemsDataDE";
import {CitySystemsDataEN} from "./CitySystemsDataEN";
import {CitySystemsDataFI} from "./CitySystemsDataFI";
import {CitySystemsDataFR} from "./CitySystemsDataFR";

import {CitySystemsDataJA} from "./CitySystemsDataJA";
import {CitySystemsDataKO} from "./CitySystemsDataKO";
import {CitySystemsDataNL} from "./CitySystemsDataNL";
import {CitySystemsDataTH} from "./CitySystemsDataTH";
import {CitySystemsDataZH_CN} from "./CitySystemsDataZH_CN";

export const CitySystemsData: Record<string, ICitySystems> = {
    'da': CitySystemsDataDA,
    'de': CitySystemsDataDE,
    'en': CitySystemsDataEN,
    'fi': CitySystemsDataFI,
    'fr': CitySystemsDataFR,
    'ja': CitySystemsDataJA,
    'ko': CitySystemsDataKO,
    'nl': CitySystemsDataNL,
    'th': CitySystemsDataTH,
    'zh': CitySystemsDataZH_CN,
}