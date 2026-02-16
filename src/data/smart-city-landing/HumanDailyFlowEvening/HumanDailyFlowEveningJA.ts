import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowEveningJA: ISmartCityLanding = {
    heroObservation: {
        headline: "夕方の流れ — 減速と回復",
        paragraphs: [
            "夕方はスピードのための時間ではありません。回復のための時間です。",
            "人々が歩調を落とすとき、都市の質が見えてきます。家へ歩いて帰る、友人と会う、近所で買い物をする、あるいは公共空間でただ立ち止まるといった行動です。",
            "スマートシティは、日没後でも人々が安心してリラックスし、その場にとどまれると感じられるかどうかに表れます。"
        ],
        image: {
            url: "/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
            alt: "温かい灯りの中、歩行者と落ち着いたスクーターが行き交い、社会的な生活に安心感のあるタイの夕方の街並み",
        },
        cta: {
            label: "スマートシティ概要へ戻る",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
    },

    systemExplanation: {
        headline: "快適さを守る夕方のシステム",
        paragraphs: [
            "夕方は、都市が快適さを支えているのか、それとも人々が屋内へ退くことを強いられているのかを明らかにします。",
            "照明、歩きやすさ、通りの活動、そして予測可能なモビリティは、不確実性を減らしながら公共生活を継続させます。これらのシステムが連動すると、都市は日中を過ぎても利用しやすく、歓迎的な状態を保ちます。"
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "照明と歩きやすさによって夕方の生活を支える公共空間のオーケストレーション",
        },
    },

    whyItMatters: {
        headline: "なぜ夕方の流れが重要なのか",
        paragraphs: [
            "夕方の回復を支える都市は、強い統制を必要とせずに、長期的な社会的つながりと安全感を高めます。"
        ],
        points: [
            {
                title: "快適さはシステムの結果である",
                description:
                    "夕方の快適さは装飾ではありません。安全性、照明、そして予測可能な動きの結果です。",
            },
            {
                title: "公共空間は社会インフラになる",
                description:
                    "日没後も人々が屋外にとどまるとき、公共空間はより強い地域交流と日常的なアクセスを支えます。",
            },
            {
                title: "取り締まりに頼らない安全",
                description:
                    "最も効果的な通りは、行動を罰するのではなく、リスクを減らす設計によって安全に感じられます。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "意図された形で使われる公共空間",
            paragraphs: [
                "夕方は、人々が安心して滞在できるかどうかを示します。この滞在が快適さの明確なシグナルです。"
            ],
            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "明るい公共空間で快適に座ったり歩いたりするタイの住民",
            },
            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
        {
            headline: "密度と快適さ",
            paragraphs: [
                "夕方の快適さは、密度が暮らしやすく感じられるのか、それとも疲労を生むのかを示します。"
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "緑と落ち着いた夕方の活動によって和らげられた都市の密度",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};