// src/data/smart-city-media/SmartCityMainNL.ts

import {ISmartCityMain} from "@/data/smart-city-media/_model/ISmartCityMain";

export const SmartCityMainNL: ISmartCityMain = {
    hero: {
        title: "Smart City Media",
        paragraphs: [
            "Dit is geen voorspelling van de toekomst. Het is een observatie van hoe steden momenteel functioneren via alledaagse menselijke activiteiten.",
            "Door routines, mobiliteitsgedrag en systeemcoördinatie te onderzoeken, identificeren wij patronen die in steden in verschillende regio’s kunnen worden waargenomen.",
        ],
        cta: {
            label: "Begin met het overzicht",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
        image: {
            url: "/smart-city/hero/when-human-life-shapes-the-city.png",
            alt: "Fotorealistische Thaise stadsstraat met mensgerichte smart city-omgeving",
        },
    },

    navigation: {
        items: [
            {
                title: "Human Daily Flow",
                description: "Ochtend, middag en avond geven systeemgedrag weer.",
                href: "/smart-city/human-daily-flow/morning",
            },
            {
                title: "Local to Global",
                description: "Hoe lokale routines als bredere patronen kunnen worden onderzocht.",
                href: "/smart-city/from-local-life-to-global-pattern",
            },
            {
                title: "Mobility Focus",
                description: "Mobiliteit wordt waargenomen voordat zij wordt begrepen.",
                href: "/smart-city/mobility-focus/predictable-movement",
            },
            {
                title: "City Systems",
                description: "Signalen die dagelijkse stedelijke omstandigheden beïnvloeden.",
                href: "/smart-city/city-systems/movement-and-pause",
            },
            {
                title: "Global Patterns",
                description: "Signalen die in meerdere steden worden waargenomen.",
                href: "/smart-city/global-patterns/predictable-shared-street",
            },
            {
                title: "Urban Signals",
                description: "Gedrag op straatniveau dat systeemcondities aangeeft.",
                href: "/smart-city/urban-signals/predictable-street",
            },
            {
                title: "Editorial Positioning",
                description: "Het perspectief achter Smart City Media.",
                href: "/smart-city/editorial/human-first-observation",
            },
        ],
    },
};