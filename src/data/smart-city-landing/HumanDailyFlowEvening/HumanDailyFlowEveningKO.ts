import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowEveningKO: ISmartCityLanding = {
    heroObservation: {
        headline: "저녁 흐름 — 속도를 늦추고 회복하는 시간",
        paragraphs: [
            "저녁은 속도의 시간이 아닙니다. 회복의 시간입니다.",
            "사람들이 속도를 늦출 때 도시의 품질이 드러납니다. 집으로 걸어가고, 친구를 만나고, 동네에서 쇼핑하거나 공공 공간에서 잠시 멈추는 순간들입니다.",
            "스마트 시티는 해가 진 뒤에도 사람들이 거리에서 충분히 안전하다고 느끼며 편안하게 머물 수 있는지에 의해 드러납니다."
        ],
        image: {
            url: "/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
            alt: "따뜻한 조명 아래 보행자와 차분한 스쿠터가 이동하며 사회적 생활을 위한 안전한 분위기가 느껴지는 태국 도시의 이른 저녁 거리",
        },
        cta: {
            label: "스마트 시티 개요로 돌아가기",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
    },

    systemExplanation: {
        headline: "편안함을 지키는 저녁 시스템",
        paragraphs: [
            "저녁은 도시가 편안함을 지원하는지, 아니면 사람들이 실내로 물러나야 한다고 느끼게 만드는지를 보여줍니다.",
            "조명, 보행 친화성, 거리 활동, 그리고 예측 가능한 이동은 불확실성을 줄이며 공공 생활이 지속되도록 합니다. 이러한 시스템이 함께 작동할 때, 도시는 낮 이후에도 이용 가능하고 환영받는 공간으로 유지됩니다."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "조명과 보행 친화성이 저녁 생활을 지원하는 공공 공간 오케스트레이션",
        },
    },

    whyItMatters: {
        headline: "왜 저녁 흐름이 중요한가",
        paragraphs: [
            "저녁의 회복을 지원하는 도시는 강한 통제 없이도 장기적인 사회적 연결과 체감 안전을 강화합니다."
        ],
        points: [
            {
                title: "편안함은 시스템의 결과이다",
                description:
                    "저녁의 편안함은 장식이 아닙니다. 안전, 조명, 예측 가능한 이동이 만들어내는 결과입니다.",
            },
            {
                title: "공공 공간은 사회적 인프라가 된다",
                description:
                    "해가 진 뒤에도 사람들이 밖에 머무를 때, 공공 공간은 더 강한 공동체 상호작용과 일상적 접근성을 지원합니다.",
            },
            {
                title: "단속 없이도 느껴지는 안전",
                description:
                    "가장 효과적인 거리는 행동을 처벌하기보다 위험을 줄이도록 설계되어 안전하게 느껴집니다.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "의도된 방식으로 사용되는 공공 공간",
            paragraphs: [
                "저녁은 사람들이 머물 만큼 안전하다고 느끼는지를 보여줍니다. 그 머묾은 편안함의 명확한 신호입니다."
            ],
            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "밝게 조명된 공공 공간에서 편안하게 앉고 걷는 태국 주민들",
            },
            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
        {
            headline: "밀도와 편안함",
            paragraphs: [
                "저녁의 편안함은 밀도가 살기 좋은 느낌인지, 아니면 피로를 유발하는지를 보여줍니다."
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "녹지와 차분한 저녁 활동으로 완화된 도시 밀도",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};