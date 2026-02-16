import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowEveningFR: ISmartCityLanding = {
    heroObservation: {
        headline: "Flux du Soir — Ralentissement et Récupération",
        paragraphs: [
            "Le soir n’est pas une question de vitesse. C’est une question de récupération.",
            "La qualité d’une ville devient visible lorsque les personnes ralentissent : rentrer à pied, retrouver des amis, faire des achats de proximité ou simplement s’arrêter dans l’espace public.",
            "Une ville intelligente se reflète dans le fait que les rues paraissent suffisamment sûres pour permettre aux personnes de se détendre et de rester présentes après le coucher du soleil."
        ],
        image: {
            url: "/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
            alt: "Rue urbaine thaïlandaise en début de soirée avec lumières chaudes, piétons, scooters calmes et une atmosphère sûre pour la vie sociale",
        },
        cta: {
            label: "Retour à la Vue d’Ensemble Smart City",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
    },

    systemExplanation: {
        headline: "Les Systèmes du Soir qui Protègent le Confort",
        paragraphs: [
            "Le soir révèle si la ville soutient le confort ou si les personnes ont le sentiment de devoir se retirer à l’intérieur.",
            "L’éclairage, la marchabilité, l’activité de rue et une mobilité prévisible permettent à la vie publique de se poursuivre avec moins d’incertitude. Lorsque ces systèmes fonctionnent ensemble, la ville reste utilisable et accueillante au-delà des heures de journée."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Orchestration de l’espace public avec éclairage et marchabilité soutenant la vie du soir",
        },
    },

    whyItMatters: {
        headline: "Pourquoi le Flux du Soir Est Important",
        paragraphs: [
            "Une ville qui soutient la récupération en soirée renforce la connexion sociale à long terme et le sentiment de sécurité, sans nécessiter un contrôle lourd."
        ],
        points: [
            {
                title: "Le Confort Est un Résultat Systémique",
                description:
                    "Le confort du soir n’est pas une décoration. C’est le résultat de la sécurité, de l’éclairage et d’un mouvement prévisible.",
            },
            {
                title: "L’Espace Public Devient une Infrastructure Sociale",
                description:
                    "Lorsque les personnes restent dehors après le coucher du soleil, l’espace public soutient des interactions communautaires plus fortes et une accessibilité quotidienne.",
            },
            {
                title: "Sécurité Sans Application Permanente",
                description:
                    "Les rues les plus efficaces paraissent sûres parce qu’elles sont conçues pour réduire les risques, et non pour punir les comportements.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "L’Espace Public Utilisé Comme Prévu",
            paragraphs: [
                "Le soir révèle si les personnes se sentent suffisamment en sécurité pour rester. Cette présence prolongée est un signal clair de confort."
            ],
            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "Résidents thaïlandais assis et marchant confortablement dans un espace public bien éclairé",
            },
            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
        {
            headline: "Densité et Confort",
            paragraphs: [
                "Le confort du soir montre si la densité semble vivable ou épuisante."
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Densité urbaine adoucie par la verdure et une activité calme en soirée",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};