// src/metadata/smart-city-landing/human-daily-flow-midday/MetaHumanDailyFlowMiddayEN.ts

import {Metadata} from "next";

export const MetaHumanDailyFlowMiddayKO: Metadata = {
    title: "한낮의 흐름 — 밀도와 조율 | 스마트 시티",
    description:
        "한낮은 밀도가 혼란스럽게 느껴지는지, 아니면 조율된 흐름으로 느껴지는지를 보여줍니다. 스마트 시티는 사람, 물류, 이동 시스템이 겹쳐도 스트레스를 만들지 않도록 지원합니다.",

    alternates: {
        canonical: "/ko/smart-city/human-daily-flow-midday",
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
            name: "CHORN Digital",
        },
    ],

    openGraph: {
        title: "한낮의 흐름 — 밀도와 조율 | 스마트 시티",
        description:
            "최고 강도 구간에서는 물류, 보행자, 차량, 그리고 공유 공간이 조용히 조율되어야 합니다. 시스템이 정렬되면 밀도는 혼란이 아니라 차분함으로 느껴집니다.",
        url: "/ko/smart-city/human-daily-flow-midday",
        type: "website",
        images: [
            {
                url: "/images-opengraph/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
                width: 1200,
                height: 630,
                alt: "보행자, 스쿠터, 자전거, 배송 로봇, 자율주행 전기 셔틀이 함께 움직이는 분주한 한낮의 태국 도시 거리",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "한낮의 흐름 — 밀도와 조율 | 스마트 시티",
        description:
            "한낮은 도시 시스템이 긴장을 만들지 않고 밀도를 조율할 수 있는지를 시험합니다.",
        images: [
            "/images-opengraph/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
        ],
    },
};