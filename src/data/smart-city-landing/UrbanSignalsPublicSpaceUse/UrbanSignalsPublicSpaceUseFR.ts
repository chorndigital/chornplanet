import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsPublicSpaceUseFR: ISmartCityLanding = {
    heroObservation: {
        headline: "L’Espace Public Utilisé Comme Prévu",
        paragraphs: [
            "L’espace public révèle la qualité urbaine à travers son usage quotidien.",
            "Lorsque les personnes s’assoient, font une pause, discutent et restent naturellement, cela indique que la ville a trouvé un équilibre entre mouvement et confort, efficacité et vie sociale.",
            "L’un des signes les plus clairs d’une ville fonctionnelle n’est pas la vitesse, mais le fait que les personnes se sentent suffisamment à l’aise pour rester."
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "Habitants thaïlandais assis et marchant confortablement dans un espace public bien conçu",
        },
        cta: {
            label: "Retourner aux Rues Prévisibles",
            href: "/smart-city/urban-signals-predictable-street",
        },
    },

    systemExplanation: {
        headline: "Ce que Signale l’Usage de l’Espace Public",
        paragraphs: [
            "Les personnes ne s’attardent pas dans des lieux inconfortables. Elles restent uniquement là où la ville offre sécurité, ombrage, éclairage, marchabilité et un rythme de rue apaisé.",
            "L’espace public n’est pas une couche décorative. C’est un résultat systémique. Lorsqu’il fonctionne bien, la ville devient socialement active sans être mise en scène ou programmée."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Orchestration de l’espace public par l’éclairage, les trottoirs et la marchabilité",
        },
    },

    whyItMatters: {
        headline: "Pourquoi Ce Signal Est Important",
        paragraphs: [
            "Lorsque l’espace public est utilisé naturellement, cela suggère que la ville soutient la santé sociale à long terme, la sécurité et le confort du quotidien."
        ],
        points: [
            {
                title: "Le Confort Est une Preuve",
                description:
                    "L’usage quotidien de l’espace public montre que les systèmes fonctionnent au-delà des déclarations politiques.",
            },
            {
                title: "La Vie Sociale Est une Infrastructure",
                description:
                    "Les rassemblements informels renforcent la cohésion et la résilience de la ville.",
            },
            {
                title: "La Sécurité Est Ressentie",
                description:
                    "Des rues bien conçues procurent un sentiment de sécurité sans dépendre d’un contrôle visible ou d’une application stricte.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Mouvement et Pause",
            paragraphs: [
                "L’espace public devient utilisable uniquement lorsque le mouvement permet l’immobilité. La pause est un signal systémique fondamental."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Équilibre entre mouvement et pause dans un système de rue centré sur l’humain",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
        {
            headline: "Densité et Confort",
            paragraphs: [
                "Lorsque la densité reste confortable, les personnes restent plus longtemps à l’extérieur. Le confort est la stratégie fondamentale d’une densité vivable."
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Densité urbaine adoucie par la végétation et le confort des espaces partagés",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};