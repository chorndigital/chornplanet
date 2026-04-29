import {
    ICitySystems,
    IEditorialPositioning,
    IGlobalPatterns,
    IHeroSection,
    IHumanDailyFlow,
    ILocalToGlobal,
    IMobilityFocus,
    ISystemExplainers,
    IUrbanSignals,
} from "@/lib/model/smart-city-media";
import {ISmartCityMain} from "@/lib/model/smart-city-main";
import {ISmartCityItem} from "@/data/smart-city/model/ISmartCity";
import {ObjectId, WithId} from "mongodb";

export const HOMEPAGE_LOCALES = ['da', 'de', 'en', 'fi', 'fr', 'ja', 'ko', 'nl', 'th', 'zh'] as const;

export type HomePageLocale = typeof HOMEPAGE_LOCALES[number];

export interface HomePageContentPayload {
    locale: string;
    heroSection: IHeroSection;
    humanDailyFlow: IHumanDailyFlow;
    localToGlobal: ILocalToGlobal;
    systemExplainers: ISystemExplainers;
    mobilityFocus: IMobilityFocus;
    citySystems: ICitySystems;
    globalPatterns: IGlobalPatterns;
    urbanSignals: IUrbanSignals;
    editorialPositioning: IEditorialPositioning;
    smartCityMain: ISmartCityMain;
    smartCityHighlight: ISmartCityItem;
    smartCityTags: string[];
}

export type PartialHomePageContentPayload =
    { locale: string } & Partial<Omit<HomePageContentPayload, 'locale'>>;

export interface HomePageContentRecord extends PartialHomePageContentPayload {
    createdAt?: string;
    updatedAt?: string;
}

export interface HomePageContentResponse extends PartialHomePageContentPayload {
    id: string;
    createdAt?: string;
    updatedAt?: string;
}

export function normalizeHomePageLocale(locale: string): HomePageLocale {
    if (HOMEPAGE_LOCALES.includes(locale as HomePageLocale)) {
        return locale as HomePageLocale;
    }

    return 'en';
}

export function mapHomePageContentResponse(
    doc: WithId<HomePageContentRecord> | (HomePageContentRecord & {_id: ObjectId})
): HomePageContentResponse {
    return {
        id: doc._id.toHexString(),
        locale: doc.locale,
        heroSection: doc.heroSection,
        humanDailyFlow: doc.humanDailyFlow,
        localToGlobal: doc.localToGlobal,
        systemExplainers: doc.systemExplainers,
        mobilityFocus: doc.mobilityFocus,
        citySystems: doc.citySystems,
        globalPatterns: doc.globalPatterns,
        urbanSignals: doc.urbanSignals,
        editorialPositioning: doc.editorialPositioning,
        smartCityHighlight: doc.smartCityHighlight,
        smartCityTags: doc.smartCityTags,
        smartCityMain: doc.smartCityMain,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
    };
}
