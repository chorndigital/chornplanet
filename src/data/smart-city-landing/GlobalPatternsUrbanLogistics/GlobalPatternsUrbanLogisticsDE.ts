import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const GlobalPatternsUrbanLogisticsDE: ISmartCityLanding = {
    heroObservation: {
        headline: "Logistik Verändert Still den Urbanen Rhythmus",
        paragraphs: [
            "Waren bewegen sich kontinuierlich durch Städte — oft ohne besondere Aufmerksamkeit zu erzeugen.",
            "In vielen Regionen verlagert sich Logistik von großer, gut sichtbarer Infrastruktur hin zu kleineren und leiseren Systemen, wie Mikro-Elektrofahrzeugen, Lieferrobotern, Drohnen und zeitlich abgestimmter Verteilung.",
            "In Städten, in denen Logistik reibungslos integriert ist, wirkt der Alltag häufig komfortabler, selbst wenn die Bewegung zunimmt."
        ],
        image: {
            url: "/smart-city/global-patterns/urban-logistics.png",
            alt: "Urbane Logistik, die still durch eine moderne Stadtstraße funktioniert",
        },
        cta: {
            label: "Zurück zu Vorhersehbaren Straßen",
            href: "/smart-city/global-patterns-predictable-shared-street",
        },
    },

    systemExplanation: {
        headline: "Wie Logistik die Stadt Beeinflusst",
        paragraphs: [
            "Logistik beeinflusst die Stadt vor allem durch Rhythmus statt durch Geschwindigkeit.",
            "Wenn Lieferungen zeitlich geplant, verteilt und koordiniert werden, wirken Straßen tendenziell weniger überlastet und alltägliche Bewegung wird flüssiger. Gut integrierte Logistiksysteme reduzieren Reibung, ohne zum visuellen Mittelpunkt der Stadt zu werden."
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "Kleinskalige Logistik integriert in alltägliche urbane Bewegung",
        },
    },

    whyItMatters: {
        headline: "Warum Dieses Globale Muster Relevant Ist",
        paragraphs: [
            "Logistik wird zunehmend Teil der unsichtbaren Infrastruktur des Alltags. Städte, die sie sorgfältig integrieren, können Ruhe bewahren, auch wenn das Aktivitätsniveau steigt."
        ],
        points: [
            {
                title: "Lieferung Ist Eine Ständige Präsenz im Straßenraum",
                description:
                    "Waren bewegen sich den ganzen Tag. Die entscheidende Frage ist, ob Lieferaktivitäten die Straße stören oder sich in sie einfügen.",
            },
            {
                title: "Leise Integration Unterstützt Komfort",
                description:
                    "Operative Effizienz sollte keinen unnötigen Lärm, keine Unordnung und keine Konflikte im öffentlichen Raum erzeugen.",
            },
            {
                title: "Rhythmus Unterstützt Urbane Stabilität",
                description:
                    "Wenn Logistik in Zeit und Raum koordiniert ist, wirkt die Stadt häufig vorhersehbarer und leichter zu navigieren.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Logistik als Teil des Alltags",
            paragraphs: [
                "Wenn Lieferroboter und kleinskalige Logistik funktionieren, ohne Aufmerksamkeit zu dominieren, bleiben alltägliche Stadtszenen ruhig und gut lesbar."
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Logistik integriert in den Alltag auf thailändischen Straßen",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
        {
            headline: "Effizienz und Menschlicher Rhythmus",
            paragraphs: [
                "Urbane Effizienz wird dann sinnvoll, wenn die Systemzeit mit menschlichen Routinen übereinstimmt, statt sie zu übersteuern."
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "Städtische Infrastruktur abgestimmt auf menschlichen Rhythmus und vorhersehbares Timing",
            },
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    ],
};