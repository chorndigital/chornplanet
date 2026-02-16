import { ISmartCityLanding } from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsPredictableStreetDA: ISmartCityLanding = {
    heroObservation: {
        headline: "Forudsigelig Adfærd på Gaden",
        paragraphs: [
            "Byer kommunikerer gennem adfærd, før de kommunikerer gennem politik.",
            "Når fodgængere krydser uden tøven, scootere sænker farten naturligt, og køretøjer bevæger sig med stille sikkerhed, viser gaden noget vigtigt: mennesker oplever systemet som pålideligt.",
            "Forudsigelighed er et af de tydeligste bysignaler, fordi det kan ses uden måling."
        ],
        image: {
            url: "/smart-city/urban-signals/predictable-shared-street.png",
            alt: "Thailandske fodgængere og cyklister bevæger sig glidende i et forudsigeligt delt gademiljø",
        },
        cta: {
            label: "Udforsk Logistikintegration",
            href: "/smart-city/urban-signals-logistics-integration",
        },
    },

    systemExplanation: {
        headline: "Hvad Forudsigelighed Signalerer",
        paragraphs: [
            "Forudsigelig adfærd opstår ikke tilfældigt. Den er resultatet af gadedesign, der reducerer usikkerhed: læsbare krydsninger, ensartet banerytme, tydelige visuelle signaler og hastighedsharmoni.",
            "Når disse systemer arbejder sammen, holder mennesker op med at forhandle hvert skridt. Byen føles sikker uden at være afhængig af synlig kontrol."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Mobilitetskoordinering der understøtter forudsigelig adfærd på gaden",
        },
    },

    whyItMatters: {
        headline: "Hvorfor Dette Signal Er Vigtigt",
        paragraphs: [
            "Forudsigelighed er en direkte indikator for tillid på gadeniveau."
        ],
        points: [
            {
                title: "Tillid Kan Observeres",
                description:
                    "Når mennesker bevæger sig med sikkerhed, tyder det på, at de forventer, at gaden opfører sig konsekvent.",
            },
            {
                title: "Sikkerhed Føles Normal",
                description:
                    "En forudsigelig gade reducerer risiko uden at få sikkerhed til at føles som håndhævelse.",
            },
            {
                title: "Komfort Muliggør Byliv",
                description:
                    "Spontant offentligt liv afhænger af bevægelsesregler, der føles læsbare og fælles.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Forudsigelige Gader Muliggør Spontant Liv",
            paragraphs: [
                "På tværs af byer verden over understøtter forudsigelige gader konsekvent roligere bevægelse og hverdagsliv i det offentlige rum."
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "Globalt mønster af forudsigelige delte gader",
            },
            landingUrl: "/smart-city/global-patterns-predictable-shared-street",
        },
        {
            headline: "Bevægelse og Pause",
            paragraphs: [
                "Forudsigelighed er det, der gør pauser mulige. Uden den kan det blive usikkert at stoppe."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Gadesystem der balancerer flow og pause",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};