// src/metadata/smart-city-landing/urban-signals-logistics-integration/MetaUrbanSignalsLogisticsIntegrationFI.ts

import {Metadata} from "next";

export const MetaUrbanSignalsLogisticsIntegrationFI: Metadata = {
    title: "Arkeen sulautuva logistiikka | Urban Signals",
    description:
        "Hyvin integroitu logistiikka jää usein lähes huomaamattomaksi. Kun toimitusrobotit ja pienet sähköajoneuvot toimivat häiritsemättä katuelämää, se kertoo järjestelmän kypsyydestä ja rauhallisesta kaupunkirytmistä.",

    alternates: {
        canonical: "/en/smart-city/urban-signals-logistics-integration",
        languages: {
            en: "/en/smart-city/urban-signals-logistics-integration",
            th: "/th/smart-city/urban-signals-logistics-integration",
            da: "/da/smart-city/urban-signals-logistics-integration",
            de: "/de/smart-city/urban-signals-logistics-integration",
            fi: "/fi/smart-city/urban-signals-logistics-integration",
            fr: "/fr/smart-city/urban-signals-logistics-integration",
            ja: "/ja/smart-city/urban-signals-logistics-integration",
            ko: "/ko/smart-city/urban-signals-logistics-integration",
            nl: "/nl/smart-city/urban-signals-logistics-integration",
            zh: "/zh-cn/smart-city/urban-signals-logistics-integration",
        },
    },

    authors: [
        {
            name: "CHORN Digital",
        },
    ],

    openGraph: {
        title: "Arkeen sulautuva logistiikka | Urban Signals",
        description:
            "Älykästä kaupunkia ei määritä toimitusjärjestelmien näkyvyys, vaan se, sulautuuko logistiikka päivittäiseen rytmiin ilman että se häiritsee ihmisten mukavuutta tai katuelämää.",
        url: "/en/smart-city/urban-signals-logistics-integration",
        type: "website",
        images: [
            {
                url: "/images-opengraph/smart-city/urban-signals/urban-logistics.png",
                width: 1200,
                height: 630,
                alt: "Thaimaalainen kaupunkikatu, jossa toimitusrobotit ja pienet sähköajoneuvot sulautuvat luontevasti arkeen",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Arkeen sulautuva logistiikka | Urban Signals",
        description:
            "Kun toimitusjärjestelmät sulautuvat arkeen sen sijaan että hallitsisivat sitä, logistiikasta tulee merkki kypsistä ja rauhallisista kaupunkijärjestelmistä.",
        images: [
            "/images-opengraph/smart-city/urban-signals/urban-logistics.png",
        ],
    },
};