import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsEfficiencyAndRhythmDE: ISmartCityLanding = {
    heroObservation: {
        headline: "Effizienz und Menschlicher Rhythmus",
        paragraphs: [
            "Effizienz wird problematisch, wenn Systeme verlangen, dass Menschen sich schneller bewegen, als es der Alltag sinnvoll erlaubt.",
            "Städte funktionieren am besten, wenn Systeme auf den menschlichen Rhythmus abgestimmt sind: vorhersehbare Zeitabläufe, koordinierte Bewegung und unaufdringliche Logistik.",
            "Ziel ist nicht maximale Geschwindigkeit, sondern eine Stadt, die als stabil, verlässlich und atmungsaktiv wahrgenommen wird."
        ],
        image: {
            url: "/smart-city/city-systems/efficiency-and-rhythm.png",
            alt: "Thailändische Stadtinfrastruktur mit reibungsloser Mobilität und vorhersehbarem Tagesrhythmus",
        },
        cta: {
            label: "Zurück zu den Stadtsystemen",
            href: "/smart-city/city-systems-movement-and-pause",
        },
    },

    systemExplanation: {
        headline: "Was Effizienz Wirklich Bedeutet",
        paragraphs: [
            "Effizienz wird nicht allein durch Geschwindigkeit definiert, sondern durch reduzierte Reibung.",
            "Wenn Verkehr, Querungen, Logistik und öffentliche Dienste zeitlich koordiniert sind, wird die Stadt berechenbar. Menschen verlassen sich auf das System, statt sich darin zu beeilen, wodurch die Stadt trotz kontinuierlicher Aktivität ruhig bleibt."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Mobilitätskoordination, die reibungslose Bewegung ohne Tempodruck ermöglicht",
        },
    },

    whyItMatters: {
        headline: "Warum Effizienz und Rhythmus Wichtig Sind",
        paragraphs: [
            "Städte, die den menschlichen Rhythmus respektieren, reduzieren häufig Stress und unterstützen nachhaltige Produktivität, ohne den Komfort zu beeinträchtigen."
        ],
        points: [
            {
                title: "Vorhersehbarkeit Reduziert Anspannung",
                description:
                    "Menschen bleiben ruhiger, wenn Bewegungszeiten vorhersehbar sind, anstatt ständig reagieren zu müssen.",
            },
            {
                title: "Geschwindigkeit Ist Nicht Gleich Leistung",
                description:
                    "Eine Stadt kann schnell funktionieren und dennoch fordernd wirken. Wirksame Leistung wird oft als stabil und unaufdringlich erlebt.",
            },
            {
                title: "Logistik Sollte Hintergrundinfrastruktur Bleiben",
                description:
                    "Gut gestaltete Systeme unterstützen das tägliche Leben kontinuierlich, ohne Aufmerksamkeit zu verlangen oder öffentliche Räume zu dominieren.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Mobilitätskoordination",
            paragraphs: [
                "Wenn Signale, Fahrzeuge, Fußgänger und öffentlicher Verkehr zeitlich aufeinander abgestimmt sind, fühlt sich Bewegung mühelos statt kontrolliert an."
            ],
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "Mobilitätskoordination zur Unterstützung eines gleichmäßigen Stadtrhythmus",
            },
            landingUrl: "/smart-city/system-explainers-mobility-coordination",
        },
        {
            headline: "Logistik Verändert Still den Urbanen Rhythmus",
            paragraphs: [
                "Effiziente Logistik beeinflusst die Stadt weniger durch sichtbare Geschwindigkeit als durch Timing und geringe Wahrnehmbarkeit."
            ],
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "Urbane Logistik, die sich unauffällig in eine moderne Straße einfügt",
            },
            landingUrl: "/smart-city/global-patterns-urban-logistics",
        },
    ],
};