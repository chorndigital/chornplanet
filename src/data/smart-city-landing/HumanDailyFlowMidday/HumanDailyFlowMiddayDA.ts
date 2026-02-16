import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowMiddayDA: ISmartCityLanding = {
    heroObservation: {
        headline: "Middagsflow — Tæthed og Koordination",
        paragraphs: [
            "Midt på dagen bliver en bys kompleksitet mest synlig.",
            "Mennesker, varer, leveringer, servicefunktioner og mobilitet overlapper på samme tid. Gaden bliver tæt, men hverdagen skal stadig føles rolig.",
            "En smart by defineres ikke af at fjerne tæthed. Den afspejles i, om tæthed føles koordineret."
        ],
        image: {
            url: "/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
            alt: "Travl thailandsk bygade midt på dagen med fodgængere, scootere, cyklister, leveringsrobotter og en autonom elektrisk shuttle, der bevæger sig sammen",
        },
        cta: {
            label: "Se Aftenflow",
            href: "/smart-city/human-daily-flow-evening",
        },
    },

    systemExplanation: {
        headline: "De Middagssystemer Folk Ikke Ser",
        paragraphs: [
            "Ved maksimal tæthed koordinerer byen flere lag: timing af logistik, trafiksignaler, fodgængerbevægelser, leveringsruter og deling af offentligt rum.",
            "Når disse systemer fungerer godt, kræver de minimal opmærksomhed. Mennesker oplever blot bevægelse som mere forudsigelig og mindre anspændt."
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "Bylogistik, der fungerer stille side om side med hverdagslivet",
        },
    },

    whyItMatters: {
        headline: "Hvorfor Middagsflow Er Vigtigt",
        paragraphs: [
            "Midt på dagen viser, om en by kan understøtte hverdagslivet i stor skala uden at blive stressende eller kaotisk."
        ],
        points: [
            {
                title: "Tæthed Tester Systemintelligens",
                description:
                    "Midt på dagen er koordination vigtigst: når mange aktiviteter overlapper, skal systemer forblive stille og pålidelige.",
            },
            {
                title: "Logistik Skal Integreres Diskret",
                description:
                    "Leveringer bør ikke dominere gaden. De bør indgå i hverdagen uden at forstyrre komforten.",
            },
            {
                title: "Sameksistens Er den Nye Standard",
                description:
                    "Scootere, fodgængere, cykler, robotter og køretøjer skal kunne sameksistere naturligt i stedet for at konkurrere om dominans.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Logistik, der Indgår i Hverdagslivet",
            paragraphs: [
                "Når leveringer fungerer uden at dominere opmærksomheden, kan byen føles rolig selv ved maksimal intensitet."
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Leveringsrobotter og små el-køretøjer, der indgår naturligt i et thailandsk gademiljø",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
        {
            headline: "Blandet Mobilitet Bliver Standard",
            paragraphs: [
                "Midt på dagen afslører, om blandet mobilitet er understøttet med vilje eller overlades til tilfældigheder. Forskellen er komfort."
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Flere mobilitetsformer, der sameksisterer på en moderne bygade",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    ],
};