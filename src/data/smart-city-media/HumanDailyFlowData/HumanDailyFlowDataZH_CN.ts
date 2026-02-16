//data/smart-city-media/HumanDailyFlowDataZH_CN.ts

import {IHumanDailyFlow} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const HumanDailyFlowDataZH_CN: IHumanDailyFlow = {
    headline: "城市系统可通过日常周期进行观察",
    paragraph:
        "城市系统往往难以在单一时刻被完整观察。它们通过反复出现的日常模式呈现——清晨出行、中午协调以及傍晚过渡。观察这些模式，有助于通过人们的日常移动来解读复杂的城市系统。",

    morningFlow: {
        title: "清晨流动 — 开始一天",
        paragraph:
            "清晨体现了从居住区域的相对安静到更为活跃出行的过渡。人们离开住处，穿行于街道，并与交通系统的运行节奏保持一致。可观察的信号——交通流动、行人移动以及共享出行使用情况——反映了出行基础设施在一天开始时如何运作。",

        image: {
            url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
            alt: "清晨的城市环境，行人通勤、日光、绿化元素，以及开始日常运行的出行系统",
        },

        category: "Morning Flow",
        signalFocus: ["mobility readiness", "pedestrian flow", "temporal synchronization"],
        landingUrl: "/smart-city/human-daily-flow-morning",
    },

    middayFlow: {
        title: "中午流动 — 密度与协调",
        paragraph:
            "中午时段，城市活动的密度增加。人员、货物与服务同时移动。自动驾驶出行系统、物流基础设施与公共空间设计并行运行，以应对更大的移动量。",

        image: {
            url: "/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
            alt: "中午的城市环境，行人、自动驾驶电动车、配送无人机，以及公共空间中的协调流动",
        },

        category: "Midday Flow",
        signalFocus: ["density", "logistics", "coordination", "autonomous systems"],
        landingUrl: "/smart-city/human-daily-flow-midday",
    },

    eveningFlow: {
        title: "傍晚流动 — 活动降低与过渡",
        paragraph:
            "傍晚时段，活动水平转向较低的出行强度。照明系统、步行条件、街道环境以及交通可用性，会影响居民返家并参与晚间活动的方式。",

        image: {
            url: "/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
            alt: "傍晚的城市环境，行人、灯光街道、营业中的商铺、适度车流，以及可见的安全条件",
        },

        category: "Evening Flow",
        signalFocus: ["safety", "public space", "evening mobility", "urban transition"],
        landingUrl: "/smart-city/human-daily-flow-evening",
    },

    purpose: "支持读者识别重复出现的城市模式",
    narrativeRole: "通过熟悉的日常活动呈现复杂的城市系统",
    section: "Human Daily Flow",
    category: "Smart City Media",
    lang: "zh_cn",
};