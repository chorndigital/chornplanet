import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsPublicSpaceUseJA: ISmartCityLanding = {
    heroObservation: {
        headline: "意図されたかたちで使われる公共空間",
        paragraphs: [
            "公共空間は、日常的な使われ方を通して都市の質を示します。",
            "人々が自然に座り、立ち止まり、会話し、滞在しているとき、そこには移動と快適さ、効率と社会的な生活のバランスが成立していることが表れています。",
            "機能している都市の最も明確な兆しの一つは速度ではなく、人々が安心してその場に留まれるかどうかです。"
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "よく設計された公共空間で快適に過ごすタイの人々",
        },
        cta: {
            label: "予測可能な通りに戻る",
            href: "/smart-city/urban-signals-predictable-street",
        },
    },

    systemExplanation: {
        headline: "公共空間の使われ方が示すもの",
        paragraphs: [
            "人は不快な場所に長く留まりません。安全性、日陰、照明、歩きやすさ、穏やかな通りのリズムが整っている場所にのみ、人は滞在します。",
            "公共空間は装飾的な層ではなく、システムの結果です。適切に機能すると、都市は演出やプログラムに頼らずとも社会的な活気を持ちます。"
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "照明や歩道、歩行性によって整えられた公共空間のオーケストレーション",
        },
    },

    whyItMatters: {
        headline: "なぜこのシグナルが重要なのか",
        paragraphs: [
            "公共空間が自然に使われている状態は、都市が長期的な社会的健全性、安全性、日常的な快適さを支えていることを示しています。"
        ],
        points: [
            {
                title: "快適さは証拠である",
                description:
                    "公共空間の日常的な利用は、制度や方針を超えてシステムが機能していることを示します。",
            },
            {
                title: "社会的な生活はインフラである",
                description:
                    "気軽な集まりは、都市のつながりとレジリエンスを強めます。",
            },
            {
                title: "安全は体感されるもの",
                description:
                    "よく機能する通りは、目に見える管理や取り締まりに頼らず、安全に感じられます。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "移動と停止",
            paragraphs: [
                "公共空間は、移動が停止を許すときにのみ利用可能になります。停止は中核的なシステムシグナルです。"
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "人間中心の通りのシステムにおける移動と停止のバランス",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
        {
            headline: "密度と快適さ",
            paragraphs: [
                "密度が快適に保たれると、人々はより長く屋外に留まります。快適さは、住みやすい密度を支える基本的な戦略です。"
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "緑と共有空間の快適さによって和らげられた都市の密度",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};