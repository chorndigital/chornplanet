// src/metadata/smart-city-landing/mobility-focus-mixed-mobility/MetaMobilityMixedMobilityKO.ts

import {Metadata} from "next";

export const MetaMobilityMixedMobilityKO: Metadata = {
    title: "Mixed Mobility의 공존 | Smart City Mobility",
    description:
        "현대의 도로는 더 이상 하나의 이동 수단만을 중심으로 설계되지 않습니다. Mixed mobility는 보행자, 스쿠터, 자전거, 로봇, 자율주행 차량이 자연스럽고 안전하게 공존할 수 있도록 합니다.",

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
            name: "Chorn Planet",
        },
    ],

    openGraph: {
        title: "Mixed Mobility의 공존 | Smart City Mobility",
        description:
            "스마트 시티는 엄격한 분리가 아니라, 다양한 이동 수단의 공존을 명확하고 차분하며 안전하게 느껴지도록 만드는 데에서 정의됩니다.",
        url: "/en/smart-city/mobility-focus-mixed-mobility",
        type: "website",
        images: [
            {
                url: "/images-opengraph/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                width: 1200,
                height: 630,
                alt: "보행자, 스쿠터, 자전거 이용자, 자율주행 셔틀이 자연스럽게 공존하는 태국의 거리",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Mixed Mobility의 공존 | Smart City Mobility",
        description:
            "Mixed mobility는 다양한 이동 수단이 편안하게 공존하는 공유 도로로의 전환을 반영합니다.",
        images: [
            "/images-opengraph/smart-city/mobility-focus/mixed-mobility-coexistence.png",
        ],
    },
};