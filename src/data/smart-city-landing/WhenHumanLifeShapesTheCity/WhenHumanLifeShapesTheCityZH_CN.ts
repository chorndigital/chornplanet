import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const WhenHumanLifeShapesTheCityZH_CN: ISmartCityLanding = {
    heroObservation: {
        headline: "当人的生活塑造城市",
        paragraphs: [
            "城市并非仅由技术定义，而是由人们每天如何移动、停留与互动所塑造。",
            "通过观察本地的日常节奏，我们可以识别在不同城市与不同语境中反复出现的城市模式。"
        ],
        image: {
            url: "/smart-city/hero/when-human-life-shapes-the-city.png",
            alt: "日常生活塑造出一条平静的智慧城市街道"
        },
        cta: {
            label: "探索这些模式",
            href: `/smart-city/from-local-life-to-global-pattern`
        }
    },

    systemExplanation: {
        headline: "日常生活之下的系统",
        paragraphs: [
            "城市系统通过日常的设计选择，悄然协调流动、可达性与安全。",
            "当设计得当，这些系统低调运行，却依然不可或缺。"
        ]
    },

    whyItMatters: {
        headline: "为何重要",
        paragraphs: [
            "与人的节奏相一致的城市，往往能够以更可持续的方式扩展，并维持长期稳定。"
        ]
    },

    relatedSignals: [
        {
            headline: "可预期的共享街道",
            paragraphs: [
                "以可预期性为目标设计的街道能够减少摩擦，并支持共享的信任。"
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "可预期的共享街道"
            },
            cta: {
                label: "阅读信号",
                href: `/smart-city/urban-signals-predictable-street`
            }
        }
    ],
}