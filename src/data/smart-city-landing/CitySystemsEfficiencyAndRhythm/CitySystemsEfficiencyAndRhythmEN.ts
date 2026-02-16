// src/data/smart-city-landing/CitySystemsEfficiencyAndRhythmEN.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsEfficiencyAndRhythmEN: ISmartCityLanding = {
    heroObservation: {
        headline: "Efficiency and Human Rhythm",
        paragraphs: [
            "Efficiency becomes problematic when systems require people to move faster than everyday life reasonably allows.",
            "Cities function best when systems align with human rhythm: predictable timing, coordinated movement, and unobtrusive logistics.",
            "The objective is not maximum speed, but a city that feels stable, reliable, and breathable."
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
            "Efficiency is not defined by speed alone; it is defined by reduced friction.",
            "When transport, crossings, logistics, and public services are coordinated in time, the city becomes predictable. People rely on the system rather than rushing within it, allowing the city to remain calm while continuously active."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Mobility coordination aligning movement smoothly without forcing speed",
        },
    },

    whyItMatters: {
        headline: "Why Efficiency and Rhythm Matters",
        paragraphs: [
            "Cities that respect human rhythm tend to reduce stress and support sustained productivity without compromising comfort."
        ],
        points: [
            {
                title: "Predictability Reduces Anxiety",
                description:
                    "People remain calmer when movement timing can be anticipated rather than constantly reacted to.",
            },
            {
                title: "Speed Is Not Equivalent to Performance",
                description:
                    "A city may operate quickly and still feel demanding. Effective performance is often experienced as stable and unobtrusive.",
            },
            {
                title: "Logistics Should Remain Background Infrastructure",
                description:
                    "Well-designed systems support daily life continuously without drawing attention or overwhelming public space.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Mobility Coordination",
            paragraphs: [
                "When signals, vehicles, pedestrians, and transit align in time, movement feels effortless rather than tightly controlled."
            ],
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "Mobility coordination systems supporting a smooth urban rhythm",
            },
            landingUrl: "/smart-city/system-explainers-mobility-coordination",
        },
        {
            headline: "Logistics Is Quietly Reshaping Urban Rhythm",
            paragraphs: [
                "Efficient logistics influences the city less through visible speed and more through timing and low visibility."
            ],
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "Urban logistics operating quietly within a modern city street",
            },
            landingUrl: "/smart-city/global-patterns-urban-logistics",
        },
    ],
};