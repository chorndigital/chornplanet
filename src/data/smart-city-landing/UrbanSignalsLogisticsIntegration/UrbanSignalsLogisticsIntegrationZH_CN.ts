import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsLogisticsIntegrationZH_CN: ISmartCityLanding = {
    heroObservation: {
        headline: "融入日常生活的物流",
        paragraphs: [
            "物流是城市的基础系统之一，而整合良好的物流往往几乎不会被注意到。",
            "当配送机器人、快递员与小型电动车能够运作而不占据过多注意力时，这表明物流是被整合进城市，而不是被强行叠加在城市之上。",
            "智慧城市并不取决于配送系统有多显眼，而取决于物流能否融入日常节奏，同时不干扰街道生活。"
        ],
        image: {
            url: "/smart-city/urban-signals/urban-logistics.png",
            alt: "泰国城市街道上，配送机器人与小型电动物流系统自然融入日常生活",
        },
        cta: {
            label: "探索公共空间使用",
            href: "/smart-city/urban-signals-public-space-use",
        },
    },

    systemExplanation: {
        headline: "物流整合所释放的信号",
        paragraphs: [
            "物流整合意味着货物可以持续流动，同时不破坏人们的舒适体验。",
            "这依赖于时间安排、路径规划与协同机制。街道需要保持对行人友好的可读性，而物流系统则应在边缘安静运行。"
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "在日常出行背后安静运作的城市物流系统",
        },
    },

    whyItMatters: {
        headline: "为何这一信号重要",
        paragraphs: [
            "物流整合是系统成熟度的信号。它表明城市能够满足日常需求，而不会把街道变成基础设施区域。"
        ],
        points: [
            {
                title: "高效但不制造干扰",
                description:
                    "整合良好的物流能够减少摩擦，同时保持公共空间的平静。",
            },
            {
                title: "街道依然属于人",
                description:
                    "当物流融入街道环境时，行人与社会生活仍可成为街道的主要身份。",
            },
            {
                title: "时间安排支持预防性设计",
                description:
                    "协调一致的配送节奏可以在拥堵高峰出现之前降低其发生概率。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "物流正在悄然改变城市节奏",
            paragraphs: [
                "在全球多个城市中，物流正转向更小、更安静的系统，并影响日常出行方式。"
            ],
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "改变日常节奏的全球城市物流模式",
            },
            landingUrl: "/smart-city/global-patterns-urban-logistics",
        },
        {
            headline: "效率与人的节奏",
            paragraphs: [
                "当城市系统与人的节奏对齐，而不是优先追求速度时，物流整合才能发挥最佳效果。"
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "现代城市系统中与人的节奏对齐的效率表现",
            },
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    ],
};