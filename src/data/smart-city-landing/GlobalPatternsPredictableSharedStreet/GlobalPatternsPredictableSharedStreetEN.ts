// src/data/smart-city-landing/GlobalPatternsPredictableSharedStreetEN.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const GlobalPatternsPredictableSharedStreetEN: ISmartCityLanding = {
    heroObservation: {
        headline: "Predictable Streets Enable Spontaneous Life",
        paragraphs: [
            "Across cities with different cultures, predictable streets often produce a similar outcome: people feel more at ease in public space.",
            "When movement rules are readable, pedestrians cross naturally, vehicles slow with less friction, and street life becomes more spontaneous.",
            "This is a global pattern — shaped not by technology alone, but by trust in shared space."
        ],
        image: {
            url: "/smart-city/global-patterns/predictable-shared-street.png",
            alt: "Predictable shared street where pedestrians, cyclists, and vehicles move calmly",
        },
        cta: {
            label: "Explore Mixed Mobility Pattern",
            href: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    },

    systemExplanation: {
        headline: "Why Predictability Repeats Across Cities",
        paragraphs: [
            "Predictability reduces uncertainty. That reduction is widely relevant across different contexts and income levels.",
            "When streets communicate a clear rhythm through design, people spend less effort negotiating every step. The street becomes safe enough to support everyday spontaneity: pausing, meeting, crossing, and lingering."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Mobility coordination systems supporting predictable movement",
        },
    },

    whyItMatters: {
        headline: "Why This Global Pattern Matters",
        paragraphs: [
            "Predictability is one of the few mobility principles that can scale across many types of cities, because it is experienced directly through everyday movement."
        ],
        points: [
            {
                title: "Trust Is a Form of Infrastructure",
                description:
                    "A predictable street supports trust without relying on constant enforcement or policing.",
            },
            {
                title: "Safety Supports Public Life",
                description:
                    "When crossing feels safe, people tend to stay outside longer and use the city more freely.",
            },
            {
                title: "Design Reduces the Need for Control",
                description:
                    "The most effective streets shape behavior through readability rather than punishment.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Predictable Street Behavior",
            paragraphs: [
                "Predictability is not a feature — it is an everyday signal of a street that people can navigate with confidence."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Predictable street behavior in a Thai urban environment",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "Movement and Pause",
            paragraphs: [
                "Predictability is what allows pausing. Without it, stillness can feel unsafe."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Street balancing movement and pause as a system outcome",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};