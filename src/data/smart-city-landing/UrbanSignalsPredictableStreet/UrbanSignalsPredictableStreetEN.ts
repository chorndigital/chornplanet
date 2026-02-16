import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsPredictableStreetEN: ISmartCityLanding = {
    heroObservation: {
        headline: "Predictable Street Behavior",
        paragraphs: [
            "Cities communicate through behavior before they communicate through policy.",
            "When pedestrians cross without hesitation, scooters slow naturally, and vehicles move with quiet confidence, the street reveals something important: people experience the system as reliable.",
            "Predictability is one of the clearest urban signals, because it is visible without measurement."
        ],
        image: {
            url: "/smart-city/urban-signals/predictable-shared-street.png",
            alt: "Thai pedestrians and cyclists moving smoothly in a predictable shared street environment",
        },
        cta: {
            label: "Explore Logistics Integration",
            href: "/smart-city/urban-signals-logistics-integration",
        },
    },

    systemExplanation: {
        headline: "What Predictability Signals",
        paragraphs: [
            "Predictable behavior does not happen by accident. It is the result of street design that reduces uncertainty: readable crossings, consistent lane rhythm, clear visual cues, and speed harmony.",
            "When these systems work together, people stop negotiating every step. The city feels safe without relying on visible control."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Mobility coordination supporting predictable street behavior",
        },
    },

    whyItMatters: {
        headline: "Why This Signal Matters",
        paragraphs: [
            "Predictability is a direct indicator of trust at street level."
        ],
        points: [
            {
                title: "Trust Is Observable",
                description:
                    "When people move confidently, it suggests that they expect the street to behave consistently.",
            },
            {
                title: "Safety Feels Normal",
                description:
                    "A predictable street reduces risk without making safety feel enforced.",
            },
            {
                title: "Comfort Enables City Life",
                description:
                    "Spontaneous public life depends on movement rules that feel readable and shared.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Predictable Streets Enable Spontaneous Life",
            paragraphs: [
                "Across cities worldwide, predictable streets consistently support calmer movement and everyday social life."
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "Global pattern of predictable shared streets",
            },
            landingUrl: "/smart-city/global-patterns-predictable-shared-street",
        },
        {
            headline: "Movement and Pause",
            paragraphs: [
                "Predictability is what allows pausing. Without it, stopping can become unsafe."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Street system balancing flow and pause",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};