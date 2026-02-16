import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const MobilityPredictableMovementKO: ISmartCityLanding = {
    heroObservation: {
        headline: "공유 도로에서의 예측 가능한 이동",
        paragraphs: [
            "이동성은 주로 기술로 경험되지 않습니다. 사람들은 이를 신뢰감으로 경험합니다.",
            "사람들이 망설임 없이 건널 수 있고, 차량이 자연스럽게 속도를 줄이며, 자전거가 거의 충돌 없이 흐를 때 도로는 읽기 쉬워집니다.",
            "예측 가능성은 통제가 아닙니다. 일상적인 안전을 지탱하는 실질적인 기반입니다."
        ],
        image: {
            url: "/smart-city/mobility-focus/predictable-shared-street.png",
            alt: "배경에 자율주행 셔틀이 보이는, 예측 가능한 공유 도로에서 차분히 이동하는 태국의 보행자와 자전거 이용자",
        },
        cta: {
            label: "혼합 이동 탐색하기",
            href: "/smart-city/mobility-focus-mixed-mobility",
        },
    },

    systemExplanation: {
        headline: "이동을 예측 가능하게 만드는 요소",
        paragraphs: [
            "예측 가능성은 불확실성을 줄이는 설계에서 비롯됩니다. 명확한 횡단, 일관된 차로 구조, 읽기 쉬운 신호, 그리고 강제하지 않고 감속을 유도하는 도로입니다.",
            "잘 설계된 도로가 안전하게 느껴지는 이유는 감시 때문이 아니라, 이동이 자연스럽게 동기화되기 때문입니다."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "예측 가능한 도로 행동을 지원하는 도시 이동 조율",
        },
    },

    whyItMatters: {
        headline: "왜 예측 가능성이 중요한가",
        paragraphs: [
            "예측 가능한 도로는 스트레스를 줄이고 사고 위험을 낮추며, 자발적인 도시 생활이 이루어질 수 있는 조건을 만듭니다."
        ],
        points: [
            {
                title: "단속에 의존하지 않는 안전",
                description:
                    "이동이 읽기 쉬우면 사람들은 자연스럽게 스스로를 조절합니다. 엄격한 통제 없이도 도로는 차분함을 유지할 수 있습니다.",
            },
            {
                title: "신뢰는 실질적인 지표다",
                description:
                    "이동이 잘 작동하는지를 보여주는 중요한 신호는 사람들이 망설임 없이 움직일 수 있는지 여부입니다.",
            },
            {
                title: "공유 도로에는 공유된 신뢰가 필요하다",
                description:
                    "예측 가능성은 보행자, 스쿠터, 자전거, 차량이 지속적인 협상 없이 공존할 수 있게 합니다.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "예측 가능한 도로 행동",
            paragraphs: [
                "이동이 차분하고 일관되게 느껴질 때, 이는 도로가 일상적인 사용에서 신뢰를 지지하고 있음을 보여줍니다."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "태국 도시 환경에서의 예측 가능한 공유 도로 행동",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "이동과 멈춤",
            paragraphs: [
                "안전하게 멈출 수 있는 도로는 종종 예측 가능한 이동을 가능하게 하는 동일한 도로입니다."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "이동 흐름과 보행자의 안전한 멈춤을 균형 있게 설계한 도시 도로",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};