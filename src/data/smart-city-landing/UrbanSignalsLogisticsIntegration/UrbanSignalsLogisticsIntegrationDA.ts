import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsLogisticsIntegrationDA: ISmartCityLanding = {
    heroObservation: {
        headline: "Logistik der Glider Ind i Hverdagen",
        paragraphs: [
            "Logistik er et grundlæggende bysystem, og velfungerende logistik bliver ofte næsten ikke bemærket.",
            "Når leveringsrobotter, kurérer og små elektriske køretøjer kan operere uden at dominere opmærksomheden, tyder det på, at logistik er integreret frem for pålagt.",
            "En smart by defineres ikke af, hvor synlige leveringssystemerne er. Den defineres af, om logistik kan indgå i den daglige rytme uden at forstyrre livet på gaden."
        ],
        image: {
            url: "/smart-city/urban-signals/urban-logistics.png",
            alt: "Thailandsk bygade hvor leveringsrobotter og små el-logistikløsninger glider ind i hverdagen",
        },
        cta: {
            label: "Udforsk Brug af Offentlige Rum",
            href: "/smart-city/urban-signals-public-space-use",
        },
    },

    systemExplanation: {
        headline: "Hvad Integreret Logistik Signalerer",
        paragraphs: [
            "Integreret logistik betyder, at varer kan bevæge sig kontinuerligt uden at forstyrre menneskelig komfort.",
            "Det afhænger af timing, ruteplanlægning og koordinering. Gaden bør forblive læsbar for fodgængere, mens logistiksystemer opererer stille i kanterne."
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "Bylogistiksystem der opererer stille i baggrunden af daglig bevægelse",
        },
    },

    whyItMatters: {
        headline: "Hvorfor Dette Signal Er Vigtigt",
        paragraphs: [
            "Integration af logistik er et signal på systemmodenhed. Det indikerer, at en by kan imødekomme daglig efterspørgsel uden at gøre gader til infrastrukturelle zoner."
        ],
        points: [
            {
                title: "Effektivitet Uden Støj",
                description:
                    "Velfungerende logistik reducerer friktion og bevarer samtidig rolige offentlige rum.",
            },
            {
                title: "Gaden Forbliver Menneskelig",
                description:
                    "Når logistik glider ind, kan fodgængere og socialt liv fortsat være gadebilledets primære identitet.",
            },
            {
                title: "Timing Understøtter Forebyggende Design",
                description:
                    "Koordineret leveringsrytme kan reducere spidsbelastninger i trængsel, før de opstår.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Logistik Omformer Stille og Roligt Byens Rytme",
            paragraphs: [
                "På tværs af byer verden over bevæger logistik sig mod mindre og mere stille systemer, der påvirker den daglige bevægelse."
            ],
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "Globalt mønster hvor bylogistik omformer daglig rytme",
            },
            landingUrl: "/smart-city/global-patterns-urban-logistics",
        },
        {
            headline: "Effektivitet og Menneskelig Rytme",
            paragraphs: [
                "Integration af logistik fungerer bedst, når byens systemer er afstemt efter menneskelig rytme frem for at prioritere hastighed."
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "Effektivitet afstemt efter menneskelig rytme i et moderne bysystem",
            },
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    ],
};