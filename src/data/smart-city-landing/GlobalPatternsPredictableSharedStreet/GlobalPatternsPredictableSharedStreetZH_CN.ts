import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const GlobalPatternsPredictableSharedStreetZH_CN: ISmartCityLanding = {
    heroObservation: {
        headline: "可预测的街道促成自发的城市生活",
        paragraphs: [
            "在文化背景各异的城市中，可预测的街道往往带来相似的效果：人们在公共空间中感到更加从容。",
            "当出行规则清晰可读时，行人可以自然过街，车辆以较少摩擦减速，街道生活也更具自发性。",
            "这是一种全球性的模式——不仅由技术塑造，更源于对共享空间的信任。"
        ],
        image: {
            url: "/smart-city/global-patterns/predictable-shared-street.png",
            alt: "行人、自行车与车辆在可预测的共享街道上平稳通行",
        },
        cta: {
            label: "探索混合出行模式",
            href: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    },

    systemExplanation: {
        headline: "为何可预测性在各地反复出现",
        paragraphs: [
            "可预测性能够降低不确定性。这种降低在不同情境和收入水平中都具有广泛意义。",
            "当街道通过设计传达清晰的节奏时，人们无需在每一步都进行博弈。街道由此变得足够安全，能够支持日常的自发行为：停留、相遇、过街与逗留。"
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "支持可预测出行的交通协调系统",
        },
    },

    whyItMatters: {
        headline: "为何这一全球模式重要",
        paragraphs: [
            "可预测性是少数能够适用于多种城市类型的出行原则之一，因为它通过日常移动被人们直接感知。"
        ],
        points: [
            {
                title: "信任是一种基础设施",
                description:
                    "可预测的街道在无需持续执法或管控的情况下，支持人与空间之间的信任。",
            },
            {
                title: "安全支撑公共生活",
                description:
                    "当过街感到安全时，人们往往会在户外停留更久，并更自由地使用城市空间。",
            },
            {
                title: "设计减少对控制的依赖",
                description:
                    "最有效的街道通过可读性来引导行为，而不是通过惩罚。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "可预测的街道行为",
            paragraphs: [
                "可预测性不是一个功能，而是人们能够安心通行的街道所呈现的日常信号。"
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "在泰国城市环境中观察到的可预测街道行为",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "移动与停留",
            paragraphs: [
                "正是可预测性使停留成为可能。缺乏它，静止可能会让人感到不安。"
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "作为系统结果实现移动与停留平衡的街道",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};