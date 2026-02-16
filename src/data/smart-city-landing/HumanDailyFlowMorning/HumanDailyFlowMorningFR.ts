import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowMorningFR: ISmartCityLanding = {
    heroObservation: {
        headline: "Flux du Matin — Début de la Journée",
        paragraphs: [
            "Le matin révèle si une ville est prête lorsque la vie quotidienne commence.",
            "Les trajets domicile-travail, les trajets scolaires, les petites courses et les premières livraisons montrent si les systèmes de mobilité soutiennent le rythme quotidien ou créent de la friction dans les déplacements.",
            "Une ville intelligente devient visible ici — dans les premiers passages piétons, les premiers signaux et les premiers mouvements partagés de la journée."
        ],
        image: {
            url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
            alt: "Rue thaïlandaise tôt le matin avec des navetteurs à pied, des scooters calmes et une navette autonome silencieuse en arrière-plan",
        },
        cta: {
            label: "Voir le Flux de Midi",
            href: "/smart-city/human-daily-flow-midday",
        },
    },

    systemExplanation: {
        headline: "Ce que le Matin Révèle d’une Ville",
        paragraphs: [
            "Le matin agit comme un premier test de stress pour les systèmes urbains. Si les traversées sont peu claires, si les trottoirs semblent dangereux ou si la circulation devient imprévisible, les personnes adaptent immédiatement leur comportement.",
            "Les villes fiables ne sont pas définies par la vitesse. Elles sont définies par la lisibilité — lorsque piétons, scooters, cyclistes et véhicules se coordonnent avec un minimum de conflit."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Coordination de la mobilité urbaine avec traversées prévisibles et circulation calme le matin",
        },
    },

    whyItMatters: {
        headline: "Pourquoi le Flux du Matin Est Important",
        paragraphs: [
            "Les villes qui soutiennent le rythme du matin réduisent le stress, améliorent la sécurité et construisent la confiance sans dépendre de l’application stricte."
        ],
        points: [
            {
                title: "La Confiance Commence au Premier Passage",
                description:
                    "Lorsque les personnes se sentent en sécurité pour traverser naturellement, la ville communique sa fiabilité sans instruction.",
            },
            {
                title: "Le Rythme Compte Plus que la Vitesse",
                description:
                    "Le flux du matin fonctionne mieux lorsque les rues soutiennent un timing prévisible plutôt qu’un débit maximal.",
            },
            {
                title: "La Sécurité Quotidienne Est une Conception Préventive",
                description:
                    "Un trajet du matin calme réduit les risques, la congestion et la friction avant qu’ils n’apparaissent.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Comportement Prévisible dans la Rue",
            paragraphs: [
                "Le matin ne fonctionne bien que lorsque les personnes peuvent se déplacer sans hésitation. La prévisibilité est la base de la confiance."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Piétons et cyclistes thaïlandais se déplaçant de manière prévisible sur une rue partagée avec un trafic calme",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "Mouvement et Pause",
            paragraphs: [
                "Une ville se réveille en douceur lorsque le mouvement peut ralentir naturellement sans peur ni danger."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Conception de rue équilibrant le mouvement du matin avec des pauses sûres pour les piétons",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};