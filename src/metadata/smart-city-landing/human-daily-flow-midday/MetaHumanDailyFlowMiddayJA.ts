// src/metadata/smart-city-landing/human-daily-flow-midday/MetaHumanDailyFlowMiddayEN.ts

import {Metadata} from "next";

export const MetaHumanDailyFlowMiddayJA: Metadata = {
    title: "昼の流れ — 密度と協調 | スマートシティ",
    description:
        "昼は、密度が混乱として感じられるのか、それとも協調として感じられるのかを映し出します。スマートシティは、人・モノ・移動システムが重なり合ってもストレスを生まない状態を支えます。",

    alternates: {
        canonical: "/ja/smart-city/human-daily-flow-midday",
        languages: {
            en: "/en/smart-city/human-daily-flow-midday",
            th: "/th/smart-city/human-daily-flow-midday",
            da: "/da/smart-city/human-daily-flow-midday",
            de: "/de/smart-city/human-daily-flow-midday",
            fi: "/fi/smart-city/human-daily-flow-midday",
            fr: "/fr/smart-city/human-daily-flow-midday",
            ja: "/ja/smart-city/human-daily-flow-midday",
            ko: "/ko/smart-city/human-daily-flow-midday",
            nl: "/nl/smart-city/human-daily-flow-midday",
            zh: "/zh-cn/smart-city/human-daily-flow-midday",
        },
    },

    authors: [
        {
            name: "Chorn Planet",
        },
    ],

    openGraph: {
        title: "昼の流れ — 密度と協調 | スマートシティ",
        description:
            "ピークの強度では、物流、歩行者、車両、そして共有空間が静かに協調する必要があります。システムが整えば、密度は混乱ではなく落ち着きとして感じられます。",
        url: "/ja/smart-city/human-daily-flow-midday",
        type: "website",
        images: [
            {
                url: "/images-opengraph/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
                width: 1200,
                height: 630,
                alt: "昼の混雑したタイの都市の通りで、歩行者、スクーター、自転車、配送ロボット、自律走行の電動シャトルが共に動いている",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "昼の流れ — 密度と協調 | スマートシティ",
        description:
            "昼は、都市システムが緊張を生まずに密度を協調できるかを試します。",
        images: [
            "/images-opengraph/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
        ],
    },
};