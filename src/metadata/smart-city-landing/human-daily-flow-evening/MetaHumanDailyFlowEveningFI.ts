// src/metadata/smart-city-landing/human-daily-flow-evening/MetaHumanDailyFlowEveningEN.ts

import {Metadata} from "next";

export const MetaHumanDailyFlowEveningFI: Metadata = {
    title: "Iltarytmi — Hidastuminen ja Palautuminen | Älykaupunki",
    description:
        "Ilta ei ole nopeutta varten, vaan palautumista varten. Älykaupunki näkyy siinä, tuntuuko katuympäristö riittävän turvalliselta, jotta ihmiset voivat rentoutua, kävellä, tavata ja olla läsnä auringonlaskun jälkeen.",

    alternates: {
        canonical: "/fi/smart-city/human-daily-flow-evening",
        languages: {
            en: "/en/smart-city/human-daily-flow-evening",
            th: "/th/smart-city/human-daily-flow-evening",
            da: "/da/smart-city/human-daily-flow-evening",
            de: "/de/smart-city/human-daily-flow-evening",
            fi: "/fi/smart-city/human-daily-flow-evening",
            fr: "/fr/smart-city/human-daily-flow-evening",
            ja: "/ja/smart-city/human-daily-flow-evening",
            ko: "/ko/smart-city/human-daily-flow-evening",
            nl: "/nl/smart-city/human-daily-flow-evening",
            zh: "/zh-cn/smart-city/human-daily-flow-evening",
        },
    },

    authors: [
        {
            name: "Chorn Planet",
        },
    ],

    openGraph: {
        title: "Iltarytmi — Hidastuminen ja Palautuminen | Älykaupunki",
        description:
            "Ilta paljastaa, tukeeko kaupunki mukavuutta myös päiväsaikojen ulkopuolella. Valaistus, käveltävyys ja ennakoitava liikkuminen määrittävät, pysyykö julkinen elämä rauhallisena ja kutsuvana auringonlaskun jälkeen.",
        url: "/fi/smart-city/human-daily-flow-evening",
        type: "website",
        images: [
            {
                url: "/images-opengraph/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
                width: 1200,
                height: 630,
                alt: "Varhainen ilta thailaisella kaupunkikadulla, lämpimät valot, jalankulkijoita, rauhallisia skoottereita ja turvallinen ilmapiiri sosiaalista elämää varten",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Iltarytmi — Hidastuminen ja Palautuminen | Älykaupunki",
        description:
            "Kaupungin laatu näkyy, kun ihmiset hidastavat ja tuntevat olonsa riittävän turvalliseksi pysyäkseen ulkona auringonlaskun jälkeen.",
        images: [
            "/images-opengraph/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
        ],
    },
};