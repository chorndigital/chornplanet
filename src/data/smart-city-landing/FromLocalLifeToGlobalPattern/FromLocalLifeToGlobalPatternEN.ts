// src/data/smart-city-landing/FromLocalLifeToGlobalPatternEN.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const FromLocalLifeToGlobalPatternEN: ISmartCityLanding = {
    heroObservation: {
        headline: "From Local Life to Global Pattern",
        paragraphs: [
            "Urban life often feels local, shaped by familiar streets, habits, and routines.",
            "When similar scenes appear across different cities, cultures, and scales, they provide comparative evidence of how cities tend to function.",
            "This is not forecasting. It is comparison — placing everyday moments side by side until underlying systems become visible."
        ],
        image: {
            url: "/smart-city/local-to-global/global-urban-pattern.png",
            alt: "Everyday street scenes suggesting shared mobility patterns across cities",
        },
        cta: {
            label: "Explore Global Patterns",
            href: "/smart-city/global-patterns-predictable-shared-street",
        },
    },

    systemExplanation: {
        headline: "How a City Becomes Comparable",
        paragraphs: [
            "Cities become comparable when similar types of moments are observed: crossings, queues, pauses, deliveries, and coexistence.",
            "When local behavior repeats across locations, it shifts from individual preference to a recognizable signal, pointing toward shared structural conditions beneath daily life."
        ],
        image: {
            url: "/smart-city/editorial/local-as-global-prototype.png",
            alt: "A local street scene used as a reference to understand broader city systems",
        },
    },

    whyItMatters: {
        headline: "Why Local-to-Global Matters",
        paragraphs: [
            "Repeated patterns often travel faster than formal policies. When a local routine appears across many cities, it indicates common responses to similar urban conditions."
        ],
        points: [
            {
                title: "Everyday Streets Reflect System Conditions",
                description:
                    "A reliable way to understand city quality is to observe what happens on an ordinary street during an ordinary moment.",
            },
            {
                title: "Patterns Can Emerge Without Coordination",
                description:
                    "Shared street behaviors may appear across cities independently, shaped by comparable constraints and needs.",
            },
            {
                title: "Understanding Supports Dialogue",
                description:
                    "Observing patterns helps cities develop shared understanding without promoting specific solutions or ideologies.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Global Patterns Emerging from Everyday Cities",
            paragraphs: [
                "When similar signals appear across different cultural contexts, they suggest convergence toward shared operational behaviors."
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "A calm shared street representing a pattern of predictable movement observed in multiple cities",
            },
            landingUrl: "/smart-city/global-patterns-predictable-shared-street",
        },
        {
            headline: "Local as Global Prototype",
            paragraphs: [
                "Mid-sized cities often make recurring patterns easier to observe, as street behavior remains visible and readable."
            ],
            image: {
                url: "/smart-city/editorial/local-as-global-prototype.png",
                alt: "Local street life reflecting patterns observed in many cities worldwide",
            },
            landingUrl: "/smart-city/editorial-local-as-global-prototype",
        },
    ],
};