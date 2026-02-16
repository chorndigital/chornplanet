import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const MobilityMixedMobilityEN: ISmartCityLanding = {
    heroObservation: {
        headline: "Coexistence of Mixed Mobility",
        paragraphs: [
            "Modern streets are no longer built around a single mode of transport.",
            "Scooters, bicycles, pedestrians, delivery robots, and autonomous vehicles are increasingly becoming part of everyday street life.",
            "A smart city is not defined by separating everything. It is defined by making coexistence feel natural and safe."
        ],
        image: {
            url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
            alt: "Thai street showing pedestrians, scooters, cyclists, and an autonomous shuttle coexisting naturally",
        },
        cta: {
            label: "Return to Mobility Focus",
            href: "/smart-city/mobility-focus-mixed-mobility",
        },
    },

    systemExplanation: {
        headline: "What Makes Coexistence Work",
        paragraphs: [
            "Mixed mobility works when no single mode dominates attention. Streets become legible through consistent design: speed harmony, clear priority cues, and space that adapts across time.",
            "When designed well, coexistence feels effortless — people stop thinking about systems and simply move."
        ],
        image: {
            url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
            alt: "Multiple mobility modes coexisting calmly on a modern street",
        },
    },

    whyItMatters: {
        headline: "Why Mixed Mobility Matters",
        paragraphs: [
            "Cities that support mixed mobility can reduce congestion pressure and create more livable public space."
        ],
        points: [
            {
                title: "Mobility Diversity Is Resilience",
                description:
                    "When one mode slows down, others can maintain the city’s rhythm. Coexistence creates redundancy.",
            },
            {
                title: "Less Dominance, More Comfort",
                description:
                    "Streets can feel calmer when no single vehicle type controls the space.",
            },
            {
                title: "This Shift Is Already Visible",
                description:
                    "Mixed mobility is increasingly reflected in everyday street behavior across cities worldwide.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Mixed Mobility Is Becoming the Global Default",
            paragraphs: [
                "Across cultures, streets are converging toward shared coexistence patterns rather than strict segregation."
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Global mixed mobility pattern emerging across cities",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
        {
            headline: "Logistics Blending Into Daily Life",
            paragraphs: [
                "Coexistence includes delivery systems. Well-integrated cities support logistics without disrupting public space."
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Delivery robots and small EV logistics blending into daily urban life",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
    ],
};