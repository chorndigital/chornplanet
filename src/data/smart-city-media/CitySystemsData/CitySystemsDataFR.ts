import {ICitySystems} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const CitySystemsDataFR: ICitySystems = {
    headline: "Systèmes Urbains et Équilibre du Quotidien",
    paragraph:
        "Les systèmes urbains sont rarement vécus directement comme de la technologie ou des politiques. Ils sont ressentis comme un équilibre — entre mouvement et pause, activité et repos, efficacité et confort — qui façonne la manière dont les personnes traversent la ville chaque jour.",
    systems: [
        {
            title: "Mouvement et Pause",
            description:
                "Les villes fonctionnent mieux lorsque le mouvement n’efface pas l’immobilité. Les rues, traversées et espaces partagés permettent au flux de ralentir naturellement, créant des moments où les personnes se sentent suffisamment en sécurité pour s’arrêter, observer et interagir.",
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Rue urbaine équilibrant pause piétonne et flux de mobilité"
            },
            balanceSignals: ["speed vs safety", "flow vs rest"],
            landingUrl: "/smart-city/city-systems-movement-and-pause"
        },
        {
            title: "Densité et Confort",
            description:
                "La densité devient vivable lorsque l’espace, la lumière et la végétation adoucissent la proximité. Des systèmes urbains équilibrés permettent aux personnes de partager l’espace sans se sentir compressées ou pressées.",
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Densité urbaine confortable avec végétation et espace partagé"
            },
            balanceSignals: ["proximity vs privacy", "activity vs calm"],
            landingUrl: "/smart-city/city-systems-density-and-comfort"
        },
        {
            title: "Efficacité et Rythme Humain",
            description:
                "Des systèmes efficaces soutiennent les rythmes quotidiens plutôt que de les écraser. Transport, logistique et services s’adaptent au rythme humain, permettant à la ville de paraître prévisible plutôt que pressée.",
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "Infrastructure urbaine alignée avec le rythme quotidien humain"
            },
            balanceSignals: ["automation vs control", "speed vs predictability"],
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm"
        }
    ]
};