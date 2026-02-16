// src/metadata/smart-city-landing/human-daily-flow-morning/MetaHumanDailyFlowMorningEN.ts

import {Metadata} from "next";

export const MetaHumanDailyFlowMorningKO: Metadata = {
    title: "아침의 흐름 — 하루의 시작 | 스마트 시티",
    description:
        "아침은 도시가 일상의 리듬을 지원하는지를 보여줍니다. 이른 횡단, 출근길, 그리고 하루의 첫 움직임은 이동 시스템이 마찰을 줄이고 신뢰를 구축하는지 드러냅니다.",

    alternates: {
        canonical: "/ko/smart-city/human-daily-flow-morning",
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
        title: "아침의 흐름 — 하루의 시작 | 스마트 시티",
        description:
            "아침은 도시 시스템에 대한 초기 스트레스 테스트입니다. 신뢰할 수 있는 도시는 ‘읽기 쉬움’으로 정의됩니다. 보행자, 스쿠터, 자전거, 차량이 최소한의 충돌로 차분하게 조율되는 환경입니다.",
        url: "/ko/smart-city/human-daily-flow-morning",
        type: "website",
        images: [
            {
                url: "/images-opengraph/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
                width: 1200,
                height: 630,
                alt: "이른 아침 태국 도시 거리에서 출근자들이 걷고 스쿠터가 차분히 움직이며 배경에는 조용한 자율주행 셔틀이 있는 모습",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "아침의 흐름 — 하루의 시작 | 스마트 시티",
        description:
            "아침의 흐름은 도시가 읽기 쉽고 예측 가능하며 일상을 준비하고 있는지를 보여줍니다.",
        images: [
            "/images-opengraph/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
        ],
    },
};