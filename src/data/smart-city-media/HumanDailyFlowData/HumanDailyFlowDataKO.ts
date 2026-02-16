//data/smart-city-media/HumanDailyFlowDataKO.ts

import {IHumanDailyFlow} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const HumanDailyFlowDataKO: IHumanDailyFlow = {
    headline: "도시 시스템은 일상 주기를 통해 관찰된다",
    paragraph:
        "도시 시스템은 한 순간에 전체를 관찰하기 어렵다. 도시 시스템은 아침 통근, 한낮의 조정, 저녁의 전환과 같은 반복되는 일상 패턴을 통해 나타난다. 이러한 패턴을 관찰하면 일상적인 사람들의 이동을 단서로 복잡한 도시 시스템을 해석할 수 있다.",

    morningFlow: {
        title: "아침 흐름 — 하루의 시작",
        paragraph:
            "아침은 주거 지역의 정적 상태에서 보다 활발한 이동으로 전환되는 과정을 보여준다. 사람들은 집을 나서 거리로 이동하고 교통 시스템에 맞추어 움직인다. 교통 흐름, 보행자 이동, 공유 모빌리티 이용과 같은 관찰 가능한 신호는 하루 시작 시점에 모빌리티 인프라가 어떻게 작동하는지를 보여준다.",

        image: {
            url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
            alt: "이른 아침의 도시 환경에서 통근하는 사람들, 주간의 빛, 녹지 요소, 일상 운영을 시작하는 모빌리티 시스템이 보이는 장면",
        },

        category: "Morning Flow",
        signalFocus: ["mobility readiness", "pedestrian flow", "temporal synchronization"],
        landingUrl: "/smart-city/human-daily-flow-morning",
    },

    middayFlow: {
        title: "한낮 흐름 — 밀도와 조정",
        paragraph:
            "한낮에는 도시 활동의 밀도가 증가한다. 사람, 물품, 서비스가 동시에 이동한다. 자율 모빌리티 시스템, 물류 인프라, 공공 공간 설계가 병행하여 작동하며 더 큰 이동량을 처리한다.",

        image: {
            url: "/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
            alt: "한낮의 도시 환경에서 보행자, 자율 전기차, 배송 드론, 공공 공간에서 조정된 이동이 보이는 장면",
        },

        category: "Midday Flow",
        signalFocus: ["density", "logistics", "coordination", "autonomous systems"],
        landingUrl: "/smart-city/human-daily-flow-midday",
    },

    eveningFlow: {
        title: "저녁 흐름 — 활동 감소와 전환",
        paragraph:
            "저녁에는 활동 수준이 낮은 이동 강도로 전환된다. 조명 시스템, 보행 조건, 거리 환경, 교통 수단의 이용 가능성이 주민들이 귀가하고 저녁 활동에 참여하는 방식에 영향을 준다.",

        image: {
            url: "/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
            alt: "이른 저녁의 도시 환경에서 보행자, 조명이 있는 거리, 운영 중인 상점, 중간 수준의 교통량, 확인 가능한 안전 조건이 보이는 장면",
        },

        category: "Evening Flow",
        signalFocus: ["safety", "public space", "evening mobility", "urban transition"],
        landingUrl: "/smart-city/human-daily-flow-evening",
    },

    purpose: "반복되는 도시 패턴의 인식을 지원",
    narrativeRole: "익숙한 일상 루틴을 통해 복잡한 도시 시스템을 제시",
    section: "Human Daily Flow",
    category: "Smart City Media",
    lang: "ko",
};