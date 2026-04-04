// src/metadata/smart-city-landing/human-daily-flow-midday/MetaHumanDailyFlowMiddayEN.ts

import {Metadata} from "next";

export const MetaHumanDailyFlowMiddayDA: Metadata = {
    title: "Middagsflow — Tæthed og Koordination | Smart City",
    description:
        "Midt på dagen viser det sig, om tæthed føles kaotisk eller koordineret. En smart city understøtter overlappende mennesker, varer og mobilitetssystemer uden at skabe stress.",

    alternates: {
        canonical: "/da/smart-city/human-daily-flow-midday",
        languages: {
            en: "/en/smart-city/human-daily-flow-midday",
            th: "/th/smart-city/human-daily-flow-midday",
            da: "/da/smart-city/human-daily-flow-midday",
            de: "/de/smart-city/human-daily-flow-midday",
            fi: "/fi/smart-city/human-daily-flow-midday",
            fr: "/fr/smart-city/human-daily-flow-midday",
            ja: "/ja/smart-city/human-daily-flow-midday",
            ko: "/ko/smart-city/human-daily-flow-midday",
            nl: "/nl/smart-city/human-daily-flow-midday",
            zh: "/zh-cn/smart-city/human-daily-flow-midday",
        },
    },

    authors: [
        {
            name: "Chorn Planet",
        },
    ],

    openGraph: {
        title: "Middagsflow — Tæthed og Koordination | Smart City",
        description:
            "Ved spidsbelastning skal logistik, fodgængere, køretøjer og fællesrum koordineres stille. Når systemer er afstemt, føles tæthed rolig frem for kaotisk.",
        url: "/da/smart-city/human-daily-flow-midday",
        type: "website",
        images: [
            {
                url: "/images-opengraph/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
                width: 1200,
                height: 630,
                alt: "Travl thailandsk bygade midt på dagen med fodgængere, scootere, cyklister, leveringsrobotter og en autonom el-shuttle i samspil",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Middagsflow — Tæthed og Koordination | Smart City",
        description:
            "Midt på dagen tester, om byens systemer kan koordinere tæthed uden at skabe spænding.",
        images: [
            "/images-opengraph/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
        ],
    },
};