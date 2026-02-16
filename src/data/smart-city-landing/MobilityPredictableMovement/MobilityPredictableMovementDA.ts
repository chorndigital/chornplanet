import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const MobilityPredictableMovementDA: ISmartCityLanding = {
    heroObservation: {
        headline: "Forudsigelig Bevægelse på Delte Gader",
        paragraphs: [
            "Mobilitet opleves ikke primært som teknologi. Den opleves som tryghed.",
            "Når mennesker kan krydse uden tøven, køretøjer sænker farten naturligt, og cyklister bevæger sig med minimal konflikt, bliver gaden læsbar.",
            "Forudsigelighed er ikke kontrol. Det er et praktisk fundament for daglig sikkerhed."
        ],
        image: {
            url: "/smart-city/mobility-focus/predictable-shared-street.png",
            alt: "Thailandske fodgængere og cyklister bevæger sig roligt på en forudsigelig delt gade med en autonom shuttle i baggrunden",
        },
        cta: {
            label: "Udforsk Blandet Mobilitet",
            href: "/smart-city/mobility-focus-mixed-mobility",
        },
    },

    systemExplanation: {
        headline: "Hvad Gør Bevægelse Forudsigelig",
        paragraphs: [
            "Forudsigelighed opstår gennem design, der reducerer usikkerhed: tydelige kryds, ensartet vognbanestruktur, læsbare signaler og gader, der opfordrer til at sænke farten uden tvang.",
            "Veldesignede gader føles sikre, ikke fordi mennesker overvåges, men fordi bevægelse bliver naturligt synkroniseret."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Koordinering af bymobilitet, der understøtter forudsigelig gadeadfærd",
        },
    },

    whyItMatters: {
        headline: "Hvorfor Forudsigelighed Er Vigtig",
        paragraphs: [
            "En forudsigelig gade reducerer stress, mindsker ulykkesrisiko og skaber rammer for spontant byliv."
        ],
        points: [
            {
                title: "Sikkerhed Uden Håndhævelse",
                description:
                    "Når bevægelse er læsbar, regulerer mennesker sig selv naturligt. Gader kan forblive rolige uden streng kontrol.",
            },
            {
                title: "Tryghed er en Praktisk Indikator",
                description:
                    "Et centralt tegn på velfungerende mobilitet er, om mennesker kan bevæge sig uden tøven.",
            },
            {
                title: "Delte Gader Kræver Fælles Tillid",
                description:
                    "Forudsigelighed gør det muligt for fodgængere, scootere, cyklister og køretøjer at sameksistere uden konstant forhandling.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Forudsigelig Gadeadfærd",
            paragraphs: [
                "Når bevægelse opleves som rolig og konsistent, viser det, at gaden understøtter tillid i daglig brug."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Forudsigelig adfærd på en delt gade i et thailandsk bymiljø",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "Bevægelse og Pause",
            paragraphs: [
                "En gade, der understøtter sikre pauser, er ofte den samme gade, der muliggør forudsigelig bevægelse."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Bygade der balancerer mobilitetsflow med sikre pauser for fodgængere",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};