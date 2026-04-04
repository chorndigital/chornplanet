// src/metadata/smart-city-landing/human-daily-flow-midday/MetaHumanDailyFlowMiddayEN.ts

import {Metadata} from "next";

export const MetaHumanDailyFlowMiddayDE: Metadata = {
    title: "Mittagsrhythmus — Dichte und Koordination | Smart City",
    description:
        "Zur Mittagszeit zeigt sich, ob Dichte chaotisch oder koordiniert wirkt. Eine Smart City unterstützt das Überlappen von Menschen, Gütern und Mobilitätssystemen, ohne Stress zu erzeugen.",

    alternates: {
        canonical: "/de/smart-city/human-daily-flow-midday",
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
        title: "Mittagsrhythmus — Dichte und Koordination | Smart City",
        description:
            "Auf dem Höhepunkt der Intensität müssen Logistik, Fußgänger, Fahrzeuge und gemeinsamer Raum leise koordiniert werden. Wenn Systeme ausgerichtet sind, fühlt sich Dichte ruhig statt chaotisch an.",
        url: "/de/smart-city/human-daily-flow-midday",
        type: "website",
        images: [
            {
                url: "/images-opengraph/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
                width: 1200,
                height: 630,
                alt: "Belebte thailändische Stadtstraße zur Mittagszeit mit Fußgängern, Rollern, Radfahrern, Lieferrobotern und einem autonomen Elektro-Shuttle",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Mittagsrhythmus — Dichte und Koordination | Smart City",
        description:
            "Der Mittag testet, ob urbane Systeme Dichte koordinieren können, ohne Spannung zu erzeugen.",
        images: [
            "/images-opengraph/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
        ],
    },
};