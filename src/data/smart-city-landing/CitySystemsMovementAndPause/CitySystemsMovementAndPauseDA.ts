import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsMovementAndPauseDA: ISmartCityLanding = {
    heroObservation: {
        headline: "Bevægelse og Pause",
        paragraphs: [
            "En by defineres ikke af, hvor hurtigt den bevæger sig, men af om den giver mennesker mulighed for at standse uden risiko eller pres.",
            "Sunde gader er ikke udformet som motorveje. De er fælles miljøer, hvor bevægelse naturligt kan sænkes, og pauser forbliver trygge.",
            "Når en by balancerer flow og stilhed, kan hverdagslivet opleves som roligere, mere socialt og mere menneskecentreret."
        ],
        image: {
            url: "/smart-city/city-systems/movement-and-pause.png",
            alt: "Thailandsk bygade, der balancerer fodgængerpauser med rolig mobilitetsstrøm",
        },
        cta: {
            label: "Udforsk Tæthed og Komfort",
            href: "/smart-city/city-systems-density-and-comfort",
        },
    },

    systemExplanation: {
        headline: "Hvad Skaber Balance i Gaden",
        paragraphs: [
            "Bevægelse og pause er ikke modsætninger. De er komplementære funktioner i det samme gadesystem.",
            "Overgange, kantstensudformning, fortovsrytme og trafikadfærd påvirker, om mennesker føler sig trygge ved at sænke tempoet, observere og interagere. Når gaden er læsbar og forudsigelig, kan socialt liv opstå uden omfattende håndhævelse."
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "Offentligt rum designet til sikker pause og delt byliv",
        },
    },

    whyItMatters: {
        headline: "Hvorfor Bevægelse og Pause Er Vigtigt",
        paragraphs: [
            "Når mennesker kan holde pause på naturlig vis, har gader en tendens til at blive sikrere, mere komfortable og mere socialt aktive."
        ],
        points: [
            {
                title: "Pause Kan Signalere Sikkerhed",
                description:
                    "Hvis mennesker føler sig trygge nok til at standse, fungerer gaden sandsynligvis allerede som et forebyggende miljø.",
            },
            {
                title: "Flow Uden Pres",
                description:
                    "Forudsigelig bevægelse reducerer konflikter og gør det naturligt at sænke tempoet frem for risikabelt.",
            },
            {
                title: "Socialt Liv Kræver Stilhed",
                description:
                    "En by bliver mere menneskecentreret, når gader understøtter venten, observation, møder og hvile.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Offentligt Rum Brugt Som Tiltænkt",
            paragraphs: [
                "Når mennesker opholder sig komfortabelt, tyder det på, at byen har opnået en brugbar balance mellem bevægelse og komfort."
            ],
            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "Thailandske borgere, der naturligt og komfortabelt bruger offentlige rum",
            },
            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
        {
            headline: "Forudsigelig Gadeadfærd",
            paragraphs: [
                "Forudsigelighed understøtter sikker pause. Uden den kan ethvert stop blive en risiko."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Forudsigelig adfærd på fælles gader, der understøtter sikker fodgængerbevægelse",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
    ],
};