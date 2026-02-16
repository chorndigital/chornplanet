import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialSystemBeforeTechnologyZH_CN: ISmartCityLanding = {
    heroObservation: {
        headline: "系统优先于技术",
        paragraphs: [
            "仅靠技术并不能构成智慧城市。",
            "当系统以较为平稳的方式塑造日常行为时，城市会变得更具智能性：更安全的过街、更可预测的流动、更顺畅的物流，以及能够可靠运行的公共空间。",
            "技术在能够以可衡量的方式改善人类生活时最具意义。缺少这种关联时，其价值往往有限。"
        ],
        image: {
            url: "/smart-city/editorial/system-before-technology.png",
            alt: "城市基础设施在泰国日常生活的背景中安静运行",
        },
        cta: {
            label: "探索以本地作为全球原型",
            href: "/smart-city/editorial-local-as-global-prototype",
        },
    },

    systemExplanation: {
        headline: "系统视角揭示了什么",
        paragraphs: [
            "系统视角首先关注结果：舒适、安全、节奏与可达性。",
            "只有当结果变得清晰可见时，我们才会进一步讨论哪些技术在支撑这些结果。这有助于城市避免追求看似先进、但对现实生活影响有限的创新。"
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "在不显眼的情况下支持日常流动的出行协调系统",
        },
    },

    whyItMatters: {
        headline: "为何系统优先于技术重要",
        paragraphs: [
            "从系统出发的城市更容易形成可扩展的解决方案。从技术出发的城市则往往产生局部或孤立的实施。"
        ],
        points: [
            {
                title: "结果优先",
                description:
                    "如果舒适与安全没有改善，技术就未能实现其预期目标。",
            },
            {
                title: "不显眼的成功是目标",
                description:
                    "有效的系统能够融入日常生活。人们可以感受到改善，而无需关注具体工具本身。",
            },
            {
                title: "预防支持长期稳定",
                description:
                    "系统方法能够在早期降低风险，而不是在损害发生后才处理问题。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "出行协调",
            paragraphs: [
                "系统协调时间、流动与行为。技术只是协调层中的一部分。"
            ],
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "支持可预测流动的出行协调",
            },
            landingUrl: "/smart-city/system-explainers-mobility-coordination",
        },
        {
            headline: "效率与人类节奏",
            paragraphs: [
                "效率在支持人类节奏而非强行覆盖它时才更具意义。"
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "与人类节奏与舒适相一致的城市系统",
            },
            landingUrl: "/smart-city/city-systems/efficiency-and-rhythm",
        },
    ],
};