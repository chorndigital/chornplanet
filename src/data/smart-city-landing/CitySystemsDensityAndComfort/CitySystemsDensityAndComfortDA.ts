import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsDensityAndComfortDA: ISmartCityLanding = {
    heroObservation: {
        headline: "Tæthed og Komfort",
        paragraphs: [
            "Tæthed i sig selv er ikke nødvendigvis et problem. Ubehag opstår, når systemer er dårligt designet.",
            "Byer bliver mere beboelige, når tæthed afbalanceres med plads, grønne områder og forudsigelige bevægelsesmønstre.",
            "En smart city forsøger ikke at fjerne trængsel, men skaber rammer, hvor fælles rum kan bruges komfortabelt og overskueligt."
        ],
        image: {
            url: "/smart-city/city-systems/density-and-comfort.png",
            alt: "Komfortabel thailandsk bymæssig tæthed med grønne områder, skyggefulde fortove og rolig gaderytme",
        },
        cta: {
            label: "Udforsk Effektivitet og Rytme",
            href: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    },

    systemExplanation: {
        headline: "Hvordan Komfort Designes Ind i Tæthed",
        paragraphs: [
            "Komfort er ikke et dekorativt lag; det er resultatet af koordinerede systemer.",
            "Elementer som skygge, gangvenlige kanter, belysning, grønne områder og rytmen i offentlige rum påvirker, om tæthed føles stressende eller understøttende. Når disse systemer fungerer sammenhængende, kan tætte miljøer forblive rolige og funktionelle."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Bydesignsystemer, der understøtter komfort gennem grønne områder og gangvenlige rum",
        },
    },

    whyItMatters: {
        headline: "Hvorfor Tæthed og Komfort Er Vigtigt",
        paragraphs: [
            "Byer, der kan opretholde komfort ved højere tæthedsniveauer, understøtter ofte bæredygtighed, sikkerhed og social interaktion mere effektivt."
        ],
        points: [
            {
                title: "Komfort Reducerer Spændinger",
                description:
                    "Når tætte miljøer opleves som ordnede og rolige, er mennesker mere tilbøjelige til at dele pladsen samarbejdende.",
            },
            {
                title: "Beboelighed Reducerer Pres for Udvidelse",
                description:
                    "Byer, der kan rumme tæthed komfortabelt, kan begrænse behovet for at udvide udad.",
            },
            {
                title: "Grønne Områder Fungerer som Infrastruktur",
                description:
                    "Skygge, træer og bløde overgange er funktionelle komponenter, der påvirker temperaturregulering, bevægelsesmønstre og den samlede oplevelse.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Orkestrering af Offentlige Rum",
            paragraphs: [
                "Komfort påvirkes af, hvordan fortove, belysning og gadeaktivitet koordineres over tid."
            ],
            image: {
                url: "/smart-city/system-explainers/public-space-orchestration.png",
                alt: "Orkestrering af offentlige rum, der understøtter komfort og social rytme",
            },
            landingUrl: "/smart-city/system-explainers-public-space-orchestration",
        },
        {
            headline: "Blandet Mobilitet Bliver en Global Standard",
            paragraphs: [
                "Tætte gader kræver sameksistens. Blandet mobilitet afspejler en fremvoksende global tilstand snarere end et valgfrit designvalg."
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Blandet mobilitet, der understøtter tæthed gennem sameksistens",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    ],
};