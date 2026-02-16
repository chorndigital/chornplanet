import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const GlobalPatternsPredictableSharedStreetJA: ISmartCityLanding = {
    heroObservation: {
        headline: "予測可能な通りが自発的な都市生活を支える",
        paragraphs: [
            "文化の異なる都市においても、予測可能な通りは共通した効果をもたらすことが多く、人々は公共空間でより落ち着いて行動できるようになります。",
            "移動のルールが読み取りやすいと、歩行者は自然に横断し、車両は摩擦なく減速し、通りの生活はより自発的になります。",
            "これは技術だけによるものではなく、共有空間への信頼によって形づくられるグローバルなパターンです。"
        ],
        image: {
            url: "/smart-city/global-patterns/predictable-shared-street.png",
            alt: "歩行者・自転車・車両が落ち着いて行き交う予測可能な共有通り",
        },
        cta: {
            label: "混合モビリティのパターンを探る",
            href: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    },

    systemExplanation: {
        headline: "なぜ予測可能性が都市に共通して現れるのか",
        paragraphs: [
            "予測可能性は不確実性を減らします。この効果は、文化や所得水準の違いを越えて広く当てはまります。",
            "通りがデザインによって明確なリズムを伝えると、人々は一歩ごとに判断する必要がなくなります。通りは、立ち止まり、出会い、横断、滞在といった日常の自発性を支えるだけの安全性を持つようになります。"
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "予測可能な移動を支えるモビリティ協調システム",
        },
    },

    whyItMatters: {
        headline: "なぜこのグローバルパターンが重要なのか",
        paragraphs: [
            "予測可能性は、日常の移動を通じて直接体感されるため、多様な都市に適用可能な数少ないモビリティ原則の一つです。"
        ],
        points: [
            {
                title: "信頼はインフラの一形態である",
                description:
                    "予測可能な通りは、常時の取り締まりに依存せずに信頼を支えます。",
            },
            {
                title: "安全性が公共生活を支える",
                description:
                    "横断が安全に感じられると、人々は屋外に長くとどまり、都市をより自由に使うようになります。",
            },
            {
                title: "デザインは管理の必要性を下げる",
                description:
                    "最も効果的な通りは、罰ではなく可読性によって行動を導きます。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "予測可能な通りの行動",
            paragraphs: [
                "予測可能性は機能ではなく、人々が安心して利用できる通りであることを示す日常的なシグナルです。"
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "タイの都市環境における予測可能な通りの行動",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "動きと停止",
            paragraphs: [
                "予測可能性があるからこそ立ち止まることができます。これが欠けると、静止は不安を伴います。"
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "動きと停止のバランスが取れた通りというシステム結果",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};