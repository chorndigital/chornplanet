import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsDensityAndComfortZH_CN: ISmartCityLanding = {
    heroObservation: {
        headline: "密度与舒适性",
        paragraphs: [
            "密度本身并不必然构成问题。当系统设计不当时，才会产生不适。",
            "当密度通过空间、绿化以及可预测的流动模式得到调节时，城市会变得更加宜居。",
            "智慧城市并非试图消除拥挤，而是建立条件，使共享空间保持舒适且易于通行。"
        ],
        image: {
            url: "/smart-city/city-systems/density-and-comfort.png",
            alt: "具有绿化、遮荫人行道和安静街道节奏的舒适泰国城市密度",
        },
        cta: {
            label: "探索效率与节奏",
            href: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    },

    systemExplanation: {
        headline: "如何在密度中设计舒适性",
        paragraphs: [
            "舒适性并非装饰，而是协调运作的系统所产生的结果。",
            "遮荫、可步行的边界、照明、绿化以及公共空间的节奏，共同影响密度是被感知为压力还是支持。当这些系统协同运作时，高密度环境仍然可以保持平静与功能性。"
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "通过绿化和步行空间支持舒适性的城市设计系统",
        },
    },

    whyItMatters: {
        headline: "为何密度与舒适性至关重要",
        paragraphs: [
            "能够在较高密度水平下保持舒适性的城市，通常更有效地支持可持续性、安全性以及社会互动。"
        ],
        points: [
            {
                title: "舒适性有助于缓解紧张",
                description:
                    "当高密度环境显得有序且平静时，人们更容易以协作的方式共享空间。",
            },
            {
                title: "宜居性降低扩张压力",
                description:
                    "能够舒适承载密度的城市，可以减少向外扩展的需求。",
            },
            {
                title: "绿化是一种基础设施",
                description:
                    "遮荫、树木和柔化的边界是功能性组成部分，会影响温度调节、流动模式以及整体体验。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "公共空间的协同编排",
            paragraphs: [
                "舒适性取决于人行道、照明和街道活动在时间维度上的协调方式。"
            ],
            image: {
                url: "/smart-city/system-explainers/public-space-orchestration.png",
                alt: "支持舒适性和社会节奏的公共空间协同编排",
            },
            landingUrl: "/smart-city/system-explainers-public-space-orchestration",
        },
        {
            headline: "混合出行正成为全球常态",
            paragraphs: [
                "高密度街道需要共存。混合出行反映的是正在形成的全球状态，而非一种可选的设计方案。"
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "通过共存支持城市密度的混合出行方式",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    ],
};