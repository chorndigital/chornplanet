import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowMiddayZH_CN: ISmartCityLanding = {
    heroObservation: {
        headline: "正午流动 — 密度与协同",
        paragraphs: [
            "正午时分，城市的复杂性最为清晰。",
            "人流、货物流、配送、服务与出行在同一时间叠加。街道变得繁忙，但日常生活仍需要保持平稳。",
            "智慧城市并非通过消除密度来定义，而体现在密度是否被良好协同。"
        ],
        image: {
            url: "/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
            alt: "正午时分繁忙的泰国城市街道，行人、电动滑板车、自行车、配送机器人以及自动驾驶电动接驳车共同运行",
        },
        cta: {
            label: "查看傍晚流动",
            href: "/smart-city/human-daily-flow-evening",
        },
    },

    systemExplanation: {
        headline: "人们看不见的正午系统",
        paragraphs: [
            "在密度达到高峰时，城市需要协调多个层面：物流时序、交通信号、行人流动、配送路径以及公共空间的共享。",
            "当这些系统运行良好时，它们几乎不需要被注意。人们只会感受到出行更加可预测、紧张感更低。"
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "城市物流在日常生活旁安静运作",
        },
    },

    whyItMatters: {
        headline: "为何正午流动重要",
        paragraphs: [
            "正午体现了一座城市是否能够在不产生压力或混乱的情况下，支撑大规模的日常生活。"
        ],
        points: [
            {
                title: "密度考验系统智慧",
                description:
                    "正午是协调最为关键的时刻。当多种活动同时发生，系统必须保持安静且可靠。",
            },
            {
                title: "物流应当低调融合",
                description:
                    "配送不应主导街道，而应融入日常生活，不干扰舒适感。",
            },
            {
                title: "共存成为新的常态",
                description:
                    "电动滑板车、行人、自行车、机器人和车辆需要自然共存，而不是争夺主导权。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "融入日常生活的物流",
            paragraphs: [
                "当配送系统在不引人注意的情况下运作，即使在高峰时段，城市也能保持平静。"
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "配送机器人与小型电动物流设备融入泰国街道环境",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
        {
            headline: "混合出行正在成为默认模式",
            paragraphs: [
                "正午揭示了混合出行是被有意识地设计，还是偶然形成。差异体现在舒适度上。"
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "多种出行方式在现代城市街道上共存",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    ],
};