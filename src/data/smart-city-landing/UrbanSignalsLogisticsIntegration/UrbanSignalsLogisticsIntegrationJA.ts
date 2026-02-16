import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsLogisticsIntegrationJA: ISmartCityLanding = {
    heroObservation: {
        headline: "日常生活に溶け込むロジスティクス",
        paragraphs: [
            "ロジスティクスは都市の基盤となるシステムであり、適切に統合されている場合、ほとんど意識されません。",
            "配送ロボット、配達員、小型電動車両が過度に注目を集めることなく運用されているとき、それはロジスティクスが押し付けられているのではなく、統合されていることを示しています。",
            "スマートシティは配送システムの目立ちやすさでは定義されません。ロジスティクスが街路生活を妨げることなく、日常のリズムに適合しているかどうかで定義されます。"
        ],
        image: {
            url: "/smart-city/urban-signals/urban-logistics.png",
            alt: "配送ロボットと小型電動ロジスティクスが日常生活に溶け込むタイの都市の通り",
        },
        cta: {
            label: "公共空間の利用を探る",
            href: "/smart-city/urban-signals-public-space-use",
        },
    },

    systemExplanation: {
        headline: "ロジスティクス統合が示すもの",
        paragraphs: [
            "統合されたロジスティクスとは、人々の快適さを損なうことなく、物資が継続的に移動できる状態を指します。",
            "それにはタイミング、ルーティング、そして調整が必要です。ロジスティクスが周縁で静かに機能する一方で、通りは歩行者にとって読みやすくある必要があります。"
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "日常の動きの背後で静かに機能する都市ロジスティクスシステム",
        },
    },

    whyItMatters: {
        headline: "なぜこのシグナルが重要なのか",
        paragraphs: [
            "ロジスティクスの統合は、都市システムの成熟度を示すシグナルです。街路をインフラ空間に変えることなく、日常的な需要に対応できることを示します。"
        ],
        points: [
            {
                title: "騒音のない効率性",
                description:
                    "適切に統合されたロジスティクスは、公共空間の落ち着きを保ちながら摩擦を減らします。",
            },
            {
                title: "通りは人間のものとして保たれる",
                description:
                    "ロジスティクスが溶け込むことで、歩行者や社会的な活動が通りの主なアイデンティティであり続けます。",
            },
            {
                title: "タイミングは予防的デザインを支える",
                description:
                    "調整された配送リズムは、混雑のピークが発生する前に抑えることができます。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "ロジスティクスが都市のリズムを静かに変えている",
            paragraphs: [
                "世界中の都市で、ロジスティクスはより小さく静かなシステムへと移行し、日常の動きに影響を与えています。"
            ],
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "日常のリズムに影響を与える都市ロジスティクスの世界的パターン",
            },
            landingUrl: "/smart-city/global-patterns-urban-logistics",
        },
        {
            headline: "効率性と人のリズム",
            paragraphs: [
                "ロジスティクスの統合は、都市システムが速度を優先するのではなく、人のリズムに整合しているときに最も機能します。"
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "人のリズムに整合した効率性を備える現代都市システム",
            },
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    ],
};