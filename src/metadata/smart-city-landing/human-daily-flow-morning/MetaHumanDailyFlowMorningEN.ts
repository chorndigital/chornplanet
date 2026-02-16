// src/metadata/smart-city-landing/human-daily-flow-morning/MetaHumanDailyFlowMorningEN.ts

import {Metadata} from "next";

export const MetaHumanDailyFlowMorningEN: Metadata = {
    title: "Morning Flow — Beginning the Day | Smart City",
    description:
        "Morning reveals whether a city supports daily rhythm. Early crossings, commutes, and first movements show if mobility systems reduce friction and build trust.",

    alternates: {
        canonical: "/en/smart-city/human-daily-flow-morning",
        languages: {
            en: "/en/smart-city/human-daily-flow-morning",
            th: "/th/smart-city/human-daily-flow-morning",
            da: "/da/smart-city/human-daily-flow-morning",
            de: "/de/smart-city/human-daily-flow-morning",
            fi: "/fi/smart-city/human-daily-flow-morning",
            fr: "/fr/smart-city/human-daily-flow-morning",
            ja: "/ja/smart-city/human-daily-flow-morning",
            ko: "/ko/smart-city/human-daily-flow-morning",
            nl: "/nl/smart-city/human-daily-flow-morning",
            zh: "/zh-cn/smart-city/human-daily-flow-morning",
        },
    },

    authors: [
        {
            name: "CHORN Digital",
        },
    ],

    openGraph: {
        title: "Morning Flow — Beginning the Day | Smart City",
        description:
            "Morning is an early stress test for urban systems. A reliable city is defined by readability—where pedestrians, scooters, cyclists, and vehicles coordinate calmly with minimal conflict.",
        url: "/en/smart-city/human-daily-flow-morning",
        type: "website",
        images: [
            {
                url: "/images-opengraph/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
                width: 1200,
                height: 630,
                alt: "Early morning Thai city street with commuters walking, scooters moving calmly, and a quiet autonomous shuttle in the background",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Morning Flow — Beginning the Day | Smart City",
        description:
            "Morning flow shows whether a city is readable, predictable, and prepared for daily life.",
        images: [
            "/images-opengraph/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
        ],
    },
};