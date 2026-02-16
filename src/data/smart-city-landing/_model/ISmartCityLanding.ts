// src/data/smart-city-landing/_model/ISmartCityLanding.ts

import {ISmartCitySection} from "@/data/smart-city-landing/_model/ISmartCitySection";
import {ISmartCityItem} from "@/data/smart-city/model/ISmartCity";

export interface ISmartCityLanding {
    heroObservation: ISmartCitySection
    systemExplanation?: ISmartCitySection
    whyItMatters?: ISmartCitySection
    relatedSignals?: ISmartCitySection[]
    smartCityItem?: ISmartCityItem
}