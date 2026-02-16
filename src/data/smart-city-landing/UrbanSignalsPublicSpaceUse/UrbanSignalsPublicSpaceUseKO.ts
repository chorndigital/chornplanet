import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsPublicSpaceUseKO: ISmartCityLanding = {
    heroObservation: {
        headline: "의도된 방식으로 사용되는 공공 공간",
        paragraphs: [
            "공공 공간은 일상의 사용 방식을 통해 도시의 질을 드러냅니다.",
            "사람들이 자연스럽게 앉고, 멈추고, 대화하며 머무를 때, 이는 이동과 편안함, 효율성과 사회적 삶 사이의 균형이 형성되었음을 의미합니다.",
            "제대로 작동하는 도시의 가장 분명한 신호 중 하나는 속도가 아니라, 사람들이 안심하고 머물 수 있는지 여부입니다."
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "잘 설계된 공공 공간에서 편안하게 앉고 걷는 태국 주민들",
        },
        cta: {
            label: "예측 가능한 거리로 돌아가기",
            href: "/smart-city/urban-signals-predictable-street",
        },
    },

    systemExplanation: {
        headline: "공공 공간 사용이 보여주는 신호",
        paragraphs: [
            "사람들은 불편한 장소에 오래 머물지 않습니다. 안전, 그늘, 조명, 보행성, 그리고 차분한 거리 리듬이 제공되는 곳에서만 머무릅니다.",
            "공공 공간은 장식적인 요소가 아니라 시스템의 결과입니다. 제대로 작동할 때, 도시는 연출이나 프로그램 없이도 사회적으로 살아 움직입니다."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "조명과 보행로, 보행성을 통해 구성된 공공 공간의 오케스트레이션",
        },
    },

    whyItMatters: {
        headline: "이 신호가 중요한 이유",
        paragraphs: [
            "공공 공간이 자연스럽게 사용된다는 것은 도시가 장기적인 사회적 건강, 안전, 그리고 일상의 편안함을 지원하고 있음을 의미합니다."
        ],
        points: [
            {
                title: "편안함은 증거다",
                description:
                    "공공 공간의 일상적 사용은 정책적 선언을 넘어 시스템이 실제로 작동하고 있음을 보여줍니다.",
            },
            {
                title: "사회적 삶은 인프라다",
                description:
                    "자연스러운 모임은 도시의 연결성과 회복력을 강화합니다.",
            },
            {
                title: "안전은 체감된다",
                description:
                    "잘 작동하는 거리는 눈에 띄는 통제나 단속 없이도 안전하게 느껴집니다.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "이동과 멈춤",
            paragraphs: [
                "공공 공간은 이동이 멈춤을 허용할 때 비로소 사용 가능합니다. 멈춤은 핵심적인 시스템 신호입니다."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "인간 중심의 거리 시스템에서 이동과 멈춤의 균형",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
        {
            headline: "밀도와 편안함",
            paragraphs: [
                "밀도가 편안하게 유지될 때 사람들은 더 오래 외부에 머뭅니다. 편안함은 살기 좋은 밀도의 근본적인 전략입니다."
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "녹지와 공유 공간의 편안함으로 완화된 도시 밀도",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};