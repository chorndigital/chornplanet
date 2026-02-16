import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsLogisticsIntegrationFR: ISmartCityLanding = {
    heroObservation: {
        headline: "La Logistique qui se Fond dans la Vie Quotidienne",
        paragraphs: [
            "La logistique est un système urbain fondamental, et lorsqu’elle est bien intégrée, elle passe souvent inaperçue.",
            "Lorsque les robots de livraison, les coursiers et les petits véhicules électriques fonctionnent sans capter excessivement l’attention, cela indique que la logistique est intégrée plutôt qu’imposée.",
            "Une ville intelligente ne se définit pas par la visibilité de ses systèmes de livraison, mais par la manière dont la logistique s’insère dans le rythme quotidien sans perturber la vie de la rue."
        ],
        image: {
            url: "/smart-city/urban-signals/urban-logistics.png",
            alt: "Rue urbaine thaïlandaise où les robots de livraison et la logistique électrique légère se fondent dans la vie quotidienne",
        },
        cta: {
            label: "Explorer l’Usage de l’Espace Public",
            href: "/smart-city/urban-signals-public-space-use",
        },
    },

    systemExplanation: {
        headline: "Ce que Signale l’Intégration Logistique",
        paragraphs: [
            "Une logistique intégrée permet aux marchandises de circuler en continu sans perturber le confort humain.",
            "Cela repose sur le timing, le routage et la coordination. La rue doit rester lisible pour les piétons, tandis que les systèmes logistiques opèrent discrètement en périphérie."
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "Système de logistique urbaine opérant discrètement derrière les mouvements quotidiens",
        },
    },

    whyItMatters: {
        headline: "Pourquoi Ce Signal Est Important",
        paragraphs: [
            "L’intégration logistique est un signal de maturité du système. Elle montre qu’une ville peut répondre à la demande quotidienne sans transformer les rues en zones d’infrastructure."
        ],
        points: [
            {
                title: "Efficacité Sans Bruit",
                description:
                    "Une logistique bien intégrée réduit les frictions tout en préservant des espaces publics calmes.",
            },
            {
                title: "La Rue Reste Humaine",
                description:
                    "Lorsque la logistique se fond dans l’environnement, les piétons et la vie sociale peuvent rester l’identité principale de la rue.",
            },
            {
                title: "Le Timing Soutient la Conception Préventive",
                description:
                    "Un rythme de livraison coordonné peut réduire les pics de congestion avant qu’ils n’apparaissent.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "La Logistique Redéfinit Silencieusement le Rythme Urbain",
            paragraphs: [
                "Dans les villes du monde entier, la logistique évolue vers des systèmes plus petits et plus discrets qui influencent les déplacements quotidiens."
            ],
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "Modèle mondial de logistique urbaine influençant le rythme quotidien",
            },
            landingUrl: "/smart-city/global-patterns-urban-logistics",
        },
        {
            headline: "Efficacité et Rythme Humain",
            paragraphs: [
                "L’intégration logistique fonctionne mieux lorsque les systèmes urbains s’alignent sur le rythme humain plutôt que de privilégier la vitesse."
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "Efficacité alignée sur le rythme humain dans un système urbain moderne",
            },
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    ],
};