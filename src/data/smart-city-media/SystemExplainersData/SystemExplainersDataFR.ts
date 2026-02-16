//data/smart-city-media/SystemExplainersDataFR.ts

import {ISystemExplainers} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const SystemExplainersDataFR: ISystemExplainers = {
    headline: "Les systèmes derrière les déplacements quotidiens",
    paragraph:
        "Les déplacements quotidiens qui paraissent naturels reposent souvent sur une coordination continue. Ces systèmes nécessitent rarement une attention directe, mais influencent la manière dont les villes fonctionnent à plus grande échelle.",

    systems: [
        {
            title: "Coordination de la mobilité",
            description:
                "Les feux de circulation, les flux piétons, les véhicules autonomes et les transports publics fonctionnent selon des temporalités coordonnées. Dans des conditions stables, les déplacements peuvent paraître plus continus plutôt que gérés de manière explicite.",
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "Systèmes de mobilité urbaine coordonnant les piétons, les véhicules et les transports autonomes",
            },
        },
        {
            title: "Logistique urbaine",
            description:
                "Les biens circulent dans les villes via des services de livraison, des micro-véhicules et des systèmes automatisés. Ces opérations logistiques soutiennent l’activité quotidienne et peuvent réduire les perturbations lorsqu’elles sont intégrées aux schémas de déplacement urbains.",
            image: {
                url: "/smart-city/system-explainers/urban-logistics.png",
                alt: "Logistique quotidienne opérant de manière continue dans les rues de la ville",
            },
        },
        {
            title: "Organisation de l’espace public",
            description:
                "Les trottoirs, les traversées, l’éclairage et l’activité de rue influencent la manière dont les personnes partagent l’espace tout au long de la journée. Ces éléments affectent les conditions de déplacement et l’utilisabilité générale des espaces publics.",
            image: {
                url: "/smart-city/system-explainers/public-space-orchestration.png",
                alt: "Espace public conçu pour soutenir une vie urbaine partagée",
            },
        },
    ],
};