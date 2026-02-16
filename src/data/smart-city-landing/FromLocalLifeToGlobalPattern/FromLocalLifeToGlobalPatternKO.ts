import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const FromLocalLifeToGlobalPatternKO: ISmartCityLanding = {
    heroObservation: {
        headline: "로컬의 삶에서 글로벌 패턴으로",
        paragraphs: [
            "도시의 삶은 익숙한 거리, 습관, 일상 루틴에 의해 형성되며 로컬한 것으로 느껴지는 경우가 많습니다.",
            "그러나 유사한 장면이 서로 다른 도시, 문화, 규모에서 반복될 때, 이는 도시가 어떻게 작동하는 경향이 있는지를 보여주는 비교적 근거가 됩니다.",
            "이는 예측이 아닙니다. 비교입니다. 일상의 순간을 나란히 놓아 관찰함으로써, 그 아래에 있는 시스템이 드러납니다."
        ],
        image: {
            url: "/smart-city/local-to-global/global-urban-pattern.png",
            alt: "여러 도시에서 공통으로 나타나는 이동 패턴을 시사하는 일상 거리 장면",
        },
        cta: {
            label: "글로벌 패턴 탐색하기",
            href: "/smart-city/global-patterns-predictable-shared-street",
        },
    },

    systemExplanation: {
        headline: "도시가 비교 가능해지는 방식",
        paragraphs: [
            "도시는 유사한 유형의 순간을 관찰할 때 비교할 수 있습니다. 예를 들어 횡단, 대기, 멈춤, 배송, 공존과 같은 장면입니다.",
            "로컬한 행동이 여러 지역에서 반복되면, 그것은 개인적 선호를 넘어 인식 가능한 신호가 되며, 일상 아래 존재하는 공통된 구조적 조건을 보여줍니다."
        ],
        image: {
            url: "/smart-city/editorial/local-as-global-prototype.png",
            alt: "더 넓은 도시 시스템을 이해하기 위한 참고로 사용되는 로컬 거리 장면",
        },
    },

    whyItMatters: {
        headline: "왜 로컬에서 글로벌이 중요한가",
        paragraphs: [
            "반복되는 패턴은 공식 정책보다 더 빠르게 확산될 수 있습니다. 하나의 로컬 루틴이 여러 도시에서 나타난다면, 이는 유사한 도시 조건에 대한 공통된 반응을 의미합니다."
        ],
        points: [
            {
                title: "일상 거리에는 시스템 조건이 반영된다",
                description:
                    "도시의 질을 이해하는 신뢰할 수 있는 방법 중 하나는 평범한 거리에서 평범한 순간에 무엇이 일어나는지를 관찰하는 것입니다.",
            },
            {
                title: "패턴은 조정 없이도 나타날 수 있다",
                description:
                    "유사한 거리 행동은 비슷한 제약과 필요에 의해, 서로 다른 도시에서 독립적으로 나타날 수 있습니다.",
            },
            {
                title: "이해는 대화를 가능하게 한다",
                description:
                    "패턴을 관찰하는 것은 특정 해법이나 이념을 홍보하지 않고도 도시 간의 공통 이해를 형성하는 데 도움이 됩니다.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "일상 도시에서 나타나는 글로벌 패턴",
            paragraphs: [
                "유사한 신호가 서로 다른 문화적 환경에서 나타날 때, 이는 공통된 운영 행동으로의 수렴을 시사할 수 있습니다."
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "여러 도시에서 관찰되는 예측 가능한 이동 패턴을 보여주는 차분한 공유 거리",
            },
            landingUrl: "/smart-city/global-patterns-predictable-shared-street",
        },
        {
            headline: "로컬을 글로벌 프로토타입으로",
            paragraphs: [
                "중간 규모 도시는 거리 행동이 더 잘 보이고 읽히기 때문에, 반복되는 패턴을 관찰하기가 더 쉬운 경우가 많습니다."
            ],
            image: {
                url: "/smart-city/editorial/local-as-global-prototype.png",
                alt: "전 세계 여러 도시에서 관찰되는 패턴을 반영하는 로컬 거리 생활",
            },
            landingUrl: "/smart-city/editorial-local-as-global-prototype",
        },
    ],
};