//data/smart-city-media/HeroSectionDataEN.ts

import {IHeroSection} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const HeroSectionDataEN: IHeroSection = {
    headline: "When Human Life Shapes the City",
    paragraph:
        "Cities are not defined by technology, infrastructure, or policy alone. They are shaped by how people move, pause, gather, and live every day. Smart cities begin not with systems, but with the everyday routines that quietly reveal how the city truly works.",

    softTexts: [
        {
            title: "Not a vision of the future",
            description:
                "This is an observation of everyday life — where emerging mobility, invisible systems, and human behavior already intersect."
        },
        {
            title: "Local moments, global relevance",
            description:
                "What happens on one street today often reflects patterns shared by cities around the world."
        }
    ],

    image: {
        url: "/smart-city/hero-section/city-shaped-by-people-move.png",
        alt: "Everyday urban life where people, autonomous mobility, and city systems coexist naturally in a modern mid-sized city",
    },
    purpose: "Establish worldview, not explain features",
    narrativeRole: "Signal that this platform observes cities through human life, not technology",
    section: "Hero Section",
    category: "Smart City Media",
    editorialTone: "observational",
    signalFocus: ["mobility", "safety", "density", "coordination"],
    landingUrl: "/smart-city/when-human-life-shapes-the-city",
}