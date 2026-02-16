import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const FromLocalLifeToGlobalPatternZH_CN: ISmartCityLanding = {
    heroObservation: {
        headline: "从本地生活到全球模式",
        paragraphs: [
            "城市生活往往带有强烈的本地感受，由熟悉的街道、习惯和日常节奏所塑造。",
            "当相似的场景在不同城市、文化和尺度中反复出现时，它们便成为对城市通常如何运作的可比较证据。",
            "这不是预测，而是比较——将日常瞬间并置，直至其背后的系统逐渐显现。"
        ],
        image: {
            url: "/smart-city/local-to-global/global-urban-pattern.png",
            alt: "日常街景暗示了不同城市之间共享的出行模式",
        },
        cta: {
            label: "探索全球模式",
            href: "/smart-city/global-patterns-predictable-shared-street",
        },
    },

    systemExplanation: {
        headline: "城市如何变得可比较",
        paragraphs: [
            "当我们观察到相同类型的瞬间时，城市便具备了可比较性，例如过街、排队、停留、配送以及共存。",
            "当本地行为在不同地点反复出现时，它便不再只是个人偏好，而成为一种可识别的信号，指向日常生活背后的共同结构条件。"
        ],
        image: {
            url: "/smart-city/editorial/local-as-global-prototype.png",
            alt: "作为参考的本地街景，用于理解更广泛的城市系统",
        },
    },

    whyItMatters: {
        headline: "为何从本地到全球重要",
        paragraphs: [
            "重复出现的模式往往比正式政策传播得更快。当一种本地日常行为在许多城市中出现时，往往反映了对相似城市条件的共同回应。"
        ],
        points: [
            {
                title: "日常街道反映系统条件",
                description:
                    "理解城市质量的一种可靠方式，是观察普通街道在普通时刻所发生的事情。",
            },
            {
                title: "模式可以在没有协调的情况下出现",
                description:
                    "共享的街道行为可能在不同城市中独立产生，由相似的限制和需求所塑造。",
            },
            {
                title: "理解有助于对话",
                description:
                    "观察模式有助于城市之间形成共同理解，而不需要推广特定解决方案或意识形态。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "源自日常城市的全球模式",
            paragraphs: [
                "当相似的信号在不同文化环境中出现时，可能表明正在向共同的运行行为趋同。"
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "平静的共享街道，代表在多座城市中观察到的可预测出行模式",
            },
            landingUrl: "/smart-city/global-patterns-predictable-shared-street",
        },
        {
            headline: "以本地作为全球原型",
            paragraphs: [
                "中等规模城市往往更容易观察到重复出现的模式，因为街道行为保持可见且易于理解。"
            ],
            image: {
                url: "/smart-city/editorial/local-as-global-prototype.png",
                alt: "反映全球多座城市中观察到的模式的本地街道生活",
            },
            landingUrl: "/smart-city/editorial-local-as-global-prototype",
        },
    ],
};