// src/data/smart-city-media/SmartCityMainEN.ts

import {ISmartCityMain} from "@/data/smart-city-media/_model/ISmartCityMain";

export const SmartCityMainEN: ISmartCityMain = {
    hero: {
        title: "Smart City Media",
        paragraphs: [
            "This is not a prediction of the future. It is an observation of how cities currently function through everyday human activity.",
            "By examining routines, mobility behavior, and system coordination, we identify patterns that can be observed across cities in multiple regions.",
        ],
        cta: {
            label: "Start with the Overview",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
        image: {
            url: "/smart-city/hero/when-human-life-shapes-the-city.png",
            alt: "Photorealistic Thai city street showing human-first smart city life",
        },
    },

    navigation: {
        items: [
            {
                title: "Human Daily Flow",
                description: "Morning, midday, and evening indicate system behavior.",
                href: "/smart-city/human-daily-flow/morning",
            },
            {
                title: "Local to Global",
                description: "How local routines can be examined as broader patterns.",
                href: "/smart-city/from-local-life-to-global-pattern",
            },
            {
                title: "Mobility Focus",
                description: "Mobility is observed before it is understood.",
                href: "/smart-city/mobility-focus/predictable-movement",
            },
            {
                title: "City Systems",
                description: "Signals influencing everyday urban conditions.",
                href: "/smart-city/city-systems/movement-and-pause",
            },
            {
                title: "Global Patterns",
                description: "Signals observed across multiple cities.",
                href: "/smart-city/global-patterns/predictable-shared-street",
            },
            {
                title: "Urban Signals",
                description: "Street-level behaviors that indicate system conditions.",
                href: "/smart-city/urban-signals/predictable-street",
            },
            {
                title: "Editorial Positioning",
                description: "The perspective behind Smart City Media.",
                href: "/smart-city/editorial/human-first-observation",
            },
        ],
    },
};