//data/smart-city-media/EditorialPositioningDataEN.ts

import {IEditorialPositioning} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const EditorialPositioningDataEN: IEditorialPositioning = {
    headline: "From Daily Life to System Insight",
    paragraphs: [
        "This platform does not predict the future of cities. It observes how cities already function through everyday human life.",
        "By focusing on routines, movement, pauses, and coordination, urban systems become visible without being abstracted into technology or policy language.",
        "The goal is not to promote solutions, but to build shared understanding across cities, cultures, and scales."
    ],
    principles: [
        {
            title: "Human-First Observation",
            description:
                "Urban systems are understood through lived experience. Human routines and daily decisions are treated as primary signals, not secondary outcomes.",
            image: {
                url: "/smart-city/editorial/human-first-observation.png",
                alt: "People moving through a calm urban street as the primary signal of city systems",
            },
            landingUrl: "/smart-city/editorial-human-first-observation",
        },
        {
            title: "System Before Technology",
            description:
                "Technology is considered only when it meaningfully shapes behavior, safety, access, or comfort — never as an isolated feature.",
            image: {
                url: "/smart-city/editorial/system-before-technology.png",
                alt: "Urban mobility and infrastructure operating quietly in the background of daily life",
            },
            landingUrl: "/smart-city/editorial-system-before-technology",
        },
        {
            title: "Local as Global Prototype",
            description:
                "Mid-sized cities function as living laboratories. Local patterns often scale into global urban systems when observed carefully.",
            image: {
                url: "/smart-city/editorial/local-as-global-prototype.png",
                alt: "A local street scene reflecting patterns shared by cities worldwide",
            },
            landingUrl: "/smart-city/editorial-local-as-global-prototype",
        },
    ],
}