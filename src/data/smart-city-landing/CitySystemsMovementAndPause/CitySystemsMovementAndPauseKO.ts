import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsMovementAndPauseKO: ISmartCityLanding = {
    heroObservation: {
        headline: "이동과 멈춤",
        paragraphs: [
            "도시는 얼마나 빠르게 움직이는가로 정의되지 않으며, 사람들이 위험이나 압박 없이 멈출 수 있는지에 의해 정의됩니다.",
            "건강한 거리는 고속도로처럼 설계되지 않습니다. 그것은 공유 환경이며, 이동이 자연스럽게 느려질 수 있고 멈춤이 안전하게 유지되는 공간입니다.",
            "도시가 흐름과 정지의 균형을 이루면, 일상은 더 차분해지고 더 사회적이며 더 인간 중심적으로 변화할 수 있습니다."
        ],
        image: {
            url: "/smart-city/city-systems/movement-and-pause.png",
            alt: "보행자의 멈춤과 차분한 이동 흐름이 균형을 이루는 태국 도시 거리",
        },
        cta: {
            label: "밀도와 쾌적함 살펴보기",
            href: "/smart-city/city-systems-density-and-comfort",
        },
    },

    systemExplanation: {
        headline: "거리에서 균형을 만드는 요소",
        paragraphs: [
            "이동과 멈춤은 반대 개념이 아닙니다. 이는 동일한 거리 시스템 안에서 서로를 보완하는 기능입니다.",
            "횡단, 연석 설계, 보도 리듬, 교통 행동은 사람들이 속도를 줄이고 관찰하며 상호작용하는 데 안전함을 느끼는지에 영향을 줍니다. 거리가 읽기 쉽고 예측 가능하다면, 과도한 단속에 의존하지 않고도 사회적 활동이 형성될 수 있습니다."
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "안전한 멈춤과 공유된 도시 생활을 가능하게 하는 공공공간 설계",
        },
    },

    whyItMatters: {
        headline: "이동과 멈춤이 중요한 이유",
        paragraphs: [
            "사람들이 자연스럽게 멈출 수 있을 때, 거리는 더 안전하고 더 쾌적하며 사회적으로 더 활발해지는 경향이 있습니다."
        ],
        points: [
            {
                title: "멈춤은 안전을 나타낼 수 있다",
                description:
                    "사람들이 편안하게 멈출 수 있다면, 그 거리는 이미 예방적 환경으로 기능하고 있을 가능성이 높습니다.",
            },
            {
                title: "압박 없는 흐름",
                description:
                    "예측 가능한 이동은 충돌을 줄이고, 속도를 늦추는 행위를 위험이 아닌 자연스러운 행동으로 만듭니다.",
            },
            {
                title: "사회적 삶에는 정지가 필요하다",
                description:
                    "거리가 기다림, 관찰, 만남, 휴식을 지원할 때 도시는 더 인간 중심적으로 됩니다.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "공공공간이 의도대로 사용되는 모습",
            paragraphs: [
                "사람들이 편안하게 머무르는 모습은 도시가 이동과 쾌적함 사이에서 실질적인 균형을 달성했음을 시사합니다."
            ],
            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "공공공간을 자연스럽고 편안하게 사용하는 태국 주민들",
            },
            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
        {
            headline: "예측 가능한 거리 행동",
            paragraphs: [
                "예측 가능성은 안전한 멈춤을 가능하게 합니다. 이것이 없다면 멈추는 행위 자체가 위험이 될 수 있습니다."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "안전한 보행 이동을 지원하는 예측 가능한 공유 거리 행동",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
    ],
};