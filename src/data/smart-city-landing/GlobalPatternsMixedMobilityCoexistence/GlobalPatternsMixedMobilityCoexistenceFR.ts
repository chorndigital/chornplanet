import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const GlobalPatternsMixedMobilityCoexistenceFR: ISmartCityLanding = {
    heroObservation: {
        headline: "La Mobilité Mixte Devient un Référentiel Global",
        paragraphs: [
            "La marche, le vélo, les trottinettes, les petits véhicules électriques et les robots de livraison font de plus en plus partie des déplacements urbains quotidiens.",
            "Dans de nombreuses villes, les rues évoluent vers des environnements de mobilité mixte où la coexistence — plutôt qu’une séparation stricte — structure les usages quotidiens.",
            "Cela reflète une évolution observable dans la manière dont l’espace urbain est utilisé et partagé."
        ],
        image: {
            url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
            alt: "Plusieurs modes de mobilité coexistant calmement dans une rue urbaine",
        },
        cta: {
            label: "Explorer le Modèle Logistique",
            href: "/smart-city/global-patterns-urban-logistics",
        },
    },

    systemExplanation: {
        headline: "Pourquoi la Coexistence Apparaît dans de Nombreuses Villes",
        paragraphs: [
            "Les rues urbaines ne disposent souvent pas d’un espace suffisant pour séparer complètement chaque mode de déplacement. À mesure que la densité augmente, l’usage partagé devient plus fréquent.",
            "La différence entre conflit et confort repose sur la conception du système : harmonisation des vitesses, repères de priorité clairs, traversées lisibles et environnements de rue réduisant les frictions sans dépendre d’un contrôle permanent."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Orchestration de l’espace public permettant la coexistence de la mobilité mixte",
        },
    },

    whyItMatters: {
        headline: "Pourquoi ce Modèle Global Est Important",
        paragraphs: [
            "La mobilité mixte reflète la manière dont les villes s’adaptent à un espace limité et à des besoins de déplacement diversifiés. Une coexistence bien conçue favorise la sécurité, le calme et l’efficacité fonctionnelle."
        ],
        points: [
            {
                title: "La Coexistence Soutient la Capacité",
                description:
                    "Lorsque les rues accueillent plusieurs modes, les flux peuvent se répartir plus équitablement au lieu d’être concentrés dans un seul système.",
            },
            {
                title: "Un Usage Équilibré Améliore le Confort",
                description:
                    "Lorsque aucun mode ne domine la rue, les personnes se sentent généralement plus en sécurité et l’espace public devient plus utilisable.",
            },
            {
                title: "Les Rues Partagées Reflètent un Usage Collectif",
                description:
                    "La mobilité mixte n’est pas seulement une condition de transport, mais aussi une expression de la manière dont l’espace est utilisé collectivement.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Coexistence de la Mobilité Mixte",
            paragraphs: [
                "La rue est de plus en plus observée comme un environnement partagé où marche, trottinettes, vélos, robots et véhicules électriques fonctionnent ensemble."
            ],
            image: {
                url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                alt: "Coexistence de mobilité mixte dans une scène de rue moderne en Thaïlande",
            },
            landingUrl: "/smart-city/mobility-focus-mixed-mobility",
        },
        {
            headline: "Densité et Confort",
            paragraphs: [
                "La coexistence contribue au maintien du confort dans les environnements denses. Sans conception d’usage partagé, la densité peut générer des frictions."
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Densité confortable soutenue par la conception et la mobilité partagée",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};