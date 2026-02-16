import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const GlobalPatternsMixedMobilityCoexistenceKO: ISmartCityLanding = {
    heroObservation: {
        headline: "혼합 이동은 글로벌 기준이 되고 있다",
        paragraphs: [
            "도보, 자전거, 스쿠터, 소형 전기차, 그리고 배송 로봇은 도시의 일상 이동에서 점점 더 흔히 관찰되고 있습니다.",
            "많은 도시에서 도로는 혼합 이동 환경으로 변화하고 있으며, 엄격한 분리보다 공존이 일상의 사용 방식을 형성하고 있습니다.",
            "이는 도시 공간이 사용되고 공유되는 방식에서 관찰 가능한 변화를 반영합니다."
        ],
        image: {
            url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
            alt: "도시 거리에서 여러 이동 수단이 차분하게 공존하는 모습",
        },
        cta: {
            label: "물류 패턴 탐색하기",
            href: "/smart-city/global-patterns-urban-logistics",
        },
    },

    systemExplanation: {
        headline: "왜 공존이 여러 도시에서 나타나는가",
        paragraphs: [
            "도시 도로는 모든 이동 수단을 완전히 분리할 만큼 충분한 공간을 갖추지 못한 경우가 많습니다. 밀도가 증가할수록 공유 사용이 더 일반적이 됩니다.",
            "갈등과 편안함의 차이는 시스템 설계에서 발생합니다. 속도 조정, 명확한 우선순위 신호, 읽기 쉬운 횡단, 그리고 지속적인 통제에 의존하지 않으면서 마찰을 줄이는 거리 환경이 이에 해당합니다."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "혼합 이동 공존을 가능하게 하는 공공 공간 조정",
        },
    },

    whyItMatters: {
        headline: "왜 이 글로벌 패턴이 중요한가",
        paragraphs: [
            "혼합 이동은 제한된 공간과 다양한 이동 수요에 도시가 적응하는 방식을 보여줍니다. 잘 설계된 공존은 안전, 안정감, 그리고 기능적 효율을 지원합니다."
        ],
        points: [
            {
                title: "공존은 수용력을 지원한다",
                description:
                    "도로가 여러 이동 수단을 수용하면 흐름이 더 고르게 분산되어, 하나의 시스템에 병목이 집중되는 것을 줄일 수 있습니다.",
            },
            {
                title: "균형 잡힌 사용은 편안함을 높인다",
                description:
                    "어느 한 이동 수단도 도로를 지배하지 않을 때, 사람들은 더 안전하다고 느끼며 공공 공간은 더 활용 가능해집니다.",
            },
            {
                title: "공유 도로는 공유 사용을 반영한다",
                description:
                    "혼합 이동은 단순한 교통 조건이 아니라, 공간이 어떻게 공동으로 사용되는지를 보여주는 표현이기도 합니다.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "혼합 이동의 공존",
            paragraphs: [
                "도로는 점점 더 도보, 스쿠터, 자전거, 로봇, 전기차가 함께 작동하는 공유 환경으로 관찰되고 있습니다."
            ],
            image: {
                url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                alt: "현대적인 태국 거리 장면에서의 혼합 이동 공존",
            },
            landingUrl: "/smart-city/mobility-focus-mixed-mobility",
        },
        {
            headline: "밀도와 편안함",
            paragraphs: [
                "공존은 고밀도 환경에서 편안함을 유지하는 데 역할을 합니다. 공유 사용 설계가 없으면 밀도는 마찰로 이어질 수 있습니다."
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "설계와 공유 이동을 통해 유지되는 편안한 밀도",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};