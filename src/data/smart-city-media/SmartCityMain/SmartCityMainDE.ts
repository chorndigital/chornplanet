// src/data/smart-city-media/SmartCityMainDE.ts

import {ISmartCityMain} from "@/data/smart-city-media/_model/ISmartCityMain";

export const SmartCityMainDE: ISmartCityMain = {
    hero: {
        title: "Smart City Media",
        paragraphs: [
            "Dies ist keine Vorhersage der Zukunft. Es ist eine Beobachtung, wie Städte derzeit durch alltägliche menschliche Aktivitäten funktionieren.",
            "Durch die Betrachtung von Routinen, Mobilitätsverhalten und Systemkoordination identifizieren wir Muster, die in Städten verschiedener Regionen beobachtet werden können.",
        ],
        cta: {
            label: "Mit dem Überblick beginnen",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
        image: {
            url: "/smart-city/hero/when-human-life-shapes-the-city.png",
            alt: "Fotorealistische thailändische Stadtstraße, die menschenorientiertes Smart-City-Leben zeigt",
        },
    },

    navigation: {
        items: [
            {
                title: "Human Daily Flow",
                description: "Morgen, Mittag und Abend zeigen Systemverhalten an.",
                href: "/smart-city/human-daily-flow-morning/",
            },
            {
                title: "Local to Global",
                description: "Wie lokale Routinen als umfassendere Muster betrachtet werden können.",
                href: "/smart-city/from-local-life-to-global-pattern",
            },
            {
                title: "Mobility Focus",
                description: "Mobilität wird beobachtet, bevor sie verstanden wird.",
                href: "/smart-city/mobility-focus-predictable-movement/",
            },
            {
                title: "City Systems",
                description: "Signale, die alltägliche urbane Bedingungen beeinflussen.",
                href: "/smart-city/city-systems-movement-and-pause/",
            },
            {
                title: "Global Patterns",
                description: "Signale, die in mehreren Städten beobachtet werden.",
                href: "/smart-city/global-patterns-predictable-shared-street/",
            },
            {
                title: "Urban Signals",
                description: "Verhalten auf Straßenebene, das Systembedingungen anzeigt.",
                href: "/smart-city/urban-signals-predictable-street/",
            },
            {
                title: "Editorial Positioning",
                description: "Die Perspektive hinter Smart City Media.",
                href: "/smart-city/editorial-human-first-observation/",
            },
        ],
    },
};