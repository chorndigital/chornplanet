// src/data/smart-city-landing/EditorialHumanFirstObservation/EditorialHumanFirstObservation.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";
import {EditorialHumanFirstObservationDA} from "./EditorialHumanFirstObservationDA";
import {EditorialHumanFirstObservationDE} from "./EditorialHumanFirstObservationDE";
import {EditorialHumanFirstObservationEN} from "./EditorialHumanFirstObservationEN";
import {EditorialHumanFirstObservationFI} from "./EditorialHumanFirstObservationFI";
import {EditorialHumanFirstObservationFR} from "./EditorialHumanFirstObservationFR";
import {EditorialHumanFirstObservationJA} from "./EditorialHumanFirstObservationJA";
import {EditorialHumanFirstObservationKO} from "./EditorialHumanFirstObservationKO";
import {EditorialHumanFirstObservationNL} from "./EditorialHumanFirstObservationNL";
import {EditorialHumanFirstObservationTH} from "./EditorialHumanFirstObservationTH";
import {EditorialHumanFirstObservationZH_CN} from "./EditorialHumanFirstObservationZH_CN";

export const EditorialHumanFirstObservation: Record<string, ISmartCityLanding> = {
    da: EditorialHumanFirstObservationDA,
    de: EditorialHumanFirstObservationDE,
    en: EditorialHumanFirstObservationEN,
    fi: EditorialHumanFirstObservationFI,
    fr: EditorialHumanFirstObservationFR,
    ja: EditorialHumanFirstObservationJA,
    ko: EditorialHumanFirstObservationKO,
    nl: EditorialHumanFirstObservationNL,
    th: EditorialHumanFirstObservationTH,
    zh: EditorialHumanFirstObservationZH_CN,
};