import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowEveningEN: ISmartCityLanding = {
    heroObservation: {
        headline: "Evening Flow — Slowing Down and Recovery",
        paragraphs: [
            "Evening is not about speed. It is about recovery.",
            "A city’s quality becomes visible when people slow down: walking home, meeting friends, shopping locally, or pausing in public space.",
            "A smart city is reflected in whether streets feel safe enough for people to relax and remain present after sunset."
        ],
        image: {
            url: "/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
            alt: "Early evening Thai city street with warm lights, pedestrians, calm scooters, and a safe atmosphere for social life",
        },
        cta: {
            label: "Return to the Smart City Overview",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
    },

    systemExplanation: {
        headline: "Evening Systems That Protect Comfort",
        paragraphs: [
            "Evening reveals whether the city supports comfort or whether people feel pushed to retreat indoors.",
            "Lighting, walkability, street activity, and predictable mobility allow public life to continue with less uncertainty. When these systems work together, the city remains usable and welcoming beyond daytime hours."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Public space orchestration with lighting and walkability supporting evening life",
        },
    },

    whyItMatters: {
        headline: "Why Evening Flow Matters",
        paragraphs: [
            "A city that supports evening recovery strengthens long-term social connection and perceived safety, without requiring heavy control."
        ],
        points: [
            {
                title: "Comfort Is a System Outcome",
                description:
                    "Evening comfort is not decoration. It is the result of safety, lighting, and predictable movement.",
            },
            {
                title: "Public Space Becomes Social Infrastructure",
                description:
                    "When people remain outside after sunset, public space supports stronger community interaction and everyday accessibility.",
            },
            {
                title: "Safety Without Enforcement",
                description:
                    "The most effective streets feel safe because they are designed to reduce risk, not to punish behavior.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Public Space Used as Intended",
            paragraphs: [
                "Evening reveals whether people feel safe enough to linger. That lingering is a clear signal of comfort."
            ],
            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "Thai residents sitting and walking comfortably in a well-lit public space",
            },
            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
        {
            headline: "Density and Comfort",
            paragraphs: [
                "Evening comfort shows whether density feels livable or exhausting."
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Urban density softened by greenery and calm evening activity",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};