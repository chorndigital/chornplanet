import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsEfficiencyAndRhythmDA: ISmartCityLanding = {
    heroObservation: {
        headline: "Effektivitet og Menneskelig Rytme",
        paragraphs: [
            "Effektivitet bliver problematisk, når systemer kræver, at mennesker bevæger sig hurtigere, end hverdagslivet rimeligt tillader.",
            "Byer fungerer bedst, når systemer er tilpasset menneskelig rytme: forudsigelig timing, koordineret bevægelse og diskret logistik.",
            "Målet er ikke maksimal hastighed, men en by der opleves som stabil, pålidelig og åndbar."
        ],
        image: {
            url: "/smart-city/city-systems/efficiency-and-rhythm.png",
            alt: "Thailandsk byinfrastruktur, der understøtter smidig mobilitet og forudsigelig daglig rytme",
        },
        cta: {
            label: "Tilbage til Bysystemer",
            href: "/smart-city/city-systems-movement-and-pause",
        },
    },

    systemExplanation: {
        headline: "Hvad Effektivitet Reelt Betyder",
        paragraphs: [
            "Effektivitet defineres ikke alene af hastighed, men af reduceret friktion.",
            "Når transport, krydsninger, logistik og offentlige tjenester koordineres i tid, bliver byen forudsigelig. Mennesker kan stole på systemet frem for at skynde sig i det, hvilket gør byen roligere, selv mens den er i konstant bevægelse."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Mobilitetskoordination, der understøtter jævn bevægelse uden at presse tempoet",
        },
    },

    whyItMatters: {
        headline: "Hvorfor Effektivitet og Rytme Er Vigtigt",
        paragraphs: [
            "Byer, der respekterer menneskelig rytme, reducerer ofte stress og understøtter vedvarende produktivitet uden at gå på kompromis med komfort."
        ],
        points: [
            {
                title: "Forudsigelighed Reducerer Uro",
                description:
                    "Mennesker forbliver mere rolige, når bevægelsestiming kan forudses frem for konstant at skulle reageres på.",
            },
            {
                title: "Hastighed er Ikke det Samme som Ydeevne",
                description:
                    "En by kan fungere hurtigt og stadig føles krævende. Effektiv ydeevne opleves ofte som stabil og diskret.",
            },
            {
                title: "Logistik Bør Forblive Baggrundsinfrastruktur",
                description:
                    "Veldesignede systemer understøtter hverdagslivet kontinuerligt uden at tiltrække opmærksomhed eller dominere offentlige rum.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Mobilitetskoordination",
            paragraphs: [
                "Når signaler, køretøjer, fodgængere og kollektiv trafik er tidsmæssigt afstemt, opleves bevægelse som ubesværet frem for kontrolleret."
            ],
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "Mobilitetskoordination, der understøtter en jævn byrytme",
            },
            landingUrl: "/smart-city/system-explainers-mobility-coordination",
        },
        {
            headline: "Logistik Former Stille Byens Rytme",
            paragraphs: [
                "Effektiv logistik påvirker byen mindre gennem synlig hastighed og mere gennem timing og lav synlighed."
            ],
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "Urban logistik, der fungerer diskret i en moderne bygade",
            },
            landingUrl: "/smart-city/global-patterns-urban-logistics",
        },
    ],
};