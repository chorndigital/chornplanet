import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const MobilityMixedMobilityDA: ISmartCityLanding = {
    heroObservation: {
        headline: "Sameksistens af Blandet Mobilitet",
        paragraphs: [
            "Moderne gader er ikke længere bygget omkring én transportform.",
            "Scootere, cykler, fodgængere, leveringsrobotter og autonome køretøjer bliver i stigende grad en del af hverdagen på gaden.",
            "En smart by defineres ikke af at adskille alt. Den defineres af at få sameksistens til at føles naturlig og sikker."
        ],
        image: {
            url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
            alt: "Thailandsk gade hvor fodgængere, scootere, cyklister og en autonom shuttle sameksisterer naturligt",
        },
        cta: {
            label: "Tilbage til Mobilitetsfokus",
            href: "/smart-city/mobility-focus-mixed-mobility",
        },
    },

    systemExplanation: {
        headline: "Hvad Får Sameksistens til at Fungere",
        paragraphs: [
            "Blandet mobilitet fungerer, når ingen enkelt transportform dominerer opmærksomheden. Gader bliver læsbare gennem ensartet design: hastighedsharmoni, tydelige prioritetssignaler og plads, der kan tilpasse sig over tid.",
            "Når det er designet godt, føles sameksistens ubesværet — mennesker holder op med at tænke på systemer og bevæger sig bare."
        ],
        image: {
            url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
            alt: "Flere mobilitetsformer der sameksisterer roligt på en moderne gade",
        },
    },

    whyItMatters: {
        headline: "Hvorfor Blandet Mobilitet Er Vigtigt",
        paragraphs: [
            "Byer, der understøtter blandet mobilitet, kan reducere pres fra trængsel og skabe mere beboelige offentlige rum."
        ],
        points: [
            {
                title: "Mobilitetsdiversitet Skaber Robusthed",
                description:
                    "Når én transportform sænker farten, kan andre fastholde byens rytme. Sameksistens skaber redundans.",
            },
            {
                title: "Mindre Dominans, Mere Komfort",
                description:
                    "Gader kan føles roligere, når ingen enkelt køretøjstype kontrollerer rummet.",
            },
            {
                title: "Skiftet Er Allerede Synligt",
                description:
                    "Blandet mobilitet afspejles i stigende grad i daglig gadeadfærd på tværs af byer verden over.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Blandet Mobilitet Bliver den Globale Standard",
            paragraphs: [
                "På tværs af kulturer bevæger gader sig mod fælles sameksistensmønstre frem for streng adskillelse."
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Globalt mønster for blandet mobilitet, der opstår på tværs af byer",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
        {
            headline: "Logistik der Integreres i Hverdagen",
            paragraphs: [
                "Sameksistens omfatter også leveringssystemer. Velfungerende byer understøtter logistik uden at forstyrre det offentlige rum."
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Leveringsrobotter og små el-logistiksystemer, der indgår i det daglige byliv",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
    ],
};