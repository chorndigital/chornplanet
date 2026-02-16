import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const MobilityMixedMobilityKO: ISmartCityLanding = {
    heroObservation: {
        headline: "혼합 이동의 공존",
        paragraphs: [
            "현대의 거리는 더 이상 하나의 이동 수단만을 중심으로 설계되지 않습니다.",
            "스쿠터, 자전거, 보행자, 배송 로봇, 자율주행 차량은 점점 더 일상적인 거리 풍경의 일부가 되고 있습니다.",
            "스마트 시티는 모든 것을 분리하는 것으로 정의되지 않습니다. 공존이 자연스럽고 안전하게 느껴지는 방식으로 정의됩니다."
        ],
        image: {
            url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
            alt: "보행자, 스쿠터, 자전거 이용자, 자율주행 셔틀이 자연스럽게 공존하는 태국의 거리",
        },
        cta: {
            label: "Mobility Focus로 돌아가기",
            href: "/smart-city/mobility-focus-mixed-mobility",
        },
    },

    systemExplanation: {
        headline: "공존이 작동하는 조건",
        paragraphs: [
            "혼합 이동은 어느 한 이동 수단이 시선을 지배하지 않을 때 작동합니다. 거리는 일관된 설계를 통해 읽기 쉬워집니다. 속도의 조화, 명확한 우선순위 신호, 그리고 시간에 따라 조정될 수 있는 공간이 핵심입니다.",
            "잘 설계되면 공존은 자연스럽고 부담이 없습니다. 사람들은 시스템을 의식하지 않고 그저 이동하게 됩니다."
        ],
        image: {
            url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
            alt: "현대적인 거리에서 차분하게 공존하는 다양한 이동 수단",
        },
    },

    whyItMatters: {
        headline: "왜 혼합 이동이 중요한가",
        paragraphs: [
            "혼합 이동을 지원하는 도시는 혼잡에 대한 압력을 줄이고 더 살기 좋은 공공 공간을 만들 수 있습니다."
        ],
        points: [
            {
                title: "이동 수단의 다양성은 회복력이다",
                description:
                    "한 가지 이동 수단이 느려져도 다른 수단이 도시의 리듬을 유지할 수 있습니다. 공존은 중복성을 만들어냅니다.",
            },
            {
                title: "지배가 줄수록 편안함이 늘어난다",
                description:
                    "어느 한 차량 유형이 공간을 통제하지 않을 때 거리는 더 차분하게 느껴질 수 있습니다.",
            },
            {
                title: "이 변화는 이미 보이기 시작했다",
                description:
                    "혼합 이동은 세계 여러 도시의 일상적인 거리 행동에서 점점 더 뚜렷하게 나타나고 있습니다.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "혼합 이동은 세계적 기본값이 되고 있다",
            paragraphs: [
                "문화가 달라도 거리는 엄격한 분리보다 공유된 공존 패턴으로 수렴하고 있습니다."
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "여러 도시에서 나타나는 세계적 혼합 이동 패턴",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
        {
            headline: "일상 속으로 녹아드는 물류",
            paragraphs: [
                "공존에는 배송 시스템도 포함됩니다. 통합이 잘 된 도시는 공공 공간을 방해하지 않고 물류를 운영할 수 있습니다."
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "일상적인 도시 생활 속으로 자연스럽게 녹아든 배송 로봇과 소형 전기 물류",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
    ],
};