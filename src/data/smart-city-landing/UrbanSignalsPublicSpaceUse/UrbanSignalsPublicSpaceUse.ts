// src/data/smart-city-landing/UrbanSignalsPublicSpaceUse/UrbanSignalsPublicSpaceUse.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";
import {UrbanSignalsPublicSpaceUseDA} from "./UrbanSignalsPublicSpaceUseDA";
import {UrbanSignalsPublicSpaceUseDE} from "./UrbanSignalsPublicSpaceUseDE";
import {UrbanSignalsPublicSpaceUseEN} from "./UrbanSignalsPublicSpaceUseEN";
import {UrbanSignalsPublicSpaceUseFI} from "./UrbanSignalsPublicSpaceUseFI";
import {UrbanSignalsPublicSpaceUseFR} from "./UrbanSignalsPublicSpaceUseFR";
import {UrbanSignalsPublicSpaceUseJA} from "./UrbanSignalsPublicSpaceUseJA";
import {UrbanSignalsPublicSpaceUseKO} from "./UrbanSignalsPublicSpaceUseKO";
import {UrbanSignalsPublicSpaceUseNL} from "./UrbanSignalsPublicSpaceUseNL";
import {UrbanSignalsPublicSpaceUseTH} from "./UrbanSignalsPublicSpaceUseTH";
import {UrbanSignalsPublicSpaceUseZH_CN} from "./UrbanSignalsPublicSpaceUseZH_CN";

export const UrbanSignalsPublicSpaceUse: Record<string, ISmartCityLanding> = {
    da: UrbanSignalsPublicSpaceUseDA,
    de: UrbanSignalsPublicSpaceUseDE,
    en: UrbanSignalsPublicSpaceUseEN,
    fi: UrbanSignalsPublicSpaceUseFI,
    fr: UrbanSignalsPublicSpaceUseFR,
    ja: UrbanSignalsPublicSpaceUseJA,
    ko: UrbanSignalsPublicSpaceUseKO,
    nl: UrbanSignalsPublicSpaceUseNL,
    th: UrbanSignalsPublicSpaceUseTH,
    zh: UrbanSignalsPublicSpaceUseZH_CN,
};