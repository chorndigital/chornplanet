// src/data/smart-city-landing/EditorialLocalAsGlobalPrototypeEN.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialLocalAsGlobalPrototypeEN: ISmartCityLanding = {
    heroObservation: {
        headline: "Local as Global Prototype",
        paragraphs: [
            "Mid-sized cities often make urban systems easier to observe.",
            "They are dense enough to reveal system pressure, while remaining readable through everyday human behavior.",
            "Careful observation of local streets can help identify patterns that later appear across different urban contexts."
        ],
        image: {
            url: "/smart-city/editorial/local-as-global-prototype.png",
            alt: "Thai local street reflecting urban patterns found in many cities worldwide",
        },
        cta: {
            label: "Return to Smart City Overview",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
    },

    systemExplanation: {
        headline: "Why Mid-Sized Cities Reveal More",
        paragraphs: [
            "Large metropolitan areas can obscure systems through scale. Mid-sized cities often make systems more visible through daily activity such as crossings, queues, deliveries, and street-level coordination.",
            "These environments allow recurring patterns to be observed clearly before they appear in larger or more complex urban settings."
        ],
        image: {
            url: "/smart-city/local-to-global/local-street-daily-routine.png",
            alt: "Local street routine showing human behavior as an indicator of urban systems",
        },
    },

    whyItMatters: {
        headline: "Why Local as Global Prototype Matters",
        paragraphs: [
            "Urban convergence does not occur through planning alone. It also emerges through repeated local patterns that function effectively in everyday life."
        ],
        points: [
            {
                title: "Local Patterns Can Scale Organically",
                description:
                    "When a routine functions well, it may be adopted elsewhere without formal coordination.",
            },
            {
                title: "Visibility Supports Practical Learning",
                description:
                    "Mid-sized cities allow urban systems to be understood through direct observation rather than abstraction.",
            },
            {
                title: "Local Identity Can Coexist with Global Principles",
                description:
                    "Cities can retain cultural specificity while expressing system behaviors that appear across multiple regions.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "From Local Life to Global Pattern",
            paragraphs: [
                "When similar local scenes appear across different cities, they indicate shared system behaviors."
            ],
            image: {
                url: "/smart-city/local-to-global/global-urban-pattern.png",
                alt: "Comparison between local scenes revealing shared urban patterns",
            },
            landingUrl: "/smart-city/from-local-life-to-global-pattern",
        },
        {
            headline: "Global Patterns Emerging from Everyday Cities",
            paragraphs: [
                "Predictability, mixed mobility, and low-visibility logistics are increasingly observed across different urban environments."
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "Predictable shared street patterns appearing across multiple cities",
            },
            landingUrl: "/smart-city/global-patterns/predictable-shared-street",
        },
    ],
};