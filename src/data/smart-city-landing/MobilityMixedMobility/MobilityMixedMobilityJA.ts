import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const MobilityMixedMobilityJA: ISmartCityLanding = {
    heroObservation: {
        headline: "混合モビリティの共存",
        paragraphs: [
            "現代の通りは、単一の移動手段だけを中心に設計されるものではなくなっています。",
            "スクーター、自転車、歩行者、配送ロボット、自動運転車は、街の中で日常的に見られる存在になりつつあります。",
            "スマートシティはすべてを分離することで定義されるのではありません。共存が自然で安全に感じられることによって定義されます。"
        ],
        image: {
            url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
            alt: "歩行者、スクーター、自転車利用者、自動運転シャトルが自然に共存するタイの通り",
        },
        cta: {
            label: "モビリティ特集に戻る",
            href: "/smart-city/mobility-focus-mixed-mobility",
        },
    },

    systemExplanation: {
        headline: "共存を成立させる条件",
        paragraphs: [
            "混合モビリティが機能するのは、どれか一つの手段が注目を支配しないときです。通りは一貫した設計によって読みやすくなります。速度の調和、明確な優先順位の手がかり、そして時間に応じて適応できる空間です。",
            "適切に設計されていれば、共存は自然で負担がありません。人々はシステムを意識せず、ただ移動できます。"
        ],
        image: {
            url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
            alt: "現代的な通りで落ち着いて共存する複数の移動手段",
        },
    },

    whyItMatters: {
        headline: "なぜ混合モビリティが重要なのか",
        paragraphs: [
            "混合モビリティを支える都市は、渋滞の圧力を軽減し、より暮らしやすい公共空間をつくることができます。"
        ],
        points: [
            {
                title: "移動手段の多様性はレジリエンスである",
                description:
                    "ある手段が遅くなっても、他の手段が都市のリズムを保つことができます。共存は冗長性を生みます。",
            },
            {
                title: "支配が減るほど快適になる",
                description:
                    "特定の車両が空間を支配しないとき、通りはより落ち着いて感じられます。",
            },
            {
                title: "この変化はすでに見え始めている",
                description:
                    "混合モビリティは、世界各地の都市で日常的な通りの行動としてますます見られるようになっています。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "混合モビリティは世界の標準になりつつある",
            paragraphs: [
                "文化が異なっても、通りは厳密な分離よりも共有された共存パターンへと収束しつつあります。"
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "さまざまな都市に現れている混合モビリティの世界的パターン",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
        {
            headline: "日常生活に溶け込む物流",
            paragraphs: [
                "共存には配送システムも含まれます。統合が進んだ都市では、公共空間を乱さずに物流が機能します。"
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "日常の都市生活に溶け込む配送ロボットと小型EV物流",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
    ],
};