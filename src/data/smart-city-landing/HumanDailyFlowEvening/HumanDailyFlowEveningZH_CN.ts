import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowEveningZH_CN: ISmartCityLanding = {
    heroObservation: {
        headline: "傍晚流动 — 放慢节奏与恢复",
        paragraphs: [
            "傍晚并不关乎速度，而关乎恢复。",
            "当人们放慢脚步时，城市的质量便会显现：步行回家、与朋友相聚、在本地购物，或只是停留在公共空间中。",
            "一座智慧城市体现在一个简单的问题上：日落之后，街道是否足够安全，让人们能够放松并继续停留其中。"
        ],
        image: {
            url: "/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
            alt: "泰国城市傍晚街道，暖色灯光、行人、平稳行驶的摩托车，以及适合社交生活的安全氛围",
        },
        cta: {
            label: "返回智慧城市概览",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
    },

    systemExplanation: {
        headline: "保护舒适感的傍晚系统",
        paragraphs: [
            "傍晚能够揭示城市是否支持人的舒适感，还是让人们感到必须退回室内。",
            "照明、可步行性、街道活动以及可预测的出行方式，使公共生活能够在较少不确定性的情况下持续。当这些系统协同运作时，城市在白天结束后依然保持可用性与友好性。"
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "通过照明与步行友好设计支持傍晚生活的公共空间协调系统",
        },
    },

    whyItMatters: {
        headline: "为何傍晚流动重要",
        paragraphs: [
            "能够支持傍晚恢复的城市，可以在不依赖强力管控的情况下，增强长期的社会连接与安全感。"
        ],
        points: [
            {
                title: "舒适感是系统结果",
                description:
                    "傍晚的舒适并非装饰，而是安全、照明与可预测流动共同产生的结果。",
            },
            {
                title: "公共空间成为社会基础设施",
                description:
                    "当人们在日落后仍愿意停留在户外，公共空间便支撑更强的社区互动与日常可达性。",
            },
            {
                title: "无需执法的安全感",
                description:
                    "最有效的街道之所以让人感到安全，是因为其设计降低风险，而不是通过惩罚来约束行为。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "公共空间被按其功能使用",
            paragraphs: [
                "傍晚能够体现人们是否愿意安全地停留。停留本身就是舒适感的清晰信号。"
            ],
            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "泰国居民在灯光充足的公共空间中舒适地坐着与行走",
            },
            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
        {
            headline: "密度与舒适",
            paragraphs: [
                "傍晚的舒适感能够显示密度是可居住的，还是令人疲惫的。"
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "通过绿化与平静的傍晚活动缓和的城市密度",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};