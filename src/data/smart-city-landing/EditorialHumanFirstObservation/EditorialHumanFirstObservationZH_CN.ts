import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialHumanFirstObservationZH_CN: ISmartCityLanding = {
    heroObservation: {
        headline: "以人为先的观察",
        paragraphs: [
            "城市最清晰的理解方式来自生活体验，而不仅仅是技术解释。",
            "许多反映城市质量的可靠信号并不在仪表盘中，而体现在人们如何行走、等待、停留、过街以及共享空间。",
            "本平台从人的生活出发，因为日常行为能够揭示城市系统实际如何运作。"
        ],
        image: {
            url: "/smart-city/editorial/human-first-observation.png",
            alt: "泰国居民在城市街道中平静移动，作为城市系统的主要信号",
        },
        cta: {
            label: "探索系统优先于技术",
            href: "/smart-city/editorial-system-before-technology",
        },
    },

    systemExplanation: {
        headline: "为何观察优先",
        paragraphs: [
            "许多关于城市的叙述从技术、基础设施或政策开始。然而，城市并不是主要通过这些视角被体验的。",
            "人们通过摩擦感、舒适度、节奏以及对安全的感知来体验城市。观察能够将复杂系统转化为可见模式，而无需依赖技术语言。"
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "公共空间呈现人的日常行为与舒适度，作为主要系统信号",
        },
    },

    whyItMatters: {
        headline: "为何以人为先的观察重要",
        paragraphs: [
            "优先观察人的日常行为，有助于建立一种共享的参照体系，使其能够跨越文化、城市以及不同程度的系统复杂性而保持意义。"
        ],
        points: [
            {
                title: "行为反映真实条件",
                description:
                    "人们会快速适应舒适与风险。他们的日常流动反映了实际的城市条件。",
            },
            {
                title: "理解可以在不预测的情况下扩展",
                description:
                    "观察支持理解，而不对未来结果做出确定性主张。",
            },
            {
                title: "系统无需术语也能被理解",
                description:
                    "以人为先的视角使城市系统能够被更广泛的人群理解，而不仅限于技术或专家群体。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "无需刻意思考也能察觉的城市信号",
            paragraphs: [
                "一些细微的日常行为可以揭示城市质量，而无需正式测量或额外解释。"
            ],
            image: {
                url: "/smart-city/urban-signals/predictable-shared-street.png",
                alt: "通过日常流动观察到的可预测街道行为",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "城市通过日常周期被体验",
            paragraphs: [
                "复杂系统往往在日常节奏中更容易被理解，例如清晨、正午与傍晚。"
            ],
            image: {
                url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
                alt: "清晨流动展示日常节奏作为系统质量信号",
            },
            landingUrl: "/smart-city/human-daily-flow-morning",
        },
    ],
};