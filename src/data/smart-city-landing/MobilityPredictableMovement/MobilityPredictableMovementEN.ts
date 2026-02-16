import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const MobilityPredictableMovementEN: ISmartCityLanding = {
    heroObservation: {
        headline: "Predictable Movement in Shared Streets",
        paragraphs: [
            "Mobility is not experienced primarily as technology. It is experienced as confidence.",
            "When people can cross without hesitation, vehicles slow naturally, and cyclists flow with minimal conflict, the street becomes readable.",
            "Predictability is not control. It is a practical foundation for everyday safety."
        ],
        image: {
            url: "/smart-city/mobility-focus/predictable-shared-street.png",
            alt: "Thai pedestrians and cyclists moving calmly in a predictable shared street with an autonomous shuttle in the background",
        },
        cta: {
            label: "Explore Mixed Mobility",
            href: "/smart-city/mobility-focus-mixed-mobility",
        },
    },

    systemExplanation: {
        headline: "What Makes Movement Predictable",
        paragraphs: [
            "Predictability comes from design that reduces uncertainty: clear crossings, consistent lane logic, readable signals, and streets that encourage slowing without forcing it.",
            "Well-designed streets feel safe not because people are monitored, but because movement becomes naturally synchronized."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Urban mobility coordination supporting predictable street behavior",
        },
    },

    whyItMatters: {
        headline: "Why Predictability Matters",
        paragraphs: [
            "A predictable street reduces stress, lowers accident risk, and creates conditions for spontaneous city life."
        ],
        points: [
            {
                title: "Safety Without Enforcement",
                description:
                    "When movement feels readable, people self-regulate naturally. Streets can remain calm without relying on strict control.",
            },
            {
                title: "Confidence Is a Practical Indicator",
                description:
                    "A key signal of mobility performance is whether people can move without hesitation.",
            },
            {
                title: "Shared Streets Need Shared Trust",
                description:
                    "Predictability enables pedestrians, scooters, cyclists, and vehicles to coexist without constant negotiation.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Predictable Street Behavior",
            paragraphs: [
                "When movement feels calm and consistent, it indicates that the street supports trust in daily use."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Predictable shared street behavior in a Thai city environment",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "Movement and Pause",
            paragraphs: [
                "A street that supports safe pausing is often the same street that enables predictable movement."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Urban street balancing mobility flow with safe pedestrian pause",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};