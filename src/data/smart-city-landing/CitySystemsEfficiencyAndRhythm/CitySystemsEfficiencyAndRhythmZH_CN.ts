import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsEfficiencyAndRhythmZH_CN: ISmartCityLanding = {
    heroObservation: {
        headline: "效率与人的节奏",
        paragraphs: [
            "当系统要求人们以超出日常生活合理承受范围的速度移动时，效率就可能变得问题化。",
            "当城市系统与人的节奏保持一致时，城市运行最为有效：可预测的时间安排、协调的流动，以及不打扰生活的物流体系。",
            "目标不是最大速度，而是让城市呈现出稳定、可靠且具有呼吸感的状态。"
        ],
        image: {
            url: "/smart-city/city-systems/efficiency-and-rhythm.png",
            alt: "支持顺畅出行与可预测日常节奏的泰国城市基础设施",
        },
        cta: {
            label: "返回城市系统",
            href: "/smart-city/city-systems-movement-and-pause",
        },
    },

    systemExplanation: {
        headline: "效率真正意味着什么",
        paragraphs: [
            "效率并不只由速度定义，而是由摩擦的减少来定义。",
            "当交通、过街、物流与公共服务在时间上实现协调，城市便会变得可预测。人们可以依赖系统，而不必在其中匆忙奔走，使城市在持续运转的同时保持相对平静。"
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "在不强迫速度的情况下实现顺畅流动的出行协同",
        },
    },

    whyItMatters: {
        headline: "为何效率与节奏重要",
        paragraphs: [
            "尊重人的节奏的城市往往能够降低压力，并在不牺牲舒适性的前提下支持长期的持续生产力。"
        ],
        points: [
            {
                title: "可预测性降低焦虑",
                description:
                    "当人们能够预判流动的时间安排，而不是不断对混乱做出反应时，更容易保持平静。",
            },
            {
                title: "速度不等同于表现",
                description:
                    "城市可能运行很快，但仍然令人感到压力。有效的表现往往体现为稳定且不打扰的体验。",
            },
            {
                title: "物流应当作为背景基础设施存在",
                description:
                    "良好设计的系统应持续支撑日常生活，而不要求关注或占据公共空间。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "出行协同",
            paragraphs: [
                "当信号灯、车辆、行人和公共交通在时间上协调一致时，流动会显得轻松，而非被严格控制。"
            ],
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "支持顺畅城市节奏的出行协同系统",
            },
            landingUrl: "/smart-city/system-explainers-mobility-coordination",
        },
        {
            headline: "物流正在悄然重塑城市节奏",
            paragraphs: [
                "高效物流对城市的影响更多来自时间安排与低可见性，而不是可见的速度提升。"
            ],
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "在现代城市街道中低调运行的城市物流",
            },
            landingUrl: "/smart-city/global-patterns/urban-logistics",
        },
    ],
};