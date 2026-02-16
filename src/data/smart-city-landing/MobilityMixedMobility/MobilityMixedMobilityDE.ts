import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const MobilityMixedMobilityDE: ISmartCityLanding = {
    heroObservation: {
        headline: "Koexistenz Gemischter Mobilität",
        paragraphs: [
            "Moderne Straßen werden nicht mehr um nur eine Verkehrsart herum gestaltet.",
            "Roller, Fahrräder, Fußgänger, Lieferroboter und autonome Fahrzeuge werden zunehmend Teil des alltäglichen Straßenbildes.",
            "Eine Smart City wird nicht dadurch definiert, dass sie alles voneinander trennt. Sie wird dadurch definiert, dass Koexistenz natürlich und sicher wirkt."
        ],
        image: {
            url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
            alt: "Thailändische Straße, auf der Fußgänger, Roller, Radfahrer und ein autonomer Shuttle natürlich koexistieren",
        },
        cta: {
            label: "Zurück zum Mobilitätsfokus",
            href: "/smart-city/mobility-focus-mixed-mobility",
        },
    },

    systemExplanation: {
        headline: "Was Koexistenz Funktionieren Lässt",
        paragraphs: [
            "Gemischte Mobilität funktioniert, wenn keine einzelne Verkehrsart die Aufmerksamkeit dominiert. Straßen werden durch konsistentes Design lesbar: harmonisierte Geschwindigkeiten, klare Prioritätssignale und Raum, der sich über die Zeit anpassen kann.",
            "Wenn sie gut gestaltet ist, wirkt Koexistenz mühelos — Menschen denken nicht mehr über Systeme nach und bewegen sich einfach."
        ],
        image: {
            url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
            alt: "Mehrere Mobilitätsformen, die ruhig auf einer modernen Straße koexistieren",
        },
    },

    whyItMatters: {
        headline: "Warum Gemischte Mobilität Wichtig Ist",
        paragraphs: [
            "Städte, die gemischte Mobilität unterstützen, können den Druck durch Staus reduzieren und lebenswertere öffentliche Räume schaffen."
        ],
        points: [
            {
                title: "Mobilitätsvielfalt Ist Resilienz",
                description:
                    "Wenn eine Verkehrsart langsamer wird, können andere den Rhythmus der Stadt aufrechterhalten. Koexistenz schafft Redundanz.",
            },
            {
                title: "Weniger Dominanz, Mehr Komfort",
                description:
                    "Straßen können ruhiger wirken, wenn keine einzelne Fahrzeugart den Raum kontrolliert.",
            },
            {
                title: "Dieser Wandel Ist Bereits Sichtbar",
                description:
                    "Gemischte Mobilität zeigt sich zunehmend im alltäglichen Straßenverhalten in Städten weltweit.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Gemischte Mobilität Wird zum Globalen Standard",
            paragraphs: [
                "Über Kulturen hinweg entwickeln sich Straßen hin zu gemeinsamen Koexistenzmustern statt strikter Trennung."
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Globales Muster gemischter Mobilität, das in vielen Städten sichtbar wird",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
        {
            headline: "Logistik, die sich in den Alltag Einfügt",
            paragraphs: [
                "Koexistenz umfasst auch Liefersysteme. Gut integrierte Städte ermöglichen Logistik, ohne den öffentlichen Raum zu stören."
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Lieferroboter und kleine E-Logistikfahrzeuge, die sich in das tägliche Stadtleben einfügen",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
    ],
};