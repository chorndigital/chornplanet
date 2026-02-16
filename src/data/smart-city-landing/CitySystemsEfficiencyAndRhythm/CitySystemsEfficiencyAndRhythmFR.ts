import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsEfficiencyAndRhythmFR: ISmartCityLanding = {
    heroObservation: {
        headline: "Efficacité et Rythme Humain",
        paragraphs: [
            "L’efficacité devient problématique lorsque les systèmes exigent que les personnes se déplacent plus vite que ce que la vie quotidienne permet raisonnablement.",
            "Les villes fonctionnent au mieux lorsque les systèmes s’alignent sur le rythme humain : une temporalité prévisible, des mouvements coordonnés et une logistique discrète.",
            "L’objectif n’est pas la vitesse maximale, mais une ville perçue comme stable, fiable et respirable."
        ],
        image: {
            url: "/smart-city/city-systems/efficiency-and-rhythm.png",
            alt: "Infrastructure urbaine thaïlandaise soutenant une mobilité fluide et un rythme quotidien prévisible",
        },
        cta: {
            label: "Retour aux Systèmes Urbains",
            href: "/smart-city/city-systems-movement-and-pause",
        },
    },

    systemExplanation: {
        headline: "Ce que Signifie Réellement l’Efficacité",
        paragraphs: [
            "L’efficacité ne se définit pas uniquement par la vitesse, mais par la réduction des frictions.",
            "Lorsque les transports, les traversées, la logistique et les services publics sont coordonnés dans le temps, la ville devient prévisible. Les habitants s’appuient sur le système plutôt que de se précipiter en son sein, ce qui permet à la ville de rester calme tout en demeurant continuellement active."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Coordination de la mobilité assurant un mouvement fluide sans imposer la vitesse",
        },
    },

    whyItMatters: {
        headline: "Pourquoi l’Efficacité et le Rythme Comptent",
        paragraphs: [
            "Les villes qui respectent le rythme humain tendent à réduire le stress et à soutenir une productivité durable, sans compromettre le confort."
        ],
        points: [
            {
                title: "La Prévisibilité Réduit l’Anxiété",
                description:
                    "Les personnes restent plus sereines lorsque les horaires de déplacement sont anticipables, plutôt que de devoir réagir en permanence.",
            },
            {
                title: "La Vitesse n’Équivaut Pas à la Performance",
                description:
                    "Une ville peut fonctionner rapidement tout en étant ressentie comme exigeante. Une performance efficace est souvent perçue comme stable et discrète.",
            },
            {
                title: "La Logistique Doit Rester une Infrastructure de Fond",
                description:
                    "Les systèmes bien conçus soutiennent la vie quotidienne en continu, sans exiger d’attention ni dominer l’espace public.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Coordination de la Mobilité",
            paragraphs: [
                "Lorsque les feux, les véhicules, les piétons et les transports publics sont synchronisés dans le temps, le déplacement paraît fluide plutôt que strictement contrôlé."
            ],
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "Systèmes de coordination de la mobilité soutenant un rythme urbain fluide",
            },
            landingUrl: "/smart-city/system-explainers-mobility-coordination",
        },
        {
            headline: "La Logistique Transforme Discrètement le Rythme Urbain",
            paragraphs: [
                "Une logistique efficace influence la ville moins par une vitesse visible que par le timing et une faible visibilité."
            ],
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "Logistique urbaine opérant discrètement dans une rue moderne",
            },
            landingUrl: "/smart-city/global-patterns-urban-logistics",
        },
    ],
};