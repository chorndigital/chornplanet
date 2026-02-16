// src/data/smart-city-landing/CitySystemsDensityAndComfort/CitySystemsDensityAndComfortEN.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsDensityAndComfortEN: ISmartCityLanding = {
    heroObservation: {
        headline: "Density and Comfort",
        paragraphs: [
            "Density itself is not inherently problematic. Discomfort emerges when systems are poorly designed.",
            "Cities become more livable when density is moderated by space, greenery, and predictable movement patterns.",
            "A smart city does not seek to eliminate crowding; it establishes conditions in which shared space remains comfortable and navigable."
        ],
        image: {
            url: "/smart-city/city-systems/density-and-comfort.png",
            alt: "Comfortable Thai urban density with greenery, shaded sidewalks, and calm street rhythm",
        },
        cta: {
            label: "Explore Efficiency and Rhythm",
            href: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    },

    systemExplanation: {
        headline: "How Comfort Is Designed Into Density",
        paragraphs: [
            "Comfort is not a decorative layer; it is the result of coordinated systems.",
            "Elements such as shade, walkable edges, lighting, greenery, and public-space rhythm influence whether density feels stressful or supportive. When these systems operate coherently, dense environments can remain calm and functional."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Urban design systems supporting comfort through greenery and walkable space",
        },
    },

    whyItMatters: {
        headline: "Why Density and Comfort Matters",
        paragraphs: [
            "Cities that maintain comfort at higher density levels tend to support sustainability, safety, and social interaction more effectively."
        ],
        points: [
            {
                title: "Comfort Reduces Tension",
                description:
                    "When dense environments feel orderly and calm, people are more likely to share space cooperatively.",
            },
            {
                title: "Livability Reduces Expansion Pressure",
                description:
                    "Cities that accommodate density comfortably can limit the need for outward expansion.",
            },
            {
                title: "Greenery Functions as Infrastructure",
                description:
                    "Shade, trees, and softened edges are functional components that influence temperature regulation, movement patterns, and overall experience.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Public Space Orchestration",
            paragraphs: [
                "Comfort is influenced by how sidewalks, lighting, and street activity are coordinated over time."
            ],
            image: {
                url: "/smart-city/system-explainers/public-space-orchestration.png",
                alt: "Public space orchestration supporting comfort and social rhythm",
            },
            landingUrl: "/smart-city/system-explainers-public-space-orchestration",
        },
        {
            headline: "Mixed Mobility Is Becoming the Global Default",
            paragraphs: [
                "Dense streets require coexistence. Mixed mobility reflects an emerging global condition rather than an optional design choice."
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Mixed mobility supporting density through coexistence",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    ],
};