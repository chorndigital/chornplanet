import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const GlobalPatternsUrbanLogisticsKO: ISmartCityLanding = {
    heroObservation: {
        headline: "물류는 조용히 도시의 리듬을 바꾸고 있다",
        paragraphs: [
            "물품은 도시를 통해 지속적으로 이동하지만, 대부분의 경우 눈에 띄지 않습니다.",
            "많은 지역에서 물류는 크고 눈에 띄는 인프라에서 더 작고 조용한 시스템으로 이동하고 있습니다. 예를 들어 마이크로 전기차, 배송 로봇, 드론, 시간대 기반 분산 배송 등이 있습니다.",
            "물류가 부드럽게 통합된 도시에서는 이동이 증가하더라도 일상생활이 더 편안하게 느껴지는 경향이 있습니다."
        ],
        image: {
            url: "/smart-city/global-patterns/urban-logistics.png",
            alt: "현대적인 도시 거리에서 조용히 작동하는 도시 물류",
        },
        cta: {
            label: "예측 가능한 거리로 돌아가기",
            href: "/smart-city/global-patterns-predictable-shared-street",
        },
    },

    systemExplanation: {
        headline: "물류는 도시를 어떻게 변화시키는가",
        paragraphs: [
            "물류는 속도보다 리듬을 통해 도시를 변화시킵니다.",
            "배송이 시간에 맞춰 조정되고 분산되며 조율될 때, 거리는 덜 혼잡하게 느껴지고 일상 이동은 더 부드러워집니다. 잘 통합된 물류 시스템은 도시 환경의 시각적 중심이 되지 않으면서 마찰을 줄입니다."
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "일상적인 도시 이동에 통합된 소규모 물류",
        },
    },

    whyItMatters: {
        headline: "왜 이 글로벌 패턴이 중요한가",
        paragraphs: [
            "물류는 점점 더 일상생활의 배경 인프라가 되고 있습니다. 이를 신중하게 통합하는 도시는 활동량이 증가하더라도 차분함을 유지할 수 있습니다."
        ],
        points: [
            {
                title: "배송은 거리의 상시 요소가 되었다",
                description:
                    "물품은 하루 종일 이동합니다. 핵심은 배송 활동이 거리를 방해하는지, 아니면 자연스럽게 녹아드는지입니다.",
            },
            {
                title: "조용한 통합은 편안함을 지킨다",
                description:
                    "운영 효율성은 공공 공간에 불필요한 소음, 혼잡, 갈등을 가져와서는 안 됩니다.",
            },
            {
                title: "리듬은 도시 안정성을 뒷받침한다",
                description:
                    "물류가 시간과 공간 측면에서 조율될수록, 도시는 더 예측 가능하고 이동하기 쉬운 곳으로 느껴집니다.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "물류가 일상에 자연스럽게 스며드는 모습",
            paragraphs: [
                "배송 로봇과 소규모 물류가 주목을 지배하지 않고 작동할 때, 일상의 도시 장면은 차분하고 읽기 쉬운 상태를 유지합니다."
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "태국의 일상적인 거리 생활에 통합된 물류",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
        {
            headline: "효율성과 인간의 리듬",
            paragraphs: [
                "도시 효율성이 의미를 갖는 것은 시스템의 타이밍이 인간의 일상 리듬과 정렬되고 이를 덮어쓰지 않을 때입니다."
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "인간의 리듬과 예측 가능한 타이밍에 맞춰진 도시 인프라",
            },
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    ],
};