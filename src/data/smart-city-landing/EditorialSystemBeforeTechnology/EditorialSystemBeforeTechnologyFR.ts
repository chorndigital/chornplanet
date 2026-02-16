import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialSystemBeforeTechnologyFR: ISmartCityLanding = {
    heroObservation: {
        headline: "Le Système Avant la Technologie",
        paragraphs: [
            "La technologie seule ne crée pas une ville intelligente.",
            "Les villes deviennent plus intelligentes lorsque les systèmes façonnent discrètement les comportements quotidiens : traversées plus sûres, flux prévisibles, logistique plus fluide et espaces publics qui fonctionnent de manière fiable.",
            "La technologie est réellement pertinente lorsqu’elle améliore la vie humaine de façon mesurable. Sans ce lien, sa valeur reste limitée."
        ],
        image: {
            url: "/smart-city/editorial/system-before-technology.png",
            alt: "Infrastructures urbaines fonctionnant discrètement en arrière-plan de la vie quotidienne en Thaïlande",
        },
        cta: {
            label: "Explorer le Local comme Prototype Global",
            href: "/smart-city/editorial-local-as-global-prototype",
        },
    },

    systemExplanation: {
        headline: "Ce que Révèle une Lecture Systémique",
        paragraphs: [
            "Une approche systémique commence par les résultats : confort, sécurité, rythme et accès.",
            "Ce n’est qu’une fois les résultats visibles que l’on examine quelles technologies les soutiennent. Cette démarche aide les villes à éviter des innovations impressionnantes en apparence mais à impact limité dans la réalité quotidienne."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Système de coordination de la mobilité soutenant les déplacements quotidiens sans être visible",
        },
    },

    whyItMatters: {
        headline: "Pourquoi le Système Avant la Technologie Est Important",
        paragraphs: [
            "Les villes qui commencent par les systèmes ont tendance à développer des solutions capables de s’étendre. Celles qui commencent par la technologie produisent souvent des mises en œuvre isolées."
        ],
        points: [
            {
                title: "Les Résultats d’Abord",
                description:
                    "Si le confort et la sécurité ne s’améliorent pas, la technologie n’atteint pas son objectif.",
            },
            {
                title: "La Réussite Invisible est l’Objectif",
                description:
                    "Les systèmes efficaces s’intègrent à la vie quotidienne. Les améliorations sont ressenties sans que l’outil ne devienne central.",
            },
            {
                title: "La Prévention Favorise la Stabilité à Long Terme",
                description:
                    "Une approche systémique réduit les risques en amont, plutôt que de traiter les problèmes après l’apparition de dommages.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Coordination de la Mobilité",
            paragraphs: [
                "Les systèmes coordonnent le temps, les flux et les comportements. La technologie n’est qu’une composante de cette couche de coordination."
            ],
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "Coordination de la mobilité soutenant des déplacements prévisibles",
            },
            landingUrl: "/smart-city/system-explainers-mobility-coordination",
        },
        {
            headline: "Efficacité et Rythme Humain",
            paragraphs: [
                "L’efficacité devient pertinente lorsqu’elle soutient le rythme humain plutôt que de le contraindre."
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "Systèmes urbains alignés sur le rythme et le confort humains",
            },
            landingUrl: "/smart-city/city-systems/efficiency-and-rhythm",
        },
    ],
};