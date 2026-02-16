// src/data/smart-city-landing/EditorialSystemBeforeTechnologyEN.ts

import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialSystemBeforeTechnologyEN: ISmartCityLanding = {
    heroObservation: {
        headline: "System Before Technology",
        paragraphs: [
            "Technology alone does not create a smart city.",
            "Cities become more intelligent when systems shape everyday behavior quietly: safer crossings, predictable flow, smoother logistics, and public space that functions reliably.",
            "Technology matters most when it improves human life in measurable ways. Without that connection, it provides limited value."
        ],
        image: {
            url: "/smart-city/editorial/system-before-technology.png",
            alt: "Urban infrastructure operating quietly in the background of Thai daily life",
        },
        cta: {
            label: "Explore Local as Global Prototype",
            href: "/smart-city/editorial-local-as-global-prototype",
        },
    },

    systemExplanation: {
        headline: "What a System Lens Reveals",
        paragraphs: [
            "A system lens begins with outcomes: comfort, safety, rhythm, and access.",
            "Only after outcomes become visible do we ask what technology supports them. This helps cities avoid pursuing innovation that appears advanced but produces limited real-world impact."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Mobility coordination system supporting daily movement without being visible",
        },
    },

    whyItMatters: {
        headline: "Why System Before Technology Matters",
        paragraphs: [
            "Cities that begin with systems tend to build solutions that scale. Cities that begin with technology often produce isolated implementations."
        ],
        points: [
            {
                title: "Outcomes Come First",
                description:
                    "If comfort and safety do not improve, technology does not achieve its intended purpose.",
            },
            {
                title: "Invisible Success Is the Goal",
                description:
                    "Effective systems integrate into daily life. People experience improvement without needing to focus on the tool itself.",
            },
            {
                title: "Prevention Supports Long-Term Stability",
                description:
                    "A system approach reduces risk early, rather than addressing problems only after harm has occurred.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Mobility Coordination",
            paragraphs: [
                "Systems coordinate time, flow, and behavior. Technology is only one part of the coordination layer."
            ],
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "Mobility coordination supporting predictable movement",
            },
            landingUrl: "/smart-city/system-explainers-mobility-coordination",
        },
        {
            headline: "Efficiency and Human Rhythm",
            paragraphs: [
                "Efficiency becomes meaningful when it supports human pace rather than overriding it."
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "City systems aligned with human rhythm and comfort",
            },
            landingUrl: "/smart-city/city-systems/efficiency-and-rhythm",
        },
    ],
};