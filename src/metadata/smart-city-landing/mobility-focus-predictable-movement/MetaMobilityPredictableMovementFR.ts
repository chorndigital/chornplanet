// src/metadata/smart-city-landing/mobility-focus-predictable-movement/MetaMobilityPredictableMovementFR.ts

import {Metadata} from "next";

export const MetaMobilityPredictableMovementFR: Metadata = {
    title: "Mouvement prévisible dans les rues partagées | Smart City Mobility",
    description:
        "La mobilité se vit comme une confiance. Lorsque les traversées sont claires et que les véhicules ralentissent naturellement, un mouvement prévisible crée une sécurité quotidienne sans contrôle strict.",

    alternates: {
        canonical: "/en/smart-city/mobility-focus-predictable-movement",
        languages: {
            en: "/en/smart-city/mobility-focus-predictable-movement",
            th: "/th/smart-city/mobility-focus-predictable-movement",
            da: "/da/smart-city/mobility-focus-predictable-movement",
            de: "/de/smart-city/mobility-focus-predictable-movement",
            fi: "/fi/smart-city/mobility-focus-predictable-movement",
            fr: "/fr/smart-city/mobility-focus-predictable-movement",
            ja: "/ja/smart-city/mobility-focus-predictable-movement",
            ko: "/ko/smart-city/mobility-focus-predictable-movement",
            nl: "/nl/smart-city/mobility-focus-predictable-movement",
            zh: "/zh-cn/smart-city/mobility-focus-predictable-movement",
        },
    },

    authors: [
        {
            name: "CHORN Digital",
        },
    ],

    openGraph: {
        title: "Mouvement prévisible dans les rues partagées | Smart City Mobility",
        description:
            "La prévisibilité réduit l’incertitude. Des traversées claires, des signaux lisibles et un flux synchronisé permettent aux piétons, cyclistes et véhicules de coexister sereinement.",
        url: "/en/smart-city/mobility-focus-predictable-movement",
        type: "website",
        images: [
            {
                url: "/images-opengraph/smart-city/mobility-focus/predictable-shared-street.png",
                width: 1200,
                height: 630,
                alt: "Piétons et cyclistes thaïlandais se déplaçant calmement dans une rue partagée prévisible avec une navette autonome en arrière-plan",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Mouvement prévisible dans les rues partagées | Smart City Mobility",
        description:
            "Un mouvement prévisible renforce la confiance, réduit le stress et permet une coexistence sûre dans les rues partagées.",
        images: [
            "/images-opengraph/smart-city/mobility-focus/predictable-shared-street.png",
        ],
    },
};
