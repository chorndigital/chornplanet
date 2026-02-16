//data/smart-city-media/UrbanSignalsDataEN.ts

import {IUrbanSignals} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const UrbanSignalsDataEN: IUrbanSignals = {
    headline: "Urban Signals Observed in Everyday Life",
    paragraph:
        "Cities communicate through small observable signals — how streets feel, how people move, and how space changes over time. These moments are not always described as systems, yet they can indicate how urban conditions are functioning.",

    signals: [
        {
            title: "Predictable Street Behavior",
            description:
                "When pedestrians, cyclists, and vehicles move with clear expectations, it can indicate shared norms and spatial clarity, even without explicit enforcement.",

            signalFocus: ["predictability", "shared space", "human trust"],

            image: {
                url: "/smart-city/urban-signals/predictable-shared-street.png",
                alt: "People, bicycles, and vehicles moving smoothly together on a shared urban street without visible congestion or tension",
            },

            landingUrl: "/smart-city/urban-signals-predictable-street",
        },

        {
            title: "Logistics Blending Into Daily Life",
            description:
                "Delivery robots, small electric vehicles, and couriers can operate without dominating attention, indicating that logistics are integrated into daily movement patterns.",

            signalFocus: ["logistics", "integration", "low friction"],

            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Small delivery vehicles and robots operating calmly alongside everyday street life in a modern city",
            },

            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },

        {
            title: "Public Space Used as Intended",
            description:
                "When people linger, pause, and share space in routine ways, it can reflect a balance between movement efficiency and usability of public areas.",

            signalFocus: ["public space", "comfort", "social rhythm"],

            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "People sitting, walking, and interacting comfortably in a well-designed urban public space",
            },

            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
    ],
}