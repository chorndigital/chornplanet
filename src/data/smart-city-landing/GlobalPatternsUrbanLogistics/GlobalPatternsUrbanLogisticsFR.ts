import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const GlobalPatternsUrbanLogisticsFR: ISmartCityLanding = {
    heroObservation: {
        headline: "La Logistique Redessine Discrètement le Rythme Urbain",
        paragraphs: [
            "Les marchandises circulent en continu dans les villes — souvent sans attirer l’attention.",
            "Dans de nombreuses régions, la logistique évolue d’infrastructures grandes et visibles vers des systèmes plus petits et plus discrets, tels que les micro-véhicules électriques, les robots de livraison, les drones et la distribution programmée.",
            "Dans les villes où la logistique s’intègre de manière fluide, la vie quotidienne tend à être plus confortable, même lorsque les flux augmentent."
        ],
        image: {
            url: "/smart-city/global-patterns/urban-logistics.png",
            alt: "Logistique urbaine opérant discrètement dans une rue moderne",
        },
        cta: {
            label: "Retour aux Rues Prévisibles",
            href: "/smart-city/global-patterns-predictable-shared-street",
        },
    },

    systemExplanation: {
        headline: "Comment la Logistique Influence la Ville",
        paragraphs: [
            "La logistique influence la ville principalement par le rythme plutôt que par la vitesse.",
            "Lorsque les livraisons sont programmées, réparties et coordonnées, les rues paraissent généralement moins encombrées et les déplacements quotidiens deviennent plus fluides. Des systèmes logistiques bien intégrés réduisent les frictions sans devenir le centre d’attention visuelle de l’environnement urbain."
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "Logistique à petite échelle intégrée aux déplacements urbains quotidiens",
        },
    },

    whyItMatters: {
        headline: "Pourquoi ce Schéma Global Est Important",
        paragraphs: [
            "La logistique devient de plus en plus une infrastructure discrète de la vie quotidienne. Les villes qui l’intègrent avec attention peuvent préserver le calme, même lorsque le niveau d’activité augmente."
        ],
        points: [
            {
                title: "La Livraison Est une Présence Constante dans la Rue",
                description:
                    "Les marchandises circulent toute la journée. La question essentielle est de savoir si l’activité de livraison perturbe la rue ou s’y intègre naturellement.",
            },
            {
                title: "Une Intégration Discrète Soutient le Confort",
                description:
                    "L’efficacité opérationnelle ne devrait pas générer de bruit, d’encombrement ou de conflits inutiles dans l’espace public.",
            },
            {
                title: "Le Rythme Renforce la Stabilité Urbaine",
                description:
                    "Lorsque la logistique est coordonnée dans le temps et l’espace, la ville paraît généralement plus prévisible et plus facile à parcourir.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Une Logistique Intégrée à la Vie Quotidienne",
            paragraphs: [
                "Lorsque les robots de livraison et la logistique à petite échelle fonctionnent sans monopoliser l’attention, les scènes urbaines du quotidien restent calmes et lisibles."
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Logistique intégrée à la vie quotidienne dans les rues thaïlandaises",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
        {
            headline: "Efficacité et Rythme Humain",
            paragraphs: [
                "L’efficacité urbaine devient pertinente lorsque le timing des systèmes s’aligne sur les routines humaines plutôt que de les écraser."
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "Infrastructure urbaine alignée avec le rythme humain et un timing prévisible",
            },
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    ],
};