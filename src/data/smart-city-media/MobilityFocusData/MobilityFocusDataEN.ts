//data/smart-city-media/MobilityFocusDataEN.ts

import {IMobilityFocus} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const MobilityFocusDataEN: IMobilityFocus = {
    headline: "Mobility Is Observed Before It Is Understood",
    paragraph:
        "People do not always engage with mobility systems directly. They encounter them through small situations — crossing a street, waiting for a ride, or sharing space with others. When mobility functions with consistency, it becomes less prominent in attention and supports routine movement in daily life.",

    signals: [
        {
            title: "Predictable Movement in Shared Streets",
            description:
                "Coordinated mobility can reduce uncertainty in movement. Pedestrians cross with clearer expectations, vehicles reduce speed under shared-street conditions, and shared streets can be interpreted with less stress. Predictability can contribute to everyday safety.",
            image: {
                url: "/smart-city/mobility-focus/predictable-shared-street.png",
                alt: "Urban street where pedestrians, electric vehicles, and delivery robots move calmly with clear visual cues and predictable flow",
            },
            signalFocus: [
                "pedestrian confidence",
                "shared space",
                "predictability",
                "street readability"
            ],
            landingUrl: "/smart-city/mobility-focus-predictable-movement",
        },
        {
            title: "Coexistence of Mixed Mobility",
            description:
                "Urban streets may involve multiple modes of transport. People may walk alongside autonomous vehicles, small delivery robots, and light electric transport. Under design conditions that support shared use, no single mode needs to dominate attention, and multiple modes can operate in parallel.",
            image: {
                url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                alt: "City street showing pedestrians, autonomous electric vehicles, small delivery robots, and scooters sharing space naturally",
            },
            signalFocus: [
                "mixed mobility",
                "autonomous vehicles",
                "delivery robots",
                "human-centered design"
            ],
            landingUrl: "/smart-city/mobility-focus-mixed-mobility",
        }
    ],
};