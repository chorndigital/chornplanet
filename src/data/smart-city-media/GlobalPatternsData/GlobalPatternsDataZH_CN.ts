import {IGlobalPatterns} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const GlobalPatternsDataZH_CN: IGlobalPatterns = {
    headline: "全球城市日常运行中观察到的模式",
    paragraph:
        "在文化背景、城市规模和收入水平各不相同的城市中，逐步可以观察到相似的出行与公共空间使用模式。这些现象并非仅由技术推动，而是源于人类日常行为、空间约束条件以及系统协调在时间维度上的逐渐对齐。对这些信号的观察有助于解释不同地区城市在保持本地身份特征的同时，呈现出相似的运行特征。",

    signals: [
        {
            title: "可预测的街道环境支持公共空间使用",
            description:
                "当出行系统具备可预测性时，公众在共享环境中的安全感与信任感会提升。在多个地区，优先减少不确定性而非追求速度最大化的街道环境，通常与更稳定、更加舒适的公共空间使用情况相关。",
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "行人、自行车和车辆以可预测方式通行的共享街道环境"
            },
            signalFocus: [
                "shared streets",
                "predictable mobility",
                "human comfort",
                "street behavior"
            ],
            landingUrl: "/smart-city/global-patterns-predictable-shared-street"
        },
        {
            title: "城市环境中多模式出行的增加趋势",
            description:
                "步行、自行车、电动滑板车、小型电动车以及配送机器人在许多城市中日益常见。在不同地区，出行环境被组织为支持多种交通方式的共存，以回应空间条件和运行需求。",
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "多种出行方式在城市环境中共存"
            },
            signalFocus: [
                "mixed mobility",
                "coexistence",
                "last-mile movement",
                "urban adaptation"
            ],
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence"
        },
        {
            title: "城市物流在日常系统中的整合",
            description:
                "小规模物流活动，包括本地配送电动车、地面机器人以及在法规允许情况下的空中系统，正逐步纳入城市日常运行体系。在既有空间与安全框架内进行物流协调的城市，通常能够在保持公众舒适度的同时提升运行效率。",
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "在城市环境中运行的小型配送车辆和机器人"
            },
            signalFocus: [
                "urban logistics",
                "last-mile delivery",
                "system coordination",
                "integrated infrastructure"
            ],
            landingUrl: "/smart-city/global-patterns-urban-logistics"
        }
    ]
}