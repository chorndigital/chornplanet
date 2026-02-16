import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const FromLocalLifeToGlobalPatternDA: ISmartCityLanding = {
    heroObservation: {
        headline: "Fra Lokalt Liv til Globalt Mønster",
        paragraphs: [
            "Byliv føles ofte lokalt, formet af velkendte gader, vaner og rutiner.",
            "Når lignende scener optræder på tværs af forskellige byer, kulturer og skalaer, giver de sammenlignelig evidens for, hvordan byer typisk fungerer.",
            "Dette er ikke forudsigelse. Det er sammenligning — at placere hverdagsøjeblikke side om side, indtil de underliggende systemer bliver synlige."
        ],
        image: {
            url: "/smart-city/local-to-global/global-urban-pattern.png",
            alt: "Hverdagsgadescener, der antyder fælles mobilitetsmønstre på tværs af byer",
        },
        cta: {
            label: "Udforsk Globale Mønstre",
            href: "/smart-city/global-patterns-predictable-shared-street",
        },
    },

    systemExplanation: {
        headline: "Hvordan en By Bliver Sammenlignelig",
        paragraphs: [
            "Byer bliver sammenlignelige, når de samme typer øjeblikke observeres: krydsninger, køer, pauser, leveringer og sameksistens.",
            "Når lokal adfærd gentager sig på tværs af steder, går det fra at være individuel præference til at blive et genkendeligt signal, der peger på fælles strukturelle vilkår under hverdagslivet."
        ],
        image: {
            url: "/smart-city/editorial/local-as-global-prototype.png",
            alt: "En lokal gadescene brugt som reference til at forstå bredere bysystemer",
        },
    },

    whyItMatters: {
        headline: "Hvorfor Lokalt-til-Globalt Er Vigtigt",
        paragraphs: [
            "Gentagne mønstre bevæger sig ofte hurtigere end formelle politikker. Når en lokal rutine optræder i mange byer, indikerer det fælles reaktioner på lignende urbane vilkår."
        ],
        points: [
            {
                title: "Hverdagsgader Afspejler Systemvilkår",
                description:
                    "En pålidelig måde at forstå bykvalitet på er at observere, hvad der sker på en almindelig gade i et almindeligt øjeblik.",
            },
            {
                title: "Mønstre Kan Opstå Uden Koordinering",
                description:
                    "Fælles gadeadfærd kan opstå i forskellige byer uafhængigt af hinanden, formet af sammenlignelige begrænsninger og behov.",
            },
            {
                title: "Forståelse Understøtter Dialog",
                description:
                    "At observere mønstre hjælper byer med at opbygge fælles forståelse uden at fremme bestemte løsninger eller ideologier.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Globale Mønstre der Opstår i Hverdagsbyer",
            paragraphs: [
                "Når lignende signaler optræder i forskellige kulturelle sammenhænge, kan de indikere konvergens mod fælles operationelle adfærdsmønstre."
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "En rolig fælles gade, der repræsenterer et mønster af forudsigelig bevægelse observeret i flere byer",
            },
            landingUrl: "/smart-city/global-patterns-predictable-shared-street",
        },
        {
            headline: "Lokalt som Global Prototype",
            paragraphs: [
                "Mellemstore byer gør ofte gentagne mønstre lettere at observere, fordi gadeadfærd forbliver synlig og læsbar."
            ],
            image: {
                url: "/smart-city/editorial/local-as-global-prototype.png",
                alt: "Lokalt gadeliv, der afspejler mønstre observeret i mange byer verden over",
            },
            landingUrl: "/smart-city/editorial-local-as-global-prototype",
        },
    ],
};