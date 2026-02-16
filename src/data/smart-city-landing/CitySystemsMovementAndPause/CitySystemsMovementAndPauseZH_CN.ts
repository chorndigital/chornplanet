import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsMovementAndPauseZH_CN: ISmartCityLanding = {
    heroObservation: {
        headline: "流动与停留",
        paragraphs: [
            "城市并不是由其移动速度来定义的，而是由人们是否能够在没有风险或压力的情况下停下来所定义。",
            "健康的街道并非被设计成高速通道，而是共享环境，在其中流动可以自然放缓，停留也保持安全。",
            "当城市在流动与静止之间取得平衡时，日常生活往往会变得更加平稳、更具社会性，也更加以人为本。"
        ],
        image: {
            url: "/smart-city/city-systems/movement-and-pause.png",
            alt: "行人停留与平稳交通流并存的泰国城市街道",
        },
        cta: {
            label: "探索密度与舒适性",
            href: "/smart-city/city-systems-density-and-comfort",
        },
    },

    systemExplanation: {
        headline: "街道如何形成平衡",
        paragraphs: [
            "流动与停留并非对立，而是同一街道系统中的互补功能。",
            "过街设计、路缘形态、人行道节奏以及交通行为，都会影响人们是否感到可以安全地减速、观察和互动。当街道清晰且可预测时，社会活动能够在不依赖强制管理的情况下自然出现。"
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "支持安全停留与共享城市生活的公共空间设计",
        },
    },

    whyItMatters: {
        headline: "为何流动与停留重要",
        paragraphs: [
            "当人们能够自然地停留时，街道往往会变得更加安全、更加舒适，也更具社会活力。"
        ],
        points: [
            {
                title: "停留可以传达安全信号",
                description:
                    "如果人们感到足够安心而停下脚步，这条街道很可能已经作为一种预防性环境在发挥作用。",
            },
            {
                title: "没有压力的流动",
                description:
                    "可预测的流动减少冲突，使减速成为自然行为，而非风险。",
            },
            {
                title: "社会生活需要静止",
                description:
                    "当街道支持等待、观察、相遇与休息时，城市会变得更加以人为本。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "公共空间被按预期使用",
            paragraphs: [
                "当人们能够舒适地停留，这通常表明城市在流动与舒适之间达成了可行的平衡。"
            ],
            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "居民在公共空间中自然且舒适地活动",
            },
            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
        {
            headline: "可预测的街道行为",
            paragraphs: [
                "可预测性使安全停留成为可能。缺乏这一点时，每一次停下都可能成为风险。"
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "支持行人安全通行的可预测共享街道行为",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
    ],
};