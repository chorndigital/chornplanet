import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialHumanFirstObservationDE: ISmartCityLanding = {
    heroObservation: {
        headline: "Mensch-zentrierte Beobachtung",
        paragraphs: [
            "Städte lassen sich am klarsten durch gelebte Erfahrung verstehen und nicht allein durch technische Erklärungen.",
            "Viele verlässliche Signale für die Qualität einer Stadt finden sich nicht in Dashboards, sondern darin, wie Menschen gehen, warten, pausieren, Straßen überqueren und Raum teilen.",
            "Diese Plattform beginnt mit dem menschlichen Alltag, weil alltägliches Verhalten zeigt, wie urbane Systeme tatsächlich funktionieren."
        ],
        image: {
            url: "/smart-city/editorial/human-first-observation.png",
            alt: "Thailändische Menschen bewegen sich ruhig durch eine Stadtstraße als primäres Signal urbaner Systeme",
        },
        cta: {
            label: "System vor Technologie Erkunden",
            href: "/smart-city/editorial-system-before-technology",
        },
    },

    systemExplanation: {
        headline: "Warum Beobachtung Zuerst Kommt",
        paragraphs: [
            "Viele Stadt-Narrative beginnen mit Technologie, Infrastruktur oder Politik. Städte werden jedoch nicht primär durch diese Perspektiven erlebt.",
            "Menschen erleben die Stadt durch Reibung, Komfort, Rhythmus und wahrgenommene Sicherheit. Beobachtung hilft, komplexe Systeme in sichtbare Muster zu übersetzen, ohne auf technische Sprache angewiesen zu sein."
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "Öffentlicher Raum, der menschliche Routinen und Komfort als primäre Systemsig­nale zeigt",
        },
    },

    whyItMatters: {
        headline: "Warum Mensch-zentrierte Beobachtung Wichtig Ist",
        paragraphs: [
            "Wenn menschliche Routinen zuerst beobachtet werden, entsteht ein gemeinsamer Bezugspunkt, der über Kulturen, Städte und unterschiedliche Ebenen der Systemkomplexität hinweg verständlich bleibt."
        ],
        points: [
            {
                title: "Verhalten Spiegelt Reale Bedingungen",
                description:
                    "Menschen passen sich schnell an Komfort und Risiko an. Ihre alltägliche Bewegung spiegelt tatsächliche urbane Bedingungen wider.",
            },
            {
                title: "Verständnis Skaliert Ohne Prognosen",
                description:
                    "Beobachtung unterstützt Verständnis, ohne Sicherheit über zukünftige Entwicklungen zu behaupten.",
            },
            {
                title: "Systeme Werden Verständlich Ohne Fachjargon",
                description:
                    "Eine mensch-zentrierte Perspektive macht urbane Systeme auch jenseits technischer oder expertengesteuerter Zielgruppen nachvollziehbar.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Urbane Signale, die man Ohne Aufwand Wahrnimmt",
            paragraphs: [
                "Kleine Alltagsverhalten können Stadtqualität sichtbar machen, ohne formale Messung oder Erklärung zu erfordern."
            ],
            image: {
                url: "/smart-city/urban-signals/predictable-shared-street.png",
                alt: "Vorhersehbares Straßenverhalten, beobachtet durch alltägliche Bewegung",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "Städte Werden Durch Tägliche Zyklen Erlebt",
            paragraphs: [
                "Komplexe Systeme werden oft klarer, wenn sie durch tägliche Rhythmen wie Morgen, Mittag und Abend betrachtet werden."
            ],
            image: {
                url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
                alt: "Morgenfluss, der den täglichen Rhythmus als Signal für Systemqualität veranschaulicht",
            },
            landingUrl: "/smart-city/human-daily-flow-morning",
        },
    ],
};