import {ISmartCityItem} from "@/data/smart-city/model/ISmartCity";
import {ISmartRoute, ISmartSection} from "@/data/smart-mobility/model/ISmartMobility";

export interface SmartCityChiangMaiBottomContent {
    safeStatement?: ISmartSection['safeStatement'];
    bottomCards: Array<ISmartSection | ISmartRoute>;
}

export interface SmartCityChiangMaiContentPayload {
    locale: string;
    slug: string;
    item: ISmartCityItem;
    relatedItems: ISmartCityItem[];
    bottomContent: SmartCityChiangMaiBottomContent;
}
