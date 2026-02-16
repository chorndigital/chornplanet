import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const GlobalPatternsUrbanLogisticsDA: ISmartCityLanding = {
    heroObservation: {
        headline: "Logistik Omskaber Stille Byens Rytme",
        paragraphs: [
            "Varer bevæger sig konstant gennem byer — ofte uden at tiltrække opmærksomhed.",
            "På tværs af mange regioner skifter logistik fra stor, synlig infrastruktur til mindre og mere stille systemer, såsom mikro-elbiler, leveringsrobotter, droner og tidsstyret distribution.",
            "I byer hvor logistik integreres smidigt, føles hverdagen ofte mere komfortabel, selv når bevægelsen øges."
        ],
        image: {
            url: "/smart-city/global-patterns/urban-logistics.png",
            alt: "Urban logistik der fungerer stille gennem en moderne bygade",
        },
        cta: {
            label: "Tilbage til Forudsigelige Gader",
            href: "/smart-city/global-patterns-predictable-shared-street",
        },
    },

    systemExplanation: {
        headline: "Hvordan Logistik Påvirker Byen",
        paragraphs: [
            "Logistik påvirker byen primært gennem rytme frem for hastighed.",
            "Når leveringer tidsstyres, fordeles og koordineres, føles gader typisk mindre overbelastede, og den daglige bevægelse bliver mere flydende. Velintegrerede logistiksystemer reducerer friktion uden at blive byens visuelle fokus."
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "Småskala logistik integreret i daglig urban bevægelse",
        },
    },

    whyItMatters: {
        headline: "Hvorfor Dette Globale Mønster Er Vigtigt",
        paragraphs: [
            "Logistik bliver i stigende grad en del af hverdagens bagvedliggende infrastruktur. Byer der integrerer den omhyggeligt kan bevare ro, selv når aktivitetsniveauet stiger."
        ],
        points: [
            {
                title: "Levering Er en Konstant Tilstedeværelse i Gaden",
                description:
                    "Varer bevæger sig hele dagen. Det afgørende spørgsmål er, om leveringsaktivitet forstyrrer gaden eller falder naturligt ind i den.",
            },
            {
                title: "Stille Integration Understøtter Komfort",
                description:
                    "Operationel effektivitet bør ikke skabe unødig støj, rod eller konflikt i det offentlige rum.",
            },
            {
                title: "Rytme Understøtter Urban Stabilitet",
                description:
                    "Når logistik koordineres i tid og rum, føles byen ofte mere forudsigelig og lettere at navigere i.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Logistik der Falder Ind i Hverdagen",
            paragraphs: [
                "Når leveringsrobotter og småskala logistik fungerer uden at dominere opmærksomheden, forbliver hverdagens bybilleder rolige og lette at aflæse."
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Logistik integreret i thailandsk gadeliv til hverdag",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
        {
            headline: "Effektivitet og Menneskelig Rytme",
            paragraphs: [
                "Urban effektivitet bliver meningsfuld, når systemtiming er afstemt med menneskers rutiner i stedet for at overstyre dem."
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "Byinfrastruktur tilpasset menneskelig rytme og forudsigelig timing",
            },
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    ],
};