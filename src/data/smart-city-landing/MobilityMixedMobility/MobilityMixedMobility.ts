// src/data/smart-city-landing/MobilityMixedMobility/MobilityMixedMobility.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";
import {MobilityMixedMobilityDA} from "./MobilityMixedMobilityDA";
import {MobilityMixedMobilityDE} from "./MobilityMixedMobilityDE";
import {MobilityMixedMobilityEN} from "./MobilityMixedMobilityEN";
import {MobilityMixedMobilityFI} from "./MobilityMixedMobilityFI";
import {MobilityMixedMobilityFR} from "./MobilityMixedMobilityFR";
import {MobilityMixedMobilityJA} from "./MobilityMixedMobilityJA";
import {MobilityMixedMobilityKO} from "./MobilityMixedMobilityKO";
import {MobilityMixedMobilityNL} from "./MobilityMixedMobilityNL";
import {MobilityMixedMobilityTH} from "./MobilityMixedMobilityTH";
import {MobilityMixedMobilityZH_CN} from "./MobilityMixedMobilityZH_CN";

export const MobilityMixedMobility: Record<string, ISmartCityLanding> = {
    da: MobilityMixedMobilityDA,
    de: MobilityMixedMobilityDE,
    en: MobilityMixedMobilityEN,
    fi: MobilityMixedMobilityFI,
    fr: MobilityMixedMobilityFR,
    ja: MobilityMixedMobilityJA,
    ko: MobilityMixedMobilityKO,
    nl: MobilityMixedMobilityNL,
    th: MobilityMixedMobilityTH,
    zh: MobilityMixedMobilityZH_CN,
};