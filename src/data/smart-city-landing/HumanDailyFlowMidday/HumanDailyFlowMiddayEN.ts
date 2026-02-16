import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowMiddayEN: ISmartCityLanding = {
    heroObservation: {
        headline: "Midday Flow — Density and Coordination",
        paragraphs: [
            "Midday is when a city’s complexity becomes most visible.",
            "People, goods, deliveries, services, and mobility overlap at the same time. The street becomes crowded, but daily life still needs to feel calm.",
            "A smart city is not defined by eliminating density. It is reflected in whether density feels coordinated."
        ],
        image: {
            url: "/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
            alt: "Busy midday Thai city street with pedestrians, scooters, cyclists, delivery robots, and an autonomous electric shuttle moving together",
        },
        cta: {
            label: "See Evening Flow",
            href: "/smart-city/human-daily-flow-evening",
        },
    },

    systemExplanation: {
        headline: "The Midday Systems People Don’t See",
        paragraphs: [
            "At peak density, a city coordinates multiple layers: logistics timing, street signals, pedestrian movement, delivery routes, and shared public space.",
            "When these systems work well, they require little attention. People simply experience movement as more predictable and less tense."
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "Urban logistics operating quietly alongside daily life",
        },
    },

    whyItMatters: {
        headline: "Why Midday Flow Matters",
        paragraphs: [
            "Midday shows whether a city can support daily life at scale without becoming stressful or chaotic."
        ],
        points: [
            {
                title: "Density Tests System Intelligence",
                description:
                    "Midday is where coordination matters most: when many activities overlap, systems need to remain quiet and reliable.",
            },
            {
                title: "Logistics Must Be Quietly Integrated",
                description:
                    "Deliveries should not dominate the street. They should blend into daily life without disrupting comfort.",
            },
            {
                title: "Coexistence Is the New Default",
                description:
                    "Scooters, pedestrians, bikes, robots, and vehicles need to coexist naturally instead of competing for dominance.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Logistics Blending Into Daily Life",
            paragraphs: [
                "When deliveries operate without dominating attention, the city can feel calm even at peak intensity."
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Delivery robots and small EV logistics blending into a Thai street environment",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
        {
            headline: "Mixed Mobility Is Becoming the Default",
            paragraphs: [
                "Midday reveals whether mixed mobility is intentionally supported or left to chance. The difference is comfort."
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Multiple mobility modes coexisting on a modern urban street",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    ],
};