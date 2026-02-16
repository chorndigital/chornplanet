import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const MobilityPredictableMovementZH_CN: ISmartCityLanding = {
    heroObservation: {
        headline: "共享街道中的可预测出行",
        paragraphs: [
            "出行体验并不主要来自技术，而来自信任感。",
            "当人们可以毫不犹豫地过街，车辆自然减速，骑行者能够以较少冲突顺畅通行时，街道就变得可读。",
            "可预测性不是控制，而是日常安全的实用基础。"
        ],
        image: {
            url: "/smart-city/mobility-focus/predictable-shared-street.png",
            alt: "泰国行人与骑行者在可预测的共享街道上平稳移动，背景中有一辆自动驾驶接驳车",
        },
        cta: {
            label: "探索混合出行",
            href: "/smart-city/mobility-focus-mixed-mobility",
        },
    },

    systemExplanation: {
        headline: "什么让出行变得可预测",
        paragraphs: [
            "可预测性来自减少不确定性的设计：清晰的过街点、一致的车道逻辑、可读的信号，以及能够鼓励减速但不依赖强制的街道环境。",
            "优秀的街道之所以让人感到安全，并不是因为有人被监控，而是因为行为会自然趋于同步。"
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "支持可预测街道行为的城市出行协调系统",
        },
    },

    whyItMatters: {
        headline: "为何可预测性重要",
        paragraphs: [
            "可预测的街道能够降低压力、减少事故风险，并为自发的城市生活创造条件。"
        ],
        points: [
            {
                title: "无需依赖执法的安全",
                description:
                    "当出行方式变得可读，人们会自然进行自我调节。街道可以在不依赖严格控制的情况下保持平稳。",
            },
            {
                title: "信任是一项实用指标",
                description:
                    "衡量出行表现的关键信号之一，是人们是否能够毫不犹豫地移动。",
            },
            {
                title: "共享街道需要共享信任",
                description:
                    "可预测性使行人、电动滑板车、骑行者与车辆能够共存，而不必持续进行相互博弈。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "可预测的街道行为",
            paragraphs: [
                "当出行感觉平稳且一致时，说明街道在日常使用中支持信任的形成。"
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "泰国城市环境中的可预测共享街道行为",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "移动与停留",
            paragraphs: [
                "能够支持安全停留的街道，往往也是能够实现可预测出行的街道。"
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "在出行流动与行人安全停留之间取得平衡的城市街道",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};