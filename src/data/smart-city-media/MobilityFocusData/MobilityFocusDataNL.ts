//data/smart-city-media/MobilityFocusDataNL.ts

import {IMobilityFocus} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const MobilityFocusDataNL: IMobilityFocus = {
    headline: "Mobiliteit wordt waargenomen voordat zij wordt begrepen",
    paragraph:
        "Mensen houden zich niet altijd rechtstreeks bezig met mobiliteitssystemen. Zij komen ermee in aanraking via kleine situaties — het oversteken van een straat, het wachten op vervoer of het delen van ruimte met anderen. Wanneer mobiliteit consistent functioneert, vraagt zij minder aandacht en ondersteunt zij routinematige verplaatsing in het dagelijks leven.",

    signals: [
        {
            title: "Voorspelbare beweging in gedeelde straten",
            description:
                "Gecoördineerde mobiliteit kan onzekerheid in beweging verminderen. Voetgangers kunnen oversteken met duidelijkere verwachtingen, voertuigen verlagen hun snelheid onder omstandigheden van gedeelde straten, en gedeelde straten kunnen met minder spanning worden geïnterpreteerd. Voorspelbaarheid kan bijdragen aan dagelijkse veiligheid.",
            image: {
                url: "/smart-city/mobility-focus/predictable-shared-street.png",
                alt: "Stedelijke straat waar voetgangers, elektrische voertuigen en bezorgrobots rustig bewegen met duidelijke visuele aanwijzingen en voorspelbare doorstroming",
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
            title: "Samenbestaan van gemengde mobiliteit",
            description:
                "Stedelijke straten kunnen meerdere vervoersvormen omvatten. Mensen kunnen zich verplaatsen naast autonome voertuigen, kleine bezorgrobots en lichte elektrische vervoermiddelen. Onder ontwerpvoorwaarden die gedeeld gebruik ondersteunen, hoeft geen enkele vervoersvorm de aandacht te domineren en kunnen meerdere vormen parallel functioneren.",
            image: {
                url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                alt: "Stadsstraat met voetgangers, autonome elektrische voertuigen, kleine bezorgrobots en scooters die ruimte delen",
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