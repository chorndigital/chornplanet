import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialLocalAsGlobalPrototypeDA: ISmartCityLanding = {
    heroObservation: {
        headline: "Lokalt som Global Prototype",
        paragraphs: [
            "Mellemstore byer gør ofte urbane systemer lettere at observere.",
            "De er tætte nok til at afsløre systempres, samtidig med at de forbliver læsbare gennem menneskelig adfærd i hverdagen.",
            "Omhyggelig observation af lokale gader kan hjælpe med at identificere mønstre, som senere viser sig på tværs af forskellige urbane sammenhænge."
        ],
        image: {
            url: "/smart-city/editorial/local-as-global-prototype.png",
            alt: "Thailandsk lokal gade, der afspejler urbane mønstre fundet i mange byer verden over",
        },
        cta: {
            label: "Tilbage til Smart City Overblik",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
    },

    systemExplanation: {
        headline: "Hvorfor Mellemstore Byer Afslører Mere",
        paragraphs: [
            "Store storbyområder kan skjule systemer gennem deres skala. Mellemstore byer gør ofte systemer mere synlige gennem daglige aktiviteter som krydsninger, køer, leveringer og koordinering på gadeniveau.",
            "Disse miljøer gør det muligt at observere tilbagevendende mønstre tydeligt, før de viser sig i større eller mere komplekse bymiljøer."
        ],
        image: {
            url: "/smart-city/local-to-global/local-street-daily-routine.png",
            alt: "Lokal gaderutine, der viser menneskelig adfærd som en indikator for urbane systemer",
        },
    },

    whyItMatters: {
        headline: "Hvorfor Lokalt som Global Prototype Er Vigtigt",
        paragraphs: [
            "Urban konvergens sker ikke kun gennem planlægning. Den opstår også gennem gentagne lokale mønstre, der fungerer effektivt i hverdagen."
        ],
        points: [
            {
                title: "Lokale Mønstre Kan Skalere Organisk",
                description:
                    "Når en rutine fungerer godt, kan den blive taget i brug andre steder uden formel koordinering.",
            },
            {
                title: "Synlighed Understøtter Praktisk Læring",
                description:
                    "Mellemstore byer gør det muligt at forstå urbane systemer gennem direkte observation frem for abstraktion.",
            },
            {
                title: "Lokal Identitet Kan Sameksistere med Globale Principper",
                description:
                    "Byer kan bevare kulturel særpræg, samtidig med at de udtrykker systemadfærd, der ses på tværs af flere regioner.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Fra Lokalt Liv til Globalt Mønster",
            paragraphs: [
                "Når lignende lokale scener optræder i forskellige byer, indikerer det fælles systemadfærd."
            ],
            image: {
                url: "/smart-city/local-to-global/global-urban-pattern.png",
                alt: "Sammenligning mellem lokale scener, der afslører fælles urbane mønstre",
            },
            landingUrl: "/smart-city/from-local-life-to-global-pattern",
        },
        {
            headline: "Globale Mønstre der Opstår i Hverdagsbyer",
            paragraphs: [
                "Forudsigelighed, blandet mobilitet og lav-synlig logistik observeres i stigende grad på tværs af forskellige bymiljøer."
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "Forudsigelige fælles gademønstre, der ses i flere byer",
            },
            landingUrl: "/smart-city/global-patterns-predictable-shared-street/",
        },
    ],
};