import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowMiddayKO: ISmartCityLanding = {
    heroObservation: {
        headline: "한낮 흐름 — 밀도와 조율",
        paragraphs: [
            "한낮은 도시의 복잡성이 가장 분명하게 드러나는 시간입니다.",
            "사람, 물류, 배송, 서비스, 이동이 같은 시간에 겹쳐집니다. 거리는 혼잡해지지만, 일상은 여전히 차분하게 느껴져야 합니다.",
            "스마트 시티는 밀도를 없애는 것으로 정의되지 않습니다. 밀도가 조율되어 있다고 느껴지는지에 의해 드러납니다."
        ],
        image: {
            url: "/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
            alt: "보행자, 스쿠터, 자전거, 배송 로봇, 자율주행 전기 셔틀이 함께 움직이는 태국의 혼잡한 한낮 도시 거리",
        },
        cta: {
            label: "저녁 흐름 보기",
            href: "/smart-city/human-daily-flow-evening",
        },
    },

    systemExplanation: {
        headline: "사람들이 보지 못하는 한낮의 시스템",
        paragraphs: [
            "밀도가 최고조에 달할 때 도시는 여러 층위를 조율합니다. 물류 타이밍, 교통 신호, 보행 흐름, 배송 경로, 그리고 공공 공간의 공유 방식입니다.",
            "이러한 시스템이 잘 작동하면 사람들은 이를 의식할 필요가 없습니다. 단지 이동이 더 예측 가능하고 덜 긴장된다고 느낄 뿐입니다."
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "일상 생활과 나란히 조용히 작동하는 도시 물류",
        },
    },

    whyItMatters: {
        headline: "왜 한낮 흐름이 중요한가",
        paragraphs: [
            "한낮은 도시가 스트레스나 혼란 없이 대규모의 일상을 지원할 수 있는지를 보여줍니다."
        ],
        points: [
            {
                title: "밀도는 시스템 지능을 시험한다",
                description:
                    "한낮은 조율이 가장 중요한 시간입니다. 많은 활동이 동시에 겹칠 때 시스템은 조용하고 신뢰할 수 있어야 합니다.",
            },
            {
                title: "물류는 눈에 띄지 않게 통합되어야 한다",
                description:
                    "배송이 거리를 지배해서는 안 됩니다. 편안함을 해치지 않으면서 일상 속으로 자연스럽게 녹아들어야 합니다.",
            },
            {
                title: "공존은 새로운 기본값이다",
                description:
                    "스쿠터, 보행자, 자전거, 로봇, 차량은 우위를 다투기보다 자연스럽게 공존할 수 있어야 합니다.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "일상 속으로 녹아드는 물류",
            paragraphs: [
                "배송이 시선을 지배하지 않고 작동할 때, 도시는 최고 밀도에서도 차분하게 느껴질 수 있습니다."
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "태국 거리 환경 속으로 자연스럽게 녹아드는 배송 로봇과 소형 전기 물류",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
        {
            headline: "혼합 이동은 기본값이 되고 있다",
            paragraphs: [
                "한낮은 혼합 이동이 의도적으로 지원되는지, 아니면 우연에 맡겨지는지를 드러냅니다. 그 차이는 편안함으로 나타납니다."
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "현대 도시 거리에서 공존하는 다양한 이동 수단",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    ],
};