import {Metadata} from "next";

import {MetaUrbanSignalsPredictableStreetEN} from "./MetaUrbanSignalsPredictableStreetEN";
import {MetaUrbanSignalsPredictableStreetTH} from "./MetaUrbanSignalsPredictableStreetTH";
import {MetaUrbanSignalsPredictableStreetDA} from "./MetaUrbanSignalsPredictableStreetDA";
import {MetaUrbanSignalsPredictableStreetFR} from "./MetaUrbanSignalsPredictableStreetFR";
import {MetaUrbanSignalsPredictableStreetFI} from "./MetaUrbanSignalsPredictableStreetFI";
import {MetaUrbanSignalsPredictableStreetDE} from "./MetaUrbanSignalsPredictableStreetDE";
import {MetaUrbanSignalsPredictableStreetJA} from "./MetaUrbanSignalsPredictableStreetJA";
import {MetaUrbanSignalsPredictableStreetKO} from "./MetaUrbanSignalsPredictableStreetKO";
import {MetaUrbanSignalsPredictableStreetNL} from "./MetaUrbanSignalsPredictableStreetNL";
import {MetaUrbanSignalsPredictableStreetZH_CN} from "./MetaUrbanSignalsPredictableStreetZH_CN";

export const MetaUrbanSignalsPredictableStreet: Record<string, Metadata> = {
    da: MetaUrbanSignalsPredictableStreetDA,
    de: MetaUrbanSignalsPredictableStreetDE,
    en: MetaUrbanSignalsPredictableStreetEN,
    fi: MetaUrbanSignalsPredictableStreetFI,
    fr: MetaUrbanSignalsPredictableStreetFR,
    ja: MetaUrbanSignalsPredictableStreetJA,
    ko: MetaUrbanSignalsPredictableStreetKO,
    nl: MetaUrbanSignalsPredictableStreetNL,
    th: MetaUrbanSignalsPredictableStreetTH,
    zh: MetaUrbanSignalsPredictableStreetZH_CN
}