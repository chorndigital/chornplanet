import {Metadata} from "next";

import {MetaHubDoiInthanonEN} from "./hub-doi-inthanon/MetaHubDoiInthanonEN";
import {MetaHubDoiInthanonTH} from "./hub-doi-inthanon/MetaHubDoiInthanonTH";
import {MetaHubDoiInthanonDA} from "./hub-doi-inthanon/MetaHubDoiInthanonDA";
import {MetaHubDoiInthanonFR} from "./hub-doi-inthanon/MetaHubDoiInthanonFR";
import {MetaHubDoiInthanonFI} from "./hub-doi-inthanon/MetaHubDoiInthanonFI";
import {MetaHubDoiInthanonDE} from "./hub-doi-inthanon/MetaHubDoiInthanonDE";
import {MetaHubDoiInthanonJA} from "./hub-doi-inthanon/MetaHubDoiInthanonJA";
import {MetaHubDoiInthanonKO} from "./hub-doi-inthanon/MetaHubDoiInthanonKO";
import {MetaHubDoiInthanonNL} from "./hub-doi-inthanon/MetaHubDoiInthanonNL";
import {MetaHubDoiInthanonZH_CN} from "./hub-doi-inthanon/MetaHubDoiInthanonZH_CN";

export const MetaHubDoiInthanon: Record<string, Metadata> = {
    da: MetaHubDoiInthanonDA,
    de: MetaHubDoiInthanonDE,
    en: MetaHubDoiInthanonEN,
    fi: MetaHubDoiInthanonFI,
    fr: MetaHubDoiInthanonFR,
    ja: MetaHubDoiInthanonJA,
    ko: MetaHubDoiInthanonKO,
    nl: MetaHubDoiInthanonNL,
    th: MetaHubDoiInthanonTH,
    zh: MetaHubDoiInthanonZH_CN
}