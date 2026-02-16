import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowMiddayDE: ISmartCityLanding = {
    heroObservation: {
        headline: "Mittagsfluss — Dichte und Koordination",
        paragraphs: [
            "Zur Mittagszeit wird die Komplexität einer Stadt am deutlichsten sichtbar.",
            "Menschen, Waren, Lieferungen, Dienstleistungen und Mobilität überlagern sich zur gleichen Zeit. Die Straße wird dicht, doch der Alltag sollte weiterhin ruhig wirken.",
            "Eine Smart City wird nicht dadurch definiert, dass sie Dichte beseitigt. Sie zeigt sich darin, ob sich Dichte koordiniert anfühlt."
        ],
        image: {
            url: "/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
            alt: "Belebte thailändische Stadtstraße zur Mittagszeit mit Fußgängern, Rollern, Radfahrern, Lieferrobotern und einem autonomen elektrischen Shuttle, das sich gemeinsam bewegt",
        },
        cta: {
            label: "Abendfluss ansehen",
            href: "/smart-city/human-daily-flow-evening",
        },
    },

    systemExplanation: {
        headline: "Die Mittags-Systeme, die Man Nicht Sieht",
        paragraphs: [
            "Bei maximaler Dichte koordiniert eine Stadt mehrere Ebenen: Logistik-Timing, Verkehrssignale, Fußgängerbewegung, Lieferwege und die gemeinsame Nutzung öffentlicher Räume.",
            "Wenn diese Systeme gut funktionieren, erfordern sie wenig Aufmerksamkeit. Menschen erleben Bewegung einfach als vorhersehbarer und weniger angespannt."
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "Städtische Logistik, die ruhig neben dem Alltag funktioniert",
        },
    },

    whyItMatters: {
        headline: "Warum Mittagsfluss Wichtig Ist",
        paragraphs: [
            "Die Mittagszeit zeigt, ob eine Stadt das tägliche Leben in großem Maßstab unterstützen kann, ohne stressig oder chaotisch zu werden."
        ],
        points: [
            {
                title: "Dichte Testet Systemintelligenz",
                description:
                    "Zur Mittagszeit ist Koordination am wichtigsten: Wenn viele Aktivitäten zusammenkommen, müssen Systeme ruhig und zuverlässig bleiben.",
            },
            {
                title: "Logistik Muss Unauffällig Integriert Sein",
                description:
                    "Lieferungen sollten die Straße nicht dominieren. Sie sollten sich in den Alltag einfügen, ohne Komfort zu stören.",
            },
            {
                title: "Koexistenz Ist der Neue Standard",
                description:
                    "Roller, Fußgänger, Fahrräder, Roboter und Fahrzeuge müssen natürlich koexistieren können, statt um Dominanz zu konkurrieren.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Logistik, die sich in den Alltag Einfügt",
            paragraphs: [
                "Wenn Lieferungen funktionieren, ohne Aufmerksamkeit zu dominieren, kann sich die Stadt selbst bei maximaler Intensität ruhig anfühlen."
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Lieferroboter und kleine elektrische Logistikfahrzeuge, die sich in eine thailändische Straßenumgebung einfügen",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
        {
            headline: "Gemischte Mobilität Wird zum Standard",
            paragraphs: [
                "Die Mittagszeit zeigt, ob gemischte Mobilität bewusst unterstützt wird oder dem Zufall überlassen bleibt. Der Unterschied ist Komfort."
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Mehrere Mobilitätsformen, die auf einer modernen Stadtstraße koexistieren",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    ],
};