import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialLocalAsGlobalPrototypeJA: ISmartCityLanding = {
    heroObservation: {
        headline: "ローカルをグローバルの原型として捉える",
        paragraphs: [
            "中規模都市は、都市システムを観察しやすい環境を提供することが多くあります。",
            "これらの都市は、システムの圧力を示すのに十分な密度を持ちながら、日常的な人の行動を通じて把握しやすい状態を保っています。",
            "地域の街路を丁寧に観察することで、後にさまざまな都市環境で見られるパターンを把握することができます。"
        ],
        image: {
            url: "/smart-city/editorial/local-as-global-prototype.png",
            alt: "世界各地の都市に共通するパターンを映し出すタイの地域街路",
        },
        cta: {
            label: "スマートシティ概要に戻る",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
    },

    systemExplanation: {
        headline: "なぜ中規模都市は多くを示すのか",
        paragraphs: [
            "大都市では規模の大きさによってシステムが見えにくくなることがあります。一方、中規模都市では、横断、行列、配送、通りレベルでの調整といった日常的な活動を通じて、システムが可視化されやすくなります。",
            "こうした環境では、より大規模または複雑な都市に広がる前に、繰り返されるパターンを明確に観察することができます。"
        ],
        image: {
            url: "/smart-city/local-to-global/local-street-daily-routine.png",
            alt: "都市システムの指標として人の行動を示す地域街路の日常風景",
        },
    },

    whyItMatters: {
        headline: "ローカルをグローバルの原型として捉える重要性",
        paragraphs: [
            "都市の収束は計画だけで起こるものではありません。日常生活の中で機能するローカルなパターンが繰り返されることで生まれます。"
        ],
        points: [
            {
                title: "ローカルなパターンは自然に広がる",
                description:
                    "ある習慣がうまく機能すれば、正式な調整がなくても他の場所に取り入れられることがあります。",
            },
            {
                title: "可視性は実践的な学びを支える",
                description:
                    "中規模都市では、抽象化に頼らず、直接的な観察を通じて都市システムを理解できます。",
            },
            {
                title: "ローカルなアイデンティティとグローバルな原則は共存できる",
                description:
                    "都市は文化的な固有性を保ちながら、複数の地域で観察されるシステム行動を表現することができます。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "ローカルな生活からグローバルなパターンへ",
            paragraphs: [
                "似たようなローカルの情景が複数の都市に現れるとき、それは共有されたシステム行動を示しています。"
            ],
            image: {
                url: "/smart-city/local-to-global/global-urban-pattern.png",
                alt: "ローカルな情景を比較し、共通する都市パターンを示す例",
            },
            landingUrl: "/smart-city/from-local-life-to-global-pattern",
        },
        {
            headline: "日常都市から現れるグローバルパターン",
            paragraphs: [
                "予測可能性、混合モビリティ、目立たない物流は、さまざまな都市環境で観察されるようになっています。"
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "複数の都市で見られる予測可能な共有街路のパターン",
            },
            landingUrl: "/smart-city/global-patterns-predictable-shared-street/",
        },
    ],
};