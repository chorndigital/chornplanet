import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialSystemBeforeTechnologyKO: ISmartCityLanding = {
    heroObservation: {
        headline: "기술보다 시스템",
        paragraphs: [
            "기술만으로는 스마트 시티가 만들어지지 않습니다.",
            "도시는 시스템이 일상의 행동을 조용히 형성할 때 더 지능적으로 작동합니다. 예를 들어, 더 안전한 횡단, 예측 가능한 흐름, 원활한 물류, 그리고 안정적으로 작동하는 공공 공간이 그렇습니다.",
            "기술은 인간의 삶을 측정 가능한 방식으로 개선할 때 가장 의미가 있습니다. 이러한 연결이 없다면 그 가치는 제한적입니다."
        ],
        image: {
            url: "/smart-city/editorial/system-before-technology.png",
            alt: "태국의 일상 속에서 조용히 작동하는 도시 인프라",
        },
        cta: {
            label: "로컬을 글로벌 프로토타입으로 탐색하기",
            href: "/smart-city/editorial-local-as-global-prototype",
        },
    },

    systemExplanation: {
        headline: "시스템 관점이 드러내는 것",
        paragraphs: [
            "시스템 관점은 결과에서 출발합니다. 편안함, 안전, 리듬, 접근성입니다.",
            "결과가 보인 이후에야 이를 지원하는 기술을 검토합니다. 이 과정은 겉보기에는 첨단이지만 실제 생활에는 영향이 제한적인 혁신을 추구하는 것을 막아줍니다."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "일상 이동을 눈에 띄지 않게 지원하는 이동성 조정 시스템",
        },
    },

    whyItMatters: {
        headline: "왜 기술보다 시스템이 중요한가",
        paragraphs: [
            "시스템에서 출발하는 도시는 확장 가능한 해법을 구축하는 경향이 있습니다. 기술에서 출발하는 도시는 종종 개별적인 구현에 그칩니다."
        ],
        points: [
            {
                title: "결과가 우선이다",
                description:
                    "편안함과 안전이 개선되지 않는다면, 기술은 본래의 목적을 달성하지 못합니다.",
            },
            {
                title: "보이지 않는 성공이 목표",
                description:
                    "효과적인 시스템은 일상에 자연스럽게 스며듭니다. 사람들은 도구를 의식하지 않고도 변화를 체감합니다.",
            },
            {
                title: "예방은 장기적 안정성을 지원한다",
                description:
                    "시스템적 접근은 피해가 발생한 이후가 아니라, 초기에 위험을 줄이는 데 기여합니다.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "이동성 조정",
            paragraphs: [
                "시스템은 시간, 흐름, 행동을 조정합니다. 기술은 이 조정 계층의 한 부분일 뿐입니다."
            ],
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "예측 가능한 이동을 지원하는 이동성 조정",
            },
            landingUrl: "/smart-city/system-explainers-mobility-coordination",
        },
        {
            headline: "효율성과 인간의 리듬",
            paragraphs: [
                "효율성은 인간의 속도를 덮어쓰는 것이 아니라, 이를 지원할 때 의미를 갖습니다."
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "인간의 리듬과 편안함에 맞춰진 도시 시스템",
            },
            landingUrl: "/smart-city/city-systems/efficiency-and-rhythm",
        },
    ],
};