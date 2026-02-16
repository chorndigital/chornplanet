import {Metadata} from "next";

import {MetaMobilityPredictableMovementEN} from "./MetaMobilityPredictableMovementEN";
import {MetaMobilityPredictableMovementTH} from "./MetaMobilityPredictableMovementTH";
import {MetaMobilityPredictableMovementDA} from "./MetaMobilityPredictableMovementDA";
import {MetaMobilityPredictableMovementFR} from "./MetaMobilityPredictableMovementFR";
import {MetaMobilityPredictableMovementFI} from "./MetaMobilityPredictableMovementFI";
import {MetaMobilityPredictableMovementDE} from "./MetaMobilityPredictableMovementDE";
import {MetaMobilityPredictableMovementJA} from "./MetaMobilityPredictableMovementJA";
import {MetaMobilityPredictableMovementKO} from "./MetaMobilityPredictableMovementKO";
import {MetaMobilityPredictableMovementNL} from "./MetaMobilityPredictableMovementNL";
import {MetaMobilityPredictableMovementZH_CN} from "./MetaMobilityPredictableMovementZH_CN";

export const MetaMobilityPredictableMovement: Record<string, Metadata> = {
    da: MetaMobilityPredictableMovementDA,
    de: MetaMobilityPredictableMovementDE,
    en: MetaMobilityPredictableMovementEN,
    fi: MetaMobilityPredictableMovementFI,
    fr: MetaMobilityPredictableMovementFR,
    ja: MetaMobilityPredictableMovementJA,
    ko: MetaMobilityPredictableMovementKO,
    nl: MetaMobilityPredictableMovementNL,
    th: MetaMobilityPredictableMovementTH,
    zh: MetaMobilityPredictableMovementZH_CN
}