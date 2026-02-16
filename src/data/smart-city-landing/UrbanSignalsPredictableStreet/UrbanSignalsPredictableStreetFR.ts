import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsPredictableStreetFR: ISmartCityLanding = {
    heroObservation: {
        headline: "Comportement Prévisible dans la Rue",
        paragraphs: [
            "Les villes communiquent par le comportement avant de communiquer par la politique.",
            "Lorsque les piétons traversent sans hésiter, que les scooters ralentissent naturellement et que les véhicules se déplacent avec une confiance discrète, la rue révèle quelque chose d’important : les habitants perçoivent le système comme fiable.",
            "La prévisibilité est l’un des signaux urbains les plus clairs, car elle est visible sans mesure."
        ],
        image: {
            url: "/smart-city/urban-signals/predictable-shared-street.png",
            alt: "Piétons et cyclistes en Thaïlande se déplaçant de manière fluide dans un environnement de rue partagée prévisible",
        },
        cta: {
            label: "Explorer l’Intégration Logistique",
            href: "/smart-city/urban-signals-logistics-integration",
        },
    },

    systemExplanation: {
        headline: "Ce que Signale la Prévisibilité",
        paragraphs: [
            "Un comportement prévisible ne se produit pas par hasard. Il résulte d’une conception de la rue qui réduit l’incertitude : traversées lisibles, rythme cohérent des voies, repères visuels clairs et harmonie des vitesses.",
            "Lorsque ces systèmes fonctionnent ensemble, les habitants n’ont plus besoin de négocier chaque pas. La ville paraît sûre sans dépendre d’un contrôle visible."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Coordination de la mobilité soutenant un comportement prévisible dans la rue",
        },
    },

    whyItMatters: {
        headline: "Pourquoi Ce Signal Est Important",
        paragraphs: [
            "La prévisibilité est un indicateur direct de la confiance à l’échelle de la rue."
        ],
        points: [
            {
                title: "La Confiance Est Observable",
                description:
                    "Lorsque les habitants se déplacent avec assurance, cela suggère qu’ils s’attendent à ce que la rue se comporte de manière cohérente.",
            },
            {
                title: "La Sécurité Devient Normale",
                description:
                    "Une rue prévisible réduit les risques sans donner l’impression que la sécurité est imposée.",
            },
            {
                title: "Le Confort Rend la Vie Urbaine Possible",
                description:
                    "Une vie publique spontanée dépend de règles de déplacement lisibles et partagées.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Des Rues Prévisibles Permettent une Vie Spontanée",
            paragraphs: [
                "Dans les villes du monde entier, des rues prévisibles soutiennent de manière constante des déplacements plus calmes et une vie sociale quotidienne."
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "Modèle mondial de rues partagées prévisibles",
            },
            landingUrl: "/smart-city/global-patterns-predictable-shared-street",
        },
        {
            headline: "Mouvement et Pause",
            paragraphs: [
                "La prévisibilité est ce qui permet de faire une pause. Sans elle, s’arrêter peut devenir dangereux."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Système de rue équilibrant flux et pause",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};