// src/metadata/smart-city-landing/human-daily-flow-midday/MetaHumanDailyFlowMiddayEN.ts

import {Metadata} from "next";

export const MetaHumanDailyFlowMiddayFR: Metadata = {
    title: "Flux de Midi — Densité et Coordination | Smart City",
    description:
        "Le milieu de journée révèle si la densité paraît chaotique ou coordonnée. Une smart city permet le chevauchement des personnes, des marchandises et des systèmes de mobilité sans générer de stress.",

    alternates: {
        canonical: "/fr/smart-city/human-daily-flow-midday",
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
        title: "Flux de Midi — Densité et Coordination | Smart City",
        description:
            "Au pic d’intensité, la logistique, les piétons, les véhicules et l’espace partagé doivent se coordonner discrètement. Lorsque les systèmes s’alignent, la densité paraît calme plutôt que chaotique.",
        url: "/fr/smart-city/human-daily-flow-midday",
        type: "website",
        images: [
            {
                url: "/images-opengraph/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
                width: 1200,
                height: 630,
                alt: "Rue urbaine thaïlandaise animée à midi avec piétons, scooters, cyclistes, robots de livraison et navette électrique autonome se déplaçant ensemble",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Flux de Midi — Densité et Coordination | Smart City",
        description:
            "Le milieu de journée teste la capacité des systèmes urbains à coordonner la densité sans créer de tension.",
        images: [
            "/images-opengraph/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
        ],
    },
};