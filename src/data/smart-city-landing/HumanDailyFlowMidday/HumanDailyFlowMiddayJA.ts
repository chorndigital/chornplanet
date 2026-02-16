import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowMiddayJA: ISmartCityLanding = {
    heroObservation: {
        headline: "昼の流れ — 密度と調整",
        paragraphs: [
            "昼は、都市の複雑さが最もはっきりと見える時間です。",
            "人、物資、配送、サービス、そして移動が同時に重なります。通りは混み合いますが、日常生活は落ち着いて感じられる必要があります。",
            "スマートシティは密度をなくすことで定義されるのではありません。密度が調整されていると感じられるかどうかに表れます。"
        ],
        image: {
            url: "/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
            alt: "歩行者、スクーター、自転車、配送ロボット、自動運転の電動シャトルが共存するタイの昼の混雑した街路",
        },
        cta: {
            label: "夕方の流れを見る",
            href: "/smart-city/human-daily-flow-evening",
        },
    },

    systemExplanation: {
        headline: "人が気づかない昼のシステム",
        paragraphs: [
            "密度がピークに達する時間帯、都市は複数の層を調整しています。物流のタイミング、交通信号、歩行者の動き、配送ルート、そして公共空間の共有です。",
            "これらのシステムがうまく機能しているとき、人々はそれを意識する必要がありません。動きがより予測可能で、緊張が少ないと感じるだけです。"
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "日常生活の横で静かに稼働する都市物流",
        },
    },

    whyItMatters: {
        headline: "なぜ昼の流れが重要なのか",
        paragraphs: [
            "昼は、都市がストレスや混乱を生まずに、大規模な日常生活を支えられるかどうかを示します。"
        ],
        points: [
            {
                title: "密度はシステムの知性を試す",
                description:
                    "昼は調整が最も重要になる時間です。多くの活動が重なるとき、システムは静かで信頼できる状態を保つ必要があります。",
            },
            {
                title: "物流は目立たず統合されるべき",
                description:
                    "配送が通りを支配してはいけません。快適さを損なわずに日常へ溶け込む必要があります。",
            },
            {
                title: "共存は新しい標準",
                description:
                    "スクーター、歩行者、自転車、ロボット、車両は、支配を競うのではなく自然に共存できる必要があります。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "日常生活に溶け込む物流",
            paragraphs: [
                "配送が注目を支配せずに機能するとき、都市はピークの密度でも落ち着いて感じられます。"
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "タイの街路環境に溶け込む配送ロボットと小型EV物流",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
        {
            headline: "混合モビリティは標準になりつつある",
            paragraphs: [
                "昼は、混合モビリティが意図的に支えられているのか、それとも偶然に任されているのかを明らかにします。その違いは快適さとして表れます。"
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "現代的な都市の通りで共存する複数の移動手段",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    ],
};