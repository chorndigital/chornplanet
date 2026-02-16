import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowMorningZH_CN: ISmartCityLanding = {
    heroObservation: {
        headline: "清晨流动 — 一天的开始",
        paragraphs: [
            "清晨揭示了一座城市在日常生活开始时是否已经准备就绪。",
            "通勤、上学、日常小事以及清晨的配送，反映出出行系统是在支持日常节奏，还是在为日常移动制造摩擦。",
            "智慧城市正是在这里变得可见——在最初的过街点、最初的信号，以及一天中第一次共享的流动之中。"
        ],
        image: {
            url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
            alt: "清晨的泰国城市街道，通勤者步行出行，电动滑板车平稳行驶，背景中是一辆安静的自动驾驶电动接驳车",
        },
        cta: {
            label: "查看正午流动",
            href: "/smart-city/human-daily-flow-midday",
        },
    },

    systemExplanation: {
        headline: "清晨揭示城市的哪些方面",
        paragraphs: [
            "清晨是城市系统的第一次压力测试。如果过街不清晰、人行道让人感到不安全，或交通变得不可预测，人们会立刻调整自己的行为。",
            "可靠的城市并非由速度定义，而是由可读性定义——当行人、电动滑板车、自行车与车辆能够以极少冲突协同运行时，这种可读性便显现出来。"
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "具备可预测过街点与平稳清晨流动的城市出行协调系统",
        },
    },

    whyItMatters: {
        headline: "为何清晨流动重要",
        paragraphs: [
            "支持清晨节奏的城市，能够在不依赖执法的情况下减少压力、提升安全感并建立信任。"
        ],
        points: [
            {
                title: "信任始于第一次过街",
                description:
                    "当人们感觉可以自然且安全地过街时，城市无需说明便传递出可靠性。",
            },
            {
                title: "节奏比速度更重要",
                description:
                    "清晨流动在街道支持可预测节奏，而非最大通行能力时运作得最好。",
            },
            {
                title: "日常安全是预防性设计",
                description:
                    "平稳的清晨通勤能够在风险、拥堵和摩擦出现之前将其降低。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "可预测的街道行为",
            paragraphs: [
                "清晨能够顺畅运行的前提，是人们可以毫不犹豫地移动。可预测性是信任的基础。"
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "在交通平稳的共享街道上，以可预测方式移动的泰国行人与骑行者",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "移动与停顿",
            paragraphs: [
                "当移动能够在没有恐惧或危险的情况下自然减速，城市便以平稳的方式苏醒。"
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "平衡清晨移动与行人安全停顿的街道设计",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};