import {IHeroSection} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const HeroSectionDataNL: IHeroSection = {
    headline: "Wanneer Menselijk Leven de Stad Vormgeeft",
    paragraph:
        "Steden worden niet alleen bepaald door technologie, infrastructuur of beleid. Ze worden gevormd door hoe mensen zich verplaatsen, pauzeren, samenkomen en hun dagelijks leven leiden. Slimme steden beginnen niet met systemen, maar met dagelijkse routines die stil laten zien hoe de stad functioneert.",

    softTexts: [
        {
            title: "Geen toekomstvisie",
            description:
                "Dit is een observatie van het dagelijks leven, waar opkomende mobiliteit, onzichtbare systemen en menselijk gedrag al samenkomen."
        },
        {
            title: "Lokale momenten, wereldwijde relevantie",
            description:
                "Wat op één straat gebeurt, weerspiegelt vaak patronen die in steden over de hele wereld voorkomen."
        }
    ],

    image: {
        url: "/smart-city/hero-section/city-shaped-by-people-move.png",
        alt: "Dagelijks stedelijk leven waarin mensen, autonome mobiliteit en stadssystemen vanzelfsprekend samenkomen",
    },
    purpose: "Wereldbeeld neerzetten, geen functies uitleggen",
    narrativeRole: "Aangeven dat dit platform steden observeert via menselijk leven, niet via technologie",
    section: "Hero Section",
    category: "Smart City Media",
    editorialTone: "observational",
    signalFocus: ["mobility", "safety", "density", "coordination"],
    landingUrl: "/smart-city/when-human-life-shapes-the-city",
};