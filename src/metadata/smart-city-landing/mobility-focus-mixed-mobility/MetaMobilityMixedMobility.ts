import {Metadata} from "next";

import {MetaMobilityMixedMobilityEN} from "./MetaMobilityMixedMobilityEN";
import {MetaMobilityMixedMobilityTH} from "./MetaMobilityMixedMobilityTH";
import {MetaMobilityMixedMobilityDA} from "./MetaMobilityMixedMobilityDA";
import {MetaMobilityMixedMobilityFR} from "./MetaMobilityMixedMobilityFR";
import {MetaMobilityMixedMobilityFI} from "./MetaMobilityMixedMobilityFI";
import {MetaMobilityMixedMobilityDE} from "./MetaMobilityMixedMobilityDE";
import {MetaMobilityMixedMobilityJA} from "./MetaMobilityMixedMobilityJA";
import {MetaMobilityMixedMobilityKO} from "./MetaMobilityMixedMobilityKO";
import {MetaMobilityMixedMobilityNL} from "./MetaMobilityMixedMobilityNL";
import {MetaMobilityMixedMobilityZH_CN} from "./MetaMobilityMixedMobilityZH_CN";

export const MetaMobilityMixedMobility: Record<string, Metadata> = {
    da: MetaMobilityMixedMobilityDA,
    de: MetaMobilityMixedMobilityDE,
    en: MetaMobilityMixedMobilityEN,
    fi: MetaMobilityMixedMobilityFI,
    fr: MetaMobilityMixedMobilityFR,
    ja: MetaMobilityMixedMobilityJA,
    ko: MetaMobilityMixedMobilityKO,
    nl: MetaMobilityMixedMobilityNL,
    th: MetaMobilityMixedMobilityTH,
    zh: MetaMobilityMixedMobilityZH_CN
}