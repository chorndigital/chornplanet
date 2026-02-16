//data/smart-city-media/LocalToGlobalDataDE.ts

import {ILocalToGlobal} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const LocalToGlobalDataDE: ILocalToGlobal = {
    headline: "Vom lokalen Kontext zu globalen Mustern",
    paragraph:
        "Urbane Aktivität wird in der Regel innerhalb lokaler und spezifischer Kontexte wahrgenommen. Wenn ähnliche Bedingungen in verschiedenen Städten, Regionen und Kulturen beobachtet werden, lassen sich wiederkehrende Muster erkennen. Der Vergleich alltäglicher Situationen zwischen unterschiedlichen Orten ermöglicht die Analyse gemeinsamer struktureller Systeme.",

    items: [
        {
            title: "Eine Routine auf Straßenebene",
            description:
                "Tägliche Bewegung entlang einer vertrauten Straße verdeutlicht, wie Individuen auf räumliche Bedingungen, zeitliche Strukturen und Mobilitätssysteme reagieren. Trotz lokaler Besonderheiten spiegeln diese Routinen zugrunde liegende strukturelle Muster wider, die durch Stadtgestaltung geprägt sind.",
            image: {
                url: "/smart-city/local-to-global/local-street-daily-routine.png",
                alt: "Alltägliche urbane Straßenszene mit Fußgängern, lokalen Geschäften und in Betrieb befindlichen Mobilitätssystemen",
            },
            signalFocus: ["human routine", "street-level mobility", "local behavior"],
        },
        {
            title: "Wiederkehrende Muster in verschiedenen Städten",
            description:
                "Wenn ähnliche Bewegungsstrukturen in mehreren Städten beobachtet werden, weisen sie auf vergleichbare strukturelle Bedingungen hin. Lokal beobachtete Aktivitäten können daher als Teil umfassenderer urbaner Systemdynamiken über Regionen hinweg analysiert werden.",
            image: {
                url: "/smart-city/local-to-global/global-urban-pattern.png",
                alt: "Urbane Umgebung mit vergleichbaren Mobilitätsflüssen, Logistiksystemen und Nutzung öffentlicher Räume in unterschiedlichen Städten",
            },
            signalFocus: ["replicability", "urban density", "systemic flow"],
        },
    ],

    purpose: "Breitere strukturelle Muster durch lokalen Vergleich analysieren",
    narrativeRole: "Beobachtete lokale Aktivität mit systemischer Analyse verbinden",
    section: "From Local Life to Global Pattern",
    category: "Smart City Media",
    landingUrl: "/smart-city/from-local-life-to-global-pattern",
    lang: "de",
};