import {IGlobalPatterns} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const GlobalPatternsDataEN: IGlobalPatterns = {
    headline: "Global Patterns Observed Across Everyday Cities",
    paragraph:
        "Across cities of different cultures, scales, and income levels, similar mobility and public-space patterns are increasingly observed. These patterns are not driven by technology alone, but by how human routines, spatial constraints, and system coordination align over time. Observing these signals helps explain how cities in different regions exhibit comparable operational tendencies, while continuing to express local identity.",

    signals: [
        {
            title: "Predictable Streets Support Public Life",
            description:
                "When movement systems become predictable, people experience greater confidence in navigating shared environments. Across regions, streets that reduce uncertainty — rather than prioritize speed — are consistently associated with more stable and comfortable public-space use.",
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "A calm shared street where pedestrians, cyclists, and vehicles move in a predictable manner"
            },
            signalFocus: [
                "shared streets",
                "predictable mobility",
                "human comfort",
                "street behavior"
            ],
            landingUrl: "/smart-city/global-patterns-predictable-shared-street"
        },
        {
            title: "Mixed Mobility Increasingly Observed in Urban Contexts",
            description:
                "Walking, cycling, scooters, small EVs, and delivery robots are increasingly present in many urban areas. In various regions, mobility environments are structured to accommodate coexistence among multiple modes, reflecting adaptive responses to spatial and operational constraints.",
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Multiple mobility modes coexisting in an urban street environment"
            },
            signalFocus: [
                "mixed mobility",
                "coexistence",
                "last-mile movement",
                "urban adaptation"
            ],
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence"
        },
        {
            title: "Urban Logistics Integration Within Daily Systems",
            description:
                "Small-scale logistics — including local delivery EVs, ground robots, and aerial systems where permitted — are becoming integrated components of daily urban operations. Cities that coordinate logistics within existing spatial and safety frameworks tend to maintain public comfort while improving operational efficiency.",
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "Small delivery vehicles and robots operating within an urban environment"
            },
            signalFocus: [
                "urban logistics",
                "last-mile delivery",
                "system coordination",
                "integrated infrastructure"
            ],
            landingUrl: "/smart-city/global-patterns-urban-logistics"
        }
    ]
}