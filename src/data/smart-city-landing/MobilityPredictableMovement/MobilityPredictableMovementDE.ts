import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const MobilityPredictableMovementDE: ISmartCityLanding = {
    heroObservation: {
        headline: "Vorhersehbare Bewegung auf Geteilten Straßen",
        paragraphs: [
            "Mobilität wird nicht in erster Linie als Technologie erlebt. Sie wird als Sicherheit empfunden.",
            "Wenn Menschen ohne Zögern queren können, Fahrzeuge natürlich langsamer werden und Radfahrer sich mit minimalem Konflikt bewegen, wird die Straße lesbar.",
            "Vorhersehbarkeit ist keine Kontrolle. Sie ist ein praktisches Fundament für alltägliche Sicherheit."
        ],
        image: {
            url: "/smart-city/mobility-focus/predictable-shared-street.png",
            alt: "Thailändische Fußgänger und Radfahrer bewegen sich ruhig auf einer vorhersehbaren geteilten Straße mit einem autonomen Shuttle im Hintergrund",
        },
        cta: {
            label: "Gemischte Mobilität Erkunden",
            href: "/smart-city/mobility-focus-mixed-mobility",
        },
    },

    systemExplanation: {
        headline: "Was Bewegung Vorhersehbar Macht",
        paragraphs: [
            "Vorhersehbarkeit entsteht durch Gestaltung, die Unsicherheit reduziert: klare Querungen, konsistente Spurführung, lesbare Signale und Straßen, die Verlangsamung fördern, ohne sie zu erzwingen.",
            "Gut gestaltete Straßen fühlen sich sicher an, nicht weil Menschen überwacht werden, sondern weil Bewegung natürlich synchronisiert wird."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Koordination urbaner Mobilität zur Unterstützung vorhersehbaren Straßenverhaltens",
        },
    },

    whyItMatters: {
        headline: "Warum Vorhersehbarkeit Wichtig Ist",
        paragraphs: [
            "Eine vorhersehbare Straße reduziert Stress, senkt das Unfallrisiko und schafft Raum für spontanes Stadtleben."
        ],
        points: [
            {
                title: "Sicherheit Ohne Durchsetzung",
                description:
                    "Wenn Bewegung lesbar ist, regulieren sich Menschen selbst. Straßen bleiben ruhig, ohne auf strenge Kontrolle angewiesen zu sein.",
            },
            {
                title: "Vertrauen ist ein Praktischer Indikator",
                description:
                    "Ein zentrales Zeichen funktionierender Mobilität ist, ob Menschen sich ohne Zögern bewegen können.",
            },
            {
                title: "Geteilte Straßen Brauchen Gemeinsames Vertrauen",
                description:
                    "Vorhersehbarkeit ermöglicht es Fußgängern, Rollern, Radfahrern und Fahrzeugen, ohne ständige Aushandlung zu koexistieren.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Vorhersehbares Straßenverhalten",
            paragraphs: [
                "Wenn Bewegung ruhig und konsistent wirkt, zeigt dies, dass die Straße Vertrauen im täglichen Gebrauch unterstützt."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Vorhersehbares Verhalten auf einer geteilten Straße in einer thailändischen Stadt",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "Bewegung und Pause",
            paragraphs: [
                "Eine Straße, die sichere Pausen ermöglicht, ist häufig dieselbe Straße, die vorhersehbare Bewegung unterstützt."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Städtische Straße, die Mobilitätsfluss mit sicheren Pausen für Fußgänger ausbalanciert",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};