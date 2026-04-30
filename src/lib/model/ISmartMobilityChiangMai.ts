import {
    ISmartImage,
    ISmartRoute,
    ISmartSection,
    IVertiport,
} from "@/lib/model/ISmartMobility";

export type SmartMobilityChiangMaiPrimaryContent = ISmartSection | ISmartRoute | IVertiport;

export enum SmartVisibilityIndex {
    Vision = 0,
    UrbanHub = 1,
    HubToChiangMaiAirport = 2,
    HubToDoiSuthep = 3,
    HubToDoiInthanon = 4,
    VertiportDesign = 5
}

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
