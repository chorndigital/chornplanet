// src/metadata/smart-city-landing/human-daily-flow-midday/MetaHumanDailyFlowMiddayEN.ts

import {Metadata} from "next";

export const MetaHumanDailyFlowMiddayFI: Metadata = {
    title: "Keskipäivän Rytmi — Tiheys ja Koordinointi | Älykaupunki",
    description:
        "Keskipäivä paljastaa, tuntuuko tiheys kaoottiselta vai koordinoidulta. Älykaupunki tukee ihmisten, tavaroiden ja liikkumisjärjestelmien päällekkäisyyttä ilman stressiä.",

    alternates: {
        canonical: "/fi/smart-city/human-daily-flow-midday",
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
        title: "Keskipäivän Rytmi — Tiheys ja Koordinointi | Älykaupunki",
        description:
            "Huippuintensiteetissä logistiikan, jalankulkijoiden, ajoneuvojen ja jaetun tilan on koordinoiduttava hiljaisesti. Kun järjestelmät ovat linjassa, tiheys tuntuu rauhalliselta eikä kaoottiselta.",
        url: "/fi/smart-city/human-daily-flow-midday",
        type: "website",
        images: [
            {
                url: "/images-opengraph/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
                width: 1200,
                height: 630,
                alt: "Vilkas keskipäivän thailainen kaupunkikatu, jossa jalankulkijat, skootterit, pyöräilijät, toimitusrobotit ja autonominen sähköinen shuttle liikkuvat yhdessä",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Keskipäivän Rytmi — Tiheys ja Koordinointi | Älykaupunki",
        description:
            "Keskipäivä testaa, voivatko kaupunkijärjestelmät koordinoida tiheyttä synnyttämättä jännitystä.",
        images: [
            "/images-opengraph/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
        ],
    },
};