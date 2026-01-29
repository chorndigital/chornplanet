import {Metadata} from "next";

import {MetaTheCityInBalanceEN} from "./the-city-in-balance/MetaTheCityInBalanceEN";
import {MetaTheCityInBalanceTH} from "./the-city-in-balance/MetaTheCityInBalanceTH";
import {MetaTheCityInBalanceDA} from "./the-city-in-balance/MetaTheCityInBalanceDA";
import {MetaTheCityInBalanceFR} from "./the-city-in-balance/MetaTheCityInBalanceFR";
import {MetaTheCityInBalanceFI} from "./the-city-in-balance/MetaTheCityInBalanceFI";
import {MetaTheCityInBalanceDE} from "./the-city-in-balance/MetaTheCityInBalanceDE";
import {MetaTheCityInBalanceJA} from "./the-city-in-balance/MetaTheCityInBalanceJA";
import {MetaTheCityInBalanceKO} from "./the-city-in-balance/MetaTheCityInBalanceKO";
import {MetaTheCityInBalanceNL} from "./the-city-in-balance/MetaTheCityInBalanceNL";
import {MetaTheCityInBalanceZHCN} from "./the-city-in-balance/MetaTheCityInBalanceZHCN";

export const MetaTheCityInBalance: Record<string, Metadata> = {
    da: MetaTheCityInBalanceDA,
    de: MetaTheCityInBalanceDE,
    en: MetaTheCityInBalanceEN,
    fi: MetaTheCityInBalanceFI,
    fr: MetaTheCityInBalanceFR,
    ja: MetaTheCityInBalanceJA,
    ko: MetaTheCityInBalanceKO,
    nl: MetaTheCityInBalanceNL,
    th: MetaTheCityInBalanceTH,
    zh: MetaTheCityInBalanceZHCN
}