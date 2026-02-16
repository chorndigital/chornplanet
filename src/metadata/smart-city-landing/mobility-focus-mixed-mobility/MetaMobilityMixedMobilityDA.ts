// src/metadata/smart-city-landing/mobility-focus-mixed-mobility/MetaMobilityMixedMobilityDA.ts

import {Metadata} from "next";

export const MetaMobilityMixedMobilityDA: Metadata = {
    title: "Sameksistens i Mixed Mobility | Smart City Mobility",
    description:
        "Moderne gader er ikke længere designet omkring én enkelt transportform. Mixed mobility gør det muligt for fodgængere, løbehjul, cykler, robotter og autonome køretøjer at sameksistere naturligt og sikkert.",

    alternates: {
        canonical: "/en/smart-city/mobility-focus-mixed-mobility",
        languages: {
            en: "/en/smart-city/mobility-focus-mixed-mobility",
            th: "/th/smart-city/mobility-focus-mixed-mobility",
            da: "/da/smart-city/mobility-focus-mixed-mobility",
            de: "/de/smart-city/mobility-focus-mixed-mobility",
            fi: "/fi/smart-city/mobility-focus-mixed-mobility",
            fr: "/fr/smart-city/mobility-focus-mixed-mobility",
            ja: "/ja/smart-city/mobility-focus-mixed-mobility",
            ko: "/ko/smart-city/mobility-focus-mixed-mobility",
            nl: "/nl/smart-city/mobility-focus-mixed-mobility",
            zh: "/zh-cn/smart-city/mobility-focus-mixed-mobility",
        },
    },

    authors: [
        {
            name: "CHORN Digital",
        },
    ],

    openGraph: {
        title: "Sameksistens i Mixed Mobility | Smart City Mobility",
        description:
            "En smart city defineres ikke af streng adskillelse, men af at få sameksistens mellem mobilitetsformer til at føles tydelig, rolig og sikker.",
        url: "/en/smart-city/mobility-focus-mixed-mobility",
        type: "website",
        images: [
            {
                url: "/images-opengraph/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                width: 1200,
                height: 630,
                alt: "Thailandsk gade med fodgængere, løbehjul, cyklister og en autonom shuttle, der sameksisterer naturligt",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Sameksistens i Mixed Mobility | Smart City Mobility",
        description:
            "Mixed mobility afspejler et skifte mod delte gader, hvor forskellige bevægelsesformer sameksisterer komfortabelt.",
        images: [
            "/images-opengraph/smart-city/mobility-focus/mixed-mobility-coexistence.png",
        ],
    },
};