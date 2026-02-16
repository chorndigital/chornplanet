import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const FromLocalLifeToGlobalPatternFR: ISmartCityLanding = {
    heroObservation: {
        headline: "De la Vie Locale au Schéma Global",
        paragraphs: [
            "La vie urbaine semble souvent locale, façonnée par des rues familières, des habitudes et des routines.",
            "Lorsque des scènes similaires apparaissent dans différentes villes, cultures et échelles, elles fournissent des éléments comparatifs sur la manière dont les villes tendent à fonctionner.",
            "Il ne s’agit pas de prévision. Il s’agit de comparaison — placer des moments du quotidien côte à côte jusqu’à ce que les systèmes sous-jacents deviennent visibles."
        ],
        image: {
            url: "/smart-city/local-to-global/global-urban-pattern.png",
            alt: "Scènes de rue du quotidien suggérant des schémas de mobilité partagés entre plusieurs villes",
        },
        cta: {
            label: "Explorer les Schémas Globaux",
            href: "/smart-city/global-patterns-predictable-shared-street",
        },
    },

    systemExplanation: {
        headline: "Comment une Ville Devient Comparable",
        paragraphs: [
            "Les villes deviennent comparables lorsque l’on observe des types de moments similaires : traversées, files d’attente, pauses, livraisons et coexistence.",
            "Lorsque des comportements locaux se répètent dans différents lieux, ils cessent d’être de simples préférences individuelles et deviennent des signaux reconnaissables, indiquant des conditions structurelles communes sous-jacentes à la vie quotidienne."
        ],
        image: {
            url: "/smart-city/editorial/local-as-global-prototype.png",
            alt: "Scène de rue locale utilisée comme référence pour comprendre des systèmes urbains plus larges",
        },
    },

    whyItMatters: {
        headline: "Pourquoi le Local-vers-Global Est Important",
        paragraphs: [
            "Les schémas répétés se diffusent souvent plus rapidement que les politiques formelles. Lorsqu’une routine locale apparaît dans de nombreuses villes, cela indique des réponses communes à des conditions urbaines similaires."
        ],
        points: [
            {
                title: "Les Rues du Quotidien Reflètent les Conditions du Système",
                description:
                    "Une manière fiable de comprendre la qualité d’une ville est d’observer ce qui se passe dans une rue ordinaire à un moment ordinaire.",
            },
            {
                title: "Les Schémas Peuvent Émerger Sans Coordination",
                description:
                    "Des comportements de rue similaires peuvent apparaître dans différentes villes de manière indépendante, façonnés par des contraintes et des besoins comparables.",
            },
            {
                title: "La Compréhension Favorise le Dialogue",
                description:
                    "Observer des schémas aide les villes à développer une compréhension partagée sans promouvoir de solutions spécifiques ni d’idéologies.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Des Schémas Globaux Issus des Villes du Quotidien",
            paragraphs: [
                "Lorsque des signaux similaires apparaissent dans différents contextes culturels, ils peuvent indiquer une convergence vers des comportements opérationnels communs."
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "Rue partagée calme représentant un schéma de mouvement prévisible observé dans plusieurs villes",
            },
            landingUrl: "/smart-city/global-patterns-predictable-shared-street",
        },
        {
            headline: "Le Local comme Prototype Global",
            paragraphs: [
                "Les villes de taille moyenne rendent souvent les schémas récurrents plus faciles à observer, car les comportements de rue restent visibles et lisibles."
            ],
            image: {
                url: "/smart-city/editorial/local-as-global-prototype.png",
                alt: "Vie de rue locale reflétant des schémas observés dans de nombreuses villes du monde",
            },
            landingUrl: "/smart-city/editorial-local-as-global-prototype",
        },
    ],
};