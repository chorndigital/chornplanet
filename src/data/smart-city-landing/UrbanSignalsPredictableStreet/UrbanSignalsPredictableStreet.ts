// src/data/smart-city-landing/UrbanSignalsPredictableStreet/UrbanSignalsPredictableStreet.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";
import {UrbanSignalsPredictableStreetDA} from "./UrbanSignalsPredictableStreetDA";
import {UrbanSignalsPredictableStreetDE} from "./UrbanSignalsPredictableStreetDE";
import {UrbanSignalsPredictableStreetEN} from "./UrbanSignalsPredictableStreetEN";
import {UrbanSignalsPredictableStreetFI} from "./UrbanSignalsPredictableStreetFI";
import {UrbanSignalsPredictableStreetFR} from "./UrbanSignalsPredictableStreetFR";
import {UrbanSignalsPredictableStreetJA} from "./UrbanSignalsPredictableStreetJA";
import {UrbanSignalsPredictableStreetKO} from "./UrbanSignalsPredictableStreetKO";
import {UrbanSignalsPredictableStreetNL} from "./UrbanSignalsPredictableStreetNL";
import {UrbanSignalsPredictableStreetTH} from "./UrbanSignalsPredictableStreetTH";
import {UrbanSignalsPredictableStreetZH_CN} from "./UrbanSignalsPredictableStreetZH_CN";

export const UrbanSignalsPredictableStreet: Record<string, ISmartCityLanding> = {
    da: UrbanSignalsPredictableStreetDA,
    de: UrbanSignalsPredictableStreetDE,
    en: UrbanSignalsPredictableStreetEN,
    fi: UrbanSignalsPredictableStreetFI,
    fr: UrbanSignalsPredictableStreetFR,
    ja: UrbanSignalsPredictableStreetJA,
    ko: UrbanSignalsPredictableStreetKO,
    nl: UrbanSignalsPredictableStreetNL,
    th: UrbanSignalsPredictableStreetTH,
    zh: UrbanSignalsPredictableStreetZH_CN,
};