import {Metadata} from "next";

import {MetaVertiportDesignEN} from "./vertiport-design/MetaVertiportDesignEN";
import {MetaVertiportDesignTH} from "./vertiport-design/MetaVertiportDesignTH";
import {MetaVertiportDesignDA} from "./vertiport-design/MetaVertiportDesignDA";
import {MetaVertiportDesignFR} from "./vertiport-design/MetaVertiportDesignFR";
import {MetaVertiportDesignFI} from "./vertiport-design/MetaVertiportDesignFI";
import {MetaVertiportDesignDE} from "./vertiport-design/MetaVertiportDesignDE";
import {MetaVertiportDesignJA} from "./vertiport-design/MetaVertiportDesignJA";
import {MetaVertiportDesignKO} from "./vertiport-design/MetaVertiportDesignKO";
import {MetaVertiportDesignNL} from "./vertiport-design/MetaVertiportDesignNL";
import {MetaVertiportDesignZH_CN} from "./vertiport-design/MetaVertiportDesignZH_CN";

export const MetaVertiportDesign: Record<string, Metadata> = {
    da: MetaVertiportDesignDA,
    de: MetaVertiportDesignDE,
    en: MetaVertiportDesignEN,
    fi: MetaVertiportDesignFI,
    fr: MetaVertiportDesignFR,
    ja: MetaVertiportDesignJA,
    ko: MetaVertiportDesignKO,
    nl: MetaVertiportDesignNL,
    th: MetaVertiportDesignTH,
    zh: MetaVertiportDesignZH_CN
}