import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsPredictableStreetNL: ISmartCityLanding = {
    heroObservation: {
        headline: "Voorspelbaar Straatgedrag",
        paragraphs: [
            "Steden communiceren via gedrag voordat zij communiceren via beleid.",
            "Wanneer voetgangers zonder aarzeling oversteken, scooters vanzelf vertragen en voertuigen zich met stille zekerheid voortbewegen, laat de straat iets belangrijks zien: mensen ervaren het systeem als betrouwbaar.",
            "Voorspelbaarheid is een van de duidelijkste stedelijke signalen, omdat zij zichtbaar is zonder meting."
        ],
        image: {
            url: "/smart-city/urban-signals/predictable-shared-street.png",
            alt: "Thaise voetgangers en fietsers bewegen soepel in een voorspelbare gedeelde straatomgeving",
        },
        cta: {
            label: "Ontdek Logistieke Integratie",
            href: "/smart-city/urban-signals-logistics-integration",
        },
    },

    systemExplanation: {
        headline: "Wat Voorspelbaarheid Signaleert",
        paragraphs: [
            "Voorspelbaar gedrag ontstaat niet toevallig. Het is het resultaat van straatontwerp dat onzekerheid vermindert: leesbare oversteekplaatsen, een consistent rijstrookritme, duidelijke visuele aanwijzingen en snelheidsharmonie.",
            "Wanneer deze systemen samen functioneren, hoeven mensen niet elke stap te onderhandelen. De stad voelt veilig zonder te leunen op zichtbare controle."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Mobiliteitscoördinatie die voorspelbaar straatgedrag ondersteunt",
        },
    },

    whyItMatters: {
        headline: "Waarom Dit Signaal Belangrijk Is",
        paragraphs: [
            "Voorspelbaarheid is een directe indicator van vertrouwen op straatniveau."
        ],
        points: [
            {
                title: "Vertrouwen Is Zichtbaar",
                description:
                    "Wanneer mensen zich met vertrouwen verplaatsen, suggereert dit dat zij verwachten dat de straat zich consistent gedraagt.",
            },
            {
                title: "Veiligheid Voelt Normaal",
                description:
                    "Een voorspelbare straat vermindert risico’s zonder dat veiligheid als handhaving aanvoelt.",
            },
            {
                title: "Comfort Maakt Stadsleven Mogelijk",
                description:
                    "Spontaan openbaar leven is alleen mogelijk wanneer bewegingsregels leesbaar en gedeeld zijn.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Voorspelbare Straten Maken Spontaan Leven Mogelijk",
            paragraphs: [
                "In steden over de hele wereld ondersteunen voorspelbare straten consequent rustiger beweging en alledaags sociaal leven."
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "Wereldwijd patroon van voorspelbare gedeelde straten",
            },
            landingUrl: "/smart-city/global-patterns-predictable-shared-street",
        },
        {
            headline: "Beweging en Pauze",
            paragraphs: [
                "Voorspelbaarheid maakt pauzeren mogelijk. Zonder haar kan stilstaan onveilig worden."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Straatsysteem dat balans brengt tussen beweging en pauze",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};