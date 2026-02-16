// src/data/smart-city-landing/EditorialHumanFirstObservationEN.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialHumanFirstObservationEN: ISmartCityLanding = {
    heroObservation: {
        headline: "Human-First Observation",
        paragraphs: [
            "Cities are most clearly understood through lived experience rather than technical explanation alone.",
            "Many reliable signals of city quality are not found in dashboards, but in how people walk, wait, pause, cross, and share space.",
            "This platform begins with human life because everyday behavior reveals how urban systems actually function."
        ],
        image: {
            url: "/smart-city/editorial/human-first-observation.png",
            alt: "Thai people moving calmly through a city street as a primary signal of urban systems",
        },
        cta: {
            label: "Explore System Before Technology",
            href: "/smart-city/editorial-system-before-technology",
        },
    },

    systemExplanation: {
        headline: "Why Observation Comes First",
        paragraphs: [
            "Many city narratives begin with technology, infrastructure, or policy. However, cities are not primarily experienced through those lenses.",
            "People experience the city through friction, comfort, rhythm, and perceived safety. Observation helps translate complex systems into visible patterns without relying on technical language."
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "Public space showing human routines and comfort as primary system signals",
        },
    },

    whyItMatters: {
        headline: "Why Human-First Observation Matters",
        paragraphs: [
            "Observing human routines first provides a shared reference point that remains meaningful across cultures, cities, and varying levels of system complexity."
        ],
        points: [
            {
                title: "Behavior Reflects Real Conditions",
                description:
                    "People adjust quickly to comfort and risk. Their everyday movement reflects actual urban conditions.",
            },
            {
                title: "Understanding Scales Without Prediction",
                description:
                    "Observation supports understanding without asserting certainty about future outcomes.",
            },
            {
                title: "Systems Become Understandable Without Jargon",
                description:
                    "A human-first perspective allows urban systems to be understood beyond technical or expert audiences.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Urban Signals You Notice Without Effort",
            paragraphs: [
                "Small, everyday behaviors can reveal city quality without requiring formal measurement or explanation."
            ],
            image: {
                url: "/smart-city/urban-signals/predictable-shared-street.png",
                alt: "Predictable street behavior observed through everyday movement",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "Cities Are Experienced Through Daily Cycles",
            paragraphs: [
                "Complex systems often become clearer when viewed through daily rhythms such as morning, midday, and evening."
            ],
            image: {
                url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
                alt: "Morning flow illustrating daily rhythm as a signal of system quality",
            },
            landingUrl: "/smart-city/human-daily-flow-morning",
        },
    ],
};