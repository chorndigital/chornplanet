import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsLogisticsIntegrationNL: ISmartCityLanding = {
    heroObservation: {
        headline: "Logistiek die Opgaat in het Dagelijks Leven",
        paragraphs: [
            "Logistiek is een fundamenteel stedelijk systeem, en goed geïntegreerde logistiek valt vaak nauwelijks op.",
            "Wanneer bezorgrobots, koeriers en kleine elektrische voertuigen kunnen opereren zonder de aandacht te domineren, wijst dat erop dat logistiek is geïntegreerd in plaats van opgelegd.",
            "Een slimme stad wordt niet gedefinieerd door hoe zichtbaar haar bezorgsystemen zijn. Ze wordt gedefinieerd door of logistiek past in het dagelijkse ritme zonder het straatleven te verstoren."
        ],
        image: {
            url: "/smart-city/urban-signals/urban-logistics.png",
            alt: "Thaise stadsstraat waar bezorgrobots en kleine elektrische logistiek opgaan in het dagelijks leven",
        },
        cta: {
            label: "Ontdek Gebruik van Openbare Ruimte",
            href: "/smart-city/urban-signals-public-space-use",
        },
    },

    systemExplanation: {
        headline: "Wat Logistieke Integratie Laat Zien",
        paragraphs: [
            "Geïntegreerde logistiek betekent dat goederen continu kunnen bewegen zonder het comfort van mensen te verstoren.",
            "Dit vraagt om timing, routering en coördinatie. De straat moet leesbaar blijven voor voetgangers terwijl logistieke systemen rustig aan de randen opereren."
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "Stedelijk logistiek systeem dat rustig op de achtergrond opereert tijdens dagelijkse beweging",
        },
    },

    whyItMatters: {
        headline: "Waarom Dit Signaal Belangrijk Is",
        paragraphs: [
            "Logistieke integratie is een signaal van systeemvolwassenheid. Het geeft aan dat een stad aan de dagelijkse vraag kan voldoen zonder straten te veranderen in infrastructuurzones."
        ],
        points: [
            {
                title: "Efficiëntie Zonder Overlast",
                description:
                    "Goed geïntegreerde logistiek vermindert frictie en behoudt tegelijkertijd rustige openbare ruimte.",
            },
            {
                title: "De Straat Blijft Menselijk",
                description:
                    "Wanneer logistiek opgaat in het straatbeeld, kunnen voetgangers en sociaal leven de primaire identiteit van de straat blijven.",
            },
            {
                title: "Timing Ondersteunt Preventief Ontwerp",
                description:
                    "Een gecoördineerd bezorgritme kan pieken in congestie verminderen voordat ze ontstaan.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Logistiek Verandert Stilletjes het Stedelijk Ritme",
            paragraphs: [
                "In steden wereldwijd verschuift logistiek naar kleinere en stillere systemen die dagelijkse beweging beïnvloeden."
            ],
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "Wereldwijd patroon van stedelijke logistiek dat het dagelijkse ritme verandert",
            },
            landingUrl: "/smart-city/global-patterns-urban-logistics",
        },
        {
            headline: "Efficiëntie en Menselijk Ritme",
            paragraphs: [
                "Logistieke integratie werkt het best wanneer stedelijke systemen aansluiten op menselijk ritme in plaats van snelheid te prioriteren."
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "Efficiëntie afgestemd op menselijk ritme in een modern stedelijk systeem",
            },
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    ],
};