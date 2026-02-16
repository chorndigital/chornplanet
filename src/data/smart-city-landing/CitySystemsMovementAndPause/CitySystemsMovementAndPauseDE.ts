import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsMovementAndPauseDE: ISmartCityLanding = {
    heroObservation: {
        headline: "Bewegung und Pause",
        paragraphs: [
            "Eine Stadt wird nicht dadurch definiert, wie schnell sie sich bewegt, sondern dadurch, ob sie Menschen erlaubt, ohne Risiko oder Druck stehen zu bleiben.",
            "Gesunde Straßen sind keine Schnellstraßen. Sie sind gemeinsam genutzte Umgebungen, in denen sich Bewegung natürlich verlangsamen kann und Pausen sicher bleiben.",
            "Wenn eine Stadt Fluss und Stillstand ausbalanciert, kann der Alltag ruhiger, sozialer und stärker auf den Menschen ausgerichtet werden."
        ],
        image: {
            url: "/smart-city/city-systems/movement-and-pause.png",
            alt: "Thailändische Stadtstraße mit ausgewogenem Verhältnis zwischen Fußgängerpausen und ruhigem Verkehrsfluss",
        },
        cta: {
            label: "Dichte und Komfort Entdecken",
            href: "/smart-city/city-systems-density-and-comfort",
        },
    },

    systemExplanation: {
        headline: "Was Ausgewogenheit auf der Straße Schafft",
        paragraphs: [
            "Bewegung und Pause sind keine Gegensätze. Sie sind ergänzende Funktionen innerhalb desselben Straßensystems.",
            "Querungen, Bordsteingestaltung, Gehwegrhythmus und Verkehrsverhalten beeinflussen, ob Menschen sich sicher fühlen, langsamer zu werden, zu beobachten und zu interagieren. Wenn die Straße lesbar und vorhersehbar ist, kann soziales Leben entstehen, ohne stark auf Durchsetzung angewiesen zu sein."
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "Gestaltung öffentlicher Räume, die sicheres Pausieren und gemeinsames Stadtleben ermöglicht",
        },
    },

    whyItMatters: {
        headline: "Warum Bewegung und Pause Wichtig Sind",
        paragraphs: [
            "Wenn Menschen auf natürliche Weise pausieren können, werden Straßen tendenziell sicherer, komfortabler und sozial aktiver."
        ],
        points: [
            {
                title: "Pause Kann Sicherheit Anzeigen",
                description:
                    "Wenn Menschen sich sicher genug fühlen, anzuhalten, funktioniert die Straße wahrscheinlich bereits als präventives Umfeld.",
            },
            {
                title: "Fluss Ohne Druck",
                description:
                    "Vorhersehbare Bewegung reduziert Konflikte und lässt das Verlangsamen normal statt riskant erscheinen.",
            },
            {
                title: "Soziales Leben Benötigt Stillstand",
                description:
                    "Eine Stadt wird menschlicher, wenn Straßen das Warten, Beobachten, Begegnen und Ausruhen ermöglichen.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Öffentlicher Raum Wie Vorgesehen Genutzt",
            paragraphs: [
                "Wenn Menschen sich gerne aufhalten, deutet dies darauf hin, dass die Stadt ein funktionierendes Gleichgewicht zwischen Bewegung und Komfort erreicht hat."
            ],
            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "Bewohner nutzen öffentliche Räume auf natürliche und komfortable Weise",
            },
            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
        {
            headline: "Vorhersehbares Straßenverhalten",
            paragraphs: [
                "Vorhersehbarkeit ermöglicht sicheres Pausieren. Ohne sie kann jedes Anhalten zum Risiko werden."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Vorhersehbares Verhalten auf gemeinsamen Straßen zur Unterstützung sicherer Fußgängerbewegung",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
    ],
};