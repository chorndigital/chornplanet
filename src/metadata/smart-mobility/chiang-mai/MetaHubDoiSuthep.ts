import {Metadata} from "next";

import {MetaHubDoiSuthepEN} from "./hub-doi-suthep/MetaHubDoiSuthepEN";
import {MetaHubDoiSuthepTH} from "./hub-doi-suthep/MetaHubDoiSuthepTH";
import {MetaHubDoiSuthepDA} from "./hub-doi-suthep/MetaHubDoiSuthepDA";
import {MetaHubDoiSuthepFR} from "./hub-doi-suthep/MetaHubDoiSuthepFR";
import {MetaHubDoiSuthepFI} from "./hub-doi-suthep/MetaHubDoiSuthepFI";
import {MetaHubDoiSuthepDE} from "./hub-doi-suthep/MetaHubDoiSuthepDE";
import {MetaHubDoiSuthepJA} from "./hub-doi-suthep/MetaHubDoiSuthepJA";
import {MetaHubDoiSuthepKO} from "./hub-doi-suthep/MetaHubDoiSuthepKO";
import {MetaHubDoiSuthepNL} from "./hub-doi-suthep/MetaHubDoiSuthepNL";
import {MetaHubDoiSuthepZH_CN} from "./hub-doi-suthep/MetaHubDoiSuthepZH_CN";

export const MetaHubDoiSuthep: Record<string, Metadata> = {
    da: MetaHubDoiSuthepDA,
    de: MetaHubDoiSuthepDE,
    en: MetaHubDoiSuthepEN,
    fi: MetaHubDoiSuthepFI,
    fr: MetaHubDoiSuthepFR,
    ja: MetaHubDoiSuthepJA,
    ko: MetaHubDoiSuthepKO,
    nl: MetaHubDoiSuthepNL,
    th: MetaHubDoiSuthepTH,
    zh: MetaHubDoiSuthepZH_CN
}