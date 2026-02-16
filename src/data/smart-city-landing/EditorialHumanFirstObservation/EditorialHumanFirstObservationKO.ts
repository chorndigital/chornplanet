import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialHumanFirstObservationKO: ISmartCityLanding = {
    heroObservation: {
        headline: "인간 중심 관찰",
        paragraphs: [
            "도시는 기술적 설명만으로가 아니라, 삶의 경험을 통해 가장 명확하게 이해될 수 있습니다.",
            "도시의 질을 보여주는 많은 신뢰할 수 있는 신호는 대시보드가 아니라, 사람들이 걷고 기다리고 멈추고 건너며 공간을 공유하는 방식 속에 존재합니다.",
            "이 플랫폼은 인간의 삶에서 출발합니다. 일상적인 행동이 도시 시스템이 실제로 어떻게 작동하는지를 보여주기 때문입니다."
        ],
        image: {
            url: "/smart-city/editorial/human-first-observation.png",
            alt: "도시 시스템의 주요 신호로서 거리에서 차분하게 이동하는 태국 사람들",
        },
        cta: {
            label: "기술보다 먼저 시스템 살펴보기",
            href: "/smart-city/editorial-system-before-technology",
        },
    },

    systemExplanation: {
        headline: "왜 관찰이 먼저인가",
        paragraphs: [
            "많은 도시 담론은 기술, 인프라, 정책에서 시작합니다. 그러나 도시는 주로 이러한 관점으로 경험되지 않습니다.",
            "사람들은 마찰, 쾌적함, 리듬, 그리고 체감 안전성을 통해 도시를 경험합니다. 관찰은 기술적 언어에 의존하지 않고도 복잡한 시스템을 눈에 보이는 패턴으로 번역하는 역할을 합니다."
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "인간의 일상과 쾌적함이 주요 시스템 신호로 드러나는 공공공간",
        },
    },

    whyItMatters: {
        headline: "인간 중심 관찰이 중요한 이유",
        paragraphs: [
            "인간의 일상을 먼저 관찰하면, 문화와 도시, 시스템 복잡성의 차이를 넘어 의미를 공유할 수 있는 공통 기준점이 형성됩니다."
        ],
        points: [
            {
                title: "행동은 실제 조건을 반영한다",
                description:
                    "사람들은 쾌적함과 위험에 빠르게 적응합니다. 일상적인 이동은 실제 도시 조건을 반영합니다.",
            },
            {
                title: "이해는 예측 없이 확장된다",
                description:
                    "관찰은 미래 결과에 대한 확실성을 주장하지 않으면서도 이해를 뒷받침합니다.",
            },
            {
                title: "시스템은 전문 용어 없이도 이해된다",
                description:
                    "인간 중심 관점은 도시 시스템을 기술적·전문가 중심의 대상에 국한하지 않고 폭넓게 이해할 수 있게 합니다.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "생각하지 않아도 보이는 도시 신호",
            paragraphs: [
                "작은 일상 행동은 공식적인 측정이나 설명 없이도 도시의 질을 드러낼 수 있습니다."
            ],
            image: {
                url: "/smart-city/urban-signals/predictable-shared-street.png",
                alt: "일상적인 이동을 통해 관찰되는 예측 가능한 거리 행동",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "도시는 일상의 주기를 통해 경험된다",
            paragraphs: [
                "복잡한 시스템은 아침, 정오, 저녁과 같은 일상 리듬을 통해 바라볼 때 더 명확해질 수 있습니다."
            ],
            image: {
                url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
                alt: "시스템 품질의 신호로서 일상 리듬을 보여주는 아침 흐름",
            },
            landingUrl: "/smart-city/human-daily-flow-morning",
        },
    ],
};