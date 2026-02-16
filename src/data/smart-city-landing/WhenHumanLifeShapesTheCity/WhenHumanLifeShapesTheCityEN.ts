// src/data/smart-city-landing/WhenHumanLifeShapesTheCity/WhenHumanLifeShapesTheCityEN.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const WhenHumanLifeShapesTheCityEN: ISmartCityLanding = {
    heroObservation: {
        headline: "When Human Life Shapes the City",
        paragraphs: [
            "Cities are not defined by technology alone, but by how people move, pause, and interact each day.",
            "By observing local routines, we can identify urban patterns that appear across different cities and contexts."
        ],
        image: {
            url: "/smart-city/hero/when-human-life-shapes-the-city.png",
            alt: "Everyday human life shaping a calm smart city street"
        },
        cta: {
            label: "Explore the Patterns",
            href: `/smart-city/from-local-life-to-global-pattern`
        }
    },

    systemExplanation: {
        headline: "Systems Beneath Everyday Life",
        paragraphs: [
            "Urban systems coordinate movement, access, and safety through everyday design decisions.",
            "When designed well, these systems operate quietly while remaining essential."
        ]
    },

    whyItMatters: {
        headline: "Why This Matters",
        paragraphs: [
            "Cities that align with human rhythm tend to scale more sustainably and maintain long-term stability."
        ]
    },

    relatedSignals: [
        {
            headline: "Predictable Shared Streets",
            paragraphs: [
                "Streets designed for predictability reduce friction and support shared trust."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Predictable shared street"
            },
            cta: {
                label: "Read signal",
                href: `/smart-city/urban-signals-predictable-street`
            }
        }
    ],
}