import { ISmartCityLanding } from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsLogisticsIntegrationEN: ISmartCityLanding = {
    heroObservation: {
        headline: "Logistics Blending Into Daily Life",
        paragraphs: [
            "Logistics is a foundational city system, and well-integrated logistics is often barely noticed.",
            "When delivery robots, couriers, and small electric vehicles operate without dominating attention, it suggests that logistics is integrated rather than imposed.",
            "A smart city is not defined by how visible delivery systems are. It is defined by whether logistics fits into daily rhythm without disrupting street life."
        ],
        image: {
            url: "/smart-city/urban-signals/urban-logistics.png",
            alt: "Thai city street where delivery robots and small EV logistics blend into daily life",
        },
        cta: {
            label: "Explore Public Space Use",
            href: "/smart-city/urban-signals-public-space-use",
        },
    },

    systemExplanation: {
        headline: "What Logistics Integration Signals",
        paragraphs: [
            "Integrated logistics means goods can move continuously without disrupting human comfort.",
            "This depends on timing, routing, and coordination. Streets should remain readable for pedestrians while logistics systems operate quietly at the edges."
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "Urban logistics system operating quietly behind everyday movement",
        },
    },

    whyItMatters: {
        headline: "Why This Signal Matters",
        paragraphs: [
            "Logistics integration is a signal of system maturity. It indicates that a city can meet daily demand without turning streets into infrastructure zones."
        ],
        points: [
            {
                title: "Efficiency Without Noise",
                description:
                    "Well-integrated logistics reduces friction while preserving calm public space.",
            },
            {
                title: "The Street Stays Human",
                description:
                    "When logistics blends in, pedestrians and social life can remain the primary street identity.",
            },
            {
                title: "Timing Supports Preventive Design",
                description:
                    "Coordinated delivery rhythm can reduce congestion spikes before they appear.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Logistics Is Quietly Reshaping Urban Rhythm",
            paragraphs: [
                "Across cities worldwide, logistics is shifting into smaller, quieter systems that influence daily movement."
            ],
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "Global pattern of urban logistics reshaping daily rhythm",
            },
            landingUrl: "/smart-city/global-patterns-urban-logistics",
        },
        {
            headline: "Efficiency and Human Rhythm",
            paragraphs: [
                "Logistics integration works best when city systems align with human rhythm instead of prioritizing speed."
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "Efficiency aligned with human rhythm in a modern city system",
            },
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    ],
};