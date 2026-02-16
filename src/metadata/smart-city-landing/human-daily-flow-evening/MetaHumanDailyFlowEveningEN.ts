// src/metadata/smart-city-landing/human-daily-flow-evening/MetaHumanDailyFlowEveningEN.ts

import {Metadata} from "next";

export const MetaHumanDailyFlowEveningEN: Metadata = {
    title: "Evening Flow — Slowing Down and Recovery | Smart City",
    description:
        "Evening is not about speed, but recovery. A smart city is reflected in whether streets feel safe enough for people to relax, walk, meet, and remain present after sunset.",

    alternates: {
        canonical: "/en/smart-city/human-daily-flow-evening",
        languages: {
            en: "/en/smart-city/human-daily-flow-evening",
            th: "/th/smart-city/human-daily-flow-evening",
            da: "/da/smart-city/human-daily-flow-evening",
            de: "/de/smart-city/human-daily-flow-evening",
            fi: "/fi/smart-city/human-daily-flow-evening",
            fr: "/fr/smart-city/human-daily-flow-evening",
            ja: "/ja/smart-city/human-daily-flow-evening",
            ko: "/ko/smart-city/human-daily-flow-evening",
            nl: "/nl/smart-city/human-daily-flow-evening",
            zh: "/zh-cn/smart-city/human-daily-flow-evening",
        },
    },

    authors: [
        {
            name: "CHORN Digital",
        },
    ],

    openGraph: {
        title: "Evening Flow — Slowing Down and Recovery | Smart City",
        description:
            "Evening reveals whether the city supports comfort beyond daytime hours. Lighting, walkability, and predictable mobility determine whether public life remains calm and welcoming after sunset.",
        url: "/en/smart-city/human-daily-flow-evening",
        type: "website",
        images: [
            {
                url: "/images-opengraph/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
                width: 1200,
                height: 630,
                alt: "Early evening Thai city street with warm lights, pedestrians, calm scooters, and a safe atmosphere for social life",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Evening Flow — Slowing Down and Recovery | Smart City",
        description:
            "A city’s quality becomes visible when people slow down and feel safe enough to remain outside after sunset.",
        images: [
            "/images-opengraph/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
        ],
    },
};