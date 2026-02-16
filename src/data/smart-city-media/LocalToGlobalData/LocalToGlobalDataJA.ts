//data/smart-city-media/LocalToGlobalDataJA.ts

import {ILocalToGlobal} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const LocalToGlobalDataJA: ILocalToGlobal = {
    headline: "ローカルな文脈からグローバルなパターンへ",
    paragraph:
        "都市の活動は通常、ローカルで固有の文脈の中で捉えられる。類似した条件が複数の都市、地域、文化で観察される場合、反復するパターンを特定できる。複数の場所における日常の状況を比較することで、共通する構造的なシステムを検討できる。",

    items: [
        {
            title: "街路レベルのルーティン",
            description:
                "身近な通りに沿った日々の移動は、個人が空間的条件、時間構造、モビリティシステムにどのように対応しているかを示す。ローカルに固有であっても、こうしたルーティンは都市設計によって形づくられた基盤となる構造的パターンを反映している。",
            image: {
                url: "/smart-city/local-to-global/local-street-daily-routine.png",
                alt: "日常的な都市の街路環境。歩行者、地域の店舗、稼働中のモビリティシステムが見られる",
            },
            signalFocus: ["human routine", "street-level mobility", "local behavior"],
        },
        {
            title: "複数都市における反復パターン",
            description:
                "類似した移動構造が複数の都市で観察される場合、それは比較可能な構造的条件を示す。ローカルに観察される活動は、地域をまたぐより広い都市システムの振る舞いの一部として検討できる。",
            image: {
                url: "/smart-city/local-to-global/global-urban-pattern.png",
                alt: "異なる都市間で比較可能なモビリティの流れ、物流システム、公共空間の利用が見られる都市環境",
            },
            signalFocus: ["replicability", "urban density", "systemic flow"],
        },
    ],

    purpose: "ローカル比較を通じてより広い構造的パターンを検討する",
    narrativeRole: "観察されたローカル活動をシステム分析に結び付ける",
    section: "From Local Life to Global Pattern",
    category: "Smart City Media",
    landingUrl: "/smart-city/from-local-life-to-global-pattern",
    lang: "ja",
};