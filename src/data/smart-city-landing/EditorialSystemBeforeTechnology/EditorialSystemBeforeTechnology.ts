// src/data/smart-city-landing/EditorialSystemBeforeTechnology/EditorialSystemBeforeTechnology.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";
import {EditorialSystemBeforeTechnologyDA} from "./EditorialSystemBeforeTechnologyDA";
import {EditorialSystemBeforeTechnologyDE} from "./EditorialSystemBeforeTechnologyDE";
import {EditorialSystemBeforeTechnologyEN} from "./EditorialSystemBeforeTechnologyEN";
import {EditorialSystemBeforeTechnologyFI} from "./EditorialSystemBeforeTechnologyFI";
import {EditorialSystemBeforeTechnologyFR} from "./EditorialSystemBeforeTechnologyFR";
import {EditorialSystemBeforeTechnologyJA} from "./EditorialSystemBeforeTechnologyJA";
import {EditorialSystemBeforeTechnologyKO} from "./EditorialSystemBeforeTechnologyKO";
import {EditorialSystemBeforeTechnologyNL} from "./EditorialSystemBeforeTechnologyNL";
import {EditorialSystemBeforeTechnologyTH} from "./EditorialSystemBeforeTechnologyTH";
import {EditorialSystemBeforeTechnologyZH_CN} from "./EditorialSystemBeforeTechnologyZH_CN";

export const EditorialSystemBeforeTechnology: Record<string, ISmartCityLanding> = {
    da: EditorialSystemBeforeTechnologyDA,
    de: EditorialSystemBeforeTechnologyDE,
    en: EditorialSystemBeforeTechnologyEN,
    fi: EditorialSystemBeforeTechnologyFI,
    fr: EditorialSystemBeforeTechnologyFR,
    ja: EditorialSystemBeforeTechnologyJA,
    ko: EditorialSystemBeforeTechnologyKO,
    nl: EditorialSystemBeforeTechnologyNL,
    th: EditorialSystemBeforeTechnologyTH,
    zh: EditorialSystemBeforeTechnologyZH_CN,
};