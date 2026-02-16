import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowMorningJA: ISmartCityLanding = {
    heroObservation: {
        headline: "朝の流れ — 一日の始まり",
        paragraphs: [
            "朝は、日常が始まるときに都市が準備できているかどうかを示します。",
            "通勤、通学、ちょっとした用事、そして早朝の配送は、モビリティシステムが日々のリズムを支えているのか、それとも移動に摩擦を生んでいるのかを明らかにします。",
            "スマートシティはここで見えてきます。最初の横断、最初の信号、そして一日の最初の共有された動きの中にあります。"
        ],
        image: {
            url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
            alt: "通勤者が歩き、スクーターが落ち着いて動き、背景には静かな自動運転シャトルが見えるタイの早朝の街路",
        },
        cta: {
            label: "昼の流れを見る",
            href: "/smart-city/human-daily-flow-midday",
        },
    },

    systemExplanation: {
        headline: "朝が都市について示すこと",
        paragraphs: [
            "朝は都市システムにとって早い段階のストレステストとなります。横断が分かりにくい、歩道が安全に感じられない、交通が予測不能になると、人々はすぐに行動を変えます。",
            "信頼できる都市はスピードで定義されません。読めることによって定義されます。歩行者、スクーター、自転車、車両が最小限の衝突で調整できる状態です。"
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "予測可能な横断と落ち着いた朝の動きを支える都市モビリティの調整",
        },
    },

    whyItMatters: {
        headline: "なぜ朝の流れが重要なのか",
        paragraphs: [
            "朝のリズムを支える都市は、取り締まりに頼らずにストレスを減らし、安全性を高め、信頼を築きます。"
        ],
        points: [
            {
                title: "信頼は最初の横断から始まる",
                description:
                    "人々が自然に安全に横断できると感じるとき、都市は説明なしに信頼性を伝えます。",
            },
            {
                title: "リズムはスピードより重要",
                description:
                    "朝の流れは、最大処理量よりも予測可能なタイミングを支える通りで最も機能します。",
            },
            {
                title: "日常の安全は予防的な設計である",
                description:
                    "落ち着いた朝の通勤は、リスク、渋滞、摩擦が現れる前にそれらを減らします。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "予測可能な通りの行動",
            paragraphs: [
                "朝が円滑に機能するのは、人々がためらわずに動けるときだけです。予測可能性は信頼の基盤です。"
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "落ち着いた交通の中で、共有された通りを予測可能に移動するタイの歩行者と自転車利用者",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "移動と停止",
            paragraphs: [
                "動きが恐れや危険なく自然に減速できるとき、都市は穏やかに目覚めます。"
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "朝の移動と歩行者の安全な停止をバランスさせる通りの設計",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};