// src/data/smart-city-landing/GlobalPatternsUrbanLogisticsEN.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const GlobalPatternsUrbanLogisticsEN: ISmartCityLanding = {
    heroObservation: {
        headline: "Logistics Is Quietly Reshaping Urban Rhythm",
        paragraphs: [
            "Goods move continuously through cities — often without drawing attention.",
            "Across many regions, logistics is shifting from large, highly visible infrastructure toward smaller and quieter systems, such as micro electric vehicles, delivery robots, drones, and timed distribution.",
            "In cities where logistics integrates smoothly, daily life tends to feel more comfortable even as movement increases."
        ],
        image: {
            url: "/smart-city/global-patterns/urban-logistics.png",
            alt: "Urban logistics operating quietly through a modern city street",
        },
        cta: {
            label: "Return to Predictable Streets",
            href: "/smart-city/global-patterns-predictable-shared-street",
        },
    },

    systemExplanation: {
        headline: "How Logistics Influences the City",
        paragraphs: [
            "Logistics influences the city primarily through rhythm rather than speed.",
            "When deliveries are timed, distributed, and coordinated, streets tend to feel less congested and everyday movement becomes smoother. Well-integrated logistics systems reduce friction without becoming the visual focus of the urban environment."
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "Small-scale logistics integrated into daily urban movement",
        },
    },

    whyItMatters: {
        headline: "Why This Global Pattern Matters",
        paragraphs: [
            "Logistics is increasingly part of the background infrastructure of everyday life. Cities that integrate it carefully can maintain calmness as activity levels grow."
        ],
        points: [
            {
                title: "Delivery Is a Constant Street Presence",
                description:
                    "Goods move throughout the day. The key question is whether delivery activity disrupts the street or blends into it.",
            },
            {
                title: "Quiet Integration Supports Comfort",
                description:
                    "Operational efficiency should not introduce unnecessary noise, clutter, or conflict into public space.",
            },
            {
                title: "Rhythm Supports Urban Stability",
                description:
                    "When logistics is coordinated in time and space, the city tends to feel more predictable and easier to navigate.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Logistics Blending Into Daily Life",
            paragraphs: [
                "When delivery robots and small-scale logistics operate without dominating attention, everyday urban scenes remain calm and readable."
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Logistics integrated into everyday Thai street life",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
        {
            headline: "Efficiency and Human Rhythm",
            paragraphs: [
                "Urban efficiency becomes meaningful when system timing aligns with human routines rather than overriding them."
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "City infrastructure aligned with human rhythm and predictable timing",
            },
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    ],
};