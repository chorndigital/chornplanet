import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const MobilityPredictableMovementJA: ISmartCityLanding = {
    heroObservation: {
        headline: "共有ストリートにおける予測可能な動き",
        paragraphs: [
            "モビリティは主に技術として体験されるものではありません。人はそれを安心感として体験します。",
            "人々がためらわずに横断でき、車両が自然に減速し、自転車がほとんど衝突なく流れるとき、通りは読みやすくなります。",
            "予測可能性は統制ではありません。日常的な安全を支える実践的な基盤です。"
        ],
        image: {
            url: "/smart-city/mobility-focus/predictable-shared-street.png",
            alt: "背景に自動運転シャトルがある、予測可能な共有ストリートを落ち着いて移動するタイの歩行者と自転車利用者",
        },
        cta: {
            label: "混合モビリティを探る",
            href: "/smart-city/mobility-focus-mixed-mobility",
        },
    },

    systemExplanation: {
        headline: "動きを予測可能にするもの",
        paragraphs: [
            "予測可能性は、不確実性を減らす設計から生まれます。明確な横断、整合したレーン構成、読み取りやすい信号、そして強制せずに減速を促す通りです。",
            "適切に設計された通りが安全に感じられるのは、人が監視されているからではなく、動きが自然に同期するからです。"
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "予測可能な通りの行動を支える都市モビリティの調整",
        },
    },

    whyItMatters: {
        headline: "なぜ予測可能性が重要なのか",
        paragraphs: [
            "予測可能な通りはストレスを減らし、事故のリスクを下げ、自発的な都市生活が生まれる条件を整えます。"
        ],
        points: [
            {
                title: "取り締まりに頼らない安全",
                description:
                    "動きが読みやすいと、人々は自然に自己調整します。厳格な管理がなくても通りは落ち着いた状態を保てます。",
            },
            {
                title: "安心感は実践的な指標",
                description:
                    "モビリティが機能しているかどうかの重要な指標は、人々がためらわずに移動できるかどうかです。",
            },
            {
                title: "共有ストリートには共有された信頼が必要",
                description:
                    "予測可能性によって、歩行者、スクーター、自転車、車両が常に交渉することなく共存できます。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "予測可能な通りの行動",
            paragraphs: [
                "動きが穏やかで一貫しているとき、それは通りが日常利用における信頼を支えていることを示します。"
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "タイの都市環境における予測可能な共有ストリートの行動",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "移動と停止",
            paragraphs: [
                "安全に立ち止まれる通りは、多くの場合、予測可能な動きを可能にする通りでもあります。"
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "移動の流れと歩行者の安全な停止を両立させる都市の通り",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};