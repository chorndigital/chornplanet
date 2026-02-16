import {IGlobalPatterns} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const GlobalPatternsDataJA: IGlobalPatterns = {
    headline: "世界各地の都市の日常から観察される傾向",
    paragraph:
        "文化、規模、所得水準が異なる都市において、移動および公共空間の利用に関する類似したパターンが徐々に観察されています。これらの動向は技術のみによって生じるものではなく、人々の日常的な行動、空間的制約、そしてシステム間の調整が時間をかけて整合することにより形成されます。これらのシグナルを観察することにより、異なる地域の都市が類似した運用上の特性を示しつつ、地域固有のアイデンティティを維持している状況を説明することができます。",

    signals: [
        {
            title: "予測可能な道路環境は公共空間の活用を支える",
            description:
                "移動システムが予測可能になると、共有空間における利用者の安心感が高まります。速度の最大化よりも不確実性の低減を重視する道路は、複数の地域において、より安定した快適な公共空間利用と関連付けられています。",
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "歩行者、自転車、車両が予測可能に移動する落ち着いた共有道路"
            },
            signalFocus: [
                "shared streets",
                "predictable mobility",
                "human comfort",
                "street behavior"
            ],
            landingUrl: "/smart-city/global-patterns-predictable-shared-street"
        },
        {
            title: "都市環境における複合的モビリティの増加傾向",
            description:
                "徒歩、自転車、電動キックボード、小型EV、配送ロボットなどが多くの都市で見られるようになっています。さまざまな地域において、複数の移動手段が共存できるよう環境が整備されており、これは空間的および運用上の制約への対応として理解されています。",
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "複数の移動手段が共存する都市環境"
            },
            signalFocus: [
                "mixed mobility",
                "coexistence",
                "last-mile movement",
                "urban adaptation"
            ],
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence"
        },
        {
            title: "日常的な都市システムへの物流の統合",
            description:
                "小規模物流には、地域配送用EV、地上ロボット、および法令で許可されている場合の空中システムが含まれ、これらは日常的な都市運用の一部として徐々に組み込まれています。既存の空間および安全の枠組みの中で物流を調整する都市では、公共の快適性を維持しつつ、運用効率の向上が見られる傾向があります。",
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "都市環境で運用される小型配送車両およびロボット"
            },
            signalFocus: [
                "urban logistics",
                "last-mile delivery",
                "system coordination",
                "integrated infrastructure"
            ],
            landingUrl: "/smart-city/global-patterns-urban-logistics"
        }
    ]
}