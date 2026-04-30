import {ISmartCityLanding} from "@/lib/model/ISmartCityLanding";

export interface SmartCityLandingContentPayload {
    locale: string;
    slug: string;
    content: ISmartCityLanding;
}
