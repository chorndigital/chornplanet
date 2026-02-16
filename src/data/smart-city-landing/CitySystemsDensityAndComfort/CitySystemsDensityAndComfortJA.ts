import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsDensityAndComfortJA: ISmartCityLanding = {
    heroObservation: {
        headline: "密度と快適性",
        paragraphs: [
            "密度そのものが問題とは限りません。不快さは、システム設計が不十分なときに生じます。",
            "都市は、空間・緑・予測可能な移動パターンによって密度が調整されると、より暮らしやすくなります。",
            "スマートシティは混雑を排除するのではなく、共有空間を快適かつ移動しやすい状態に保つ条件を整えます。"
        ],
        image: {
            url: "/smart-city/city-systems/density-and-comfort.png",
            alt: "緑や日陰の歩道、落ち着いた街のリズムがある快適なタイの都市密度",
        },
        cta: {
            label: "効率とリズムを探る",
            href: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    },

    systemExplanation: {
        headline: "密度の中に快適性を設計する方法",
        paragraphs: [
            "快適性は装飾ではなく、協調したシステムの結果です。",
            "日陰、歩きやすい縁部、照明、緑、そして公共空間のリズムは、密度がストレスとして感じられるか、支えとなるかを左右します。これらが一貫して機能すると、高密な環境でも落ち着きと機能性を保てます。"
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "緑と歩行空間によって快適性を支える都市デザインのシステム",
        },
    },

    whyItMatters: {
        headline: "密度と快適性が重要な理由",
        paragraphs: [
            "より高い密度でも快適性を維持できる都市は、持続可能性、安全性、社会的な相互作用をより効果的に支えやすくなります。"
        ],
        points: [
            {
                title: "快適性は緊張を和らげる",
                description:
                    "高密な環境が秩序立って落ち着いて感じられると、人々は空間を協調的に共有しやすくなります。",
            },
            {
                title: "暮らしやすさは拡張圧力を抑える",
                description:
                    "密度を快適に受け止められる都市は、外側への拡張の必要性を抑えられます。",
            },
            {
                title: "緑はインフラとして機能する",
                description:
                    "日陰、樹木、柔らかなエッジは、温度調整、移動パターン、全体的な体験に影響する機能要素です。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "公共空間のオーケストレーション",
            paragraphs: [
                "快適性は、歩道、照明、街路活動が時間の中でどのように調整されるかによって左右されます。"
            ],
            image: {
                url: "/smart-city/system-explainers/public-space-orchestration.png",
                alt: "快適性と社会的リズムを支える公共空間のオーケストレーション",
            },
            landingUrl: "/smart-city/system-explainers-public-space-orchestration",
        },
        {
            headline: "混在モビリティは世界的な標準になりつつある",
            paragraphs: [
                "高密な道路には共存が必要です。混在モビリティは、任意の設計選択というより、世界的に形成されつつある状況を反映しています。"
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "共存を通じて密度を支える混在モビリティ",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    ],
};