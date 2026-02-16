import {IEditorialPositioning} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const EditorialPositioningDataJA: IEditorialPositioning = {
    headline: "日常からシステムの理解へ",
    paragraphs: [
        "このプラットフォームは都市の未来を予測しません。人々の日常生活を通して、都市がどのように機能しているかを観察します。",
        "ルーティン、移動、停止、そして調整に注目することで、都市システムは技術や政策の言葉に還元されることなく可視化されます。",
        "目的は解決策を宣伝することではなく、都市・文化・規模を越えた共通理解を支えることです。"
    ],
    principles: [
        {
            title: "人間を起点とした観察",
            description:
                "都市システムは、実際の経験を通して理解されます。人々のルーティンや日々の意思決定は、二次的な結果ではなく一次的なシグナルとして扱われます。",
            image: {
                url: "/smart-city/editorial/human-first-observation.png",
                alt: "落ち着いた都市の通りを行き交う人々が、都市システムの主要なシグナルとなる",
            },
            landingUrl: "/smart-city/editorial-human-first-observation",
        },
        {
            title: "技術より先にシステム",
            description:
                "技術は、行動、安全、アクセス、快適さを意味ある形で変える場合にのみ検討されます。単独の機能としては扱いません。",
            image: {
                url: "/smart-city/editorial/system-before-technology.png",
                alt: "日常生活の背景で静かに機能する都市の移動とインフラ",
            },
            landingUrl: "/smart-city/editorial/system-before-technology",
        },
        {
            title: "ローカルをグローバルなプロトタイプとして捉える",
            description:
                "中規模都市は、生きた実験場として機能し得ます。ローカルなパターンは、丁寧に観察されることで、より広い都市システムへと展開していく場合があります。",
            image: {
                url: "/smart-city/editorial/local-as-global-prototype.png",
                alt: "世界の都市に共通するパターンを映し出すローカルな通りの風景",
            },
            landingUrl: "/smart-city/editorial-local-as-global-prototype",
        },
    ],
}
