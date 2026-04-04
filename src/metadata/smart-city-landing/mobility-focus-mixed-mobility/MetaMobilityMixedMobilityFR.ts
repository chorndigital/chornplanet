// src/metadata/smart-city-landing/mobility-focus-mixed-mobility/MetaMobilityMixedMobilityFR.ts

import {Metadata} from "next";

export const MetaMobilityMixedMobilityFR: Metadata = {
    title: "Coexistence de la Mixed Mobility | Smart City Mobility",
    description:
        "Les rues modernes ne sont plus conçues autour d’un seul mode de transport. La mixed mobility permet aux piétons, trottinettes, vélos, robots et véhicules autonomes de coexister naturellement et en toute sécurité.",

    alternates: {
        canonical: "/en/smart-city/mobility-focus-mixed-mobility",
        languages: {
            en: "/en/smart-city/mobility-focus-mixed-mobility",
            th: "/th/smart-city/mobility-focus-mixed-mobility",
            da: "/da/smart-city/mobility-focus-mixed-mobility",
            de: "/de/smart-city/mobility-focus-mixed-mobility",
            fi: "/fi/smart-city/mobility-focus-mixed-mobility",
            fr: "/fr/smart-city/mobility-focus-mixed-mobility",
            ja: "/ja/smart-city/mobility-focus-mixed-mobility",
            ko: "/ko/smart-city/mobility-focus-mixed-mobility",
            nl: "/nl/smart-city/mobility-focus-mixed-mobility",
            zh: "/zh-cn/smart-city/mobility-focus-mixed-mobility",
        },
    },

    authors: [
        {
            name: "Chorn Planet",
        },
    ],

    openGraph: {
        title: "Coexistence de la Mixed Mobility | Smart City Mobility",
        description:
            "Une smart city ne se définit pas par une séparation stricte, mais par la capacité à rendre la coexistence des modes de mobilité lisible, apaisée et sûre.",
        url: "/en/smart-city/mobility-focus-mixed-mobility",
        type: "website",
        images: [
            {
                url: "/images-opengraph/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                width: 1200,
                height: 630,
                alt: "Rue thaïlandaise montrant des piétons, trottinettes, cyclistes et une navette autonome coexistant naturellement",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Coexistence de la Mixed Mobility | Smart City Mobility",
        description:
            "La mixed mobility reflète une transition vers des rues partagées où différents modes de déplacement coexistent harmonieusement.",
        images: [
            "/images-opengraph/smart-city/mobility-focus/mixed-mobility-coexistence.png",
        ],
    },
};