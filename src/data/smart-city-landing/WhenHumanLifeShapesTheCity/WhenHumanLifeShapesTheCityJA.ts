import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const WhenHumanLifeShapesTheCityJA: ISmartCityLanding = {
    heroObservation: {
        headline: "人の暮らしが都市を形づくるとき",
        paragraphs: [
            "都市は技術だけで定義されるものではなく、人々が日々どのように移動し、立ち止まり、関わり合うかによって形づくられます。",
            "地域の日常を観察することで、異なる都市や文脈に共通して現れる都市のパターンを見出すことができます。"
        ],
        image: {
            url: "/smart-city/hero/when-human-life-shapes-the-city.png",
            alt: "日常の暮らしが穏やかなスマートシティの通りを形づくる"
        },
        cta: {
            label: "パターンを探る",
            href: `/smart-city/from-local-life-to-global-pattern`
        }
    },

    systemExplanation: {
        headline: "日常の下にあるシステム",
        paragraphs: [
            "都市のシステムは、日々の設計判断を通じて移動、アクセス、安全を静かに調整しています。",
            "適切に設計されている場合、それらのシステムは目立たずに機能しながらも不可欠な存在となります。"
        ]
    },

    whyItMatters: {
        headline: "なぜ重要なのか",
        paragraphs: [
            "人のリズムに沿った都市は、より持続的に拡張し、長期的な安定を維持しやすくなります。"
        ]
    },

    relatedSignals: [
        {
            headline: "予測可能な共有ストリート",
            paragraphs: [
                "予測可能性を備えた通りは摩擦を減らし、共有された信頼を支えます。"
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "予測可能な共有ストリート"
            },
            cta: {
                label: "シグナルを読む",
                href: `/smart-city/urban-signals-predictable-street`
            }
        }
    ],
}