// src/data/smart-city-landing/CitySystemsMovementAndPauseEN.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsMovementAndPauseEN: ISmartCityLanding = {
    heroObservation: {
        headline: "Movement and Pause",
        paragraphs: [
            "A city is not defined by how fast it moves, but by whether it allows people to stop without risk or pressure.",
            "Healthy streets are not designed as highways. They are shared environments where movement can slow naturally and pausing remains safe.",
            "When a city balances flow and stillness, everyday life can become calmer, more social, and more human-centered."
        ],
        image: {
            url: "/smart-city/city-systems/movement-and-pause.png",
            alt: "Thai urban street balancing pedestrian pause with calm mobility flow",
        },
        cta: {
            label: "Explore Density and Comfort",
            href: "/smart-city/city-systems-density-and-comfort",
        },
    },

    systemExplanation: {
        headline: "What Creates Balance on the Street",
        paragraphs: [
            "Movement and pause are not opposites. They are complementary functions within the same street system.",
            "Crossings, curb design, sidewalk rhythm, and traffic behavior influence whether people feel safe to slow down, observe, and interact. When the street is readable and predictable, social life can emerge without relying heavily on enforcement."
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "Public space design enabling safe pausing and shared urban life",
        },
    },

    whyItMatters: {
        headline: "Why Movement and Pause Matters",
        paragraphs: [
            "When people can pause naturally, streets tend to become safer, more comfortable, and more socially active."
        ],
        points: [
            {
                title: "Pause Can Indicate Safety",
                description:
                    "If people feel comfortable stopping, the street is likely functioning as a preventive environment.",
            },
            {
                title: "Flow Without Pressure",
                description:
                    "Predictable movement reduces conflict and allows slowing down to feel normal rather than risky.",
            },
            {
                title: "Social Life Requires Stillness",
                description:
                    "A city becomes more human-centered when streets support waiting, observing, meeting, and resting.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Public Space Used as Intended",
            paragraphs: [
                "When people linger comfortably, it suggests the city has achieved a workable balance between movement and comfort."
            ],
            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "Thai residents using public space naturally and comfortably",
            },
            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
        {
            headline: "Predictable Street Behavior",
            paragraphs: [
                "Predictability supports safe pausing. Without it, stopping can become a source of risk."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Predictable shared street behavior supporting safe pedestrian movement",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
    ],
};