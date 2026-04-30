import {ILanguageOption} from "@/lib/model/ILanguage";

export interface IStateApp {
    languageOption: ILanguageOption;
    language: string
    mobileMenuVisible: boolean
    languageMenuVisible: boolean,
    navbarGroup: string,
    navbarLink: string,
    isCookieConsent: boolean | undefined
}