import {Metadata} from "next";

import {MetaCitySystemsMovementAndPauseEN} from "./MetaCitySystemsMovementAndPauseEN";
import {MetaCitySystemsMovementAndPauseTH} from "./MetaCitySystemsMovementAndPauseTH";
import {MetaCitySystemsMovementAndPauseDA} from "./MetaCitySystemsMovementAndPauseDA";
import {MetaCitySystemsMovementAndPauseFR} from "./MetaCitySystemsMovementAndPauseFR";
import {MetaCitySystemsMovementAndPauseFI} from "./MetaCitySystemsMovementAndPauseFI";
import {MetaCitySystemsMovementAndPauseDE} from "./MetaCitySystemsMovementAndPauseDE";
import {MetaCitySystemsMovementAndPauseJA} from "./MetaCitySystemsMovementAndPauseJA";
import {MetaCitySystemsMovementAndPauseKO} from "./MetaCitySystemsMovementAndPauseKO";
import {MetaCitySystemsMovementAndPauseNL} from "./MetaCitySystemsMovementAndPauseNL";
import {MetaCitySystemsMovementAndPauseZH_CN} from "./MetaCitySystemsMovementAndPauseZH_CN";

export const MetaCitySystemsMovementAndPause: Record<string, Metadata> = {
    da: MetaCitySystemsMovementAndPauseDA,
    de: MetaCitySystemsMovementAndPauseDE,
    en: MetaCitySystemsMovementAndPauseEN,
    fi: MetaCitySystemsMovementAndPauseFI,
    fr: MetaCitySystemsMovementAndPauseFR,
    ja: MetaCitySystemsMovementAndPauseJA,
    ko: MetaCitySystemsMovementAndPauseKO,
    nl: MetaCitySystemsMovementAndPauseNL,
    th: MetaCitySystemsMovementAndPauseTH,
    zh: MetaCitySystemsMovementAndPauseZH_CN
}