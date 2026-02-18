import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialLocalAsGlobalPrototypeZH_CN: ISmartCityLanding = {
    heroObservation: {
        headline: "以本地作为全球原型",
        paragraphs: [
            "中等规模城市往往更容易观察城市系统。",
            "它们的密度足以显现系统压力，同时仍能通过日常人类行为保持可读性。",
            "对本地街道的细致观察，有助于识别随后在不同城市环境中出现的模式。"
        ],
        image: {
            url: "/smart-city/editorial/local-as-global-prototype.png",
            alt: "泰国本地街道反映出在全球许多城市中都能观察到的城市模式",
        },
        cta: {
            label: "返回智慧城市概览",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
    },

    systemExplanation: {
        headline: "为何中等规模城市能揭示更多",
        paragraphs: [
            "大型都市可能因规模而使系统变得不易察觉。中等规模城市往往通过日常活动让系统更可见，例如过街、排队、配送以及街道层面的协调。",
            "这些环境使人们能够在模式出现在更大或更复杂的城市之前，清晰地观察到重复发生的现象。"
        ],
        image: {
            url: "/smart-city/local-to-global/local-street-daily-routine.png",
            alt: "本地街道日常场景，展示人类行为作为城市系统的指示因素",
        },
    },

    whyItMatters: {
        headline: "为何以本地作为全球原型重要",
        paragraphs: [
            "城市的趋同并不只来自规划。它也源于反复出现、并在日常生活中有效运作的本地模式。"
        ],
        points: [
            {
                title: "本地模式可以自然扩展",
                description:
                    "当一种日常运作方式效果良好时，它可能在没有正式协调的情况下被其他地区采用。",
            },
            {
                title: "可见性支持实践性学习",
                description:
                    "中等规模城市使人们能够通过直接观察来理解城市系统，而不必依赖抽象概念。",
            },
            {
                title: "本地身份可与全球原则共存",
                description:
                    "城市可以保留文化特性，同时呈现出在多个地区可观察到的系统行为。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "从本地生活到全球模式",
            paragraphs: [
                "当相似的本地场景出现在不同城市时，这表明存在共享的系统行为。"
            ],
            image: {
                url: "/smart-city/local-to-global/global-urban-pattern.png",
                alt: "通过比较本地场景揭示共享的城市模式",
            },
            landingUrl: "/smart-city/from-local-life-to-global-pattern",
        },
        {
            headline: "从日常城市中显现的全球模式",
            paragraphs: [
                "可预测性、混合出行以及低可见度物流，正越来越多地在不同城市环境中被观察到。"
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "在多个城市中出现的可预测共享街道模式",
            },
            landingUrl: "/smart-city/global-patterns-predictable-shared-street/",
        },
    ],
};