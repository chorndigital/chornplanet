import { ISmartCityLanding } from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsPredictableStreetDE: ISmartCityLanding = {
    heroObservation: {
        headline: "Vorhersehbares Verhalten im Straßenraum",
        paragraphs: [
            "Städte kommunizieren durch Verhalten, bevor sie durch Politik kommunizieren.",
            "Wenn Fußgänger ohne Zögern queren, Roller natürlich langsamer werden und Fahrzeuge sich mit ruhiger Sicherheit bewegen, zeigt die Straße etwas Wichtiges: Menschen erleben das System als verlässlich.",
            "Vorhersehbarkeit ist eines der klarsten urbanen Signale, weil sie ohne Messung sichtbar ist."
        ],
        image: {
            url: "/smart-city/urban-signals/predictable-shared-street.png",
            alt: "Thailändische Fußgänger und Radfahrer bewegen sich flüssig in einer vorhersehbaren Shared-Street-Umgebung",
        },
        cta: {
            label: "Logistikintegration Erkunden",
            href: "/smart-city/urban-signals-logistics-integration",
        },
    },

    systemExplanation: {
        headline: "Was Vorhersehbarkeit Signalisiert",
        paragraphs: [
            "Vorhersehbares Verhalten entsteht nicht zufällig. Es ist das Ergebnis von Straßengestaltung, die Unsicherheit reduziert: gut lesbare Querungen, konsistenter Fahrspurrhythmus, klare visuelle Hinweise und harmonisierte Geschwindigkeiten.",
            "Wenn diese Systeme zusammenwirken, müssen Menschen nicht jeden Schritt neu verhandeln. Die Stadt fühlt sich sicher an, ohne auf sichtbare Kontrolle angewiesen zu sein."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Mobilitätskoordination, die vorhersehbares Verhalten im Straßenraum unterstützt",
        },
    },

    whyItMatters: {
        headline: "Warum Dieses Signal Wichtig Ist",
        paragraphs: [
            "Vorhersehbarkeit ist ein direkter Indikator für Vertrauen auf Straßenebene."
        ],
        points: [
            {
                title: "Vertrauen Ist Beobachtbar",
                description:
                    "Wenn Menschen sich sicher bewegen, deutet das darauf hin, dass sie konsistentes Verhalten der Straße erwarten.",
            },
            {
                title: "Sicherheit Wirkt Normal",
                description:
                    "Eine vorhersehbare Straße reduziert Risiken, ohne dass Sicherheit wie Durchsetzung wirkt.",
            },
            {
                title: "Komfort Ermöglicht Stadtleben",
                description:
                    "Spontanes öffentliches Leben hängt von Bewegungsregeln ab, die lesbar und gemeinsam verstanden sind.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Vorhersehbare Straßen Ermöglichen Spontanes Leben",
            paragraphs: [
                "In Städten weltweit unterstützen vorhersehbare Straßen konsequent ruhigere Bewegung und alltägliches soziales Leben."
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "Globales Muster vorhersehbarer Shared Streets",
            },
            landingUrl: "/smart-city/global-patterns-predictable-shared-street",
        },
        {
            headline: "Bewegung und Pause",
            paragraphs: [
                "Vorhersehbarkeit ist das, was Pausen ermöglicht. Ohne sie kann Anhalten unsicher werden."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Straßensystem, das Fluss und Pause ausbalanciert",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};