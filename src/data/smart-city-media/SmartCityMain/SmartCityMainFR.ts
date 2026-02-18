// src/data/smart-city-media/SmartCityMainFR.ts

import {ISmartCityMain} from "@/data/smart-city-media/_model/ISmartCityMain";

export const SmartCityMainFR: ISmartCityMain = {
    hero: {
        title: "Smart City Media",
        paragraphs: [
            "Il ne s’agit pas d’une prédiction de l’avenir. Il s’agit d’une observation de la manière dont les villes fonctionnent actuellement à travers les activités humaines quotidiennes.",
            "En examinant les routines, les comportements de mobilité et la coordination des systèmes, nous identifions des schémas observables dans des villes situées dans différentes régions.",
        ],
        cta: {
            label: "Commencer par la vue d’ensemble",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
        image: {
            url: "/smart-city/hero/when-human-life-shapes-the-city.png",
            alt: "Rue thaïlandaise photoréaliste illustrant une vie de ville intelligente centrée sur l’humain",
        },
    },

    navigation: {
        items: [
            {
                title: "Human Daily Flow",
                description: "Le matin, la mi-journée et le soir indiquent le comportement du système.",
                href: "/smart-city/human-daily-flow-morning/",
            },
            {
                title: "Local to Global",
                description: "Comment les routines locales peuvent être examinées comme des schémas plus larges.",
                href: "/smart-city/from-local-life-to-global-pattern",
            },
            {
                title: "Mobility Focus",
                description: "La mobilité est observée avant d’être comprise.",
                href: "/smart-city/mobility-focus-predictable-movement/",
            },
            {
                title: "City Systems",
                description: "Signaux influençant les conditions urbaines quotidiennes.",
                href: "/smart-city/city-systems-movement-and-pause/",
            },
            {
                title: "Global Patterns",
                description: "Signaux observés dans plusieurs villes.",
                href: "/smart-city/global-patterns-predictable-shared-street/",
            },
            {
                title: "Urban Signals",
                description: "Comportements à l’échelle de la rue indiquant l’état des systèmes.",
                href: "/smart-city/urban-signals-predictable-street/",
            },
            {
                title: "Editorial Positioning",
                description: "La perspective qui sous-tend Smart City Media.",
                href: "/smart-city/editorial-human-first-observation/",
            },
        ],
    },
};