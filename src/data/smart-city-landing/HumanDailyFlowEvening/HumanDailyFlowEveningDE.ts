import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowEveningDE: ISmartCityLanding = {
    heroObservation: {
        headline: "Abendlicher Fluss — Verlangsamen und Erholung",
        paragraphs: [
            "Der Abend geht nicht um Geschwindigkeit. Er geht um Erholung.",
            "Die Qualität einer Stadt wird sichtbar, wenn Menschen langsamer werden: nach Hause gehen, Freunde treffen, lokal einkaufen oder einfach im öffentlichen Raum verweilen.",
            "Eine Smart City zeigt sich darin, ob Straßen nach Sonnenuntergang sicher genug wirken, damit Menschen entspannen und weiterhin präsent sein können."
        ],
        image: {
            url: "/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
            alt: "Früher Abend auf einer thailändischen Stadtstraße mit warmem Licht, Fußgängern, ruhigen Rollern und einer sicheren Atmosphäre für soziales Leben",
        },
        cta: {
            label: "Zurück zur Smart City-Übersicht",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
    },

    systemExplanation: {
        headline: "Abendsysteme, die Komfort Schützen",
        paragraphs: [
            "Der Abend zeigt, ob die Stadt Komfort unterstützt oder ob Menschen sich gezwungen fühlen, sich ins Innere zurückzuziehen.",
            "Beleuchtung, gute Gehwege, Straßenaktivität und vorhersehbare Mobilität ermöglichen es, dass öffentliches Leben mit weniger Unsicherheit weitergeht. Wenn diese Systeme zusammenwirken, bleibt die Stadt auch nach dem Tag nutzbar und einladend."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Orchestrierung des öffentlichen Raums mit Beleuchtung und Gehfreundlichkeit zur Unterstützung des Abendlebens",
        },
    },

    whyItMatters: {
        headline: "Warum Abendlicher Fluss Relevant Ist",
        paragraphs: [
            "Eine Stadt, die Erholung am Abend unterstützt, stärkt langfristige soziale Verbindung und wahrgenommene Sicherheit, ohne starke Kontrolle zu erfordern."
        ],
        points: [
            {
                title: "Komfort Ist ein Systemergebnis",
                description:
                    "Abendlicher Komfort ist keine Dekoration. Er ist das Ergebnis von Sicherheit, Beleuchtung und vorhersehbarer Bewegung.",
            },
            {
                title: "Öffentlicher Raum Wird zu Sozialer Infrastruktur",
                description:
                    "Wenn Menschen nach Sonnenuntergang draußen bleiben, unterstützt der öffentliche Raum stärkere Gemeinschaft und alltägliche Zugänglichkeit.",
            },
            {
                title: "Sicherheit Ohne Durchsetzung",
                description:
                    "Die wirksamsten Straßen fühlen sich sicher an, weil sie so gestaltet sind, dass sie Risiken reduzieren, nicht um Verhalten zu bestrafen.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Öffentlicher Raum Wird Wie Vorgesehen Genutzt",
            paragraphs: [
                "Der Abend zeigt, ob Menschen sich sicher genug fühlen, um zu verweilen. Dieses Verweilen ist ein klares Signal für Komfort."
            ],
            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "Thailändische Bewohner sitzen und gehen entspannt in einem gut beleuchteten öffentlichen Raum",
            },
            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
        {
            headline: "Dichte und Komfort",
            paragraphs: [
                "Abendlicher Komfort zeigt, ob Dichte lebenswert oder erschöpfend wirkt."
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Städtische Dichte, gemildert durch Grünflächen und ruhige Abendaktivität",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};