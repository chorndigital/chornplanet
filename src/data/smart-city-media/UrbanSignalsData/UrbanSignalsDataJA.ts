//data/smart-city-media/UrbanSignalsDataJA.ts

import {IUrbanSignals} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const UrbanSignalsDataJA: IUrbanSignals = {
    headline: "日常で観察される都市のシグナル",
    paragraph:
        "都市は、小さく観察可能なシグナルを通じて示される。道路の印象、人々の移動の仕方、時間とともに変化する空間の状態などである。これらの瞬間は必ずしもシステムとして説明されないが、都市条件がどのように機能しているかを示す場合がある。",

    signals: [
        {
            title: "予測可能な街路行動",
            description:
                "歩行者、自転車利用者、車両が明確な期待のもとで移動する場合、それは共有された規範や空間的な明瞭さを示す可能性がある。明示的な取り締まりがなくても成り立つ場合がある。",

            signalFocus: ["predictability", "shared space", "human trust"],

            image: {
                url: "/smart-city/urban-signals/predictable-shared-street.png",
                alt: "混雑や緊張が目立たない共有都市道路で、人、自転車、車両が円滑に移動している様子",
            },

            landingUrl: "/smart-city/urban-signals-predictable-street",
        },

        {
            title: "日常生活に統合された物流",
            description:
                "配送ロボット、小型電動車両、配達員が注意を支配することなく運用される場合、それは物流が日常の移動パターンに統合されていることを示す可能性がある。",

            signalFocus: ["logistics", "integration", "low friction"],

            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "現代都市の街路生活と並行して静かに稼働する小型配送車両やロボット",
            },

            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },

        {
            title: "意図された形で利用される公共空間",
            description:
                "人々が滞在し、立ち止まり、空間を日常的な形で共有する場合、それは移動効率と公共空間の利用可能性との間のバランスを示す可能性がある。",

            signalFocus: ["public space", "comfort", "social rhythm"],

            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "よく設計された都市の公共空間で、人々が座り、歩き、交流している様子",
            },

            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
    ],
}