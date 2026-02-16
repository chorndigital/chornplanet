import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowMiddayFR: ISmartCityLanding = {
    heroObservation: {
        headline: "Flux de Midi — Densité et Coordination",
        paragraphs: [
            "À midi, la complexité d’une ville devient la plus visible.",
            "Les personnes, les marchandises, les livraisons, les services et la mobilité se superposent au même moment. La rue devient dense, mais la vie quotidienne doit rester calme.",
            "Une ville intelligente ne se définit pas par l’élimination de la densité. Elle se reflète dans la manière dont la densité est coordonnée."
        ],
        image: {
            url: "/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
            alt: "Rue thaïlandaise animée à midi avec piétons, scooters, cyclistes, robots de livraison et navette électrique autonome circulant ensemble",
        },
        cta: {
            label: "Voir le Flux du Soir",
            href: "/smart-city/human-daily-flow-evening",
        },
    },

    systemExplanation: {
        headline: "Les Systèmes de Midi que l’On Ne Voit Pas",
        paragraphs: [
            "Au pic de densité, une ville coordonne plusieurs couches : le timing logistique, les signaux de circulation, les mouvements piétons, les itinéraires de livraison et le partage de l’espace public.",
            "Lorsque ces systèmes fonctionnent bien, ils demandent peu d’attention. Les personnes ressentent simplement un mouvement plus prévisible et moins tendu."
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "Logistique urbaine opérant discrètement aux côtés de la vie quotidienne",
        },
    },

    whyItMatters: {
        headline: "Pourquoi le Flux de Midi Est Important",
        paragraphs: [
            "Le midi montre si une ville peut soutenir la vie quotidienne à grande échelle sans devenir stressante ou chaotique."
        ],
        points: [
            {
                title: "La Densité Met à l’Épreuve l’Intelligence du Système",
                description:
                    "Le midi est le moment où la coordination compte le plus : lorsque de nombreuses activités se superposent, les systèmes doivent rester discrets et fiables.",
            },
            {
                title: "La Logistique Doit Être Intégrée Discrètement",
                description:
                    "Les livraisons ne devraient pas dominer la rue. Elles doivent s’intégrer à la vie quotidienne sans perturber le confort.",
            },
            {
                title: "La Coexistence Devient la Nouvelle Norme",
                description:
                    "Scooters, piétons, vélos, robots et véhicules doivent coexister naturellement plutôt que de rivaliser pour dominer l’espace.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Logistique Intégrée à la Vie Quotidienne",
            paragraphs: [
                "Lorsque les livraisons fonctionnent sans attirer l’attention, la ville peut rester calme même au pic d’intensité."
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Robots de livraison et micro-logistique électrique intégrés dans un environnement de rue thaïlandais",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
        {
            headline: "La Mobilité Mixte Devient la Norme",
            paragraphs: [
                "Le midi révèle si la mobilité mixte est soutenue intentionnellement ou laissée au hasard. La différence se mesure en confort."
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Plusieurs modes de mobilité coexistant dans une rue urbaine moderne",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    ],
};