// src/data/smart-city-media/SmartCityMainDA.ts

import {ISmartCityMain} from "@/data/smart-city-media/_model/ISmartCityMain";

export const SmartCityMainDA: ISmartCityMain = {
    hero: {
        title: "Smart City Media",
        paragraphs: [
            "Dette er ikke en forudsigelse af fremtiden. Det er en observation af, hvordan byer i dag fungerer gennem menneskers daglige aktiviteter.",
            "Ved at undersøge rutiner, mobilitetsadfærd og systemkoordinering identificerer vi mønstre, der kan observeres på tværs af byer i flere regioner.",
        ],
        cta: {
            label: "Start med overblikket",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
        image: {
            url: "/smart-city/hero/when-human-life-shapes-the-city.png",
            alt: "Fotorealistisk thailandsk bygade, der viser menneskecentreret smart city-liv",
        },
    },

    navigation: {
        items: [
            {
                title: "Human Daily Flow",
                description: "Morgen, middag og aften indikerer systemadfærd.",
                href: "/smart-city/human-daily-flow/morning",
            },
            {
                title: "Local to Global",
                description: "Hvordan lokale rutiner kan undersøges som bredere mønstre.",
                href: "/smart-city/from-local-life-to-global-pattern",
            },
            {
                title: "Mobility Focus",
                description: "Mobilitet observeres, før den forstås.",
                href: "/smart-city/mobility-focus/predictable-movement",
            },
            {
                title: "City Systems",
                description: "Signaler, der påvirker daglige urbane forhold.",
                href: "/smart-city/city-systems/movement-and-pause",
            },
            {
                title: "Global Patterns",
                description: "Signaler observeret på tværs af flere byer.",
                href: "/smart-city/global-patterns/predictable-shared-street",
            },
            {
                title: "Urban Signals",
                description: "Adfærd på gadeplan, der indikerer systemforhold.",
                href: "/smart-city/urban-signals/predictable-street",
            },
            {
                title: "Editorial Positioning",
                description: "Perspektivet bag Smart City Media.",
                href: "/smart-city/editorial/human-first-observation",
            },
        ],
    },
};