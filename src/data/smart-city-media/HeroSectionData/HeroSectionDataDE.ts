import {IHeroSection} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const HeroSectionDataDE: IHeroSection = {
    headline: "Wenn Menschliches Leben Die Stadt Formt",
    paragraph:
        "Städte werden nicht allein durch Technologie, Infrastruktur oder Politik definiert. Sie werden durch die Art geprägt, wie Menschen sich bewegen, pausieren, zusammenkommen und ihren Alltag leben. Smarte Städte beginnen nicht mit Systemen, sondern mit alltäglichen Routinen, die still offenbaren, wie die Stadt funktioniert.",

    softTexts: [
        {
            title: "Keine Zukunftsvision",
            description:
                "Dies ist eine Beobachtung des Alltagslebens, in dem neue Mobilität, leise arbeitende Systeme und menschliches Verhalten bereits zusammenkommen."
        },
        {
            title: "Lokale Momente, globale Bedeutung",
            description:
                "Was auf einer Straße geschieht, spiegelt oft Muster wider, die Städte weltweit teilen."
        }
    ],

    image: {
        url: "/smart-city/hero-section/city-shaped-by-people-move.png",
        alt: "Alltägliches Stadtleben, in dem Menschen, autonome Mobilität und städtische Systeme natürlich koexistieren",
    },
    purpose: "Weltbild etablieren, nicht Funktionen erklären",
    narrativeRole: "Signalisieren, dass diese Plattform Städte durch menschliches Leben betrachtet, nicht durch Technologie",
    section: "Hero Section",
    category: "Smart City Media",
    editorialTone: "observational",
    signalFocus: ["mobility", "safety", "density", "coordination"],
    landingUrl: "/smart-city/when-human-life-shapes-the-city",
};