import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const WhenHumanLifeShapesTheCityKO: ISmartCityLanding = {
    heroObservation: {
        headline: "인간의 삶이 도시를 만든다",
        paragraphs: [
            "도시는 기술만으로 정의되지 않으며, 사람들이 매일 어떻게 이동하고 멈추고 상호작용하는지에 의해 형성됩니다.",
            "지역의 일상 루틴을 관찰하면, 서로 다른 도시와 맥락에서 반복적으로 나타나는 도시 패턴을 발견할 수 있습니다."
        ],
        image: {
            url: "/smart-city/hero/when-human-life-shapes-the-city.png",
            alt: "일상의 삶이 차분한 스마트시티 거리를 형성하는 모습"
        },
        cta: {
            label: "패턴 살펴보기",
            href: `/smart-city/from-local-life-to-global-pattern`
        }
    },

    systemExplanation: {
        headline: "일상 아래의 시스템",
        paragraphs: [
            "도시 시스템은 일상의 설계 선택을 통해 이동, 접근성, 안전을 조용히 조율합니다.",
            "잘 설계된 경우 이러한 시스템은 눈에 띄지 않게 작동하면서도 필수적인 기반이 됩니다."
        ]
    },

    whyItMatters: {
        headline: "왜 중요한가",
        paragraphs: [
            "인간의 리듬에 맞춰 설계된 도시는 보다 지속가능하게 확장되며, 장기적인 안정성을 유지하는 경향이 있습니다."
        ]
    },

    relatedSignals: [
        {
            headline: "예측 가능한 공유 거리",
            paragraphs: [
                "예측 가능성을 기반으로 설계된 거리는 마찰을 줄이고 공유된 신뢰를 지원합니다."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "예측 가능한 공유 거리"
            },
            cta: {
                label: "신호 읽기",
                href: `/smart-city/urban-signals-predictable-street`
            }
        }
    ],
}