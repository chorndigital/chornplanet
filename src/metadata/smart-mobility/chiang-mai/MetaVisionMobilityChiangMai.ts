import {Metadata} from "next";

import {MetaVisionMobilityChiangMaiEN} from "./vision-smart-mobility/MetaVisionMobilityChiangMaiEN";
import {MetaVisionMobilityChiangMaiTH} from "./vision-smart-mobility/MetaVisionMobilityChiangMaiTH";
import {MetaVisionMobilityChiangMaiDA} from "./vision-smart-mobility/MetaVisionMobilityChiangMaiDA";
import {MetaVisionMobilityChiangMaiFR} from "./vision-smart-mobility/MetaVisionMobilityChiangMaiFR";
import {MetaVisionMobilityChiangMaiFI} from "./vision-smart-mobility/MetaVisionMobilityChiangMaiFI";
import {MetaVisionMobilityChiangMaiDE} from "./vision-smart-mobility/MetaVisionMobilityChiangMaiDE";
import {MetaVisionMobilityChiangMaiJA} from "./vision-smart-mobility/MetaVisionMobilityChiangMaiJA";
import {MetaVisionMobilityChiangMaiKO} from "./vision-smart-mobility/MetaVisionMobilityChiangMaiKO";
import {MetaVisionMobilityChiangMaiNL} from "./vision-smart-mobility/MetaVisionMobilityChiangMaiNL";
import {MetaVisionMobilityChiangMaiZH_CN} from "./vision-smart-mobility/MetaVisionMobilityChiangMaiZH_CN";

export const MetaVisionMobilityChiangMai: Record<string, Metadata> = {
    da: MetaVisionMobilityChiangMaiDA,
    de: MetaVisionMobilityChiangMaiDE,
    en: MetaVisionMobilityChiangMaiEN,
    fi: MetaVisionMobilityChiangMaiFI,
    fr: MetaVisionMobilityChiangMaiFR,
    ja: MetaVisionMobilityChiangMaiJA,
    ko: MetaVisionMobilityChiangMaiKO,
    nl: MetaVisionMobilityChiangMaiNL,
    th: MetaVisionMobilityChiangMaiTH,
    zh: MetaVisionMobilityChiangMaiZH_CN
}