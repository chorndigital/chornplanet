//data/smart-city-media/LocalToGlobalDataZH_CN.ts

import {ILocalToGlobal} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const LocalToGlobalDataZH_CN: ILocalToGlobal = {
    headline: "从本地语境到全球模式",
    paragraph:
        "城市活动通常在本地且具体的语境中被感知。当相似条件在不同城市、区域与文化中被观察到时，可以识别出重复出现的模式。通过对不同地点的日常情境进行比较，可以研究共同的结构性系统。",

    items: [
        {
            title: "街道层面的日常惯例",
            description:
                "沿着熟悉街道的日常移动反映了个体如何应对空间条件、时间结构与出行系统。尽管具有本地特征，这些惯例仍体现了由城市设计所塑造的基础结构性模式。",
            image: {
                url: "/smart-city/local-to-global/local-street-daily-routine.png",
                alt: "日常城市街道环境，包含行人、本地商铺以及正在运行的出行系统",
            },
            signalFocus: ["human routine", "street-level mobility", "local behavior"],
        },
        {
            title: "不同城市间的重复模式",
            description:
                "当相似的移动结构在多个城市中被观察到时，说明其存在可比较的结构性条件。因此，本地观察到的活动可以作为跨区域更广泛城市系统行为的一部分进行研究。",
            image: {
                url: "/smart-city/local-to-global/global-urban-pattern.png",
                alt: "城市环境展示不同城市之间可比较的出行流动、物流系统与公共空间使用情况",
            },
            signalFocus: ["replicability", "urban density", "systemic flow"],
        },
    ],

    purpose: "通过本地比较研究更广泛的结构性模式",
    narrativeRole: "将观察到的本地活动与系统性分析建立关联",
    section: "From Local Life to Global Pattern",
    category: "Smart City Media",
    landingUrl: "/smart-city/from-local-life-to-global-pattern",
    lang: "zh_cn",
};