import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const MobilityMixedMobilityFR: ISmartCityLanding = {
    heroObservation: {
        headline: "Coexistence de la Mobilité Mixte",
        paragraphs: [
            "Les rues modernes ne sont plus conçues autour d’un seul mode de transport.",
            "Scooters, vélos, piétons, robots de livraison et véhicules autonomes font de plus en plus partie de la vie quotidienne dans la rue.",
            "Une ville intelligente ne se définit pas par la séparation de tout. Elle se définit par une coexistence qui paraît naturelle et sûre."
        ],
        image: {
            url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
            alt: "Rue thaïlandaise montrant piétons, scooters, cyclistes et navette autonome coexistant naturellement",
        },
        cta: {
            label: "Retour au Focus Mobilité",
            href: "/smart-city/mobility-focus-mixed-mobility",
        },
    },

    systemExplanation: {
        headline: "Ce qui Rend la Coexistence Possible",
        paragraphs: [
            "La mobilité mixte fonctionne lorsqu’aucun mode ne domine l’attention. La rue devient lisible grâce à une conception cohérente : harmonisation des vitesses, signaux de priorité clairs et espace capable de s’adapter au fil du temps.",
            "Lorsque la conception est réussie, la coexistence semble fluide — les personnes cessent de penser aux systèmes et se déplacent simplement."
        ],
        image: {
            url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
            alt: "Plusieurs modes de mobilité coexistant calmement dans une rue moderne",
        },
    },

    whyItMatters: {
        headline: "Pourquoi la Mobilité Mixte Est Importante",
        paragraphs: [
            "Les villes qui soutiennent la mobilité mixte peuvent réduire la pression liée à la congestion et créer des espaces publics plus agréables à vivre."
        ],
        points: [
            {
                title: "La Diversité des Modes Est une Résilience",
                description:
                    "Lorsqu’un mode ralentit, d’autres peuvent maintenir le rythme de la ville. La coexistence crée une forme de redondance.",
            },
            {
                title: "Moins de Domination, Plus de Confort",
                description:
                    "Les rues peuvent sembler plus calmes lorsqu’aucun type de véhicule ne contrôle l’espace.",
            },
            {
                title: "Ce Changement Est Déjà Visible",
                description:
                    "La mobilité mixte se reflète de plus en plus dans les comportements quotidiens observés dans les rues de nombreuses villes du monde.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "La Mobilité Mixte Devient la Norme Globale",
            paragraphs: [
                "À travers les cultures, les rues convergent vers des modèles de coexistence partagée plutôt que vers une séparation stricte."
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Modèle mondial de mobilité mixte apparaissant dans différentes villes",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
        {
            headline: "La Logistique se Fond dans la Vie Quotidienne",
            paragraphs: [
                "La coexistence inclut aussi les systèmes de livraison. Les villes bien intégrées permettent la logistique sans perturber l’espace public."
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Robots de livraison et petits véhicules logistiques électriques intégrés à la vie urbaine quotidienne",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
    ],
};