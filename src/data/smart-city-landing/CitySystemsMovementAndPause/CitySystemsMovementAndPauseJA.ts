import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsMovementAndPauseJA: ISmartCityLanding = {
    heroObservation: {
        headline: "移動と停止",
        paragraphs: [
            "都市は移動の速さによって定義されるのではなく、人々がリスクや圧力を感じずに立ち止まれるかどうかによって定義されます。",
            "健全な道路は高速道路のように設計されません。そこは共有環境であり、移動が自然に減速でき、停止も安全に保たれる空間です。",
            "都市が流れと静止のバランスを取ると、日常生活はより落ち着き、より社会的になり、より人間中心になります。"
        ],
        image: {
            url: "/smart-city/city-systems/movement-and-pause.png",
            alt: "歩行者の停止と落ち着いた移動の流れが共存するタイの都市道路",
        },
        cta: {
            label: "密度と快適性を探る",
            href: "/smart-city/city-systems-density-and-comfort",
        },
    },

    systemExplanation: {
        headline: "道路にバランスを生み出す要素",
        paragraphs: [
            "移動と停止は対立するものではありません。同じ道路システムの中で補完し合う機能です。",
            "横断、縁石の設計、歩道のリズム、交通行動は、人々が減速し、観察し、交流することに安全を感じられるかどうかに影響します。道路が読みやすく予測可能であれば、過度な取り締まりに依存せずに社会的な活動が生まれます。"
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "安全な停止と共有された都市生活を可能にする公共空間デザイン",
        },
    },

    whyItMatters: {
        headline: "移動と停止が重要な理由",
        paragraphs: [
            "人々が自然に立ち止まれると、道路はより安全で快適になり、社会的な活動も活発になりやすくなります。"
        ],
        points: [
            {
                title: "停止は安全性を示し得る",
                description:
                    "人々が安心して止まれるなら、その道路はすでに予防的な環境として機能している可能性があります。",
            },
            {
                title: "圧力のない流れ",
                description:
                    "予測可能な移動は衝突を減らし、減速を危険ではなく自然な行為にします。",
            },
            {
                title: "社会生活には静止が必要",
                description:
                    "道路が待つ、観察する、会う、休むことを支えるとき、都市はより人間中心になります。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "公共空間が意図どおりに使われている",
            paragraphs: [
                "人々が快適に滞在している状態は、都市が移動と快適性の間で実用的なバランスを達成していることを示唆します。"
            ],
            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "公共空間を自然に快適に利用するタイの住民",
            },
            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
        {
            headline: "予測可能な道路行動",
            paragraphs: [
                "予測可能性は安全な停止を支えます。これがなければ、立ち止まること自体がリスクになり得ます。"
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "安全な歩行者移動を支える予測可能な共有道路の行動",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
    ],
};