import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const GlobalPatternsMixedMobilityCoexistenceJA: ISmartCityLanding = {
    heroObservation: {
        headline: "混合モビリティは世界的な標準になりつつある",
        paragraphs: [
            "徒歩、自転車、スクーター、小型電気車両、そして配送ロボットは、都市の日常的な移動の一部として存在感を増しています。",
            "多くの都市で、道路は混合モビリティの環境へと変化しており、厳格な分離ではなく共存が日常の利用を形づくっています。",
            "これは、都市空間の使われ方と共有のされ方における観察可能な変化を示しています。"
        ],
        image: {
            url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
            alt: "都市の道路で複数の移動手段が落ち着いて共存している様子",
        },
        cta: {
            label: "物流パターンを探る",
            href: "/smart-city/global-patterns-urban-logistics",
        },
    },

    systemExplanation: {
        headline: "なぜ共存が多くの都市で現れるのか",
        paragraphs: [
            "都市の道路には、すべての移動手段を完全に分離できるだけの空間がないことが多くあります。密度が増すにつれ、共有利用がより一般的になります。",
            "混乱と快適さの違いはシステム設計にあります。速度の調整、明確な優先の合図、読み取りやすい横断、そして常時の管理に依存せず摩擦を減らす街路環境です。"
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "混合モビリティの共存を可能にする公共空間のオーケストレーション",
        },
    },

    whyItMatters: {
        headline: "なぜこのグローバルパターンが重要なのか",
        paragraphs: [
            "混合モビリティは、限られた空間と多様な移動ニーズに都市が適応していることを示します。適切に設計された共存は、安全性、落ち着き、そして機能的な効率を支えます。"
        ],
        points: [
            {
                title: "共存は容量を支える",
                description:
                    "道路が複数の移動手段を受け入れることで、流れはより均等に分散され、一つのシステムに集中しにくくなります。",
            },
            {
                title: "バランスの取れた利用は快適さを高める",
                description:
                    "いずれかの移動手段が道路を支配しない場合、人々はより安全に感じやすくなり、公共空間は使いやすくなります。",
            },
            {
                title: "共有された道路は共有された利用を反映する",
                description:
                    "混合モビリティは交通条件だけでなく、空間がどのように共同で利用されているかを示すものでもあります。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "混合モビリティの共存",
            paragraphs: [
                "道路は、徒歩、スクーター、自転車、ロボット、電気車両が共に機能する共有環境として観察されることが増えています。"
            ],
            image: {
                url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                alt: "現代的なタイの街路における混合モビリティの共存",
            },
            landingUrl: "/smart-city/mobility-focus-mixed-mobility",
        },
        {
            headline: "密度と快適性",
            paragraphs: [
                "共存は、高密度環境で快適さを維持する上で役割を果たします。共有利用の設計がなければ、密度は摩擦を生む可能性があります。"
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "設計と共有モビリティによって支えられる快適な密度",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};