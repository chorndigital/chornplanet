import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const MobilityPredictableMovementNL: ISmartCityLanding = {
    heroObservation: {
        headline: "Voorspelbare Beweging in Gedeelde Straten",
        paragraphs: [
            "Mobiliteit wordt niet primair ervaren als technologie. Het wordt ervaren als vertrouwen.",
            "Wanneer mensen zonder aarzeling kunnen oversteken, voertuigen vanzelf vertragen en fietsers zich met minimale conflicten kunnen verplaatsen, wordt de straat leesbaar.",
            "Voorspelbaarheid is geen controle. Het is een praktische basis voor dagelijkse veiligheid."
        ],
        image: {
            url: "/smart-city/mobility-focus/predictable-shared-street.png",
            alt: "Thaise voetgangers en fietsers bewegen rustig in een voorspelbare gedeelde straat met een autonome shuttle op de achtergrond",
        },
        cta: {
            label: "Ontdek Gemengde Mobiliteit",
            href: "/smart-city/mobility-focus-mixed-mobility",
        },
    },

    systemExplanation: {
        headline: "Wat Beweging Voorspelbaar Maakt",
        paragraphs: [
            "Voorspelbaarheid ontstaat door ontwerp dat onzekerheid vermindert: duidelijke oversteekplaatsen, consistente rijstrooklogica, leesbare signalen en straten die vertraging stimuleren zonder dit af te dwingen.",
            "Goed ontworpen straten voelen veilig aan, niet omdat mensen worden gemonitord, maar omdat beweging op natuurlijke wijze gesynchroniseerd raakt."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Stedelijke mobiliteitscoördinatie die voorspelbaar straatgedrag ondersteunt",
        },
    },

    whyItMatters: {
        headline: "Waarom Voorspelbaarheid Belangrijk Is",
        paragraphs: [
            "Een voorspelbare straat vermindert stress, verlaagt het risico op ongevallen en creëert voorwaarden voor spontaan stadsleven."
        ],
        points: [
            {
                title: "Veiligheid Zonder Handhaving",
                description:
                    "Wanneer beweging leesbaar aanvoelt, reguleren mensen zichzelf vanzelf. Straten kunnen rustig blijven zonder te steunen op strikte controle.",
            },
            {
                title: "Vertrouwen Is een Praktische Indicator",
                description:
                    "Een belangrijk signaal van mobiliteitsprestaties is of mensen zich zonder aarzeling kunnen verplaatsen.",
            },
            {
                title: "Gedeelde Straten Vragen om Gedeeld Vertrouwen",
                description:
                    "Voorspelbaarheid maakt het mogelijk dat voetgangers, scooters, fietsers en voertuigen samen kunnen bewegen zonder voortdurende onderhandeling.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Voorspelbaar Straatgedrag",
            paragraphs: [
                "Wanneer beweging kalm en consistent aanvoelt, geeft dit aan dat de straat vertrouwen ondersteunt in dagelijks gebruik."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Voorspelbaar gedrag op een gedeelde straat in een Thaise stedelijke omgeving",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "Beweging en Pauze",
            paragraphs: [
                "Een straat die veilige pauzes ondersteunt is vaak dezelfde straat die voorspelbare beweging mogelijk maakt."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Stedelijke straat die mobiliteitsstromen in balans brengt met veilige pauzes voor voetgangers",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};