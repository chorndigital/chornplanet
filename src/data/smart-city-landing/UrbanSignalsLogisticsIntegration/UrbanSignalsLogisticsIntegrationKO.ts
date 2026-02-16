import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsLogisticsIntegrationKO: ISmartCityLanding = {
    heroObservation: {
        headline: "일상 속으로 스며드는 물류",
        paragraphs: [
            "물류는 도시의 핵심 시스템이며, 잘 통합된 물류는 종종 거의 인식되지 않습니다.",
            "배송 로봇, 배송 인력, 소형 전기 차량이 과도한 주목 없이 운영될 때, 이는 물류가 강요된 것이 아니라 통합되었음을 보여줍니다.",
            "스마트 시티는 배송 시스템이 얼마나 눈에 띄는지로 정의되지 않습니다. 물류가 거리의 삶을 방해하지 않고 일상의 리듬에 맞게 작동하는지로 정의됩니다."
        ],
        image: {
            url: "/smart-city/urban-signals/urban-logistics.png",
            alt: "배송 로봇과 소형 전기 물류가 일상 속에 자연스럽게 스며든 태국의 도시 거리",
        },
        cta: {
            label: "공공 공간 사용 살펴보기",
            href: "/smart-city/urban-signals-public-space-use",
        },
    },

    systemExplanation: {
        headline: "물류 통합이 보여주는 신호",
        paragraphs: [
            "통합된 물류는 인간의 편안함을 해치지 않으면서 물자가 지속적으로 이동할 수 있음을 의미합니다.",
            "이를 위해서는 시간 조율, 경로 설정, 그리고 시스템 간의 협력이 필요합니다. 물류 시스템은 주변부에서 조용히 작동하는 동안, 거리는 보행자에게 읽기 쉬워야 합니다."
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "일상적인 이동 뒤에서 조용히 작동하는 도시 물류 시스템",
        },
    },

    whyItMatters: {
        headline: "이 신호가 중요한 이유",
        paragraphs: [
            "물류 통합은 도시 시스템의 성숙도를 보여주는 신호입니다. 거리를 인프라 구역으로 바꾸지 않으면서도 일상적인 수요를 감당할 수 있음을 나타냅니다."
        ],
        points: [
            {
                title: "소음 없는 효율성",
                description:
                    "잘 통합된 물류는 공공 공간의 평온함을 유지하면서 마찰을 줄입니다.",
            },
            {
                title: "거리는 여전히 사람의 공간",
                description:
                    "물류가 자연스럽게 스며들 때, 보행자와 사회적 활동은 거리의 주된 정체성으로 남습니다.",
            },
            {
                title: "타이밍은 예방적 설계를 지원한다",
                description:
                    "조율된 배송 리듬은 혼잡이 발생하기 전에 정체의 급증을 줄일 수 있습니다.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "물류는 조용히 도시의 리듬을 바꾸고 있다",
            paragraphs: [
                "전 세계의 도시에서 물류는 더 작고 조용한 시스템으로 이동하며 일상의 움직임에 영향을 주고 있습니다."
            ],
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "일상의 리듬을 변화시키는 도시 물류의 글로벌 패턴",
            },
            landingUrl: "/smart-city/global-patterns-urban-logistics",
        },
        {
            headline: "효율성과 인간의 리듬",
            paragraphs: [
                "물류 통합은 도시 시스템이 속도를 우선시하기보다 인간의 리듬에 맞춰질 때 가장 잘 작동합니다."
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "인간의 리듬에 맞춰 조율된 효율성을 갖춘 현대 도시 시스템",
            },
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    ],
};