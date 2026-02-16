import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const GlobalPatternsMixedMobilityCoexistenceZH_CN: ISmartCityLanding = {
    heroObservation: {
        headline: "混合出行正逐渐成为全球常态",
        paragraphs: [
            "步行、骑行、滑板车、小型电动车以及配送机器人，正越来越多地融入城市的日常出行之中。",
            "在许多城市，街道正在演变为混合出行的环境，由共存而非严格分隔来塑造日常使用方式。",
            "这反映了城市空间使用和共享方式中一种可被观察到的变化。"
        ],
        image: {
            url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
            alt: "多种出行方式在城市街道上平稳共存",
        },
        cta: {
            label: "探索物流模式",
            href: "/smart-city/global-patterns-urban-logistics",
        },
    },

    systemExplanation: {
        headline: "为何共存在多座城市中出现",
        paragraphs: [
            "城市街道往往缺乏足够空间来将所有出行方式完全分隔。随着密度提升，共享使用变得更加常见。",
            "冲突与舒适之间的差异，取决于系统设计：速度协调、清晰的优先提示、易于识别的过街方式，以及在不依赖持续管控的情况下减少摩擦的街道环境。"
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "通过公共空间协调实现混合出行共存",
        },
    },

    whyItMatters: {
        headline: "为何这一全球模式值得关注",
        paragraphs: [
            "混合出行体现了城市对有限空间和多样化出行需求的适应方式。良好设计的共存有助于提升安全性、秩序感与功能效率。"
        ],
        points: [
            {
                title: "共存有助于提升承载能力",
                description:
                    "当街道支持多种出行方式时，交通流动可以更加均衡，而不是集中在单一系统中。",
            },
            {
                title: "平衡使用提升舒适度",
                description:
                    "当没有某一种出行方式主导街道时，人们通常会感到更安全，公共空间也更易于使用。",
            },
            {
                title: "共享街道反映共享使用",
                description:
                    "混合出行不仅是一种交通状态，也体现了空间如何被共同使用。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "混合出行的共存状态",
            paragraphs: [
                "街道正越来越多地被视为一个共享环境，步行、滑板车、自行车、机器人和电动车在其中共同运行。"
            ],
            image: {
                url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                alt: "现代泰国街道中混合出行的共存状态",
            },
            landingUrl: "/smart-city/mobility-focus-mixed-mobility",
        },
        {
            headline: "密度与舒适度",
            paragraphs: [
                "共存在维持高密度环境下的舒适性方面发挥着作用。缺乏共享设计时，密度可能导致摩擦与冲突。"
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "通过设计与共享出行维持的舒适密度",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};