import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const GlobalPatternsMixedMobilityCoexistenceDE: ISmartCityLanding = {
    heroObservation: {
        headline: "Gemischte Mobilität Wird Zunehmend Zum Globalen Ausgangspunkt",
        paragraphs: [
            "Gehen, Radfahren, Roller, kleine Elektrofahrzeuge und Lieferroboter sind zunehmend Teil der alltäglichen urbanen Bewegung.",
            "In vielen Städten entwickeln sich Straßen zu Umgebungen gemischter Mobilität, in denen Koexistenz — statt strikter Trennung — den Alltag prägt.",
            "Dies spiegelt einen beobachtbaren Wandel in der Nutzung und Aufteilung urbaner Räume wider."
        ],
        image: {
            url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
            alt: "Mehrere Mobilitätsformen, die ruhig auf einer Stadtstraße koexistieren",
        },
        cta: {
            label: "Logistikmuster Erkunden",
            href: "/smart-city/global-patterns-urban-logistics",
        },
    },

    systemExplanation: {
        headline: "Warum Koexistenz In Vielen Städten Entsteht",
        paragraphs: [
            "Städtische Straßen bieten oft nicht genügend Raum, um alle Verkehrsarten vollständig zu trennen. Mit zunehmender Dichte wird gemeinsame Nutzung häufiger.",
            "Der Unterschied zwischen Konflikt und Komfort liegt im Systemdesign: abgestimmte Geschwindigkeiten, klare Prioritätssignale, gut lesbare Querungen und Straßen, die Reibung reduzieren, ohne permanente Kontrolle zu erfordern."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Orchestrierung des öffentlichen Raums zur Unterstützung gemischter Mobilität",
        },
    },

    whyItMatters: {
        headline: "Warum Dieses Globale Muster Relevant Ist",
        paragraphs: [
            "Gemischte Mobilität zeigt, wie Städte sich an begrenzten Raum und vielfältige Bewegungsbedürfnisse anpassen. Gut gestaltete Koexistenz unterstützt Sicherheit, Ruhe und funktionale Effizienz."
        ],
        points: [
            {
                title: "Koexistenz Unterstützt Kapazität",
                description:
                    "Wenn Straßen mehrere Verkehrsarten aufnehmen, kann sich Bewegung gleichmäßiger verteilen, anstatt sich auf ein einziges System zu konzentrieren.",
            },
            {
                title: "Ausgewogene Nutzung Verbessert Komfort",
                description:
                    "Wenn keine Verkehrsart die Straße dominiert, fühlen sich Menschen in der Regel sicherer, und der öffentliche Raum wird besser nutzbar.",
            },
            {
                title: "Geteilte Straßen Spiegeln Gemeinsame Nutzung",
                description:
                    "Gemischte Mobilität ist nicht nur ein Verkehrsphänomen, sondern auch Ausdruck kollektiver Raumnutzung.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Koexistenz Gemischter Mobilität",
            paragraphs: [
                "Die Straße wird zunehmend als geteilter Raum beobachtet, in dem Gehen, Roller, Fahrräder, Roboter und Elektrofahrzeuge gemeinsam agieren."
            ],
            image: {
                url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                alt: "Koexistenz gemischter Mobilität in einer modernen thailändischen Straßenszene",
            },
            landingUrl: "/smart-city/mobility-focus-mixed-mobility",
        },
        {
            headline: "Dichte und Komfort",
            paragraphs: [
                "Koexistenz trägt dazu bei, Komfort in dichten Umgebungen zu erhalten. Ohne gemeinsames Design kann Dichte zu Reibung führen."
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Angenehme Dichte unterstützt durch Gestaltung und geteilte Mobilität",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};