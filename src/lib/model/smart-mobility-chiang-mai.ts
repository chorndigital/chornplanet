import {
    ISmartImage,
    ISmartRoute,
    ISmartSection,
    IVertiport,
} from "@/data/smart-mobility/model/ISmartMobility";

export type SmartMobilityChiangMaiPrimaryContent = ISmartSection | ISmartRoute | IVertiport;

export interface SmartMobilityChiangMaiContentPayload {
    locale: string;
    slug: string;
    pageType: 'vision' | 'urbanHub' | 'route' | 'vertiport';
    primaryContent: SmartMobilityChiangMaiPrimaryContent;
    connectivityMatrix?: {
        title: string;
        description: string;
    };
    safeStatement?: ISmartSection['safeStatement'];
    rightItems: ISmartImage[];
    bottomCards: Array<ISmartSection | ISmartRoute>;
}
