export interface ISmartCityMain {
    hero: {
        title: string;
        paragraphs: string[];
        cta: {
            label: string;
            href: string;
        };
        image: {
            url: string;
            alt: string;
        };
    };
    navigation: {
        headline?: string;
        items: ISmartCityMainNavItem[];
    };
}

export interface ISmartCityMainNavItem {
    title: string;
    description: string;
    href: string;
}
