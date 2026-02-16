import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowMorningDE: ISmartCityLanding = {
    heroObservation: {
        headline: "Morgenfluss — Beginn des Tages",
        paragraphs: [
            "Der Morgen zeigt, ob eine Stadt vorbereitet ist, wenn der Alltag beginnt.",
            "Pendelverkehr, Schulwege, kleine Erledigungen und frühe Lieferungen machen sichtbar, ob Mobilitätssysteme den Tagesrhythmus unterstützen oder Reibung im Alltag erzeugen.",
            "Eine Smart City wird hier sichtbar — an den ersten Querungen, den ersten Signalen und den ersten gemeinsamen Bewegungen des Tages."
        ],
        image: {
            url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
            alt: "Früher Morgen auf einer thailändischen Stadtstraße mit pendelnden Fußgängern, ruhigen Rollern und einem leisen autonomen Elektro-Shuttle im Hintergrund",
        },
        cta: {
            label: "Mittagsfluss ansehen",
            href: "/smart-city/human-daily-flow-midday",
        },
    },

    systemExplanation: {
        headline: "Was der Morgen über eine Stadt Verrät",
        paragraphs: [
            "Der Morgen wirkt als früher Stresstest für urbane Systeme. Wenn Querungen unklar sind, Gehwege unsicher wirken oder Verkehr unvorhersehbar wird, passen Menschen ihr Verhalten sofort an.",
            "Zuverlässige Städte werden nicht durch Geschwindigkeit definiert. Sie werden durch Lesbarkeit definiert — dort, wo Fußgänger, Roller, Radfahrer und Fahrzeuge mit minimalem Konflikt koordiniert sind."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Koordinierte urbane Mobilität mit vorhersehbaren Querungen und ruhiger Morgenbewegung",
        },
    },

    whyItMatters: {
        headline: "Warum Morgenfluss Wichtig Ist",
        paragraphs: [
            "Städte, die den Morgenrhythmus unterstützen, reduzieren Stress, verbessern die Sicherheit und bauen Vertrauen auf, ohne auf Durchsetzung angewiesen zu sein."
        ],
        points: [
            {
                title: "Vertrauen Beginnt An Der Ersten Querung",
                description:
                    "Wenn Menschen sich sicher fühlen, natürlich zu queren, kommuniziert die Stadt Verlässlichkeit ohne Anweisung.",
            },
            {
                title: "Rhythmus Schlägt Geschwindigkeit",
                description:
                    "Morgenfluss funktioniert am besten, wenn Straßen vorhersehbare Abläufe statt maximalen Durchsatz unterstützen.",
            },
            {
                title: "Alltägliche Sicherheit Ist Präventives Design",
                description:
                    "Ein ruhiger morgendlicher Weg reduziert Risiken, Staus und Reibung, bevor sie entstehen.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Vorhersehbares Straßenverhalten",
            paragraphs: [
                "Der Morgen funktioniert nur dann reibungslos, wenn Menschen sich ohne Zögern bewegen können. Vorhersehbarkeit ist die Grundlage von Vertrauen."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Thailändische Fußgänger und Radfahrer bewegen sich vorhersehbar auf einer geteilten Straße mit ruhigem Verkehr",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "Bewegung und Pause",
            paragraphs: [
                "Eine Stadt erwacht sanft, wenn Bewegung sich natürlich verlangsamen kann, ohne Angst oder Gefahr."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Straßendesign, das morgendliche Bewegung mit sicheren Pausen für Fußgänger ausbalanciert",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};