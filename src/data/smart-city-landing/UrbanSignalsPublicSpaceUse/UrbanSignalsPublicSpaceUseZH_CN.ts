import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsPublicSpaceUseZH_CN: ISmartCityLanding = {
    heroObservation: {
        headline: "公共空间被按其本意使用",
        paragraphs: [
            "公共空间通过日常使用方式，直观地展现城市的质量。",
            "当人们自然地坐下、停留、交谈并愿意久留时，这表明城市在流动与舒适、效率与社会生活之间达成了平衡。",
            "衡量一座城市是否正常运作的清晰信号之一，并不是速度，而是人们是否感到足够安心与舒适而愿意留下。"
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "泰国居民在设计良好的公共空间中舒适地坐着和行走",
        },
        cta: {
            label: "返回可预期的街道",
            href: "/smart-city/urban-signals-predictable-street",
        },
    },

    systemExplanation: {
        headline: "公共空间使用所传达的信号",
        paragraphs: [
            "人们不会在不舒适的地方停留。只有当城市提供安全、遮荫、照明、良好的步行条件以及平静的街道节奏时，人们才会愿意留下。",
            "公共空间并不是装饰性的层面，而是系统运行的结果。当其有效运作时，城市无需刻意策划或安排，也能自然地呈现社会活力。"
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "通过照明、人行道与步行性实现的公共空间协同设计",
        },
    },

    whyItMatters: {
        headline: "为何这一信号重要",
        paragraphs: [
            "当公共空间被自然地使用时，这表明城市正在支持长期的社会健康、安全感以及日常生活的舒适度。"
        ],
        points: [
            {
                title: "舒适本身就是证据",
                description:
                    "公共空间的日常使用证明系统正在超越政策表述而真实运作。",
            },
            {
                title: "社会生活是一种基础设施",
                description:
                    "非正式的聚集增强了城市内部的连接性与韧性。",
            },
            {
                title: "安全是被感受到的",
                description:
                    "运作良好的街道能够在不依赖显性控制或执法的情况下，让人感到安全。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "流动与停留",
            paragraphs: [
                "只有当流动允许停留时，公共空间才真正可用。停留是一项核心的系统信号。"
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "以人为中心的街道系统中，流动与停留之间的平衡",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
        {
            headline: "密度与舒适",
            paragraphs: [
                "当密度保持舒适，人们会更长时间地停留在户外。舒适性是实现宜居密度的基础策略。"
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "通过绿化与共享空间舒适性缓和的城市密度",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};