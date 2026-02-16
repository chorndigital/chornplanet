//data/smart-city-media/HumanDailyFlowDataFR.ts

import {IHumanDailyFlow} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const HumanDailyFlowDataFR: IHumanDailyFlow = {
    headline: "Les systèmes urbains s’observent à travers des cycles quotidiens",
    paragraph:
        "Les systèmes urbains sont rarement observables dans leur ensemble en un seul instant. Ils apparaissent à travers des schémas quotidiens récurrents — les déplacements du matin, la coordination de la mi-journée et les transitions du soir. L’observation de ces schémas permet d’interpréter des systèmes urbains complexes à partir des mouvements de la vie quotidienne.",

    morningFlow: {
        title: "Flux du matin — Début de la journée",
        paragraph:
            "Le matin illustre la transition entre le calme résidentiel et une mobilité plus active. Les personnes quittent leur domicile, circulent dans les rues et s’ajustent aux systèmes de transport. Des signaux observables — dynamiques de circulation, mouvements piétons et mobilité partagée — indiquent comment l’infrastructure de mobilité fonctionne au début de la journée.",

        image: {
            url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
            alt: "Environnement urbain tôt le matin avec des personnes en déplacement, la lumière du jour, des espaces verts et des systèmes de mobilité qui commencent leur fonctionnement quotidien",
        },

        category: "Morning Flow",
        signalFocus: ["mobility readiness", "pedestrian flow", "temporal synchronization"],
        landingUrl: "/smart-city/human-daily-flow-morning",
    },

    middayFlow: {
        title: "Flux de mi-journée — Densité et coordination",
        paragraph:
            "À la mi-journée, l’activité urbaine augmente en densité. Les personnes, les biens et les services se déplacent simultanément. Les systèmes de mobilité autonome, l’infrastructure logistique et la conception des espaces publics fonctionnent en parallèle pour gérer des volumes de déplacement plus élevés.",

        image: {
            url: "/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
            alt: "Environnement urbain à la mi-journée avec des piétons, des véhicules électriques autonomes, des drones de livraison et des mouvements coordonnés dans l’espace public",
        },

        category: "Midday Flow",
        signalFocus: ["density", "logistics", "coordination", "autonomous systems"],
        landingUrl: "/smart-city/human-daily-flow-midday",
    },

    eveningFlow: {
        title: "Flux du soir — Baisse d’activité et transition",
        paragraph:
            "Le soir, le niveau d’activité évolue vers une intensité de mobilité réduite. Les systèmes d’éclairage, les conditions de marche, l’environnement de rue et la disponibilité des transports influencent la manière dont les résidents rentrent chez eux et participent aux activités du soir.",

        image: {
            url: "/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
            alt: "Environnement urbain en début de soirée avec des piétons, des rues éclairées, des commerces actifs, un trafic modéré et des conditions de sécurité visibles",
        },

        category: "Evening Flow",
        signalFocus: ["safety", "public space", "evening mobility", "urban transition"],
        landingUrl: "/smart-city/human-daily-flow-evening",
    },

    purpose: "Soutenir la reconnaissance de schémas urbains récurrents",
    narrativeRole: "Présenter des systèmes urbains complexes à travers des routines quotidiennes familières",
    section: "Human Daily Flow",
    category: "Smart City Media",
    lang: "fr",
};