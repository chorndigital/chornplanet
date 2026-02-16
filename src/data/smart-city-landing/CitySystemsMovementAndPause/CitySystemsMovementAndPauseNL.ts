import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsMovementAndPauseNL: ISmartCityLanding = {
    heroObservation: {
        headline: "Beweging en Pauze",
        paragraphs: [
            "Een stad wordt niet gedefinieerd door hoe snel zij beweegt, maar door de mate waarin mensen kunnen stoppen zonder risico of druk.",
            "Gezonde straten zijn niet ontworpen als snelwegen. Het zijn gedeelde omgevingen waar beweging op natuurlijke wijze kan vertragen en pauzeren veilig blijft.",
            "Wanneer een stad een balans vindt tussen doorstroming en stilstand, kan het dagelijks leven rustiger, socialer en meer mensgericht worden."
        ],
        image: {
            url: "/smart-city/city-systems/movement-and-pause.png",
            alt: "Thaise stadsstraat waar voetgangerspauzes samengaan met een rustige verkeersstroom",
        },
        cta: {
            label: "Ontdek Dichtheid en Comfort",
            href: "/smart-city/city-systems-density-and-comfort",
        },
    },

    systemExplanation: {
        headline: "Wat Zorgt voor Balans op Straat",
        paragraphs: [
            "Beweging en pauze zijn geen tegenpolen. Het zijn complementaire functies binnen hetzelfde straatsysteem.",
            "Oversteken, stoeprandontwerp, het ritme van trottoirs en verkeersgedrag bepalen of mensen zich veilig voelen om te vertragen, te observeren en te interageren. Wanneer de straat leesbaar en voorspelbaar is, kan sociaal leven ontstaan zonder sterke afhankelijkheid van handhaving."
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "Ontwerp van openbare ruimte dat veilig pauzeren en gedeeld stadsleven mogelijk maakt",
        },
    },

    whyItMatters: {
        headline: "Waarom Beweging en Pauze Belangrijk Zijn",
        paragraphs: [
            "Wanneer mensen op een natuurlijke manier kunnen pauzeren, worden straten doorgaans veiliger, comfortabeler en sociaal actiever."
        ],
        points: [
            {
                title: "Pauze Kan Veiligheid Aangeven",
                description:
                    "Als mensen zich veilig genoeg voelen om te stoppen, functioneert de straat waarschijnlijk al als een preventieve omgeving.",
            },
            {
                title: "Doorstroming Zonder Druk",
                description:
                    "Voorspelbare beweging vermindert conflicten en maakt vertragen normaal in plaats van riskant.",
            },
            {
                title: "Sociaal Leven Heeft Stilstand Nodig",
                description:
                    "Een stad wordt menselijker wanneer straten wachten, observeren, ontmoeten en rusten ondersteunen.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Openbare Ruimte Gebruikt Zoals Bedoeld",
            paragraphs: [
                "Wanneer mensen comfortabel blijven hangen, suggereert dit dat de stad een werkbare balans heeft bereikt tussen beweging en comfort."
            ],
            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "Bewoners die openbare ruimte op een natuurlijke en comfortabele manier gebruiken",
            },
            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
        {
            headline: "Voorspelbaar Straatgedrag",
            paragraphs: [
                "Voorspelbaarheid maakt veilig pauzeren mogelijk. Zonder dit kan elke stop een risico worden."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Voorspelbaar gedrag op gedeelde straten ter ondersteuning van veilige voetgangersbeweging",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
    ],
};