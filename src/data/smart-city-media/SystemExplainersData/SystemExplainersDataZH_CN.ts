//data/smart-city-media/SystemExplainersDataZH_CN.ts

import {ISystemExplainers} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const SystemExplainersDataZH_CN: ISystemExplainers = {
    headline: "日常移动背后的系统",
    paragraph:
        "看似自然的日常移动往往由持续的协调所支撑。这些系统很少需要人们直接关注，但会影响城市在更大尺度上的运行方式。",

    systems: [
        {
            title: "出行协调",
            description:
                "交通信号、行人流动、自动驾驶车辆与公共交通在协调的时间结构中运行。在稳定条件下，移动可能呈现为更连续的状态，而非被明确管理的过程。",
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "协调行人、车辆与自动化交通的城市出行系统",
            },
        },
        {
            title: "城市物流",
            description:
                "货物通过配送服务、微型车辆与自动化系统在城市中流动。这些物流运作支持日常活动，并在与城市移动模式整合时有助于减少干扰。",
            image: {
                url: "/smart-city/system-explainers/urban-logistics.png",
                alt: "在城市街道中持续运行的日常物流系统",
            },
        },
        {
            title: "公共空间组织",
            description:
                "人行道、过街设施、照明与街道活动影响人们在一天中如何共享空间。这些要素会影响移动条件以及公共空间的整体可用性。",
            image: {
                url: "/smart-city/system-explainers/public-space-orchestration.png",
                alt: "为支持共享城市生活而设计的公共空间",
            },
        },
    ],
};