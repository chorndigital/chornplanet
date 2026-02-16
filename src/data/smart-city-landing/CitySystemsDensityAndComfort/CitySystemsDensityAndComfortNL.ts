import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsDensityAndComfortNL: ISmartCityLanding = {
    heroObservation: {
        headline: "Dichtheid en Comfort",
        paragraphs: [
            "Dichtheid is op zichzelf niet per definitie een probleem. Ongemak ontstaat wanneer systemen slecht zijn ontworpen.",
            "Steden worden leefbaarder wanneer dichtheid wordt uitgebalanceerd met ruimte, groen en voorspelbare bewegingspatronen.",
            "Een slimme stad probeert drukte niet te elimineren, maar creëert voorwaarden waarin gedeelde ruimte comfortabel en overzichtelijk blijft."
        ],
        image: {
            url: "/smart-city/city-systems/density-and-comfort.png",
            alt: "Comfortabele Thaise stedelijke dichtheid met groen, schaduwrijke trottoirs en een rustig straatritme",
        },
        cta: {
            label: "Ontdek Efficiëntie en Ritme",
            href: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    },

    systemExplanation: {
        headline: "Hoe Comfort in Dichtheid Wordt Ontworpen",
        paragraphs: [
            "Comfort is geen decoratieve laag, maar het resultaat van gecoördineerde systemen.",
            "Elementen zoals schaduw, beloopbare randen, verlichting, groen en het ritme van de openbare ruimte bepalen of dichtheid als stressvol of ondersteunend wordt ervaren. Wanneer deze systemen samenhangend functioneren, kunnen dichte omgevingen rustig en functioneel blijven."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Stedelijke ontwerpsystemen die comfort ondersteunen via groen en beloopbare ruimte",
        },
    },

    whyItMatters: {
        headline: "Waarom Dichtheid en Comfort Belangrijk Zijn",
        paragraphs: [
            "Steden die comfort behouden bij hogere dichtheidsniveaus ondersteunen doorgaans duurzaamheid, veiligheid en sociale interactie effectiever."
        ],
        points: [
            {
                title: "Comfort Vermindert Spanning",
                description:
                    "Wanneer dichte omgevingen ordelijk en rustig aanvoelen, zijn mensen eerder geneigd om ruimte op een coöperatieve manier te delen.",
            },
            {
                title: "Leefbaarheid Vermindert Uitbreidingsdruk",
                description:
                    "Steden die dichtheid comfortabel kunnen accommoderen, kunnen de noodzaak tot uitbreiding naar buiten beperken.",
            },
            {
                title: "Groen Functioneert als Infrastructuur",
                description:
                    "Schaduw, bomen en verzachte randen zijn functionele componenten die temperatuurregeling, bewegingspatronen en de algehele ervaring beïnvloeden.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Orkestratie van Openbare Ruimte",
            paragraphs: [
                "Comfort wordt beïnvloed door de manier waarop trottoirs, verlichting en straatactiviteit in de tijd worden afgestemd."
            ],
            image: {
                url: "/smart-city/system-explainers/public-space-orchestration.png",
                alt: "Orkestratie van openbare ruimte ter ondersteuning van comfort en sociaal ritme",
            },
            landingUrl: "/smart-city/system-explainers-public-space-orchestration",
        },
        {
            headline: "Gemengde Mobiliteit Wordt de Wereldwijde Norm",
            paragraphs: [
                "Dichte straten vereisen co-existentie. Gemengde mobiliteit weerspiegelt een zich ontwikkelende mondiale realiteit in plaats van een optionele ontwerpkeuze."
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Gemengde mobiliteit die dichtheid ondersteunt door co-existentie",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    ],
};