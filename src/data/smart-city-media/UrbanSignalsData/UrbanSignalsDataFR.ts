//data/smart-city-media/UrbanSignalsDataFR.ts

import {IUrbanSignals} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const UrbanSignalsDataFR: IUrbanSignals = {
    headline: "Signaux urbains observés au quotidien",
    paragraph:
        "Les villes communiquent par de petits signaux observables — la manière dont les rues sont perçues, dont les personnes se déplacent et dont l’espace évolue dans le temps. Ces moments ne sont pas toujours décrits comme des systèmes, mais ils peuvent indiquer comment les conditions urbaines fonctionnent.",

    signals: [
        {
            title: "Comportement prévisible dans la rue",
            description:
                "Lorsque les piétons, les cyclistes et les véhicules se déplacent avec des attentes claires, cela peut indiquer des normes partagées et une lisibilité spatiale, même sans application explicite.",

            signalFocus: ["predictability", "shared space", "human trust"],

            image: {
                url: "/smart-city/urban-signals/predictable-shared-street.png",
                alt: "Personnes, vélos et véhicules se déplaçant de manière fluide sur une rue urbaine partagée sans congestion ni tension visible",
            },

            landingUrl: "/smart-city/urban-signals-predictable-street",
        },

        {
            title: "Logistique intégrée au quotidien",
            description:
                "Les robots de livraison, les petits véhicules électriques et les coursiers peuvent fonctionner sans dominer l’attention, ce qui peut indiquer que la logistique est intégrée aux schémas de déplacement quotidiens.",

            signalFocus: ["logistics", "integration", "low friction"],

            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Petits véhicules de livraison et robots opérant calmement aux côtés de la vie de rue quotidienne dans une ville moderne",
            },

            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },

        {
            title: "Espace public utilisé conformément à sa fonction",
            description:
                "Lorsque les personnes s’attardent, font une pause et partagent l’espace de manière routinière, cela peut refléter un équilibre entre efficacité des déplacements et utilisabilité des espaces publics.",

            signalFocus: ["public space", "comfort", "social rhythm"],

            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "Personnes assises, marchant et interagissant confortablement dans un espace public urbain bien conçu",
            },

            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
    ],
}