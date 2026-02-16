import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const MobilityMixedMobilityNL: ISmartCityLanding = {
    heroObservation: {
        headline: "Samenleven van Gemengde Mobiliteit",
        paragraphs: [
            "Moderne straten worden niet langer ontworpen rondom één vervoerswijze.",
            "Scooters, fietsen, voetgangers, bezorgrobots en autonome voertuigen worden steeds vaker onderdeel van het dagelijkse straatbeeld.",
            "Een slimme stad wordt niet gedefinieerd door alles van elkaar te scheiden. Ze wordt gedefinieerd door het creëren van een vorm van samenleven die natuurlijk en veilig aanvoelt."
        ],
        image: {
            url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
            alt: "Thaise straat waar voetgangers, scooters, fietsers en een autonome shuttle op natuurlijke wijze samen bewegen",
        },
        cta: {
            label: "Terug naar Mobiliteitsfocus",
            href: "/smart-city/mobility-focus-mixed-mobility",
        },
    },

    systemExplanation: {
        headline: "Wat Samenleven Laat Werken",
        paragraphs: [
            "Gemengde mobiliteit werkt wanneer geen enkele vervoerswijze de aandacht domineert. Straten worden leesbaar door consistent ontwerp: snelheidsafstemming, duidelijke prioriteitssignalen en ruimte die zich in de tijd kan aanpassen.",
            "Wanneer het goed is ontworpen, voelt samenleven moeiteloos — mensen stoppen met nadenken over systemen en bewegen gewoon."
        ],
        image: {
            url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
            alt: "Meerdere vormen van mobiliteit die rustig samen bestaan op een moderne straat",
        },
    },

    whyItMatters: {
        headline: "Waarom Gemengde Mobiliteit Belangrijk Is",
        paragraphs: [
            "Steden die gemengde mobiliteit ondersteunen kunnen de druk van congestie verminderen en leefbaardere openbare ruimte creëren."
        ],
        points: [
            {
                title: "Diversiteit in Mobiliteit Is Veerkracht",
                description:
                    "Wanneer één vervoerswijze vertraagt, kunnen andere het ritme van de stad behouden. Samenleven creëert redundantie.",
            },
            {
                title: "Minder Dominantie, Meer Comfort",
                description:
                    "Straten kunnen rustiger aanvoelen wanneer geen enkel voertuigtype de ruimte controleert.",
            },
            {
                title: "Deze Verschuiving Is Al Zichtbaar",
                description:
                    "Gemengde mobiliteit wordt steeds vaker zichtbaar in het dagelijkse straatgedrag in steden wereldwijd.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Gemengde Mobiliteit Wordt de Wereldwijde Norm",
            paragraphs: [
                "Over culturen heen bewegen straten zich richting gedeelde samenlevingspatronen in plaats van strikte segregatie."
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Wereldwijd patroon van gemengde mobiliteit dat in verschillende steden zichtbaar wordt",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
        {
            headline: "Logistiek die Opgaat in het Dagelijks Leven",
            paragraphs: [
                "Samenleven omvat ook bezorgsystemen. Goed geïntegreerde steden ondersteunen logistiek zonder de openbare ruimte te verstoren."
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Bezorgrobots en kleine elektrische logistieke voertuigen die opgaan in het dagelijks stadsleven",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
    ],
};