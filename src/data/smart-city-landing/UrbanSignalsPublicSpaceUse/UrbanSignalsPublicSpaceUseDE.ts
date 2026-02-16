import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsPublicSpaceUseDE: ISmartCityLanding = {
    heroObservation: {
        headline: "Öffentlicher Raum Wird Wie Vorgesehen Genutzt",
        paragraphs: [
            "Öffentliche Räume zeigen Stadtqualität durch ihre alltägliche Nutzung.",
            "Wenn Menschen sitzen, pausieren, sprechen und sich natürlich aufhalten, deutet das darauf hin, dass die Stadt ein Gleichgewicht zwischen Bewegung und Komfort sowie zwischen Effizienz und sozialem Leben erreicht hat.",
            "Eines der klarsten Zeichen einer funktionierenden Stadt ist nicht Geschwindigkeit, sondern ob Menschen sich wohl genug fühlen, um zu bleiben."
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "Thailändische Bewohner sitzen und gehen entspannt in einem gut gestalteten öffentlichen Raum",
        },
        cta: {
            label: "Zurück zu Vorhersehbaren Straßen",
            href: "/smart-city/urban-signals-predictable-street",
        },
    },

    systemExplanation: {
        headline: "Was Die Nutzung Öffentlicher Räume Signalisiert",
        paragraphs: [
            "Menschen bleiben nicht an Orten, die sich unangenehm anfühlen. Sie verweilen nur dort, wo die Stadt Sicherheit, Schatten, Beleuchtung, gute Fußläufigkeit und einen ruhigen Straßenrhythmus bietet.",
            "Öffentlicher Raum ist keine dekorative Schicht. Er ist ein Systemergebnis. Wenn er gut funktioniert, wird die Stadt sozial aktiv, ohne inszeniert oder programmiert zu sein."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Orchestrierung öffentlicher Räume durch Beleuchtung, Gehwege und Fußläufigkeit",
        },
    },

    whyItMatters: {
        headline: "Warum Dieses Signal Wichtig Ist",
        paragraphs: [
            "Wenn öffentliche Räume natürlich genutzt werden, deutet das darauf hin, dass die Stadt langfristige soziale Gesundheit, Sicherheit und alltäglichen Komfort unterstützt."
        ],
        points: [
            {
                title: "Komfort Ist Ein Beleg",
                description:
                    "Alltägliche Nutzung öffentlicher Räume zeigt, dass Systeme über politische Aussagen hinaus funktionieren.",
            },
            {
                title: "Soziales Leben Ist Infrastruktur",
                description:
                    "Ungezwungenes Zusammenkommen stärkt Verbundenheit und Resilienz in der Stadt.",
            },
            {
                title: "Sicherheit Wird Erlebt",
                description:
                    "Gut funktionierende Straßen fühlen sich sicher an, ohne auf sichtbare Kontrolle oder Durchsetzung angewiesen zu sein.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Bewegung und Pause",
            paragraphs: [
                "Öffentliche Räume werden erst nutzbar, wenn Bewegung Stillstand zulässt. Pause ist ein zentrales Systemsignal."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Ausgewogenheit von Bewegung und Pause in einem menschenzentrierten Straßensystem",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
        {
            headline: "Dichte und Komfort",
            paragraphs: [
                "Wenn Dichte komfortabel bleibt, bleiben Menschen länger draußen. Komfort ist die grundlegende Strategie für lebenswerte Dichte."
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Urbane Dichte, gemildert durch Grünflächen und komfortable geteilte Räume",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};