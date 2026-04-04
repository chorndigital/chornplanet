// src/metadata/smart-city-landing/human-daily-flow-midday/MetaHumanDailyFlowMiddayEN.ts

import {Metadata} from "next";

export const MetaHumanDailyFlowMiddayEN: Metadata = {
    title: "Midday Flow — Density and Coordination | Smart City",
    description:
        "Midday reveals whether density feels chaotic or coordinated. A smart city supports overlapping people, goods, and mobility systems without creating stress.",

    alternates: {
        canonical: "/en/smart-city/human-daily-flow-midday",
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
        title: "Midday Flow — Density and Coordination | Smart City",
        description:
            "At peak intensity, logistics, pedestrians, vehicles, and shared space must coordinate quietly. When systems align, density feels calm rather than chaotic.",
        url: "/en/smart-city/human-daily-flow-midday",
        type: "website",
        images: [
            {
                url: "/images-opengraph/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
                width: 1200,
                height: 630,
                alt: "Busy midday Thai city street with pedestrians, scooters, cyclists, delivery robots, and an autonomous electric shuttle moving together",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Midday Flow — Density and Coordination | Smart City",
        description:
            "Midday tests whether urban systems can coordinate density without creating tension.",
        images: [
            "/images-opengraph/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
        ],
    },
};