import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsPredictableStreetZH_CN: ISmartCityLanding = {
    heroObservation: {
        headline: "可预期的街道行为",
        paragraphs: [
            "城市往往先通过行为进行沟通，之后才通过政策进行表达。",
            "当行人能够毫不犹豫地过街，电动滑板车自然减速，车辆以安静而稳定的方式行驶时，街道传达出一个重要信息：人们将这一系统视为可靠的。",
            "可预期性是最清晰的城市信号之一，因为它无需测量即可被直接观察到。"
        ],
        image: {
            url: "/smart-city/urban-signals/predictable-shared-street.png",
            alt: "在可预期的共享街道环境中顺畅移动的泰国行人与骑行者",
        },
        cta: {
            label: "探索物流整合",
            href: "/smart-city/urban-signals-logistics-integration",
        },
    },

    systemExplanation: {
        headline: "可预期性所传达的信号",
        paragraphs: [
            "可预期的行为并非偶然产生，而是源于降低不确定性的街道设计：清晰可读的过街方式、一致的车道节奏、明确的视觉提示以及速度的协调。",
            "当这些系统协同运作时，人们不再需要为每一步进行博弈。城市在不依赖明显控制的情况下，依然让人感到安全。"
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "支持可预期街道行为的出行协调系统",
        },
    },

    whyItMatters: {
        headline: "为何这一信号重要",
        paragraphs: [
            "可预期性是街道层面信任的直接体现。"
        ],
        points: [
            {
                title: "信任是可观察的",
                description:
                    "当人们自信地移动时，这表明他们预期街道会以一致的方式运作。",
            },
            {
                title: "安全成为日常状态",
                description:
                    "可预期的街道在不让安全显得像强制措施的情况下，降低了风险。",
            },
            {
                title: "舒适支撑城市生活",
                description:
                    "只有当出行规则清晰且被共同理解时，自发的公共生活才有可能发生。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "可预期的街道促成自发的城市生活",
            paragraphs: [
                "在全球各地的城市中，可预期的街道持续支持更平缓的流动与日常社会生活。"
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "可预期共享街道的全球模式",
            },
            landingUrl: "/smart-city/global-patterns-predictable-shared-street",
        },
        {
            headline: "流动与停留",
            paragraphs: [
                "正是可预期性使停留成为可能。缺乏它，停下反而可能变得不安全。"
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "在流动与停留之间取得平衡的街道系统",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};