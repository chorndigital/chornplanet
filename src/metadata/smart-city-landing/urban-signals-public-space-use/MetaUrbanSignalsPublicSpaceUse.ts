import {Metadata} from "next";

import {MetaUrbanSignalsPublicSpaceUseEN} from "./MetaUrbanSignalsPublicSpaceUseEN";
import {MetaUrbanSignalsPublicSpaceUseTH} from "./MetaUrbanSignalsPublicSpaceUseTH";
import {MetaUrbanSignalsPublicSpaceUseDA} from "./MetaUrbanSignalsPublicSpaceUseDA";
import {MetaUrbanSignalsPublicSpaceUseFR} from "./MetaUrbanSignalsPublicSpaceUseFR";
import {MetaUrbanSignalsPublicSpaceUseFI} from "./MetaUrbanSignalsPublicSpaceUseFI";
import {MetaUrbanSignalsPublicSpaceUseDE} from "./MetaUrbanSignalsPublicSpaceUseDE";
import {MetaUrbanSignalsPublicSpaceUseJA} from "./MetaUrbanSignalsPublicSpaceUseJA";
import {MetaUrbanSignalsPublicSpaceUseKO} from "./MetaUrbanSignalsPublicSpaceUseKO";
import {MetaUrbanSignalsPublicSpaceUseNL} from "./MetaUrbanSignalsPublicSpaceUseNL";
import {MetaUrbanSignalsPublicSpaceUseZH_CN} from "./MetaUrbanSignalsPublicSpaceUseZH_CN";

export const MetaUrbanSignalsPublicSpaceUse: Record<string, Metadata> = {
    da: MetaUrbanSignalsPublicSpaceUseDA,
    de: MetaUrbanSignalsPublicSpaceUseDE,
    en: MetaUrbanSignalsPublicSpaceUseEN,
    fi: MetaUrbanSignalsPublicSpaceUseFI,
    fr: MetaUrbanSignalsPublicSpaceUseFR,
    ja: MetaUrbanSignalsPublicSpaceUseJA,
    ko: MetaUrbanSignalsPublicSpaceUseKO,
    nl: MetaUrbanSignalsPublicSpaceUseNL,
    th: MetaUrbanSignalsPublicSpaceUseTH,
    zh: MetaUrbanSignalsPublicSpaceUseZH_CN
}