import {Metadata} from "next";

import {MetaLifeBeneathTheRouteEN} from "./life-beneath-the-route/MetaLifeBeneathTheRouteEN";
import {MetaLifeBeneathTheRouteTH} from "./life-beneath-the-route/MetaLifeBeneathTheRouteTH";
import {MetaLifeBeneathTheRouteDA} from "./life-beneath-the-route/MetaLifeBeneathTheRouteDA";
import {MetaLifeBeneathTheRouteFR} from "./life-beneath-the-route/MetaLifeBeneathTheRouteFR";
import {MetaLifeBeneathTheRouteFI} from "./life-beneath-the-route/MetaLifeBeneathTheRouteFI";
import {MetaLifeBeneathTheRouteDE} from "./life-beneath-the-route/MetaLifeBeneathTheRouteDE";
import {MetaLifeBeneathTheRouteJA} from "./life-beneath-the-route/MetaLifeBeneathTheRouteJA";
import {MetaLifeBeneathTheRouteKO} from "./life-beneath-the-route/MetaLifeBeneathTheRouteKO";
import {MetaLifeBeneathTheRouteNL} from "./life-beneath-the-route/MetaLifeBeneathTheRouteNL";
import {MetaLifeBeneathTheRouteZHCN} from "./life-beneath-the-route/MetaLifeBeneathTheRouteZHCN";

export const MetaLiteBeneathTheRoute: Record<string, Metadata> = {
    da: MetaLifeBeneathTheRouteDA,
    de: MetaLifeBeneathTheRouteDE,
    en: MetaLifeBeneathTheRouteEN,
    fi: MetaLifeBeneathTheRouteFI,
    fr: MetaLifeBeneathTheRouteFR,
    ja: MetaLifeBeneathTheRouteJA,
    ko: MetaLifeBeneathTheRouteKO,
    nl: MetaLifeBeneathTheRouteNL,
    th: MetaLifeBeneathTheRouteTH,
    zh: MetaLifeBeneathTheRouteZHCN
}