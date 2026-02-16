import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const GlobalPatternsPredictableSharedStreetFR: ISmartCityLanding = {
    heroObservation: {
        headline: "Des Rues Prévisibles Permettent une Vie Spontanée",
        paragraphs: [
            "Dans des villes de cultures différentes, les rues prévisibles produisent souvent un effet similaire : les personnes se sentent plus à l’aise dans l’espace public.",
            "Lorsque les règles de déplacement sont lisibles, les piétons traversent naturellement, les véhicules ralentissent avec moins de friction et la vie de rue devient plus spontanée.",
            "Il s’agit d’un schéma global — façonné non seulement par la technologie, mais par la confiance dans l’espace partagé."
        ],
        image: {
            url: "/smart-city/global-patterns/predictable-shared-street.png",
            alt: "Rue partagée prévisible où piétons, cyclistes et véhicules se déplacent calmement",
        },
        cta: {
            label: "Explorer le Modèle de Mobilité Mixte",
            href: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    },

    systemExplanation: {
        headline: "Pourquoi la Prévisibilité Se Répète dans les Villes",
        paragraphs: [
            "La prévisibilité réduit l’incertitude. Cette réduction est largement pertinente dans des contextes et des niveaux de revenus variés.",
            "Lorsque les rues communiquent un rythme clair par le design, les personnes n’ont plus besoin de négocier chaque pas. La rue devient suffisamment sûre pour permettre la spontanéité du quotidien : s’arrêter, se rencontrer, traverser et rester."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Systèmes de coordination de la mobilité soutenant des déplacements prévisibles",
        },
    },

    whyItMatters: {
        headline: "Pourquoi ce Schéma Global Est Important",
        paragraphs: [
            "La prévisibilité est l’un des rares principes de mobilité pouvant s’appliquer à de nombreux types de villes, car elle est vécue directement à travers le mouvement quotidien."
        ],
        points: [
            {
                title: "La Confiance Est une Forme d’Infrastructure",
                description:
                    "Une rue prévisible soutient la confiance sans dépendre d’une surveillance ou d’une application constante.",
            },
            {
                title: "La Sécurité Favorise la Vie Publique",
                description:
                    "Lorsque la traversée semble sûre, les personnes ont tendance à rester plus longtemps dehors et à utiliser la ville plus librement.",
            },
            {
                title: "Le Design Réduit le Besoin de Contrôle",
                description:
                    "Les rues les plus efficaces orientent les comportements par leur lisibilité plutôt que par la sanction.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Comportement Prévisible dans la Rue",
            paragraphs: [
                "La prévisibilité n’est pas une fonctionnalité — c’est un signal quotidien d’une rue dans laquelle les personnes se déplacent avec confiance."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Comportement de rue prévisible dans un environnement urbain thaïlandais",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "Mouvement et Pause",
            paragraphs: [
                "La prévisibilité rend possible la pause. Sans elle, l’immobilité peut sembler risquée."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Rue équilibrant mouvement et pause comme résultat systémique",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};