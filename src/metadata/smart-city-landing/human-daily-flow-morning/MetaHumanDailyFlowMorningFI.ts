// src/metadata/smart-city-landing/human-daily-flow-morning/MetaHumanDailyFlowMorningEN.ts

import {Metadata} from "next";

export const MetaHumanDailyFlowMorningFI: Metadata = {
    title: "Aamun Rytmi — Päivän Alku | Älykaupunki",
    description:
        "Aamu paljastaa, tukeeko kaupunki päivittäistä rytmiä. Varhaiset ylitykset, työmatkat ja päivän ensimmäiset liikkeet osoittavat, vähentävätkö liikkumisjärjestelmät kitkaa ja rakentavatko ne luottamusta.",

    alternates: {
        canonical: "/fi/smart-city/human-daily-flow-morning",
        languages: {
            en: "/en/smart-city/human-daily-flow-morning",
            th: "/th/smart-city/human-daily-flow-morning",
            da: "/da/smart-city/human-daily-flow-morning",
            de: "/de/smart-city/human-daily-flow-morning",
            fi: "/fi/smart-city/human-daily-flow-morning",
            fr: "/fr/smart-city/human-daily-flow-morning",
            ja: "/ja/smart-city/human-daily-flow-morning",
            ko: "/ko/smart-city/human-daily-flow-morning",
            nl: "/nl/smart-city/human-daily-flow-morning",
            zh: "/zh-cn/smart-city/human-daily-flow-morning",
        },
    },

    authors: [
        {
            name: "Chorn Planet",
        },
    ],

    openGraph: {
        title: "Aamun Rytmi — Päivän Alku | Älykaupunki",
        description:
            "Aamu on varhainen stressitesti kaupunkijärjestelmille. Luotettava kaupunki määrittyy luettavuuden kautta—kun jalankulkijat, skootterit, pyöräilijät ja ajoneuvot koordinoituvat rauhallisesti vähäisin ristiriidoin.",
        url: "/fi/smart-city/human-daily-flow-morning",
        type: "website",
        images: [
            {
                url: "/images-opengraph/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
                width: 1200,
                height: 630,
                alt: "Varhainen aamu thailaisella kaupunkikadulla, työmatkalaisia kävelemässä, rauhallisia skoottereita ja hiljainen autonominen shuttle taustalla",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Aamun Rytmi — Päivän Alku | Älykaupunki",
        description:
            "Aamun rytmi näyttää, onko kaupunki luettava, ennakoitava ja valmis arkea varten.",
        images: [
            "/images-opengraph/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
        ],
    },
};