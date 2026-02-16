import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialLocalAsGlobalPrototypeKO: ISmartCityLanding = {
    heroObservation: {
        headline: "로컬을 글로벌 프로토타입으로",
        paragraphs: [
            "중간 규모 도시는 도시 시스템을 관찰하기에 보다 적합한 경우가 많습니다.",
            "이러한 도시는 시스템의 압력을 드러낼 만큼 충분히 밀집되어 있으면서도, 일상적인 인간 행동을 통해 이해하기 쉬운 상태를 유지합니다.",
            "지역 거리의 세심한 관찰은 이후 다양한 도시 맥락에서 나타나는 패턴을 파악하는 데 도움이 됩니다."
        ],
        image: {
            url: "/smart-city/editorial/local-as-global-prototype.png",
            alt: "전 세계 여러 도시에서 관찰되는 패턴을 반영하는 태국의 지역 거리",
        },
        cta: {
            label: "스마트 시티 개요로 돌아가기",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
    },

    systemExplanation: {
        headline: "왜 중간 규모 도시는 더 많은 것을 드러내는가",
        paragraphs: [
            "대도시는 규모로 인해 시스템이 가려질 수 있습니다. 반면 중간 규모 도시는 횡단, 대기, 배송, 거리 수준의 조정과 같은 일상 활동을 통해 시스템을 더 쉽게 드러냅니다.",
            "이러한 환경은 더 크거나 복잡한 도시로 확산되기 전에 반복되는 패턴을 명확히 관찰할 수 있게 합니다."
        ],
        image: {
            url: "/smart-city/local-to-global/local-street-daily-routine.png",
            alt: "도시 시스템의 지표로서 인간 행동을 보여주는 지역 거리의 일상",
        },
    },

    whyItMatters: {
        headline: "로컬을 글로벌 프로토타입으로 보는 이유",
        paragraphs: [
            "도시의 수렴은 계획만으로 이루어지지 않습니다. 일상에서 효과적으로 작동하는 로컬 패턴이 반복되며 형성됩니다."
        ],
        points: [
            {
                title: "로컬 패턴은 자연스럽게 확산될 수 있다",
                description:
                    "하나의 일상이 잘 작동하면, 공식적인 조정 없이도 다른 지역에서 채택될 수 있습니다.",
            },
            {
                title: "가시성은 실질적인 학습을 지원한다",
                description:
                    "중간 규모 도시는 추상화가 아닌 직접적인 관찰을 통해 도시 시스템을 이해할 수 있게 합니다.",
            },
            {
                title: "로컬 정체성과 글로벌 원칙은 공존할 수 있다",
                description:
                    "도시는 문화적 특수성을 유지하면서도 여러 지역에서 관찰되는 시스템 행동을 표현할 수 있습니다.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "로컬의 삶에서 글로벌 패턴으로",
            paragraphs: [
                "유사한 로컬 장면이 여러 도시에 나타날 때, 이는 공유된 시스템 행동을 나타냅니다."
            ],
            image: {
                url: "/smart-city/local-to-global/global-urban-pattern.png",
                alt: "공통된 도시 패턴을 보여주는 로컬 장면 비교",
            },
            landingUrl: "/smart-city/from-local-life-to-global-pattern",
        },
        {
            headline: "일상 도시에서 나타나는 글로벌 패턴",
            paragraphs: [
                "예측 가능성, 혼합 이동성, 그리고 눈에 띄지 않는 물류는 다양한 도시 환경에서 점점 더 관찰되고 있습니다."
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "여러 도시에서 관찰되는 예측 가능한 공유 거리 패턴",
            },
            landingUrl: "/smart-city/global-patterns/predictable-shared-street",
        },
    ],
};