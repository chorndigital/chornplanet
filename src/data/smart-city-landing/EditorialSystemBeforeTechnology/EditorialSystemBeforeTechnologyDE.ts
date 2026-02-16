import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialSystemBeforeTechnologyDE: ISmartCityLanding = {
    heroObservation: {
        headline: "System vor Technologie",
        paragraphs: [
            "Technologie allein schafft keine Smart City.",
            "Städte werden intelligenter, wenn Systeme alltägliches Verhalten leise formen: sicherere Querungen, vorhersehbarer Fluss, reibungslosere Logistik und öffentliche Räume, die zuverlässig funktionieren.",
            "Technologie ist dann am relevantesten, wenn sie das menschliche Leben in messbarer Weise verbessert. Ohne diese Verbindung bleibt ihr Nutzen begrenzt."
        ],
        image: {
            url: "/smart-city/editorial/system-before-technology.png",
            alt: "Urbane Infrastruktur, die unauffällig im Hintergrund des thailändischen Alltags funktioniert",
        },
        cta: {
            label: "Lokales als Globale Blaupause Erkunden",
            href: "/smart-city/editorial-local-as-global-prototype",
        },
    },

    systemExplanation: {
        headline: "Was eine System-Perspektive Sichtbar Macht",
        paragraphs: [
            "Eine System-Perspektive beginnt bei den Ergebnissen: Komfort, Sicherheit, Rhythmus und Zugang.",
            "Erst wenn Ergebnisse sichtbar werden, fragen wir, welche Technologie sie unterstützt. Dies hilft Städten, Innovationen zu vermeiden, die fortschrittlich wirken, aber nur begrenzte reale Wirkung im Alltag erzeugen."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Mobilitätskoordinationssystem, das tägliche Bewegung unterstützt, ohne sichtbar zu sein",
        },
    },

    whyItMatters: {
        headline: "Warum System vor Technologie Wichtig Ist",
        paragraphs: [
            "Städte, die mit Systemen beginnen, entwickeln häufiger Lösungen, die skalieren können. Städte, die mit Technologie beginnen, erzeugen oft isolierte Umsetzungen."
        ],
        points: [
            {
                title: "Ergebnisse Haben Vorrang",
                description:
                    "Wenn Komfort und Sicherheit sich nicht verbessern, erfüllt die Technologie ihren beabsichtigten Zweck nicht.",
            },
            {
                title: "Unsichtbarer Erfolg ist das Ziel",
                description:
                    "Wirksame Systeme integrieren sich in den Alltag. Menschen erleben Verbesserungen, ohne sich auf das Werkzeug selbst konzentrieren zu müssen.",
            },
            {
                title: "Prävention Unterstützt Langfristige Stabilität",
                description:
                    "Ein Systemansatz reduziert Risiken frühzeitig, statt Probleme erst nach eingetretenem Schaden zu adressieren.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Mobilitätskoordination",
            paragraphs: [
                "Systeme koordinieren Zeit, Fluss und Verhalten. Technologie ist nur ein Teil der Koordinationsebene."
            ],
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "Mobilitätskoordination zur Unterstützung vorhersehbarer Bewegung",
            },
            landingUrl: "/smart-city/system-explainers-mobility-coordination",
        },
        {
            headline: "Effizienz und Menschlicher Rhythmus",
            paragraphs: [
                "Effizienz wird dann sinnvoll, wenn sie den menschlichen Rhythmus unterstützt, statt ihn zu übersteuern."
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "Städtische Systeme im Einklang mit menschlichem Rhythmus und Komfort",
            },
            landingUrl: "/smart-city/city-systems/efficiency-and-rhythm",
        },
    ],
};