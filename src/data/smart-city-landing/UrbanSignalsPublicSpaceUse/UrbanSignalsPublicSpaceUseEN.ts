import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsPublicSpaceUseEN: ISmartCityLanding = {
    heroObservation: {
        headline: "Public Space Used as Intended",
        paragraphs: [
            "Public space reveals city quality through everyday use.",
            "When people sit, pause, talk, and linger naturally, it indicates that the city has achieved balance between movement and comfort, efficiency and social life.",
            "One of the clearest signs of a functioning city is not speed, but whether people feel comfortable enough to stay."
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "Thai residents sitting and walking comfortably in a well-designed public space",
        },
        cta: {
            label: "Return to Predictable Streets",
            href: "/smart-city/urban-signals-predictable-street",
        },
    },

    systemExplanation: {
        headline: "What Public Space Use Signals",
        paragraphs: [
            "People do not linger in uncomfortable places. They remain only where the city provides safety, shade, lighting, walkability, and a calm street rhythm.",
            "Public space is not a decorative layer. It is a system outcome. When it functions well, the city becomes socially active without being staged or programmed."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Public space orchestration through lighting, sidewalks, and walkability",
        },
    },

    whyItMatters: {
        headline: "Why This Signal Matters",
        paragraphs: [
            "When public space is used naturally, it suggests that the city supports long-term social health, safety, and everyday comfort."
        ],
        points: [
            {
                title: "Comfort Is Evidence",
                description:
                    "Everyday use of public space indicates that systems are working beyond policy statements.",
            },
            {
                title: "Social Life Is Infrastructure",
                description:
                    "Casual gathering strengthens connection and resilience within the city.",
            },
            {
                title: "Safety Is Experienced",
                description:
                    "Well-functioning streets feel safe without relying on visible control or enforcement.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Movement and Pause",
            paragraphs: [
                "Public space becomes usable only when movement allows stillness. Pause is a core system signal."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Movement and pause balanced in a human-centered street system",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
        {
            headline: "Density and Comfort",
            paragraphs: [
                "When density remains comfortable, people stay outside longer. Comfort is the underlying strategy for livable density."
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Urban density softened by greenery and shared space comfort",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};