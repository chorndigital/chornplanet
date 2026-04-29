import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export interface SmartCityLandingContentPayload {
    locale: string;
    slug: string;
    content: ISmartCityLanding;
}
