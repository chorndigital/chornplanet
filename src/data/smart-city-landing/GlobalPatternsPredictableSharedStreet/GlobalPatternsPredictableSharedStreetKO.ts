import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const GlobalPatternsPredictableSharedStreetKO: ISmartCityLanding = {
    heroObservation: {
        headline: "예측 가능한 거리는 자발적인 도시 생활을 가능하게 한다",
        paragraphs: [
            "문화가 다른 도시들에서도 예측 가능한 거리는 공통된 결과를 만들어내며, 사람들은 공공 공간에서 보다 편안함을 느낍니다.",
            "이동 규칙이 읽기 쉬울 때 보행자는 자연스럽게 횡단하고, 차량은 마찰 없이 감속하며, 거리의 생활은 더 자발적으로 전개됩니다.",
            "이는 기술만으로 형성된 것이 아니라, 공유 공간에 대한 신뢰에 의해 만들어진 글로벌 패턴입니다."
        ],
        image: {
            url: "/smart-city/global-patterns/predictable-shared-street.png",
            alt: "보행자, 자전거, 차량이 차분하게 이동하는 예측 가능한 공유 거리",
        },
        cta: {
            label: "혼합 이동 패턴 살펴보기",
            href: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    },

    systemExplanation: {
        headline: "왜 예측 가능성은 여러 도시에서 반복되는가",
        paragraphs: [
            "예측 가능성은 불확실성을 줄입니다. 이러한 효과는 다양한 맥락과 소득 수준 전반에 걸쳐 폭넓게 적용됩니다.",
            "거리가 설계를 통해 명확한 리듬을 전달하면, 사람들은 매 걸음마다 판단할 필요가 줄어듭니다. 그 결과 거리는 멈춤, 만남, 횡단, 체류와 같은 일상의 자발성을 지탱할 만큼 안전해집니다."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "예측 가능한 이동을 지원하는 모빌리티 조정 시스템",
        },
    },

    whyItMatters: {
        headline: "왜 이 글로벌 패턴이 중요한가",
        paragraphs: [
            "예측 가능성은 일상의 이동을 통해 직접 경험되기 때문에, 다양한 유형의 도시로 확장될 수 있는 몇 안 되는 이동 원칙 중 하나입니다."
        ],
        points: [
            {
                title: "신뢰는 하나의 인프라이다",
                description:
                    "예측 가능한 거리는 지속적인 단속이나 통제에 의존하지 않고도 신뢰를 형성합니다.",
            },
            {
                title: "안전은 공공 생활을 지탱한다",
                description:
                    "횡단이 안전하게 느껴질수록 사람들은 더 오래 외부에 머물며 도시를 자유롭게 이용합니다.",
            },
            {
                title: "설계는 통제의 필요를 줄인다",
                description:
                    "가장 효과적인 거리는 처벌이 아니라 가독성을 통해 행동을 이끕니다.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "예측 가능한 거리 행동",
            paragraphs: [
                "예측 가능성은 기능이 아니라, 사람들이 신뢰를 가지고 이동할 수 있는 거리임을 보여주는 일상적인 신호입니다."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "태국 도시 환경에서 관찰되는 예측 가능한 거리 행동",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "이동과 멈춤",
            paragraphs: [
                "예측 가능성은 멈춤을 가능하게 합니다. 이것이 없다면 정지는 불안하게 느껴질 수 있습니다."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "시스템 결과로서 이동과 멈춤의 균형을 이룬 거리",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};