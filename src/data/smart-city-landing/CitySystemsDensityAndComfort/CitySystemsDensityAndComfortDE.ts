import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsDensityAndComfortDE: ISmartCityLanding = {
    heroObservation: {
        headline: "Dichte und Komfort",
        paragraphs: [
            "Dichte ist an sich nicht zwangsläufig ein Problem. Unbehagen entsteht, wenn Systeme schlecht gestaltet sind.",
            "Städte werden lebenswerter, wenn Dichte durch Raum, Grünflächen und vorhersehbare Bewegungsmuster ausgeglichen wird.",
            "Eine Smart City versucht nicht, Gedränge zu beseitigen, sondern schafft Bedingungen, unter denen gemeinsamer Raum komfortabel und übersichtlich nutzbar bleibt."
        ],
        image: {
            url: "/smart-city/city-systems/density-and-comfort.png",
            alt: "Angenehme thailändische städtische Dichte mit Grünflächen, schattigen Gehwegen und ruhigem Straßenrhythmus",
        },
        cta: {
            label: "Effizienz und Rhythmus entdecken",
            href: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    },

    systemExplanation: {
        headline: "Wie Komfort in Dichte Gestaltet Wird",
        paragraphs: [
            "Komfort ist keine dekorative Ebene, sondern das Ergebnis koordinierter Systeme.",
            "Elemente wie Schatten, gut begehbare Ränder, Beleuchtung, Grünflächen und der Rhythmus öffentlicher Räume beeinflussen, ob Dichte als belastend oder unterstützend empfunden wird. Wenn diese Systeme stimmig zusammenwirken, können dichte Umgebungen ruhig und funktional bleiben."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Stadtgestaltungssysteme, die Komfort durch Grünflächen und begehbaren Raum unterstützen",
        },
    },

    whyItMatters: {
        headline: "Warum Dichte und Komfort Wichtig Sind",
        paragraphs: [
            "Städte, die bei höheren Dichtewerten Komfort aufrechterhalten, unterstützen häufig Nachhaltigkeit, Sicherheit und soziale Interaktion wirksamer."
        ],
        points: [
            {
                title: "Komfort Reduziert Spannungen",
                description:
                    "Wenn dichte Umgebungen geordnet und ruhig wirken, sind Menschen eher bereit, den Raum kooperativ zu teilen.",
            },
            {
                title: "Lebensqualität Verringert Expansionsdruck",
                description:
                    "Städte, die Dichte komfortabel aufnehmen können, können den Bedarf an Ausdehnung nach außen begrenzen.",
            },
            {
                title: "Grünflächen Sind Funktionale Infrastruktur",
                description:
                    "Schatten, Bäume und weich gestaltete Übergänge sind funktionale Komponenten, die Temperaturregulierung, Bewegungsmuster und das Gesamterlebnis beeinflussen.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Orchestrierung Öffentlicher Räume",
            paragraphs: [
                "Komfort wird davon beeinflusst, wie Gehwege, Beleuchtung und Straßenaktivität über die Zeit hinweg koordiniert werden."
            ],
            image: {
                url: "/smart-city/system-explainers/public-space-orchestration.png",
                alt: "Orchestrierung öffentlicher Räume zur Unterstützung von Komfort und sozialem Rhythmus",
            },
            landingUrl: "/smart-city/system-explainers-public-space-orchestration",
        },
        {
            headline: "Gemischte Mobilität Wird Zum Globalen Standard",
            paragraphs: [
                "Dichte Straßen erfordern Koexistenz. Gemischte Mobilität spiegelt eine entstehende globale Realität wider und ist weniger eine optionale Designentscheidung."
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Gemischte Mobilität, die Dichte durch Koexistenz unterstützt",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    ],
};