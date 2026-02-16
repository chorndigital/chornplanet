import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsEfficiencyAndRhythmJA: ISmartCityLanding = {
    heroObservation: {
        headline: "効率と人間のリズム",
        paragraphs: [
            "効率は、日常生活が合理的に許容できる範囲を超えて人々に速さを求めると、問題になり得ます。",
            "都市は、人間のリズムに沿ってシステムが整うと最も機能します。予測可能なタイミング、動きの連携、そして目立たない物流が重要です。",
            "目標は最大速度ではなく、安定して信頼でき、息苦しさのない都市を実現することです。"
        ],
        image: {
            url: "/smart-city/city-systems/efficiency-and-rhythm.png",
            alt: "滑らかな移動と予測可能な日常リズムを支えるタイの都市インフラ",
        },
        cta: {
            label: "都市システムに戻る",
            href: "/smart-city/city-systems-movement-and-pause",
        },
    },

    systemExplanation: {
        headline: "効率が本当に意味するもの",
        paragraphs: [
            "効率は速度だけで定義されるものではなく、摩擦の低減によって定義されます。",
            "交通、横断、物流、公共サービスが時間軸で調整されると、都市は予測可能になります。人々は急ぐのではなくシステムを信頼できるようになり、都市は継続的に動きながらも落ち着きを保ちます。"
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "速度を強制せずに滑らかな移動を実現するモビリティ連携",
        },
    },

    whyItMatters: {
        headline: "効率とリズムが重要な理由",
        paragraphs: [
            "人間のリズムを尊重する都市は、快適性を損なうことなくストレスを抑え、持続的な生産性を支えやすくなります。"
        ],
        points: [
            {
                title: "予測可能性は不安を軽減する",
                description:
                    "移動のタイミングを予測できると、人々は混乱に反応し続ける必要がなくなり、落ち着きを保ちやすくなります。",
            },
            {
                title: "速度はパフォーマンスと同義ではない",
                description:
                    "都市が速く動いていても、負担が大きく感じられる場合があります。効果的なパフォーマンスは、安定して目立たない形で体感されることが多いです。",
            },
            {
                title: "物流は背景インフラとして機能すべき",
                description:
                    "適切に設計されたシステムは、注意を求めたり公共空間を圧迫したりすることなく、日常生活を継続的に支えます。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "モビリティの連携",
            paragraphs: [
                "信号、車両、歩行者、公共交通が時間軸で整合すると、移動は管理されているというより自然で滑らかに感じられます。"
            ],
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "滑らかな都市リズムを支えるモビリティ連携システム",
            },
            landingUrl: "/smart-city/system-explainers-mobility-coordination",
        },
        {
            headline: "物流は静かに都市のリズムを変えている",
            paragraphs: [
                "効率的な物流は、目に見える速度よりも、タイミングと目立たなさによって都市に影響を与えます。"
            ],
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "現代的な街路で静かに機能する都市物流",
            },
            landingUrl: "/smart-city/global-patterns-urban-logistics",
        },
    ],
};