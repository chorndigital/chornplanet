import {Metadata} from "next";

import {MetaUrbanSignalsLogisticsIntegrationEN} from "./MetaUrbanSignalsLogisticsIntegrationEN";
import {MetaUrbanSignalsLogisticsIntegrationTH} from "./MetaUrbanSignalsLogisticsIntegrationTH";
import {MetaUrbanSignalsLogisticsIntegrationDA} from "./MetaUrbanSignalsLogisticsIntegrationDA";
import {MetaUrbanSignalsLogisticsIntegrationFR} from "./MetaUrbanSignalsLogisticsIntegrationFR";
import {MetaUrbanSignalsLogisticsIntegrationFI} from "./MetaUrbanSignalsLogisticsIntegrationFI";
import {MetaUrbanSignalsLogisticsIntegrationDE} from "./MetaUrbanSignalsLogisticsIntegrationDE";
import {MetaUrbanSignalsLogisticsIntegrationJA} from "./MetaUrbanSignalsLogisticsIntegrationJA";
import {MetaUrbanSignalsLogisticsIntegrationKO} from "./MetaUrbanSignalsLogisticsIntegrationKO";
import {MetaUrbanSignalsLogisticsIntegrationNL} from "./MetaUrbanSignalsLogisticsIntegrationNL";
import {MetaUrbanSignalsLogisticsIntegrationZH_CN} from "./MetaUrbanSignalsLogisticsIntegrationZH_CN";

export const MetaUrbanSignalsLogisticsIntegration: Record<string, Metadata> = {
    da: MetaUrbanSignalsLogisticsIntegrationDA,
    de: MetaUrbanSignalsLogisticsIntegrationDE,
    en: MetaUrbanSignalsLogisticsIntegrationEN,
    fi: MetaUrbanSignalsLogisticsIntegrationFI,
    fr: MetaUrbanSignalsLogisticsIntegrationFR,
    ja: MetaUrbanSignalsLogisticsIntegrationJA,
    ko: MetaUrbanSignalsLogisticsIntegrationKO,
    nl: MetaUrbanSignalsLogisticsIntegrationNL,
    th: MetaUrbanSignalsLogisticsIntegrationTH,
    zh: MetaUrbanSignalsLogisticsIntegrationZH_CN
}