import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsPublicSpaceUseDA: ISmartCityLanding = {
    heroObservation: {
        headline: "Offentlige Rum Bruges som Tiltænkt",
        paragraphs: [
            "Offentlige rum afslører bykvalitet gennem daglig brug.",
            "Når mennesker sidder, holder pause, taler og opholder sig naturligt, indikerer det, at byen har opnået balance mellem bevægelse og komfort, effektivitet og socialt liv.",
            "Et af de tydeligste tegn på en velfungerende by er ikke hastighed, men om mennesker føler sig tilpas nok til at blive."
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "Thailandske borgere, der sidder og går komfortabelt i et veludformet offentligt rum",
        },
        cta: {
            label: "Tilbage til Forudsigelige Gader",
            href: "/smart-city/urban-signals-predictable-street",
        },
    },

    systemExplanation: {
        headline: "Hvad Brug af Offentlige Rum Signalerer",
        paragraphs: [
            "Mennesker bliver ikke hængende i ubehagelige steder. De bliver kun, hvor byen tilbyder tryghed, skygge, belysning, gangvenlighed og en rolig gaderytme.",
            "Offentlige rum er ikke et dekorativt lag. De er et systemresultat. Når de fungerer godt, bliver byen socialt aktiv uden at skulle iscenesættes eller programmeres."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Orkestrering af offentlige rum gennem belysning, fortove og gangvenlighed",
        },
    },

    whyItMatters: {
        headline: "Hvorfor Dette Signal Er Vigtigt",
        paragraphs: [
            "Når offentlige rum bruges naturligt, tyder det på, at byen understøtter langsigtet social sundhed, tryghed og hverdagskomfort."
        ],
        points: [
            {
                title: "Komfort Er Dokumentation",
                description:
                    "Daglig brug af offentlige rum viser, at systemerne fungerer ud over politiske erklæringer.",
            },
            {
                title: "Socialt Liv Er Infrastruktur",
                description:
                    "Uformelle møder styrker samhørighed og robusthed i byen.",
            },
            {
                title: "Tryghed Opleves",
                description:
                    "Velfungerende gader føles trygge uden at være afhængige af synlig kontrol eller håndhævelse.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Bevægelse og Pause",
            paragraphs: [
                "Offentlige rum bliver først brugbare, når bevægelse tillader stilhed. Pause er et centralt systemsignal."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Bevægelse og pause i balance i et menneskecentreret gadesystem",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
        {
            headline: "Tæthed og Komfort",
            paragraphs: [
                "Når tæthed forbliver komfortabel, bliver mennesker udenfor længere. Komfort er den underliggende strategi for tæthed, der kan leves i."
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Bytæthed blødgjort af grønne områder og komfort i fælles rum",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};