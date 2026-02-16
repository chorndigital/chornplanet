import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialSystemBeforeTechnologyDA: ISmartCityLanding = {
    heroObservation: {
        headline: "System Før Teknologi",
        paragraphs: [
            "Teknologi alene skaber ikke en smart city.",
            "Byer bliver mere intelligente, når systemer former hverdagsadfærd stille og roligt: sikrere krydsninger, forudsigeligt flow, mere smidig logistik og offentlige rum, der fungerer pålideligt.",
            "Teknologi betyder mest, når den forbedrer menneskers liv på målbare måder. Uden den forbindelse har den begrænset værdi."
        ],
        image: {
            url: "/smart-city/editorial/system-before-technology.png",
            alt: "Byinfrastruktur der fungerer stille i baggrunden af thailandsk hverdagsliv",
        },
        cta: {
            label: "Udforsk Lokalt som Global Prototype",
            href: "/smart-city/editorial-local-as-global-prototype",
        },
    },

    systemExplanation: {
        headline: "Hvad et Systemperspektiv Afslører",
        paragraphs: [
            "Et systemperspektiv begynder med resultater: komfort, sikkerhed, rytme og adgang.",
            "Først når resultaterne bliver synlige, spørger vi, hvilken teknologi der understøtter dem. Dette hjælper byer med at undgå at forfølge innovation, der ser avanceret ud, men har begrænset reel effekt i hverdagen."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Mobilitetskoordinationssystem der understøtter daglig bevægelse uden at være synligt",
        },
    },

    whyItMatters: {
        headline: "Hvorfor System Før Teknologi Er Vigtigt",
        paragraphs: [
            "Byer, der begynder med systemer, udvikler ofte løsninger, der kan skaleres. Byer, der begynder med teknologi, ender ofte med isolerede implementeringer."
        ],
        points: [
            {
                title: "Resultater Kommer Først",
                description:
                    "Hvis komfort og sikkerhed ikke forbedres, opnår teknologien ikke sit tilsigtede formål.",
            },
            {
                title: "Usynlig Succes er Målet",
                description:
                    "Effektive systemer integreres i hverdagen. Mennesker oplever forbedringer uden at skulle fokusere på selve værktøjet.",
            },
            {
                title: "Forebyggelse Understøtter Langsigtet Stabilitet",
                description:
                    "En systemtilgang reducerer risiko tidligt, frem for kun at håndtere problemer efter skade er opstået.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Mobilitetskoordinering",
            paragraphs: [
                "Systemer koordinerer tid, flow og adfærd. Teknologi er kun én del af koordinationslaget."
            ],
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "Mobilitetskoordinering der understøtter forudsigelig bevægelse",
            },
            landingUrl: "/smart-city/system-explainers-mobility-coordination",
        },
        {
            headline: "Effektivitet og Menneskelig Rytme",
            paragraphs: [
                "Effektivitet bliver meningsfuld, når den understøtter menneskelig rytme frem for at tilsidesætte den."
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "Bysystemer tilpasset menneskelig rytme og komfort",
            },
            landingUrl: "/smart-city/city-systems/efficiency-and-rhythm",
        },
    ],
};