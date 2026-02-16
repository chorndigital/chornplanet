// src/data/smart-city-landing/MobilityPredictableMovement/MobilityPredictableMovement.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";
import {MobilityPredictableMovementDA} from "./MobilityPredictableMovementDA";
import {MobilityPredictableMovementDE} from "./MobilityPredictableMovementDE";
import {MobilityPredictableMovementEN} from "./MobilityPredictableMovementEN";
import {MobilityPredictableMovementFI} from "./MobilityPredictableMovementFI";
import {MobilityPredictableMovementFR} from "./MobilityPredictableMovementFR";
import {MobilityPredictableMovementJA} from "./MobilityPredictableMovementJA";
import {MobilityPredictableMovementKO} from "./MobilityPredictableMovementKO";
import {MobilityPredictableMovementNL} from "./MobilityPredictableMovementNL";
import {MobilityPredictableMovementTH} from "./MobilityPredictableMovementTH";
import {MobilityPredictableMovementZH_CN} from "./MobilityPredictableMovementZH_CN";

export const MobilityPredictableMovement: Record<string, ISmartCityLanding> = {
    da: MobilityPredictableMovementDA,
    de: MobilityPredictableMovementDE,
    en: MobilityPredictableMovementEN,
    fi: MobilityPredictableMovementFI,
    fr: MobilityPredictableMovementFR,
    ja: MobilityPredictableMovementJA,
    ko: MobilityPredictableMovementKO,
    nl: MobilityPredictableMovementNL,
    th: MobilityPredictableMovementTH,
    zh: MobilityPredictableMovementZH_CN,
};