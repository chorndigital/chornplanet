import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsMovementAndPauseFR: ISmartCityLanding = {
    heroObservation: {
        headline: "Mouvement et Pause",
        paragraphs: [
            "Une ville ne se définit pas par la vitesse à laquelle elle se déplace, mais par sa capacité à permettre aux personnes de s’arrêter sans risque ni pression.",
            "Les rues saines ne sont pas conçues comme des autoroutes. Ce sont des environnements partagés où le mouvement peut ralentir naturellement et où les pauses restent sûres.",
            "Lorsqu’une ville équilibre le flux et l’immobilité, la vie quotidienne peut devenir plus calme, plus sociale et davantage centrée sur l’humain."
        ],
        image: {
            url: "/smart-city/city-systems/movement-and-pause.png",
            alt: "Rue urbaine thaïlandaise équilibrant les pauses piétonnes avec un flux de mobilité calme",
        },
        cta: {
            label: "Explorer la Densité et le Confort",
            href: "/smart-city/city-systems-density-and-comfort",
        },
    },

    systemExplanation: {
        headline: "Ce Qui Crée l’Équilibre dans la Rue",
        paragraphs: [
            "Le mouvement et la pause ne sont pas opposés. Ce sont des fonctions complémentaires au sein d’un même système de rue.",
            "Les traversées, la conception des bordures, le rythme des trottoirs et le comportement de la circulation influencent la sécurité ressentie lorsqu’on ralentit, observe et interagit. Lorsque la rue est lisible et prévisible, la vie sociale peut émerger sans dépendre fortement de l’application des règles."
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "Conception de l’espace public permettant des pauses sûres et une vie urbaine partagée",
        },
    },

    whyItMatters: {
        headline: "Pourquoi le Mouvement et la Pause Comptent",
        paragraphs: [
            "Lorsque les personnes peuvent faire une pause naturellement, les rues tendent à devenir plus sûres, plus confortables et plus socialement actives."
        ],
        points: [
            {
                title: "La Pause Peut Indiquer la Sécurité",
                description:
                    "Si les personnes se sentent suffisamment en confiance pour s’arrêter, la rue fonctionne probablement déjà comme un environnement préventif.",
            },
            {
                title: "Un Flux Sans Pression",
                description:
                    "Un mouvement prévisible réduit les conflits et rend le ralentissement normal plutôt que risqué.",
            },
            {
                title: "La Vie Sociale Nécessite de l’Immobilité",
                description:
                    "Une ville devient plus centrée sur l’humain lorsque les rues permettent d’attendre, d’observer, de se rencontrer et de se reposer.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Espace Public Utilisé Comme Prévu",
            paragraphs: [
                "Lorsque les personnes restent sur place confortablement, cela suggère que la ville a atteint un équilibre fonctionnel entre mouvement et confort."
            ],
            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "Résidents thaïlandais utilisant l’espace public naturellement et confortablement",
            },
            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
        {
            headline: "Comportement Prévisible dans la Rue",
            paragraphs: [
                "La prévisibilité favorise des pauses sûres. Sans elle, chaque arrêt peut devenir une source de risque."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Comportement prévisible sur une rue partagée soutenant un déplacement piéton sûr",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
    ],
};