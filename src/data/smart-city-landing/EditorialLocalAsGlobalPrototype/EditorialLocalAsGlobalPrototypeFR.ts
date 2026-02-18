import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialLocalAsGlobalPrototypeFR: ISmartCityLanding = {
    heroObservation: {
        headline: "Le Local comme Prototype Global",
        paragraphs: [
            "Les villes de taille moyenne rendent souvent les systèmes urbains plus faciles à observer.",
            "Elles sont suffisamment denses pour révéler les pressions du système, tout en restant lisibles à travers les comportements humains du quotidien.",
            "L’observation attentive des rues locales peut aider à identifier des schémas qui apparaissent ensuite dans différents contextes urbains."
        ],
        image: {
            url: "/smart-city/editorial/local-as-global-prototype.png",
            alt: "Rue locale thaïlandaise reflétant des schémas urbains observés dans de nombreuses villes du monde",
        },
        cta: {
            label: "Retour à la Vue d’Ensemble Smart City",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
    },

    systemExplanation: {
        headline: "Pourquoi les Villes de Taille Moyenne Révèlent Davantage",
        paragraphs: [
            "Les grandes métropoles peuvent masquer les systèmes par leur échelle. Les villes de taille moyenne rendent souvent les systèmes visibles à travers des activités quotidiennes telles que les traversées, les files d’attente, les livraisons et la coordination au niveau de la rue.",
            "Ces environnements permettent d’observer clairement des schémas récurrents avant qu’ils n’apparaissent dans des contextes urbains plus vastes ou plus complexes."
        ],
        image: {
            url: "/smart-city/local-to-global/local-street-daily-routine.png",
            alt: "Routine de rue locale montrant le comportement humain comme indicateur des systèmes urbains",
        },
    },

    whyItMatters: {
        headline: "Pourquoi le Local comme Prototype Global Est Important",
        paragraphs: [
            "La convergence urbaine ne résulte pas uniquement de la planification. Elle émerge aussi de schémas locaux répétés qui fonctionnent efficacement dans la vie quotidienne."
        ],
        points: [
            {
                title: "Les Schémas Locaux Peuvent S’étendre Naturellement",
                description:
                    "Lorsqu’une routine fonctionne bien, elle peut être adoptée ailleurs sans coordination formelle.",
            },
            {
                title: "La Visibilité Favorise l’Apprentissage Pratique",
                description:
                    "Les villes de taille moyenne permettent de comprendre les systèmes urbains par l’observation directe plutôt que par l’abstraction.",
            },
            {
                title: "L’Identité Locale Peut Coexister avec des Principes Globaux",
                description:
                    "Les villes peuvent préserver leur spécificité culturelle tout en exprimant des comportements systémiques observés dans plusieurs régions.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "De la Vie Locale au Schéma Global",
            paragraphs: [
                "Lorsque des scènes locales similaires apparaissent dans différentes villes, elles indiquent des comportements systémiques partagés."
            ],
            image: {
                url: "/smart-city/local-to-global/global-urban-pattern.png",
                alt: "Comparaison de scènes locales révélant des schémas urbains partagés",
            },
            landingUrl: "/smart-city/from-local-life-to-global-pattern",
        },
        {
            headline: "Des Schémas Globaux Issus des Villes du Quotidien",
            paragraphs: [
                "La prévisibilité, la mobilité mixte et une logistique peu visible sont de plus en plus observées dans divers environnements urbains."
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "Schémas de rues partagées prévisibles observés dans plusieurs villes",
            },
            landingUrl: "/smart-city/global-patterns-predictable-shared-street/",
        },
    ],
};