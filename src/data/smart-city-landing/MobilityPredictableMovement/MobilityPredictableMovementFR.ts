import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const MobilityPredictableMovementFR: ISmartCityLanding = {
    heroObservation: {
        headline: "Mouvement Prévisible dans les Rues Partagées",
        paragraphs: [
            "La mobilité n’est pas vécue avant tout comme une technologie. Elle est vécue comme un sentiment de confiance.",
            "Lorsque les personnes peuvent traverser sans hésitation, que les véhicules ralentissent naturellement et que les cyclistes se déplacent avec peu de conflits, la rue devient lisible.",
            "La prévisibilité n’est pas un contrôle. Elle constitue une base pratique de la sécurité quotidienne."
        ],
        image: {
            url: "/smart-city/mobility-focus/predictable-shared-street.png",
            alt: "Piétons et cyclistes thaïlandais se déplaçant calmement dans une rue partagée prévisible avec une navette autonome en arrière-plan",
        },
        cta: {
            label: "Explorer la Mobilité Mixte",
            href: "/smart-city/mobility-focus-mixed-mobility",
        },
    },

    systemExplanation: {
        headline: "Ce Qui Rend le Mouvement Prévisible",
        paragraphs: [
            "La prévisibilité résulte d’une conception qui réduit l’incertitude : traversées claires, logique de voies cohérente, signaux lisibles et rues qui encouragent le ralentissement sans l’imposer.",
            "Les rues bien conçues semblent sûres non pas parce que les personnes sont surveillées, mais parce que les comportements se synchronisent naturellement."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Coordination de la mobilité urbaine soutenant un comportement prévisible dans la rue",
        },
    },

    whyItMatters: {
        headline: "Pourquoi la Prévisibilité Est Importante",
        paragraphs: [
            "Une rue prévisible réduit le stress, diminue le risque d’accident et crée des conditions favorables à une vie urbaine spontanée."
        ],
        points: [
            {
                title: "Sécurité Sans Application Forcée",
                description:
                    "Lorsque les déplacements sont lisibles, les personnes s’autorégulent naturellement. Les rues peuvent rester calmes sans contrôle strict.",
            },
            {
                title: "La Confiance Est un Indicateur Pratique",
                description:
                    "Un signal clé de la performance de la mobilité est la capacité des personnes à se déplacer sans hésitation.",
            },
            {
                title: "Les Rues Partagées Reposent sur une Confiance Commune",
                description:
                    "La prévisibilité permet aux piétons, scooters, cyclistes et véhicules de coexister sans négociation permanente.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Comportement Prévisible dans la Rue",
            paragraphs: [
                "Lorsque les mouvements sont calmes et cohérents, cela indique que la rue soutient la confiance dans l’usage quotidien."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Comportement prévisible sur une rue partagée dans un environnement urbain thaïlandais",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "Mouvement et Pause",
            paragraphs: [
                "Une rue qui permet des pauses sûres est souvent la même rue qui favorise un mouvement prévisible."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Rue urbaine équilibrant le flux de mobilité et les pauses sûres pour les piétons",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};