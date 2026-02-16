import {IHeroSection} from "@/data/smart-city-media/_model/ISmartCityMedia";
import {HeroSectionDataDA} from "./HeroSectionDataDA";
import {HeroSectionDataDE} from "./HeroSectionDataDE";
import {HeroSectionDataEN} from "./HeroSectionDataEN";
import {HeroSectionDataFI} from "./HeroSectionDataFI";
import {HeroSectionDataFR} from "./HeroSectionDataFR";

import {HeroSectionDataJA} from "./HeroSectionDataJA";
import {HeroSectionDataKO} from "./HeroSectionDataKO";
import {HeroSectionDataNL} from "./HeroSectionDataNL";
import {HeroSectionDataTH} from "./HeroSectionDataTH";
import {HeroSectionDataZH_CN} from "./HeroSectionDataZH_CN";

export const HeroSectionData: Record<string, IHeroSection> = {
    'da': HeroSectionDataDA,
    'de': HeroSectionDataDE,
    'en': HeroSectionDataEN,
    'fi': HeroSectionDataFI,
    'fr': HeroSectionDataFR,
    'ja': HeroSectionDataJA,
    'ko': HeroSectionDataKO,
    'nl': HeroSectionDataNL,
    'th': HeroSectionDataTH,
    'zh': HeroSectionDataZH_CN,
}