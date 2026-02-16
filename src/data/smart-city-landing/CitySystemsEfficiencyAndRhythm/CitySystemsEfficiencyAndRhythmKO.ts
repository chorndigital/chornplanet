import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsEfficiencyAndRhythmKO: ISmartCityLanding = {
    heroObservation: {
        headline: "효율성과 인간의 리듬",
        paragraphs: [
            "효율성은 시스템이 사람들에게 일상이 합리적으로 허용하는 수준을 넘어서는 속도를 요구할 때 문제가 될 수 있습니다.",
            "도시는 시스템이 인간의 리듬에 맞춰질 때 가장 잘 작동합니다. 예측 가능한 시간 운영, 조율된 이동, 그리고 눈에 띄지 않는 물류가 핵심입니다.",
            "목표는 최대 속도가 아니라, 안정적이고 신뢰할 수 있으며 숨 쉴 수 있는 도시입니다."
        ],
        image: {
            url: "/smart-city/city-systems/efficiency-and-rhythm.png",
            alt: "부드러운 이동과 예측 가능한 일상 리듬을 지원하는 태국 도시 인프라",
        },
        cta: {
            label: "도시 시스템으로 돌아가기",
            href: "/smart-city/city-systems-movement-and-pause",
        },
    },

    systemExplanation: {
        headline: "효율성이 실제로 의미하는 것",
        paragraphs: [
            "효율성은 속도만으로 정의되지 않으며, 마찰을 줄이는 것으로 정의됩니다.",
            "교통, 횡단, 물류, 공공 서비스가 시간적으로 조율되면 도시는 예측 가능해집니다. 사람들은 시스템 안에서 서두르기보다 시스템을 신뢰하게 되고, 도시는 지속적으로 움직이면서도 차분함을 유지할 수 있습니다."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "속도를 강요하지 않으면서 부드러운 이동을 가능하게 하는 모빌리티 조율",
        },
    },

    whyItMatters: {
        headline: "효율성과 리듬이 중요한 이유",
        paragraphs: [
            "인간의 리듬을 존중하는 도시는 쾌적함을 해치지 않으면서 스트레스를 줄이고, 지속적인 생산성을 뒷받침하는 경향이 있습니다."
        ],
        points: [
            {
                title: "예측 가능성은 불안을 줄인다",
                description:
                    "이동의 타이밍을 예측할 수 있으면, 사람들은 혼란에 지속적으로 반응할 필요가 줄어들어 더 차분해질 수 있습니다.",
            },
            {
                title: "속도는 성과와 동일하지 않다",
                description:
                    "도시가 빠르게 작동하더라도 부담스럽게 느껴질 수 있습니다. 효과적인 성과는 종종 안정적이고 눈에 띄지 않는 형태로 경험됩니다.",
            },
            {
                title: "물류는 배경 인프라로 남아야 한다",
                description:
                    "잘 설계된 시스템은 주의를 요구하거나 공공 공간을 압도하지 않으면서도 일상생활을 지속적으로 지원합니다.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "모빌리티 조율",
            paragraphs: [
                "신호, 차량, 보행자, 대중교통이 시간적으로 정렬되면 이동은 통제된 느낌보다 자연스럽고 수월하게 느껴집니다."
            ],
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "부드러운 도시 리듬을 지원하는 모빌리티 조율 시스템",
            },
            landingUrl: "/smart-city/system-explainers-mobility-coordination",
        },
        {
            headline: "물류는 조용히 도시 리듬을 재구성하고 있다",
            paragraphs: [
                "효율적인 물류는 눈에 보이는 속도보다는, 타이밍과 낮은 가시성을 통해 도시의 흐름에 영향을 줍니다."
            ],
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "현대적인 도심 거리에서 조용히 작동하는 도시 물류",
            },
            landingUrl: "/smart-city/global-patterns-urban-logistics",
        },
    ],
};