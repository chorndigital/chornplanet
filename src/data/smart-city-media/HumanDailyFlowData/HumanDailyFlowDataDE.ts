//data/smart-city-media/HumanDailyFlowDataDE.ts

import {IHumanDailyFlow} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const HumanDailyFlowDataDE: IHumanDailyFlow = {
    headline: "Urbane Systeme werden durch tägliche Zyklen beobachtet",
    paragraph:
        "Urbane Systeme lassen sich selten in einem einzigen Moment vollständig erfassen. Sie treten in wiederkehrenden täglichen Mustern auf — morgendliche Pendelbewegungen, Koordination zur Tagesmitte und Übergänge am Abend. Die Beobachtung dieser Muster ermöglicht eine Einordnung komplexer urbaner Systeme anhand routinemäßiger Bewegungsabläufe.",

    morningFlow: {
        title: "Morgenfluss — Beginn des Tages",
        paragraph:
            "Am Morgen zeigt sich der Übergang von Wohnruhe zu aktiver Mobilität. Menschen verlassen ihre Wohnungen, bewegen sich durch Straßen und passen sich Verkehrssystemen an. Beobachtbare Signale — Verkehrsstrukturen, Fußgängerbewegungen und geteilte Mobilität — verdeutlichen, wie Mobilitätsinfrastruktur zu Tagesbeginn funktioniert.",

        image: {
            url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
            alt: "Frühe Morgenszene in urbaner Umgebung mit Pendlern, Tageslicht, Grünflächen und beginnendem Betrieb von Mobilitätssystemen",
        },

        category: "Morning Flow",
        signalFocus: ["mobility readiness", "pedestrian flow", "temporal synchronization"],
        landingUrl: "/smart-city/human-daily-flow-morning",
    },

    middayFlow: {
        title: "Mittagsfluss — Dichte und Koordination",
        paragraph:
            "Zur Tagesmitte nimmt die urbane Aktivität an Dichte zu. Menschen, Waren und Dienstleistungen bewegen sich gleichzeitig. Autonome Mobilitätssysteme, Logistikinfrastruktur und die Gestaltung öffentlicher Räume wirken parallel, um höhere Bewegungsvolumina zu bewältigen.",

        image: {
            url: "/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
            alt: "Urbane Umgebung zur Mittagszeit mit Fußgängern, autonomen Elektrofahrzeugen, Lieferdrohnen und koordinierter Bewegung im öffentlichen Raum",
        },

        category: "Midday Flow",
        signalFocus: ["density", "logistics", "coordination", "autonomous systems"],
        landingUrl: "/smart-city/human-daily-flow-midday",
    },

    eveningFlow: {
        title: "Abendfluss — Reduzierte Aktivität und Übergang",
        paragraph:
            "Am Abend verlagert sich das Aktivitätsniveau zu geringerer Mobilitätsintensität. Beleuchtungssysteme, Gehbedingungen, Straßenumgebung und Verkehrsverfügbarkeit beeinflussen, wie Bewohner nach Hause zurückkehren und Abendaktivitäten wahrnehmen.",

        image: {
            url: "/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
            alt: "Früher Abend in urbaner Umgebung mit Fußgängern, beleuchteten Straßen, geöffneten Geschäften, moderatem Verkehrsaufkommen und sichtbaren Sicherheitsbedingungen",
        },

        category: "Evening Flow",
        signalFocus: ["safety", "public space", "evening mobility", "urban transition"],
        landingUrl: "/smart-city/human-daily-flow-evening",
    },

    purpose: "Erkennung wiederkehrender urbaner Muster unterstützen",
    narrativeRole: "Komplexe urbane Systeme durch vertraute tägliche Routinen darstellen",
    section: "Human Daily Flow",
    category: "Smart City Media",
    lang: "de",
};