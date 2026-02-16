// src/metadata/smart-city-landing/mobility-focus-mixed-mobility/MetaMobilityMixedMobilityJA.ts

import {Metadata} from "next";

export const MetaMobilityMixedMobilityJA: Metadata = {
    title: "Mixed Mobilityの共存 | Smart City Mobility",
    description:
        "現代の道路は、もはや単一の移動手段のためだけに設計されていません。Mixed mobilityは、歩行者、スクーター、自転車、ロボット、自動運転車が自然かつ安全に共存できる環境を実現します。",

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
        title: "Mixed Mobilityの共存 | Smart City Mobility",
        description:
            "スマートシティは厳格な分離によって定義されるのではなく、多様なモビリティ手段の共存を、わかりやすく、穏やかで、安全に感じられる形で実現することによって定義されます。",
        url: "/en/smart-city/mobility-focus-mixed-mobility",
        type: "website",
        images: [
            {
                url: "/images-opengraph/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                width: 1200,
                height: 630,
                alt: "歩行者、スクーター、自転車利用者、自動運転シャトルが自然に共存するタイの街路風景",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Mixed Mobilityの共存 | Smart City Mobility",
        description:
            "Mixed mobilityは、多様な移動手段が快適に共存する共有道路への転換を象徴しています。",
        images: [
            "/images-opengraph/smart-city/mobility-focus/mixed-mobility-coexistence.png",
        ],
    },
};