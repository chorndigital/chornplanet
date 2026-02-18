// src/data/smart-city-media/SmartCityMainKO.ts

import {ISmartCityMain} from "@/data/smart-city-media/_model/ISmartCityMain";

export const SmartCityMainKO: ISmartCityMain = {
    hero: {
        title: "Smart City Media",
        paragraphs: [
            "이것은 미래에 대한 예측이 아니다. 이는 현재 도시가 일상적인 인간 활동을 통해 어떻게 작동하는지에 대한 관찰이다.",
            "루틴, 모빌리티 행동, 시스템 조정을 검토함으로써 여러 지역의 도시에서 관찰 가능한 패턴을 식별한다.",
        ],
        cta: {
            label: "개요부터 시작하기",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
        image: {
            url: "/smart-city/hero/when-human-life-shapes-the-city.png",
            alt: "인간 중심 스마트 시티 생활을 보여주는 포토리얼한 태국 도시 거리",
        },
    },

    navigation: {
        items: [
            {
                title: "Human Daily Flow",
                description: "아침, 낮, 저녁은 시스템의 작동 방식을 나타낸다.",
                href: "/smart-city/human-daily-flow-morning/",
            },
            {
                title: "Local to Global",
                description: "로컬 루틴을 더 넓은 패턴으로 검토하는 방법.",
                href: "/smart-city/from-local-life-to-global-pattern",
            },
            {
                title: "Mobility Focus",
                description: "모빌리티는 이해되기 전에 관찰된다.",
                href: "/smart-city/mobility-focus-predictable-movement/",
            },
            {
                title: "City Systems",
                description: "일상적 도시 조건에 영향을 미치는 신호.",
                href: "/smart-city/city-systems-movement-and-pause/",
            },
            {
                title: "Global Patterns",
                description: "여러 도시에서 관찰되는 신호.",
                href: "/smart-city/global-patterns-predictable-shared-street/",
            },
            {
                title: "Urban Signals",
                description: "시스템 상태를 나타내는 거리 수준의 행동.",
                href: "/smart-city/urban-signals-predictable-street/",
            },
            {
                title: "Editorial Positioning",
                description: "Smart City Media의 관점을 설명.",
                href: "/smart-city/editorial-human-first-observation/",
            },
        ],
    },
};