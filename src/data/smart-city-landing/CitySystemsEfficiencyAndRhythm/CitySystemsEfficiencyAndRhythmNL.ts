// src/data/smart-city-landing/CitySystemsEfficiencyAndRhythmEN.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsEfficiencyAndRhythmNL: ISmartCityLanding = {
    heroObservation: {
        headline: "Efficiency and Human Rhythm",
        paragraphs: [
            "Efficiency becomes harmful when it forces people to move faster than their lives allow.",
            "A city works best when systems adapt to human rhythm: predictable timing, smooth coordination, and quiet logistics.",
            "The goal is not maximum speed. The goal is a city that feels stable, reliable, and breathable."
        ],
        image: {
            url: "/smart-city/city-systems/efficiency-and-rhythm.png",
            alt: "Thai city infrastructure supporting smooth mobility and predictable daily rhythm",
        },
        cta: {
            label: "Return to City Systems",
            href: "/smart-city/city-systems-movement-and-pause",
        },
    },

    systemExplanation: {
        headline: "What Efficiency Really Means",
        paragraphs: [
            "Efficiency is not speed. Efficiency is reduced friction.",
            "When transport, crossings, logistics, and services align in time, the city feels predictable. People don’t rush because they trust the system. The city becomes calmer even as it moves continuously."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Mobility coordination aligning movement smoothly without rushing people",
        },
    },

    whyItMatters: {
        headline: "Why Efficiency and Rhythm Matters",
        paragraphs: [
            "Cities that protect human rhythm reduce stress and improve long-term productivity without sacrificing comfort."
        ],
        points: [
            {
                title: "Predictability Reduces Anxiety",
                description:
                    "People feel calm when they can anticipate movement timing instead of reacting to chaos.",
            },
            {
                title: "Speed Is Not the Same as Performance",
                description:
                    "A city can move quickly and still feel stressful. True performance feels stable and quiet.",
            },
            {
                title: "Logistics Should Disappear Into the Background",
                description:
                    "The best systems support life continuously without demanding attention or dominating space.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Mobility Coordination",
            paragraphs: [
                "When signals, vehicles, pedestrians, and transit align in time, the city feels effortless instead of controlled."
            ],
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "Mobility coordination systems supporting smooth city rhythm",
            },
            landingUrl: "/smart-city/system-explainers-mobility-coordination",
        },
        {
            headline: "Logistics Is Quietly Reshaping Urban Rhythm",
            paragraphs: [
                "Efficient logistics changes the city not through speed, but through invisibility and timing."
            ],
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "Urban logistics operating quietly through a modern city street",
            },
            landingUrl: "/smart-city/global-patterns-urban-logistics",
        },
    ],
};