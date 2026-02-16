import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const FromLocalLifeToGlobalPatternJA: ISmartCityLanding = {
    heroObservation: {
        headline: "ローカルな生活からグローバルなパターンへ",
        paragraphs: [
            "都市生活は、馴染みのある街路、習慣、日常のルーティンによって形づくられ、ローカルなものとして感じられることが多くあります。",
            "しかし、似たような情景が異なる都市、文化、規模で繰り返し現れると、それは都市がどのように機能しやすいかを示す比較的な証拠となります。",
            "これは予測ではありません。比較です。日常の瞬間を並べていくことで、背後にあるシステムが見えるようになります。"
        ],
        image: {
            url: "/smart-city/local-to-global/global-urban-pattern.png",
            alt: "複数の都市に共通する移動パターンを示唆する日常の街路風景",
        },
        cta: {
            label: "グローバルパターンを探る",
            href: "/smart-city/global-patterns-predictable-shared-street",
        },
    },

    systemExplanation: {
        headline: "都市が比較可能になる条件",
        paragraphs: [
            "都市は、同じ種類の瞬間を観察することで比較可能になります。たとえば、横断、行列、立ち止まり、配送、そして共存です。",
            "ローカルな行動が複数の場所で繰り返されると、それは個人の好みを超えた認識可能なシグナルとなり、日常生活の背後にある共通の構造条件を示します。"
        ],
        image: {
            url: "/smart-city/editorial/local-as-global-prototype.png",
            alt: "より広い都市システムを理解するための参照として用いられるローカルな街路風景",
        },
    },

    whyItMatters: {
        headline: "なぜローカルからグローバルが重要なのか",
        paragraphs: [
            "繰り返されるパターンは、正式な政策よりも速く広がることがあります。あるローカルなルーティンが多くの都市で見られる場合、それは類似した都市条件への共通した反応を示しています。"
        ],
        points: [
            {
                title: "日常の街路はシステム条件を反映する",
                description:
                    "都市の質を理解するための信頼できる方法の一つは、普通の街路で普通の瞬間に何が起きているかを観察することです。",
            },
            {
                title: "パターンは調整なしに生まれることがある",
                description:
                    "似たような街路行動は、同様の制約や必要性によって、異なる都市で独立して現れることがあります。",
            },
            {
                title: "理解は対話を支える",
                description:
                    "パターンを観察することは、特定の解決策や思想を促進することなく、都市間の共通理解を支えます。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "日常都市から現れるグローバルパターン",
            paragraphs: [
                "似たようなシグナルが異なる文化的環境で見られる場合、それは共通の運用行動への収束を示す可能性があります。"
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "複数の都市で観察される予測可能な移動パターンを示す穏やかな共有街路",
            },
            landingUrl: "/smart-city/global-patterns-predictable-shared-street",
        },
        {
            headline: "ローカルをグローバルの原型として捉える",
            paragraphs: [
                "中規模都市では、街路行動が可視化されやすく読み取りやすいため、繰り返されるパターンを観察しやすいことが多くあります。"
            ],
            image: {
                url: "/smart-city/editorial/local-as-global-prototype.png",
                alt: "世界各地の都市で観察されるパターンを反映するローカルな街路生活",
            },
            landingUrl: "/smart-city/editorial-local-as-global-prototype",
        },
    ],
};