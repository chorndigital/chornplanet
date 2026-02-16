//data/smart-city-media/MobilityFocusDataZH_CN.ts

import {IMobilityFocus} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const MobilityFocusDataZH_CN: IMobilityFocus = {
    headline: "出行在被理解之前已被感知",
    paragraph:
        "人们并不总是直接关注出行系统，而是通过一些细微情境与其接触——例如过马路、等待出行工具或与他人共享空间。当出行系统运行保持一致性时，其存在感会降低，并支持日常生活中的常规移动。",

    signals: [
        {
            title: "共享街道中的可预期移动",
            description:
                "协调良好的出行体系可以降低移动过程中的不确定性。行人能够在更明确的预期下过街，车辆在共享街道条件下降低速度，共享街道也可在较少压力下被理解。可预期性有助于日常安全。",
            image: {
                url: "/smart-city/mobility-focus/predictable-shared-street.png",
                alt: "城市街道上，行人、电动车辆与配送机器人在清晰视觉提示和可预期流动下平稳移动",
            },
            signalFocus: [
                "pedestrian confidence",
                "shared space",
                "predictability",
                "street readability"
            ],
            landingUrl: "/smart-city/mobility-focus-predictable-movement",
        },
        {
            title: "多元出行方式的共存",
            description:
                "城市街道可能包含多种交通方式。人们可能与自动驾驶车辆、小型配送机器人以及轻型电动交通工具并行移动。在支持共享使用的设计条件下，无需任何单一方式占据主要注意力，多种方式可以并行运行。",
            image: {
                url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                alt: "城市街道上，行人、自动驾驶电动车、小型配送机器人和滑板车共享空间",
            },
            signalFocus: [
                "mixed mobility",
                "autonomous vehicles",
                "delivery robots",
                "human-centered design"
            ],
            landingUrl: "/smart-city/mobility-focus-mixed-mobility",
        }
    ],
};