// src/data/smart-city-landing/GlobalPatternsMixedMobilityCoexistenceEN.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const GlobalPatternsMixedMobilityCoexistenceEN: ISmartCityLanding = {
    heroObservation: {
        headline: "Mixed Mobility Is Becoming the Global Default",
        paragraphs: [
            "Walking, cycling, scooters, small electric vehicles, and delivery robots are increasingly present in everyday urban movement.",
            "Across many cities, streets are evolving toward mixed mobility environments where coexistence — rather than strict separation — shapes daily activity.",
            "This reflects an observable shift in how urban space is used and shared."
        ],
        image: {
            url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
            alt: "Multiple mobility modes coexisting calmly on an urban street",
        },
        cta: {
            label: "Explore Logistics Pattern",
            href: "/smart-city/global-patterns-urban-logistics",
        },
    },

    systemExplanation: {
        headline: "Why Coexistence Appears Across Cities",
        paragraphs: [
            "Urban streets often lack sufficient space to fully separate every mode of movement. As density increases, shared use becomes more common.",
            "The difference between conflict and comfort lies in system design: speed alignment, clear priority cues, readable crossings, and street environments that reduce friction without relying on constant control."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Public space orchestration enabling mixed mobility coexistence",
        },
    },

    whyItMatters: {
        headline: "Why This Global Pattern Matters",
        paragraphs: [
            "Mixed mobility reflects how cities adapt to limited space and diverse movement needs. Well-designed coexistence supports safety, calmness, and functional efficiency."
        ],
        points: [
            {
                title: "Coexistence Supports Capacity",
                description:
                    "When streets accommodate multiple modes, movement can distribute more evenly rather than concentrating into a single system.",
            },
            {
                title: "Balanced Use Improves Comfort",
                description:
                    "When no single mode dominates the street, people tend to feel safer and public space becomes more usable.",
            },
            {
                title: "Shared Streets Reflect Shared Use",
                description:
                    "Mixed mobility is not only a transport condition, but also an expression of how space is collectively used.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Coexistence of Mixed Mobility",
            paragraphs: [
                "The street is increasingly observed as a shared environment where walking, scooters, bicycles, robots, and electric vehicles operate together."
            ],
            image: {
                url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                alt: "Mixed mobility coexistence in a modern Thai street scene",
            },
            landingUrl: "/smart-city/mobility-focus-mixed-mobility",
        },
        {
            headline: "Density and Comfort",
            paragraphs: [
                "Coexistence plays a role in maintaining comfort within dense environments. Without shared-use design, density can lead to friction."
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Comfortable density supported by design and shared mobility",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};