
// ILanguageOption.ts
export interface ILanguageOption {
    language: string;
    label: string;
    locale: string
}

// ILanguageOptions.ts

export interface ILanguageOptions {
    en: ILanguageOption,
    th: ILanguageOption,
    fr: ILanguageOption,
    ja: ILanguageOption,
    zh: ILanguageOption,
    de: ILanguageOption,
    nl: ILanguageOption,
    da: ILanguageOption,
    fi: ILanguageOption,
    ko: ILanguageOption,
}