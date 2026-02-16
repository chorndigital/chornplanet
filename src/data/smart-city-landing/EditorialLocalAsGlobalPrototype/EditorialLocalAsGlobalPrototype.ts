// src/data/smart-city-landing/EditorialLocalAsGlobalPrototype/EditorialLocalAsGlobalPrototype.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";
import {EditorialLocalAsGlobalPrototypeDA} from "./EditorialLocalAsGlobalPrototypeDA";
import {EditorialLocalAsGlobalPrototypeDE} from "./EditorialLocalAsGlobalPrototypeDE";
import {EditorialLocalAsGlobalPrototypeEN} from "./EditorialLocalAsGlobalPrototypeEN";
import {EditorialLocalAsGlobalPrototypeFI} from "./EditorialLocalAsGlobalPrototypeFI";
import {EditorialLocalAsGlobalPrototypeFR} from "./EditorialLocalAsGlobalPrototypeFR";
import {EditorialLocalAsGlobalPrototypeJA} from "./EditorialLocalAsGlobalPrototypeJA";
import {EditorialLocalAsGlobalPrototypeKO} from "./EditorialLocalAsGlobalPrototypeKO";
import {EditorialLocalAsGlobalPrototypeNL} from "./EditorialLocalAsGlobalPrototypeNL";
import {EditorialLocalAsGlobalPrototypeTH} from "./EditorialLocalAsGlobalPrototypeTH";
import {EditorialLocalAsGlobalPrototypeZH_CN} from "./EditorialLocalAsGlobalPrototypeZH_CN";

export const EditorialLocalAsGlobalPrototype: Record<string, ISmartCityLanding> = {
    da: EditorialLocalAsGlobalPrototypeDA,
    de: EditorialLocalAsGlobalPrototypeDE,
    en: EditorialLocalAsGlobalPrototypeEN,
    fi: EditorialLocalAsGlobalPrototypeFI,
    fr: EditorialLocalAsGlobalPrototypeFR,
    ja: EditorialLocalAsGlobalPrototypeJA,
    ko: EditorialLocalAsGlobalPrototypeKO,
    nl: EditorialLocalAsGlobalPrototypeNL,
    th: EditorialLocalAsGlobalPrototypeTH,
    zh: EditorialLocalAsGlobalPrototypeZH_CN,
};