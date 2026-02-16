import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsPredictableStreetKO: ISmartCityLanding = {
    heroObservation: {
        headline: "예측 가능한 거리 행동",
        paragraphs: [
            "도시는 정책보다 먼저 행동을 통해 소통합니다.",
            "보행자가 망설임 없이 건너고, 스쿠터가 자연스럽게 속도를 줄이며, 차량이 조용한 확신 속에서 움직일 때, 거리는 중요한 사실을 보여줍니다. 사람들은 그 시스템을 신뢰할 수 있는 것으로 경험하고 있다는 것입니다.",
            "예측 가능성은 측정 없이도 눈으로 확인할 수 있기 때문에 가장 명확한 도시 신호 중 하나입니다."
        ],
        image: {
            url: "/smart-city/urban-signals/predictable-shared-street.png",
            alt: "예측 가능한 공유 거리 환경에서 부드럽게 이동하는 태국의 보행자와 자전거 이용자",
        },
        cta: {
            label: "물류 통합 살펴보기",
            href: "/smart-city/urban-signals-logistics-integration",
        },
    },

    systemExplanation: {
        headline: "예측 가능성이 의미하는 것",
        paragraphs: [
            "예측 가능한 행동은 우연히 발생하지 않습니다. 이는 불확실성을 줄이는 거리 설계의 결과입니다. 읽기 쉬운 횡단, 일관된 차선 리듬, 명확한 시각적 신호, 그리고 속도 조화가 포함됩니다.",
            "이러한 시스템이 함께 작동하면 사람들은 매 순간을 협상할 필요가 없어집니다. 도시는 눈에 띄는 통제에 의존하지 않고도 안전하게 느껴집니다."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "예측 가능한 거리 행동을 지원하는 이동 조정 시스템",
        },
    },

    whyItMatters: {
        headline: "이 신호가 중요한 이유",
        paragraphs: [
            "예측 가능성은 거리 수준에서의 신뢰를 직접적으로 보여주는 지표입니다."
        ],
        points: [
            {
                title: "신뢰는 관찰할 수 있다",
                description:
                    "사람들이 자신 있게 움직일 때, 이는 거리가 일관되게 작동할 것이라고 기대하고 있음을 시사합니다.",
            },
            {
                title: "안전이 자연스럽게 느껴진다",
                description:
                    "예측 가능한 거리는 안전이 강제되는 것처럼 느끼지 않게 하면서도 위험을 줄입니다.",
            },
            {
                title: "편안함이 도시 생활을 가능하게 한다",
                description:
                    "자발적인 공공 생활은 읽기 쉽고 공유된 이동 규칙이 있을 때 가능해집니다.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "예측 가능한 거리는 자발적인 삶을 가능하게 한다",
            paragraphs: [
                "전 세계 여러 도시에서 예측 가능한 거리는 지속적으로 더 차분한 이동과 일상적인 사회적 삶을 지원합니다."
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "예측 가능한 공유 거리의 글로벌 패턴",
            },
            landingUrl: "/smart-city/global-patterns-predictable-shared-street",
        },
        {
            headline: "이동과 멈춤",
            paragraphs: [
                "예측 가능성이 있어야 멈출 수 있습니다. 그것이 없다면 멈추는 행위는 위험해질 수 있습니다."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "흐름과 멈춤의 균형을 이루는 거리 시스템",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};