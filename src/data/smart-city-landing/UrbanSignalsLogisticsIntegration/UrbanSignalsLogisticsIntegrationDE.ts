import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsLogisticsIntegrationDE: ISmartCityLanding = {
    heroObservation: {
        headline: "Logistik, die sich in den Alltag Einfügt",
        paragraphs: [
            "Logistik ist ein grundlegendes Stadtsystem, und gut integrierte Logistik wird oft kaum wahrgenommen.",
            "Wenn Lieferroboter, Kurierdienste und kleine Elektrofahrzeuge arbeiten können, ohne die Aufmerksamkeit zu dominieren, deutet das darauf hin, dass Logistik integriert und nicht aufgesetzt ist.",
            "Eine Smart City wird nicht dadurch definiert, wie sichtbar ihre Liefersysteme sind. Sie wird dadurch definiert, ob Logistik in den täglichen Rhythmus passt, ohne das Straßenleben zu stören."
        ],
        image: {
            url: "/smart-city/urban-signals/urban-logistics.png",
            alt: "Thailändische Straße, auf der Lieferroboter und kleine E-Logistiksysteme in den Alltag eingebettet sind",
        },
        cta: {
            label: "Nutzung Öffentlicher Räume Erkunden",
            href: "/smart-city/urban-signals-public-space-use",
        },
    },

    systemExplanation: {
        headline: "Was Logistikintegration Signalisiert",
        paragraphs: [
            "Integrierte Logistik bedeutet, dass Waren kontinuierlich bewegt werden können, ohne den menschlichen Komfort zu stören.",
            "Dies hängt von Timing, Routenführung und Koordination ab. Straßen sollten für Fußgänger lesbar bleiben, während Logistiksysteme ruhig an den Rändern operieren."
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "Städtisches Logistiksystem, das leise im Hintergrund der täglichen Bewegung arbeitet",
        },
    },

    whyItMatters: {
        headline: "Warum Dieses Signal Wichtig Ist",
        paragraphs: [
            "Logistikintegration ist ein Signal für Systemreife. Sie zeigt, dass eine Stadt den täglichen Bedarf bedienen kann, ohne Straßen in reine Infrastrukturräume zu verwandeln."
        ],
        points: [
            {
                title: "Effizienz Ohne Lärm",
                description:
                    "Gut integrierte Logistik reduziert Reibung und bewahrt gleichzeitig ruhige öffentliche Räume.",
            },
            {
                title: "Die Straße Bleibt Menschlich",
                description:
                    "Wenn Logistik sich einfügt, können Fußgänger und soziales Leben die primäre Identität der Straße bleiben.",
            },
            {
                title: "Timing Unterstützt Präventives Design",
                description:
                    "Ein koordinierter Lieferrhythmus kann Verkehrsspitzen reduzieren, bevor sie entstehen.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Logistik Verändert Still die Urbane Rhythmik",
            paragraphs: [
                "In Städten weltweit verlagert sich Logistik hin zu kleineren und ruhigeren Systemen, die die tägliche Bewegung beeinflussen."
            ],
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "Globales Muster urbaner Logistik, das den täglichen Rhythmus verändert",
            },
            landingUrl: "/smart-city/global-patterns-urban-logistics",
        },
        {
            headline: "Effizienz und Menschlicher Rhythmus",
            paragraphs: [
                "Logistikintegration funktioniert am besten, wenn städtische Systeme mit menschlichem Rhythmus übereinstimmen, statt Geschwindigkeit zu priorisieren."
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "Effizienz, die mit menschlichem Rhythmus in einem modernen Stadtsystem abgestimmt ist",
            },
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    ],
};