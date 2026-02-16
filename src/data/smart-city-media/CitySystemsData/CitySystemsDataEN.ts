import {ICitySystems} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const CitySystemsDataEN: ICitySystems = {
    headline: "City Systems and Everyday Balance",
    paragraph:
        "Urban systems are rarely experienced directly as technology or policy. They are experienced as balance — between movement and pause, activity and rest, efficiency and comfort — shaping how people move through the city each day.",
    systems: [
        {
            title: "Movement and Pause",
            description:
                "Cities function best when movement does not erase stillness. Streets, crossings, and shared spaces allow flow to slow naturally, creating moments where people feel safe to stop, observe, and interact.",
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Urban street balancing pedestrian pause and mobility flow"
            },
            balanceSignals: ["speed vs safety", "flow vs rest"],
            landingUrl: "/smart-city/city-systems-movement-and-pause"
        },
        {
            title: "Density and Comfort",
            description:
                "Density becomes livable when space, light, and greenery soften proximity. Well-balanced urban systems allow people to share space without feeling compressed or rushed.",
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Comfortable urban density with greenery and shared space"
            },
            balanceSignals: ["proximity vs privacy", "activity vs calm"],
            landingUrl: "/smart-city/city-systems-density-and-comfort"
        },
        {
            title: "Efficiency and Human Rhythm",
            description:
                "Efficient systems support daily rhythms rather than override them. Transport, logistics, and services adapt to human pace, enabling cities to feel predictable rather than hurried.",
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "City infrastructure aligned with human daily rhythm"
            },
            balanceSignals: ["automation vs control", "speed vs predictability"],
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm"
        }
    ]
};