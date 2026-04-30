import {ISmartCityItem} from "@/lib/model/ISmartCity";
import {ISmartRoute, ISmartSection} from "@/lib/model/ISmartMobility";

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
