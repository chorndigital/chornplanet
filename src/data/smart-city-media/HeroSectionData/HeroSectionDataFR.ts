import {IHeroSection} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const HeroSectionDataFR: IHeroSection = {
    headline: "Quand la Vie Humaine Façonne la Ville",
    paragraph:
        "Les villes ne sont pas définies uniquement par la technologie, l’infrastructure ou les politiques. Elles sont façonnées par la manière dont les personnes se déplacent, s’arrêtent, se rassemblent et vivent au quotidien. Les villes intelligentes commencent par les routines quotidiennes qui révèlent discrètement le fonctionnement urbain.",

    softTexts: [
        {
            title: "Pas une vision du futur",
            description:
                "Il s’agit d’une observation de la vie quotidienne, où mobilité émergente, systèmes discrets et comportements humains se rencontrent déjà."
        },
        {
            title: "Moments locaux, portée globale",
            description:
                "Ce qui se passe dans une rue reflète souvent des schémas partagés par des villes du monde entier."
        }
    ],

    image: {
        url: "/smart-city/hero-section/city-shaped-by-people-move.png",
        alt: "Vie urbaine quotidienne où habitants, mobilité autonome et systèmes urbains coexistent naturellement",
    },
    purpose: "Établir une vision, pas expliquer des fonctionnalités",
    narrativeRole: "Indiquer que la plateforme observe la ville à travers la vie humaine, et non la technologie",
    section: "Hero Section",
    category: "Smart City Media",
    editorialTone: "observational",
    signalFocus: ["mobility", "safety", "density", "coordination"],
    landingUrl: "/smart-city/when-human-life-shapes-the-city",
};