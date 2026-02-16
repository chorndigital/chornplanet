// src/data/smart-city-landing/UrbanSignalsLogisticsIntegration/UrbanSignalsLogisticsIntegration.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";
import {UrbanSignalsLogisticsIntegrationDA} from "./UrbanSignalsLogisticsIntegrationDA";
import {UrbanSignalsLogisticsIntegrationDE} from "./UrbanSignalsLogisticsIntegrationDE";
import {UrbanSignalsLogisticsIntegrationEN} from "./UrbanSignalsLogisticsIntegrationEN";
import {UrbanSignalsLogisticsIntegrationFI} from "./UrbanSignalsLogisticsIntegrationFI";
import {UrbanSignalsLogisticsIntegrationFR} from "./UrbanSignalsLogisticsIntegrationFR";
import {UrbanSignalsLogisticsIntegrationJA} from "./UrbanSignalsLogisticsIntegrationJA";
import {UrbanSignalsLogisticsIntegrationKO} from "./UrbanSignalsLogisticsIntegrationKO";
import {UrbanSignalsLogisticsIntegrationNL} from "./UrbanSignalsLogisticsIntegrationNL";
import {UrbanSignalsLogisticsIntegrationTH} from "./UrbanSignalsLogisticsIntegrationTH";
import {UrbanSignalsLogisticsIntegrationZH_CN} from "./UrbanSignalsLogisticsIntegrationZH_CN";

export const UrbanSignalsLogisticsIntegration: Record<string, ISmartCityLanding> = {
    da: UrbanSignalsLogisticsIntegrationDA,
    de: UrbanSignalsLogisticsIntegrationDE,
    en: UrbanSignalsLogisticsIntegrationEN,
    fi: UrbanSignalsLogisticsIntegrationFI,
    fr: UrbanSignalsLogisticsIntegrationFR,
    ja: UrbanSignalsLogisticsIntegrationJA,
    ko: UrbanSignalsLogisticsIntegrationKO,
    nl: UrbanSignalsLogisticsIntegrationNL,
    th: UrbanSignalsLogisticsIntegrationTH,
    zh: UrbanSignalsLogisticsIntegrationZH_CN,
};