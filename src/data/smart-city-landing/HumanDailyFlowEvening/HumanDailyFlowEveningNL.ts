import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowEveningNL: ISmartCityLanding = {
    heroObservation: {
        headline: "Avondstroom — Vertragen en Herstel",
        paragraphs: [
            "De avond draait niet om snelheid. Het draait om herstel.",
            "De kwaliteit van een stad wordt zichtbaar wanneer mensen vertragen: naar huis lopen, vrienden ontmoeten, lokaal winkelen of simpelweg pauzeren in de openbare ruimte.",
            "Een slimme stad blijkt uit de vraag of straten na zonsondergang veilig genoeg aanvoelen zodat mensen kunnen ontspannen en aanwezig blijven."
        ],
        image: {
            url: "/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
            alt: "Vroege avond in een Thaise stadsstraat met warme verlichting, voetgangers, rustige scooters en een veilige sfeer voor sociaal leven",
        },
        cta: {
            label: "Terug naar het Smart City-overzicht",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
    },

    systemExplanation: {
        headline: "Avondsystemen die Comfort Beschermen",
        paragraphs: [
            "De avond laat zien of de stad comfort ondersteunt, of dat mensen het gevoel hebben dat ze naar binnen moeten terugtrekken.",
            "Verlichting, beloopbaarheid, straatactiviteit en voorspelbare mobiliteit zorgen ervoor dat het openbare leven kan doorgaan met minder onzekerheid. Wanneer deze systemen samenwerken, blijft de stad ook na de daguren bruikbaar en uitnodigend."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Orkestratie van openbare ruimte met verlichting en beloopbaarheid ter ondersteuning van het avondleven",
        },
    },

    whyItMatters: {
        headline: "Waarom Avondstroom Belangrijk Is",
        paragraphs: [
            "Een stad die herstel in de avond ondersteunt, versterkt langdurige sociale verbondenheid en ervaren veiligheid, zonder zware controle te vereisen."
        ],
        points: [
            {
                title: "Comfort Is een Systeemresultaat",
                description:
                    "Avondcomfort is geen decoratie. Het is het resultaat van veiligheid, verlichting en voorspelbare beweging.",
            },
            {
                title: "Openbare Ruimte Wordt Sociale Infrastructuur",
                description:
                    "Wanneer mensen na zonsondergang buiten blijven, ondersteunt de openbare ruimte sterkere gemeenschapsinteractie en dagelijkse toegankelijkheid.",
            },
            {
                title: "Veiligheid Zonder Handhaving",
                description:
                    "De meest effectieve straten voelen veilig aan omdat ze zijn ontworpen om risico te verminderen, niet om gedrag te bestraffen.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Openbare Ruimte Gebruikt Zoals Bedoeld",
            paragraphs: [
                "De avond laat zien of mensen zich veilig genoeg voelen om te blijven hangen. Dat blijven hangen is een duidelijk signaal van comfort."
            ],
            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "Thaise bewoners die comfortabel zitten en lopen in een goed verlichte openbare ruimte",
            },
            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
        {
            headline: "Dichtheid en Comfort",
            paragraphs: [
                "Avondcomfort laat zien of dichtheid leefbaar aanvoelt of uitputtend wordt."
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Stedelijke dichtheid verzacht door groen en rustige avondactiviteit",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};