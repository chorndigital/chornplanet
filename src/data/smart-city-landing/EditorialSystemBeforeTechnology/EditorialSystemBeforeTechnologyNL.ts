import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialSystemBeforeTechnologyNL: ISmartCityLanding = {
    heroObservation: {
        headline: "Systeem vóór Technologie",
        paragraphs: [
            "Technologie alleen creëert geen slimme stad.",
            "Steden worden intelligenter wanneer systemen het dagelijks gedrag op een rustige manier vormgeven: veiligere oversteekplaatsen, voorspelbare doorstroming, soepelere logistiek en openbare ruimte die betrouwbaar functioneert.",
            "Technologie is het meest betekenisvol wanneer het het menselijk leven op meetbare wijze verbetert. Zonder die verbinding blijft de waarde beperkt."
        ],
        image: {
            url: "/smart-city/editorial/system-before-technology.png",
            alt: "Stedelijke infrastructuur die stil op de achtergrond van het Thaise dagelijks leven functioneert",
        },
        cta: {
            label: "Ontdek Lokaal als Wereldwijd Prototype",
            href: "/smart-city/editorial-local-as-global-prototype",
        },
    },

    systemExplanation: {
        headline: "Wat een Systeemperspectief Onthult",
        paragraphs: [
            "Een systeemperspectief begint bij uitkomsten: comfort, veiligheid, ritme en toegang.",
            "Pas wanneer uitkomsten zichtbaar worden, bekijken we welke technologie ze ondersteunt. Dit helpt steden om innovatie te vermijden die geavanceerd lijkt, maar slechts beperkte impact heeft in het dagelijks leven."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Mobiliteitscoördinatiesysteem dat dagelijkse beweging ondersteunt zonder zichtbaar te zijn",
        },
    },

    whyItMatters: {
        headline: "Waarom Systeem vóór Technologie Belangrijk Is",
        paragraphs: [
            "Steden die beginnen met systemen bouwen vaker oplossingen die kunnen opschalen. Steden die beginnen met technologie leveren vaak geïsoleerde implementaties op."
        ],
        points: [
            {
                title: "Uitkomsten komen Eerst",
                description:
                    "Als comfort en veiligheid niet verbeteren, bereikt technologie haar beoogde doel niet.",
            },
            {
                title: "Onzichtbaar Succes is het Doel",
                description:
                    "Effectieve systemen integreren in het dagelijks leven. Mensen ervaren verbetering zonder zich op het hulpmiddel zelf te hoeven richten.",
            },
            {
                title: "Preventie Ondersteunt Langetermijnstabiliteit",
                description:
                    "Een systeembenadering vermindert risico’s vroeg, in plaats van problemen pas aan te pakken nadat schade is ontstaan.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Mobiliteitscoördinatie",
            paragraphs: [
                "Systemen coördineren tijd, doorstroming en gedrag. Technologie is slechts één onderdeel van de coördinatielaag."
            ],
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "Mobiliteitscoördinatie die voorspelbare beweging ondersteunt",
            },
            landingUrl: "/smart-city/system-explainers-mobility-coordination",
        },
        {
            headline: "Efficiëntie en Menselijk Ritme",
            paragraphs: [
                "Efficiëntie wordt betekenisvol wanneer het het menselijk tempo ondersteunt in plaats van het te overheersen."
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "Stedelijke systemen afgestemd op menselijk ritme en comfort",
            },
            landingUrl: "/smart-city/city-systems/efficiency-and-rhythm",
        },
    ],
};