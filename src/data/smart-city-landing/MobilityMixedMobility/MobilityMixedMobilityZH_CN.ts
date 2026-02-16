import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const MobilityMixedMobilityZH_CN: ISmartCityLanding = {
    heroObservation: {
        headline: "混合出行的共存",
        paragraphs: [
            "现代街道已不再围绕单一交通方式构建。",
            "电动滑板车、自行车、行人、配送机器人以及自动驾驶车辆，正越来越多地成为日常街景的一部分。",
            "智慧城市并不以把一切严格分离为特征，而体现在共存是否自然且安全。"
        ],
        image: {
            url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
            alt: "泰国街道上，行人、电动滑板车、骑行者与自动驾驶接驳车自然共存",
        },
        cta: {
            label: "返回 Mobility Focus",
            href: "/smart-city/mobility-focus-mixed-mobility",
        },
    },

    systemExplanation: {
        headline: "共存如何实现",
        paragraphs: [
            "混合出行能够运作的前提，是没有任何一种方式主导全部注意力。街道通过一致的设计变得可读：速度协调、清晰的优先级提示，以及能够随时间调整的空间。",
            "当设计得当时，共存会显得轻松自然——人们不必思考系统，只需移动。"
        ],
        image: {
            url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
            alt: "多种出行方式在现代街道上平稳共存",
        },
    },

    whyItMatters: {
        headline: "为何混合出行重要",
        paragraphs: [
            "支持混合出行的城市可以减轻拥堵压力，并创造更宜居的公共空间。"
        ],
        points: [
            {
                title: "出行多样性意味着韧性",
                description:
                    "当某一种方式放缓时，其他方式仍可维持城市节奏。共存提供了冗余与弹性。",
            },
            {
                title: "减少主导性，提升舒适度",
                description:
                    "当没有单一车辆类型控制空间时，街道可能会更加平静。",
            },
            {
                title: "这种变化已经可见",
                description:
                    "混合出行正在越来越多地体现在全球各城市的日常街道行为中。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "混合出行正在成为全球默认模式",
            paragraphs: [
                "在不同文化背景下，街道正在向共享共存模式收敛，而不是走向严格隔离。"
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "在多座城市中逐渐显现的全球混合出行模式",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
        {
            headline: "融入日常生活的物流",
            paragraphs: [
                "共存也包括配送系统。整合良好的城市能够在不干扰公共空间的情况下支持物流运行。"
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "配送机器人与小型电动物流设备融入日常城市生活",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
    ],
};