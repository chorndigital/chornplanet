import {IHeroSection} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const HeroSectionDataJA: IHeroSection = {
    headline: "人の暮らしが都市を形づくるとき",
    paragraph:
        "都市は、技術やインフラ、政策だけで定義されるものではありません。人々がどのように移動し、立ち止まり、集い、日常を営むかによって形づくられます。スマートシティは、都市の仕組みを静かに明らかにする日常の行動から始まります。",

    softTexts: [
        {
            title: "未来像ではない",
            description:
                "これは、すでに始まっている日常生活の観察です。新しい移動手段、目立たないシステム、人間の行動が交差しています。"
        },
        {
            title: "ローカルな瞬間、グローバルな意味",
            description:
                "一つの通りで起こることは、世界中の都市に共通するパターンを映し出すことがあります。"
        }
    ],

    image: {
        url: "/smart-city/hero-section/city-shaped-by-people-move.png",
        alt: "人々、自動化された移動、都市システムが自然に共存する日常の都市風景",
    },
    purpose: "世界観を示すこと、機能を説明することではない",
    narrativeRole: "このプラットフォームが技術ではなく人の暮らしを通して都市を観察していることを示す",
    section: "Hero Section",
    category: "Smart City Media",
    editorialTone: "observational",
    signalFocus: ["mobility", "safety", "density", "coordination"],
    landingUrl: "/smart-city/when-human-life-shapes-the-city",
};