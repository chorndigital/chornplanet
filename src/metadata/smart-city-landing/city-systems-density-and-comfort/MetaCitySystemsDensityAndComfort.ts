import {Metadata} from "next";

import {MetaCitySystemsDensityAndComfortEN} from "./MetaCitySystemsDensityAndComfortEN";
import {MetaCitySystemsDensityAndComfortTH} from "./MetaCitySystemsDensityAndComfortTH";
import {MetaCitySystemsDensityAndComfortDA} from "./MetaCitySystemsDensityAndComfortDA";
import {MetaCitySystemsDensityAndComfortFR} from "./MetaCitySystemsDensityAndComfortFR";
import {MetaCitySystemsDensityAndComfortFI} from "./MetaCitySystemsDensityAndComfortFI";
import {MetaCitySystemsDensityAndComfortDE} from "./MetaCitySystemsDensityAndComfortDE";
import {MetaCitySystemsDensityAndComfortJA} from "./MetaCitySystemsDensityAndComfortJA";
import {MetaCitySystemsDensityAndComfortKO} from "./MetaCitySystemsDensityAndComfortKO";
import {MetaCitySystemsDensityAndComfortNL} from "./MetaCitySystemsDensityAndComfortNL";
import {MetaCitySystemsDensityAndComfortZH_CN} from "./MetaCitySystemsDensityAndComfortZH_CN";

export const MetaCitySystemsDensityAndComfort: Record<string, Metadata> = {
    da: MetaCitySystemsDensityAndComfortDA,
    de: MetaCitySystemsDensityAndComfortDE,
    en: MetaCitySystemsDensityAndComfortEN,
    fi: MetaCitySystemsDensityAndComfortFI,
    fr: MetaCitySystemsDensityAndComfortFR,
    ja: MetaCitySystemsDensityAndComfortJA,
    ko: MetaCitySystemsDensityAndComfortKO,
    nl: MetaCitySystemsDensityAndComfortNL,
    th: MetaCitySystemsDensityAndComfortTH,
    zh: MetaCitySystemsDensityAndComfortZH_CN
}