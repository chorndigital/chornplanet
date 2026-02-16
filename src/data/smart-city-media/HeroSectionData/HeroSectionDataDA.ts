import {IHeroSection} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const HeroSectionDataDA: IHeroSection = {
    headline: "Når Menneskeliv Former Byen",
    paragraph:
        "Byer defineres ikke udelukkende af teknologi, infrastruktur eller politik. De formes af, hvordan mennesker bevæger sig, holder pause, samles og lever i hverdagen. Smarte byer begynder ikke med systemer, men med daglige rutiner, der stille afslører, hvordan byen fungerer.",

    softTexts: [
        {
            title: "Ikke en vision om fremtiden",
            description:
                "Dette er en observation af hverdagslivet, hvor ny mobilitet, diskrete systemer og menneskelig adfærd allerede mødes."
        },
        {
            title: "Lokale øjeblikke, global relevans",
            description:
                "Det, der sker på én gade, afspejler ofte mønstre, som deles af byer verden over."
        }
    ],

    image: {
        url: "/smart-city/hero-section/city-shaped-by-people-move.png",
        alt: "Hverdagsliv i byen, hvor mennesker, autonom mobilitet og bysystemer sameksisterer naturligt",
    },
    purpose: "Etablere et verdenssyn, ikke forklare funktioner",
    narrativeRole: "Signalere at platformen observerer byen gennem menneskeliv, ikke teknologi",
    section: "Hero Section",
    category: "Smart City Media",
    editorialTone: "observational",
    signalFocus: ["mobility", "safety", "density", "coordination"],
    landingUrl: "/smart-city/when-human-life-shapes-the-city",
};