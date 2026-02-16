import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowMiddayNL: ISmartCityLanding = {
    heroObservation: {
        headline: "Middagstroom — Dichtheid en Coördinatie",
        paragraphs: [
            "Rond het middaguur wordt de complexiteit van een stad het duidelijkst zichtbaar.",
            "Mensen, goederen, leveringen, diensten en mobiliteit overlappen in dezelfde tijdsperiode. De straat wordt druk, maar het dagelijks leven moet kalm blijven aanvoelen.",
            "Een slimme stad wordt niet gedefinieerd door het wegnemen van dichtheid. Zij komt tot uiting in de mate waarin dichtheid gecoördineerd aanvoelt."
        ],
        image: {
            url: "/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
            alt: "Drukke Thaise stadsstraat rond het middaguur met voetgangers, scooters, fietsers, bezorgrobots en een autonome elektrische shuttle die samen bewegen",
        },
        cta: {
            label: "Bekijk Avondstroom",
            href: "/smart-city/human-daily-flow-evening",
        },
    },

    systemExplanation: {
        headline: "De Middagsystemen die Mensen Niet Zien",
        paragraphs: [
            "Bij piekdichtheid coördineert een stad meerdere lagen: logistieke timing, verkeerssignalen, voetgangersstromen, bezorgroutes en het gedeeld gebruik van de openbare ruimte.",
            "Wanneer deze systemen goed functioneren, vragen zij weinig aandacht. Mensen ervaren beweging simpelweg als voorspelbaarder en minder gespannen."
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "Stedelijke logistiek die rustig naast het dagelijks leven opereert",
        },
    },

    whyItMatters: {
        headline: "Waarom Middagstroom Belangrijk Is",
        paragraphs: [
            "Het middaguur laat zien of een stad het dagelijks leven op grotere schaal kan ondersteunen zonder stressvol of chaotisch te worden."
        ],
        points: [
            {
                title: "Dichtheid Test Systeemintelligentie",
                description:
                    "Rond het middaguur is coördinatie het belangrijkst: wanneer veel activiteiten samenkomen, moeten systemen stil en betrouwbaar blijven.",
            },
            {
                title: "Logistiek Moet Onopvallend Geïntegreerd Zijn",
                description:
                    "Leveringen mogen de straat niet domineren. Ze moeten opgaan in het dagelijks leven zonder het comfort te verstoren.",
            },
            {
                title: "Samenleven Is de Nieuwe Standaard",
                description:
                    "Scooters, voetgangers, fietsen, robots en voertuigen moeten op natuurlijke wijze samen kunnen bestaan in plaats van te concurreren om dominantie.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Logistiek die Opgaat in het Dagelijks Leven",
            paragraphs: [
                "Wanneer leveringen functioneren zonder de aandacht te domineren, kan de stad zelfs bij piekintensiteit kalm aanvoelen."
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Bezorgrobots en kleine elektrische logistieke voertuigen die opgaan in een Thaise straatomgeving",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
        {
            headline: "Gemengde Mobiliteit Wordt de Norm",
            paragraphs: [
                "Het middaguur laat zien of gemengde mobiliteit bewust wordt ondersteund of aan toeval wordt overgelaten. Het verschil is comfort."
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Meerdere vormen van mobiliteit die samenkomen op een moderne stadsstraat",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    ],
};