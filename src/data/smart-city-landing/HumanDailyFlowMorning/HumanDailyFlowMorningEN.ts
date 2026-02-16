import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowMorningEN: ISmartCityLanding = {
    heroObservation: {
        headline: "Morning Flow — Beginning the Day",
        paragraphs: [
            "Morning reveals whether a city is prepared as daily life begins.",
            "Commutes, school runs, small errands, and early deliveries reveal whether mobility systems support daily rhythm or create friction for everyday movement.",
            "A smart city becomes visible here — in early crossings, initial signals, and the first shared movements of the day."
        ],
        image: {
            url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
            alt: "Early morning Thai city street with commuters walking, scooters moving calmly, and a quiet autonomous shuttle in the background",
        },
        cta: {
            label: "See Midday Flow",
            href: "/smart-city/human-daily-flow-midday",
        },
    },

    systemExplanation: {
        headline: "What Morning Reveals About a City",
        paragraphs: [
            "Morning acts as an early stress test for urban systems. When crossings are unclear, sidewalks feel unsafe, or traffic becomes unpredictable, people adjust their behavior immediately.",
            "Reliable cities are not defined by speed. They are defined by readability — where pedestrians, scooters, cyclists, and vehicles coordinate with minimal conflict."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Urban mobility coordination with predictable crossings and calm morning movement",
        },
    },

    whyItMatters: {
        headline: "Why Morning Flow Matters",
        paragraphs: [
            "Cities that support morning rhythm reduce stress, improve safety, and build trust without relying on enforcement."
        ],
        points: [
            {
                title: "Trust Begins at the First Crossing",
                description:
                    "When people feel safe crossing naturally, the city communicates reliability without instruction.",
            },
            {
                title: "Rhythm Matters More Than Speed",
                description:
                    "Morning flow works best when streets support predictable timing rather than maximum throughput.",
            },
            {
                title: "Everyday Safety Is Preventive Design",
                description:
                    "A calm morning commute reduces risk, congestion, and friction before they emerge.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Predictable Street Behavior",
            paragraphs: [
                "Morning functions smoothly only when people can move without hesitation. Predictability is the foundation of trust."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Thai pedestrians and cyclists moving predictably on a shared street with calm traffic",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "Movement and Pause",
            paragraphs: [
                "A city wakes up smoothly when movement can slow naturally without fear or danger."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Street design balancing morning movement with safe pauses for pedestrians",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};