import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsPublicSpaceUseNL: ISmartCityLanding = {
    heroObservation: {
        headline: "Openbare Ruimte Gebruikt Zoals Bedoeld",
        paragraphs: [
            "Openbare ruimte laat de kwaliteit van een stad zien via dagelijks gebruik.",
            "Wanneer mensen natuurlijk zitten, pauzeren, praten en blijven hangen, wijst dit erop dat de stad een balans heeft gevonden tussen beweging en comfort, efficiëntie en sociaal leven.",
            "Een van de duidelijkste tekenen van een goed functionerende stad is niet snelheid, maar of mensen zich comfortabel genoeg voelen om te blijven."
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "Thaise bewoners die comfortabel zitten en lopen in een goed ontworpen openbare ruimte",
        },
        cta: {
            label: "Terug naar Voorspelbare Straten",
            href: "/smart-city/urban-signals-predictable-street",
        },
    },

    systemExplanation: {
        headline: "Wat Gebruik van Openbare Ruimte Signaleert",
        paragraphs: [
            "Mensen blijven niet hangen op oncomfortabele plekken. Ze blijven alleen waar de stad veiligheid, schaduw, verlichting, loopbaarheid en een rustig straatritme biedt.",
            "Openbare ruimte is geen decoratieve laag. Het is een systeemuitkomst. Wanneer zij goed functioneert, wordt de stad sociaal levendig zonder te worden geregisseerd of geprogrammeerd."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Orkestratie van openbare ruimte via verlichting, trottoirs en loopbaarheid",
        },
    },

    whyItMatters: {
        headline: "Waarom Dit Signaal Belangrijk Is",
        paragraphs: [
            "Wanneer openbare ruimte op natuurlijke wijze wordt gebruikt, suggereert dit dat de stad langdurige sociale gezondheid, veiligheid en dagelijks comfort ondersteunt."
        ],
        points: [
            {
                title: "Comfort Is Bewijs",
                description:
                    "Dagelijks gebruik van openbare ruimte laat zien dat systemen werken voorbij beleidsverklaringen.",
            },
            {
                title: "Sociaal Leven Is Infrastructuur",
                description:
                    "Informele samenkomst versterkt verbondenheid en veerkracht binnen de stad.",
            },
            {
                title: "Veiligheid Wordt Ervaren",
                description:
                    "Goed functionerende straten voelen veilig aan zonder te leunen op zichtbare controle of handhaving.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Beweging en Pauze",
            paragraphs: [
                "Openbare ruimte wordt pas bruikbaar wanneer beweging stilstand toelaat. Pauze is een kernsysteem-signaal."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Balans tussen beweging en pauze in een mensgericht straatsysteem",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
        {
            headline: "Dichtheid en Comfort",
            paragraphs: [
                "Wanneer dichtheid comfortabel blijft, blijven mensen langer buiten. Comfort is de onderliggende strategie voor leefbare dichtheid."
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Stedelijke dichtheid verzacht door groen en comfort in gedeelde ruimte",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};