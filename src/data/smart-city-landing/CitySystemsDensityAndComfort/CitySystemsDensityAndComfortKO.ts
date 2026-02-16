import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsDensityAndComfortKO: ISmartCityLanding = {
    heroObservation: {
        headline: "밀도와 쾌적함",
        paragraphs: [
            "밀도 자체가 본질적으로 문제인 것은 아닙니다. 불편은 시스템 설계가 미흡할 때 발생합니다.",
            "도시는 공간, 녹지, 예측 가능한 이동 패턴을 통해 밀도를 조절할 때 더 살기 좋아집니다.",
            "스마트시티는 혼잡을 없애려 하기보다, 사람들이 공간을 함께 사용하더라도 쾌적하고 이동하기 쉬운 조건을 마련합니다."
        ],
        image: {
            url: "/smart-city/city-systems/density-and-comfort.png",
            alt: "녹지와 그늘진 보도, 차분한 거리 리듬이 있는 쾌적한 태국 도시 밀도",
        },
        cta: {
            label: "효율성과 리듬 살펴보기",
            href: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    },

    systemExplanation: {
        headline: "밀도 속에 쾌적함을 설계하는 방법",
        paragraphs: [
            "쾌적함은 장식이 아니라, 시스템이 조정되어 작동한 결과입니다.",
            "그늘, 보행 친화적 경계, 조명, 녹지, 공공공간의 리듬은 밀도가 스트레스로 느껴지는지, 혹은 지지적으로 느껴지는지를 좌우합니다. 이러한 시스템이 일관되게 작동하면, 높은 밀도에서도 차분함과 기능성을 유지할 수 있습니다."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "녹지와 보행 공간을 통해 쾌적함을 지원하는 도시 설계 시스템",
        },
    },

    whyItMatters: {
        headline: "밀도와 쾌적함이 중요한 이유",
        paragraphs: [
            "더 높은 밀도 수준에서도 쾌적함을 유지하는 도시는 지속가능성, 안전, 사회적 상호작용을 보다 효과적으로 뒷받침하는 경향이 있습니다."
        ],
        points: [
            {
                title: "쾌적함은 긴장을 줄인다",
                description:
                    "밀집 환경이 질서 있고 차분하게 느껴지면, 사람들은 공간을 더 협력적으로 공유하기 쉽습니다.",
            },
            {
                title: "거주성은 확장 압력을 줄인다",
                description:
                    "밀도를 쾌적하게 수용할 수 있는 도시는 외곽으로의 확장 필요를 제한할 수 있습니다.",
            },
            {
                title: "녹지는 인프라로 기능한다",
                description:
                    "그늘, 나무, 완화된 경계는 온도 조절, 이동 패턴, 전반적 경험에 영향을 주는 기능적 요소입니다.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "공공공간 오케스트레이션",
            paragraphs: [
                "쾌적함은 보도, 조명, 거리 활동이 시간에 따라 어떻게 조정되는지에 영향을 받습니다."
            ],
            image: {
                url: "/smart-city/system-explainers/public-space-orchestration.png",
                alt: "쾌적함과 사회적 리듬을 지원하는 공공공간 오케스트레이션",
            },
            landingUrl: "/smart-city/system-explainers-public-space-orchestration",
        },
        {
            headline: "혼합 모빌리티는 글로벌 기본값이 되어가고 있다",
            paragraphs: [
                "밀집한 거리는 공존을 필요로 합니다. 혼합 모빌리티는 선택적 설계가 아니라, 형성되고 있는 글로벌 조건을 반영합니다."
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "공존을 통해 밀도를 지원하는 혼합 모빌리티",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    ],
};