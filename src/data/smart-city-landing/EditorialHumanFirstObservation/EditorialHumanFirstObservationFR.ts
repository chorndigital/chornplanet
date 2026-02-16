import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialHumanFirstObservationFR: ISmartCityLanding = {
    heroObservation: {
        headline: "Observation Centrée sur l’Humain",
        paragraphs: [
            "Les villes se comprennent le plus clairement à travers l’expérience vécue, et non uniquement par l’explication technique.",
            "De nombreux signaux fiables de qualité urbaine ne se trouvent pas dans les tableaux de bord, mais dans la manière dont les personnes marchent, attendent, s’arrêtent, traversent et partagent l’espace.",
            "Cette plateforme commence par la vie humaine, car les comportements quotidiens révèlent comment les systèmes urbains fonctionnent réellement."
        ],
        image: {
            url: "/smart-city/editorial/human-first-observation.png",
            alt: "Des personnes thaïlandaises se déplaçant calmement dans une rue comme signal principal des systèmes urbains",
        },
        cta: {
            label: "Explorer le Système Avant la Technologie",
            href: "/smart-city/editorial-system-before-technology",
        },
    },

    systemExplanation: {
        headline: "Pourquoi l’Observation Vient en Premier",
        paragraphs: [
            "De nombreux récits urbains commencent par la technologie, l’infrastructure ou la politique. Cependant, les villes ne sont pas principalement vécues à travers ces perspectives.",
            "Les habitants expérimentent la ville à travers les frictions, le confort, le rythme et la sécurité perçue. L’observation permet de traduire des systèmes complexes en motifs visibles, sans dépendre d’un langage technique."
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "Espace public montrant les routines humaines et le confort comme signaux principaux du système",
        },
    },

    whyItMatters: {
        headline: "Pourquoi l’Observation Centrée sur l’Humain Compte",
        paragraphs: [
            "Observer d’abord les routines humaines crée un point de référence partagé, pertinent à travers les cultures, les villes et différents niveaux de complexité des systèmes."
        ],
        points: [
            {
                title: "Le Comportement Reflète les Conditions Réelles",
                description:
                    "Les personnes s’adaptent rapidement au confort et au risque. Leurs déplacements quotidiens reflètent les conditions urbaines réelles.",
            },
            {
                title: "La Compréhension S’étend Sans Prédiction",
                description:
                    "L’observation soutient la compréhension sans affirmer de certitude sur les résultats futurs.",
            },
            {
                title: "Les Systèmes Deviennent Compréhensibles Sans Jargon",
                description:
                    "Une approche centrée sur l’humain permet de comprendre les systèmes urbains au-delà des publics techniques ou experts.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Des Signaux Urbains que l’on Remarque Sans Effort",
            paragraphs: [
                "De petits comportements du quotidien peuvent révéler la qualité d’une ville sans nécessiter de mesure formelle ni d’explication."
            ],
            image: {
                url: "/smart-city/urban-signals/predictable-shared-street.png",
                alt: "Comportement de rue prévisible observé à travers les déplacements quotidiens",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "Les Villes se Vivent à Travers des Cycles Quotidiens",
            paragraphs: [
                "Les systèmes complexes deviennent souvent plus lisibles lorsqu’ils sont observés à travers des rythmes quotidiens tels que le matin, le midi et le soir."
            ],
            image: {
                url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
                alt: "Flux du matin illustrant le rythme quotidien comme signal de qualité du système",
            },
            landingUrl: "/smart-city/human-daily-flow-morning",
        },
    ],
};