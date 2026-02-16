import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const GlobalPatternsMixedMobilityCoexistenceDA: ISmartCityLanding = {
    heroObservation: {
        headline: "Blandet Mobilitet Bliver Et Globalt Udgangspunkt",
        paragraphs: [
            "Gang, cykling, løbehjul, små elektriske køretøjer og leveringsrobotter er i stigende grad en del af daglig mobilitet i byer.",
            "På tværs af mange byer udvikler gader sig mod miljøer med blandet mobilitet, hvor sameksistens — frem for streng adskillelse — former hverdagsbevægelse.",
            "Dette afspejler et observerbart skift i, hvordan byrum anvendes og deles."
        ],
        image: {
            url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
            alt: "Flere mobilitetsformer, der sameksisterer roligt på en bygade",
        },
        cta: {
            label: "Udforsk Logistikmønstre",
            href: "/smart-city/global-patterns-urban-logistics",
        },
    },

    systemExplanation: {
        headline: "Hvorfor Sameksistens Optræder i Mange Byer",
        paragraphs: [
            "Bygader har ofte ikke tilstrækkelig plads til fuldstændigt at adskille alle bevægelsesformer. Når tætheden øges, bliver fælles brug mere udbredt.",
            "Forskellen mellem konflikt og komfort ligger i systemdesign: afstemte hastigheder, tydelige prioriteringssignaler, læsbare krydsninger og gader, der reducerer friktion uden konstant kontrol."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Offentlig rumorkestrering, der muliggør sameksistens af blandet mobilitet",
        },
    },

    whyItMatters: {
        headline: "Hvorfor Dette Globale Mønster Er Vigtigt",
        paragraphs: [
            "Blandet mobilitet afspejler, hvordan byer tilpasser sig begrænset plads og forskellige bevægelsesbehov. Gennemtænkt sameksistens understøtter sikkerhed, ro og funktionel effektivitet."
        ],
        points: [
            {
                title: "Sameksistens Understøtter Kapacitet",
                description:
                    "Når gader rummer flere transportformer, kan bevægelse fordeles mere jævnt i stedet for at koncentreres i ét system.",
            },
            {
                title: "Balanceret Brug Øger Komfort",
                description:
                    "Når ingen enkelt transportform dominerer gaden, føler mennesker sig typisk tryggere, og byrummet bliver mere anvendeligt.",
            },
            {
                title: "Delte Gader Afspejler Fælles Brug",
                description:
                    "Blandet mobilitet er ikke kun et transportforhold, men også et udtryk for, hvordan plads anvendes i fællesskab.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Sameksistens af Blandet Mobilitet",
            paragraphs: [
                "Gaden observeres i stigende grad som et delt miljø, hvor gang, løbehjul, cykler, robotter og elektriske køretøjer fungerer sammen."
            ],
            image: {
                url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                alt: "Sameksistens af blandet mobilitet i et moderne thailandsk gadebillede",
            },
            landingUrl: "/smart-city/mobility-focus-mixed-mobility",
        },
        {
            headline: "Tæthed og Komfort",
            paragraphs: [
                "Sameksistens spiller en rolle i at opretholde komfort i tætte bymiljøer. Uden delt design kan tæthed føre til friktion."
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Behagelig tæthed understøttet af design og delt mobilitet",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};