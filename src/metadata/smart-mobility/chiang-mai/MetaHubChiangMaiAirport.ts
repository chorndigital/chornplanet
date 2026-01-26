import {Metadata} from "next";

import {MetaHubChiangMaiAirportEN} from "./hub-chiang-mai-airport/MetaHubChiangMaiAirportEN";
import {MetaHubChiangMaiAirportTH} from "./hub-chiang-mai-airport/MetaHubChiangMaiAirportTH";
import {MetaHubChiangMaiAirportDA} from "./hub-chiang-mai-airport/MetaHubChiangMaiAirportDA";
import {MetaHubChiangMaiAirportFR} from "./hub-chiang-mai-airport/MetaHubChiangMaiAirportFR";
import {MetaHubChiangMaiAirportFI} from "./hub-chiang-mai-airport/MetaHubChiangMaiAirportFI";
import {MetaHubChiangMaiAirportDE} from "./hub-chiang-mai-airport/MetaHubChiangMaiAirportDE";
import {MetaHubChiangMaiAirportJA} from "./hub-chiang-mai-airport/MetaHubChiangMaiAirportJA";
import {MetaHubChiangMaiAirportKO} from "./hub-chiang-mai-airport/MetaHubChiangMaiAirportKO";
import {MetaHubChiangMaiAirportNL} from "./hub-chiang-mai-airport/MetaHubChiangMaiAirportNL";
import {MetaHubChiangMaiAirportZH_CN} from "./hub-chiang-mai-airport/MetaHubChiangMaiAirportZH_CN";

export const MetaHubChiangMaiAirport: Record<string, Metadata> = {
    da: MetaHubChiangMaiAirportDA,
    de: MetaHubChiangMaiAirportDE,
    en: MetaHubChiangMaiAirportEN,
    fi: MetaHubChiangMaiAirportFI,
    fr: MetaHubChiangMaiAirportFR,
    ja: MetaHubChiangMaiAirportJA,
    ko: MetaHubChiangMaiAirportKO,
    nl: MetaHubChiangMaiAirportNL,
    th: MetaHubChiangMaiAirportTH,
    zh: MetaHubChiangMaiAirportZH_CN
}