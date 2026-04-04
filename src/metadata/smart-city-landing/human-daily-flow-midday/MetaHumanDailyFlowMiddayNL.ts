// src/metadata/smart-city-landing/human-daily-flow-midday/MetaHumanDailyFlowMiddayEN.ts

import {Metadata} from "next";

export const MetaHumanDailyFlowMiddayNL: Metadata = {
    title: "Middagritme — Dichtheid en Coördinatie | Smart City",
    description:
        "De middag laat zien of dichtheid chaotisch of gecoördineerd aanvoelt. Een smart city ondersteunt overlappende mensen, goederen en mobiliteitssystemen zonder stress te veroorzaken.",

    alternates: {
        canonical: "/nl/smart-city/human-daily-flow-midday",
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
        title: "Middagritme — Dichtheid en Coördinatie | Smart City",
        description:
            "Op het moment van hoogste intensiteit moeten logistiek, voetgangers, voertuigen en gedeelde ruimte stil samenwerken. Wanneer systemen op elkaar zijn afgestemd, voelt dichtheid rustig in plaats van chaotisch.",
        url: "/nl/smart-city/human-daily-flow-midday",
        type: "website",
        images: [
            {
                url: "/images-opengraph/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
                width: 1200,
                height: 630,
                alt: "Drukke Thaise stadsstraat rond de middag met voetgangers, scooters, fietsers, bezorgrobots en een autonome elektrische shuttle die samen bewegen",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Middagritme — Dichtheid en Coördinatie | Smart City",
        description:
            "De middag test of stedelijke systemen dichtheid kunnen coördineren zonder spanning te creëren.",
        images: [
            "/images-opengraph/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
        ],
    },
};