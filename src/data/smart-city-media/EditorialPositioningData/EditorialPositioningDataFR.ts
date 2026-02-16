import {IEditorialPositioning} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const EditorialPositioningDataFR: IEditorialPositioning = {
    headline: "De la Vie Quotidienne à l’Analyse des Systèmes",
    paragraphs: [
        "Cette plateforme ne prédit pas l’avenir des villes. Elle observe comment les villes fonctionnent à travers la vie quotidienne des personnes.",
        "En se concentrant sur les routines, les déplacements, les pauses et la coordination, les systèmes urbains deviennent visibles sans être réduits à un langage technologique ou politique.",
        "L’objectif n’est pas de promouvoir des solutions, mais de soutenir une compréhension partagée entre villes, cultures et échelles."
    ],
    principles: [
        {
            title: "Observation Centrée sur l’Humain",
            description:
                "Les systèmes urbains sont compris à partir de l’expérience vécue. Les routines humaines et les décisions quotidiennes sont traitées comme des signaux primaires, et non comme des résultats secondaires.",
            image: {
                url: "/smart-city/editorial/human-first-observation.png",
                alt: "Des personnes se déplaçant dans une rue urbaine calme comme principal signal des systèmes de la ville",
            },
            landingUrl: "/smart-city/editorial-human-first-observation",
        },
        {
            title: "Le Système Avant la Technologie",
            description:
                "La technologie n’est considérée que lorsqu’elle façonne de manière significative les comportements, la sécurité, l’accès ou le confort — et non comme une fonctionnalité isolée.",
            image: {
                url: "/smart-city/editorial/system-before-technology.png",
                alt: "Mobilité urbaine et infrastructures opérant discrètement en arrière-plan de la vie quotidienne",
            },
            landingUrl: "/smart-city/editorial/system-before-technology",
        },
        {
            title: "Le Local comme Prototype Global",
            description:
                "Les villes de taille moyenne peuvent servir de laboratoires vivants. Les schémas locaux peuvent évoluer vers des systèmes urbains plus larges lorsqu’ils sont observés avec attention.",
            image: {
                url: "/smart-city/editorial/local-as-global-prototype.png",
                alt: "Scène de rue locale reflétant des schémas partagés par des villes dans le monde",
            },
            landingUrl: "/smart-city/editorial-local-as-global-prototype",
        },
    ],
}
