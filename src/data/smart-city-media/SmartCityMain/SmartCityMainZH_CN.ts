// src/data/smart-city-media/SmartCityMainZH_CN.ts

import {ISmartCityMain} from "@/data/smart-city-media/_model/ISmartCityMain";

export const SmartCityMainZH_CN: ISmartCityMain = {
    hero: {
        title: "Smart City Media",
        paragraphs: [
            "这不是对未来的预测，而是对城市当前如何通过日常人类活动运作的观察。",
            "通过审视日常惯例、出行行为与系统协调，我们识别出可在不同地区城市中观察到的模式。",
        ],
        cta: {
            label: "从概览开始",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
        image: {
            url: "/smart-city/hero/when-human-life-shapes-the-city.png",
            alt: "写实风格的泰国城市街道，展示以人为本的智慧城市生活场景",
        },
    },

    navigation: {
        items: [
            {
                title: "Human Daily Flow",
                description: "早晨、正午与夜晚反映系统运行状态。",
                href: "/smart-city/human-daily-flow-morning/",
            },
            {
                title: "Local to Global",
                description: "如何将本地惯例作为更广泛模式进行研究。",
                href: "/smart-city/from-local-life-to-global-pattern",
            },
            {
                title: "Mobility Focus",
                description: "出行在被理解之前已被感知。",
                href: "/smart-city/mobility-focus-predictable-movement/",
            },
            {
                title: "City Systems",
                description: "影响日常城市环境的信号。",
                href: "/smart-city/city-systems-movement-and-pause/",
            },
            {
                title: "Global Patterns",
                description: "在多个城市中可观察到的信号。",
                href: "/smart-city/global-patterns-predictable-shared-street/",
            },
            {
                title: "Urban Signals",
                description: "反映系统状态的街道层面行为。",
                href: "/smart-city/urban-signals-predictable-street/",
            },
            {
                title: "Editorial Positioning",
                description: "Smart City Media 背后的视角。",
                href: "/smart-city/editorial-human-first-observation/",
            },
        ],
    },
};