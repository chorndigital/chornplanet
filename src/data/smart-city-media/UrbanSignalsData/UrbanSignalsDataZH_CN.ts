//data/smart-city-media/UrbanSignalsDataZH_CN.ts

import {IUrbanSignals} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const UrbanSignalsDataZH_CN: IUrbanSignals = {
    headline: "日常生活中可观察到的城市信号",
    paragraph:
        "城市通过细小且可观察的信号进行呈现——街道给人的感受、人们的移动方式，以及空间随时间的变化。这些时刻不一定被描述为系统，但可能表明城市条件如何运行。",

    signals: [
        {
            title: "可预期的街道行为",
            description:
                "当行人、骑行者与车辆在明确预期下移动时，即使没有明确的执法措施，也可能表明存在共享规范与空间清晰度。",

            signalFocus: ["predictability", "shared space", "human trust"],

            image: {
                url: "/smart-city/urban-signals/predictable-shared-street.png",
                alt: "在共享的城市街道上，人、自行车与车辆顺畅共同移动，未见明显拥堵或紧张",
            },

            landingUrl: "/smart-city/urban-signals-predictable-street",
        },

        {
            title: "融入日常生活的物流",
            description:
                "配送机器人、小型电动车与快递人员可能在不占据主要注意力的情况下运行，这可能表明物流已融入日常移动模式。",

            signalFocus: ["logistics", "integration", "low friction"],

            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "小型配送车辆与机器人在现代城市的日常街道生活旁平稳运行",
            },

            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },

        {
            title: "公共空间按预期方式被使用",
            description:
                "当人们停留、暂停并以日常方式共享空间时，这可能反映出移动效率与公共空间可用性之间的平衡。",

            signalFocus: ["public space", "comfort", "social rhythm"],

            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "在设计良好的城市公共空间中，人们坐着、行走并舒适地互动",
            },

            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
    ],
}