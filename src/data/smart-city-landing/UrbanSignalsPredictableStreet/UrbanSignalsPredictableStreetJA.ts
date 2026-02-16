import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsPredictableStreetJA: ISmartCityLanding = {
    heroObservation: {
        headline: "予測可能な通りのふるまい",
        paragraphs: [
            "都市は政策よりも先に、行動を通じて語ります。",
            "歩行者がためらわずに横断し、スクーターが自然に減速し、車両が静かな自信をもって進むとき、通りは重要なことを示します。人々がそのシステムを信頼できるものとして体感しているということです。",
            "予測可能性は、測定を必要とせずに目で確認できるため、最も明確な都市シグナルの一つです。"
        ],
        image: {
            url: "/smart-city/urban-signals/predictable-shared-street.png",
            alt: "予測可能な共有ストリート環境でスムーズに移動するタイの歩行者と自転車利用者",
        },
        cta: {
            label: "ロジスティクス統合を探る",
            href: "/smart-city/urban-signals-logistics-integration",
        },
    },

    systemExplanation: {
        headline: "予測可能性が示すもの",
        paragraphs: [
            "予測可能な行動は偶然に生まれるものではありません。不確実性を減らす通りの設計の結果です。読みやすい横断、一定の車線リズム、明確な視覚的手がかり、そして速度の調和が含まれます。",
            "これらのシステムが連動すると、人々は一歩ごとに交渉する必要がなくなります。都市は、目に見える管理に頼らずに安全に感じられるようになります。"
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "予測可能な通りのふるまいを支えるモビリティ協調",
        },
    },

    whyItMatters: {
        headline: "なぜこのシグナルが重要なのか",
        paragraphs: [
            "予測可能性は、通りのレベルにおける信頼の直接的な指標です。"
        ],
        points: [
            {
                title: "信頼は観察できる",
                description:
                    "人々が自信を持って移動しているとき、それは通りが一貫して機能すると期待していることを示唆します。",
            },
            {
                title: "安全が日常になる",
                description:
                    "予測可能な通りは、安全が強制されているように感じさせることなくリスクを減らします。",
            },
            {
                title: "快適さが都市生活を可能にする",
                description:
                    "自発的な公共生活は、読みやすく共有された移動ルールに支えられています。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "予測可能な通りは自発的な生活を可能にする",
            paragraphs: [
                "世界中の都市において、予測可能な通りは一貫して落ち着いた移動と日常的な社会生活を支えています。"
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "予測可能な共有ストリートのグローバルパターン",
            },
            landingUrl: "/smart-city/global-patterns-predictable-shared-street",
        },
        {
            headline: "移動と休止",
            paragraphs: [
                "予測可能性があるからこそ立ち止まることができます。それがなければ、停止は危険になり得ます。"
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "流れと休止のバランスを取る通りのシステム",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};