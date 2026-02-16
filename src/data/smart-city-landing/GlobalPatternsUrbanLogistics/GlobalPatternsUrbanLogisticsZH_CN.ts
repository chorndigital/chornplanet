import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const GlobalPatternsUrbanLogisticsZH_CN: ISmartCityLanding = {
    heroObservation: {
        headline: "物流正在悄然重塑城市节奏",
        paragraphs: [
            "货物流动持续穿行于城市之中——往往并不会引起太多关注。",
            "在许多地区，物流正在从大型且高度可见的基础设施，转向更小型、更安静的系统，例如微型电动车、配送机器人、无人机以及按时间安排的分配机制。",
            "在物流能够顺畅融入城市运行的地方，即使流动增加，日常生活往往也会显得更舒适。"
        ],
        image: {
            url: "/smart-city/global-patterns/urban-logistics.png",
            alt: "城市物流在现代街道中安静运行",
        },
        cta: {
            label: "返回可预测街道",
            href: "/smart-city/global-patterns-predictable-shared-street",
        },
    },

    systemExplanation: {
        headline: "物流如何影响城市",
        paragraphs: [
            "物流对城市的影响主要体现在节奏，而非速度。",
            "当配送能够被安排时间、分散分布并进行协调时，街道通常会显得不那么拥堵，日常移动也更顺畅。良好整合的物流系统能够减少摩擦，同时不会成为城市环境的视觉焦点。"
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "小规模物流融入日常城市流动",
        },
    },

    whyItMatters: {
        headline: "为何这一全球模式重要",
        paragraphs: [
            "物流正逐渐成为日常生活的背景基础设施。能够谨慎整合这一系统的城市，即使活动水平上升，也更容易保持秩序与安静。"
        ],
        points: [
            {
                title: "配送已成为街道的常态参与者",
                description:
                    "货物全天持续流动。关键在于配送活动是扰乱街道，还是能够自然融入其中。",
            },
            {
                title: "安静的整合有助于维持舒适",
                description:
                    "运营效率不应以增加噪音、杂乱或公共空间冲突为代价。",
            },
            {
                title: "节奏支撑城市稳定性",
                description:
                    "当物流在时间与空间上得到协调时，城市往往会显得更可预测，也更易于通行。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "物流融入日常生活",
            paragraphs: [
                "当配送机器人与小规模物流运行时不占据注意力，日常城市场景便能保持安静且易于理解。"
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "物流融入泰国街道的日常生活",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
        {
            headline: "效率与人的节奏",
            paragraphs: [
                "当系统的时间安排与人的日常习惯相匹配，而不是覆盖它们时，城市效率才真正具有意义。"
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "与人的节奏和可预测时间安排相匹配的城市基础设施",
            },
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    ],
};