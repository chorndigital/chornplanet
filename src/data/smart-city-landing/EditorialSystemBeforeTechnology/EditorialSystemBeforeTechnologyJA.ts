import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialSystemBeforeTechnologyJA: ISmartCityLanding = {
    heroObservation: {
        headline: "テクノロジーより先にシステム",
        paragraphs: [
            "テクノロジーだけでスマートシティが生まれるわけではありません。",
            "都市は、システムが日常の行動を静かに形づくることで、より知的になります。たとえば、安全な横断、予測可能な流れ、円滑な物流、そして確実に機能する公共空間です。",
            "テクノロジーは、人々の生活を測定可能な形で改善する場合にこそ意味を持ちます。そのつながりがなければ、価値は限定的です。"
        ],
        image: {
            url: "/smart-city/editorial/system-before-technology.png",
            alt: "タイの日常生活の背景で静かに機能する都市インフラ",
        },
        cta: {
            label: "ローカルをグローバルの原型として探る",
            href: "/smart-city/editorial-local-as-global-prototype",
        },
    },

    systemExplanation: {
        headline: "システムの視点が明らかにするもの",
        paragraphs: [
            "システムの視点は、まず結果から始まります。快適性、安全性、リズム、そしてアクセスです。",
            "結果が可視化されて初めて、それを支えるテクノロジーを検討します。この順序により、先進的に見えるだけで実生活への影響が限られた革新を追いかけることを防げます。"
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "目立たずに日常の移動を支えるモビリティ協調システム",
        },
    },

    whyItMatters: {
        headline: "なぜテクノロジーよりシステムが重要なのか",
        paragraphs: [
            "システムから始める都市は、拡張可能な解決策を構築しやすくなります。テクノロジーから始める都市は、個別の導入にとどまることが少なくありません。"
        ],
        points: [
            {
                title: "結果が最優先",
                description:
                    "快適性や安全性が向上しなければ、テクノロジーは本来の目的を果たしていません。",
            },
            {
                title: "見えない成功が目標",
                description:
                    "効果的なシステムは日常生活に溶け込みます。人々はツールを意識せずに改善を感じます。",
            },
            {
                title: "予防は長期的な安定を支える",
                description:
                    "システム的なアプローチは、被害が発生した後に対処するのではなく、早い段階でリスクを低減します。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "モビリティの協調",
            paragraphs: [
                "システムは時間、流れ、行動を協調させます。テクノロジーはその協調層の一部に過ぎません。"
            ],
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "予測可能な移動を支えるモビリティ協調",
            },
            landingUrl: "/smart-city/system-explainers-mobility-coordination",
        },
        {
            headline: "効率性と人間のリズム",
            paragraphs: [
                "効率性は、人間のペースを上書きするのではなく、それを支えるときに意味を持ちます。"
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "人間のリズムと快適性に沿った都市システム",
            },
            landingUrl: "/smart-city/city-systems/efficiency-and-rhythm",
        },
    ],
};