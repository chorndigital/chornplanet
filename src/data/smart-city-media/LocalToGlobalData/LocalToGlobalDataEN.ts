//data/smart-city-media/LocalToGlobalDataEN.ts

import {ILocalToGlobal} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const LocalToGlobalDataEN: ILocalToGlobal = {
    headline: "From Local Context to Global Patterns",
    paragraph:
        "Urban activity is typically experienced within local and specific contexts. When similar conditions are observed across cities, regions, and cultures, recurring patterns can be identified. Comparing everyday situations across locations allows shared structural systems to be examined.",

    items: [
        {
            title: "A Street-Level Routine",
            description:
                "Daily movement along a familiar street illustrates how individuals respond to spatial conditions, temporal structures, and mobility systems. While locally specific, these routines reflect underlying structural patterns shaped by urban design.",
            image: {
                url: "/smart-city/local-to-global/local-street-daily-routine.png",
                alt: "Everyday urban street environment with pedestrians, local shops, and mobility systems in operation",
            },
            signalFocus: ["human routine", "street-level mobility", "local behavior"],
        },
        {
            title: "Recurring Patterns Across Cities",
            description:
                "When similar movement structures are observed across multiple cities, they indicate comparable structural conditions. Locally observed activity can therefore be examined as part of broader urban system behavior across regions.",
            image: {
                url: "/smart-city/local-to-global/global-urban-pattern.png",
                alt: "Urban environment showing comparable mobility flows, logistics systems, and public space usage across different cities",
            },
            signalFocus: ["replicability", "urban density", "systemic flow"],
        },
    ],

    purpose: "Examine broader structural patterns through local comparison",
    narrativeRole: "Connect observed local activity to systemic analysis",
    section: "From Local Life to Global Pattern",
    category: "Smart City Media",
    landingUrl: "/smart-city/from-local-life-to-global-pattern",
    lang: "en",
};