import {IEditorialPositioning} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const EditorialPositioningDataKO: IEditorialPositioning = {
    headline: "일상에서 시스템 통찰로",
    paragraphs: [
        "이 플랫폼은 도시의 미래를 예측하지 않습니다. 사람들의 일상을 통해 도시가 어떻게 작동하는지를 관찰합니다.",
        "루틴, 이동, 멈춤, 그리고 조정에 집중하면 도시 시스템은 기술이나 정책의 언어로 환원되지 않고도 드러납니다.",
        "목표는 해법을 홍보하는 것이 아니라, 도시·문화·규모를 넘어 공유 가능한 이해를 지원하는 것입니다."
    ],
    principles: [
        {
            title: "인간 중심 관찰",
            description:
                "도시 시스템은 실제 경험을 통해 이해됩니다. 인간의 루틴과 일상적 의사결정은 부차적 결과가 아니라 1차적 신호로 다뤄집니다.",
            image: {
                url: "/smart-city/editorial/human-first-observation.png",
                alt: "차분한 도시 거리에서 움직이는 사람들이 도시 시스템의 주요 신호가 되는 모습",
            },
            landingUrl: "/smart-city/editorial-human-first-observation",
        },
        {
            title: "기술보다 시스템",
            description:
                "기술은 행동, 안전, 접근성, 편안함을 의미 있게 형성할 때에만 고려되며, 독립된 기능으로 다루지 않습니다.",
            image: {
                url: "/smart-city/editorial/system-before-technology.png",
                alt: "일상의 배경에서 조용히 작동하는 도시 이동과 인프라",
            },
            landingUrl: "/smart-city/editorial/system-before-technology",
        },
        {
            title: "지역을 글로벌 프로토타입으로",
            description:
                "중간 규모의 도시는 살아 있는 실험실로 기능할 수 있습니다. 지역의 패턴은 세심한 관찰을 통해 더 넓은 도시 시스템으로 확장될 수 있습니다.",
            image: {
                url: "/smart-city/editorial/local-as-global-prototype.png",
                alt: "전 세계 도시가 공유하는 패턴을 반영하는 지역 거리 장면",
            },
            landingUrl: "/smart-city/editorial-local-as-global-prototype",
        },
    ],
}
