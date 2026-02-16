import {IHeroSection} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const HeroSectionDataKO: IHeroSection = {
    headline: "인간의 삶이 도시를 만든다",
    paragraph:
        "도시는 기술, 인프라, 정책만으로 정의되지 않습니다. 사람들이 어떻게 이동하고, 멈추고, 모이고, 일상을 살아가는지가 도시를 형성합니다. 스마트 도시는 시스템이 아니라, 도시의 작동 방식을 조용히 드러내는 일상의 루틴에서 시작됩니다.",

    softTexts: [
        {
            title: "미래에 대한 비전이 아니다",
            description:
                "이는 이미 일어나고 있는 일상의 관찰입니다. 새로운 이동 방식, 조용히 작동하는 시스템, 그리고 인간의 행동이 교차하고 있습니다."
        },
        {
            title: "지역의 순간, 세계적 의미",
            description:
                "한 거리에서 벌어지는 일은 종종 전 세계 도시들이 공유하는 패턴을 반영합니다."
        }
    ],

    image: {
        url: "/smart-city/hero-section/city-shaped-by-people-move.png",
        alt: "사람들, 자율 이동 수단, 도시 시스템이 자연스럽게 공존하는 일상의 도시 풍경",
    },
    purpose: "관점을 제시하고 기능을 설명하지 않음",
    narrativeRole: "이 플랫폼이 기술이 아닌 인간의 삶을 통해 도시를 관찰함을 전달",
    section: "Hero Section",
    category: "Smart City Media",
    editorialTone: "observational",
    signalFocus: ["mobility", "safety", "density", "coordination"],
    landingUrl: "/smart-city/when-human-life-shapes-the-city",
};