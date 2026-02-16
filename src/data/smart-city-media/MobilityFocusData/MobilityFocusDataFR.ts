//data/smart-city-media/MobilityFocusDataFR.ts

import {IMobilityFocus} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const MobilityFocusDataFR: IMobilityFocus = {
    headline: "La mobilité est observée avant d’être comprise",
    paragraph:
        "Les personnes n’interagissent pas toujours directement avec les systèmes de mobilité. Elles les rencontrent dans de petites situations — traverser une rue, attendre un trajet ou partager l’espace avec d’autres. Lorsque la mobilité fonctionne de manière cohérente, elle occupe moins l’attention et soutient les déplacements de routine au quotidien.",

    signals: [
        {
            title: "Mouvement prévisible dans des rues partagées",
            description:
                "Une mobilité coordonnée peut réduire l’incertitude des déplacements. Les piétons peuvent traverser avec des attentes plus claires, les véhicules réduisent leur vitesse dans des conditions de rue partagée, et les rues partagées peuvent être interprétées avec moins de stress. La prévisibilité peut contribuer à la sécurité au quotidien.",
            image: {
                url: "/smart-city/mobility-focus/predictable-shared-street.png",
                alt: "Rue urbaine où des piétons, des véhicules électriques et des robots de livraison se déplacent calmement avec des repères visuels clairs et un flux prévisible",
            },
            signalFocus: [
                "pedestrian confidence",
                "shared space",
                "predictability",
                "street readability"
            ],
            landingUrl: "/smart-city/mobility-focus-predictable-movement",
        },
        {
            title: "Coexistence de mobilités mixtes",
            description:
                "Les rues urbaines peuvent impliquer plusieurs modes de transport. Les personnes peuvent marcher aux côtés de véhicules autonomes, de petits robots de livraison et de transports électriques légers. Dans des conditions de conception favorisant l’usage partagé, aucun mode n’a besoin de dominer l’attention, et plusieurs modes peuvent fonctionner en parallèle.",
            image: {
                url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                alt: "Rue en ville montrant des piétons, des véhicules électriques autonomes, de petits robots de livraison et des trottinettes partageant l’espace",
            },
            signalFocus: [
                "mixed mobility",
                "autonomous vehicles",
                "delivery robots",
                "human-centered design"
            ],
            landingUrl: "/smart-city/mobility-focus-mixed-mobility",
        }
    ],
};