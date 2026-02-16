//data/smart-city-media/UrbanSignalsDataDE.ts

import {IUrbanSignals} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const UrbanSignalsDataDE: IUrbanSignals = {
    headline: "Urbane Signale im Alltag beobachtet",
    paragraph:
        "Städte kommunizieren durch kleine, beobachtbare Signale — wie sich Straßen anfühlen, wie Menschen sich bewegen und wie sich Räume im Laufe der Zeit verändern. Diese Momente werden nicht immer als Systeme beschrieben, können jedoch anzeigen, wie urbane Bedingungen funktionieren.",

    signals: [
        {
            title: "Vorhersehbares Verhalten im Straßenraum",
            description:
                "Wenn Fußgänger, Radfahrende und Fahrzeuge sich mit klaren Erwartungen bewegen, kann dies gemeinsame Normen und räumliche Klarheit anzeigen, auch ohne ausdrückliche Durchsetzung.",

            signalFocus: ["predictability", "shared space", "human trust"],

            image: {
                url: "/smart-city/urban-signals/predictable-shared-street.png",
                alt: "Menschen, Fahrräder und Fahrzeuge bewegen sich gemeinsam flüssig auf einer geteilten städtischen Straße ohne sichtbare Staus oder Spannungen",
            },

            landingUrl: "/smart-city/urban-signals-predictable-street",
        },

        {
            title: "Logistik im Alltag integriert",
            description:
                "Lieferroboter, kleine Elektrofahrzeuge und Kuriere können arbeiten, ohne die Aufmerksamkeit zu dominieren, was darauf hinweisen kann, dass Logistik in tägliche Bewegungsmuster integriert ist.",

            signalFocus: ["logistics", "integration", "low friction"],

            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Kleine Lieferfahrzeuge und Roboter arbeiten ruhig neben dem alltäglichen Straßenleben in einer modernen Stadt",
            },

            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },

        {
            title: "Öffentlicher Raum wie vorgesehen genutzt",
            description:
                "Wenn Menschen verweilen, pausieren und Raum auf routinemäßige Weise teilen, kann dies eine Balance zwischen Bewegungseffizienz und Nutzbarkeit öffentlicher Bereiche widerspiegeln.",

            signalFocus: ["public space", "comfort", "social rhythm"],

            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "Menschen sitzen, gehen und interagieren in einem gut gestalteten öffentlichen urbanen Raum",
            },

            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
    ],
}