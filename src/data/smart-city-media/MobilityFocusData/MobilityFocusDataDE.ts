//data/smart-city-media/MobilityFocusDataDE.ts

import {IMobilityFocus} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const MobilityFocusDataDE: IMobilityFocus = {
    headline: "Mobilität wird beobachtet, bevor sie verstanden wird",
    paragraph:
        "Menschen setzen sich nicht immer direkt mit Mobilitätssystemen auseinander. Sie begegnen ihnen in kleinen Situationen — beim Überqueren einer Straße, beim Warten auf eine Fahrt oder beim Teilen von Raum mit anderen. Wenn Mobilität konsistent funktioniert, tritt sie weniger in den Vordergrund der Aufmerksamkeit und unterstützt routinemäßige Bewegung im Alltag.",

    signals: [
        {
            title: "Vorhersehbare Bewegung in geteilten Straßen",
            description:
                "Koordinierte Mobilität kann Unsicherheit in Bewegungsabläufen verringern. Fußgänger können mit klareren Erwartungen queren, Fahrzeuge reduzieren ihre Geschwindigkeit unter Bedingungen geteilter Straßen, und geteilte Straßen können mit weniger Stress interpretiert werden. Vorhersehbarkeit kann zur Alltagssicherheit beitragen.",
            image: {
                url: "/smart-city/mobility-focus/predictable-shared-street.png",
                alt: "Städtische Straße, auf der Fußgänger, Elektrofahrzeuge und Lieferroboter ruhig mit klaren visuellen Hinweisen und vorhersehbarem Fluss unterwegs sind",
            },
            signalFocus: [
                "pedestrian confidence",
                "shared space",
                "predictability",
                "street readability"
            ],
            landingUrl: "/smart-city/mobility-focus-predictable-movement",
        },
        {
            title: "Koexistenz gemischter Mobilität",
            description:
                "Städtische Straßen können mehrere Verkehrsarten umfassen. Menschen können neben autonomen Fahrzeugen, kleinen Lieferrobotern und leichten elektrischen Verkehrsmitteln gehen. Unter Gestaltungsbedingungen, die die gemeinsame Nutzung unterstützen, muss keine einzelne Art die Aufmerksamkeit dominieren, und mehrere Arten können parallel betrieben werden.",
            image: {
                url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                alt: "Stadtstraße mit Fußgängern, autonomen Elektrofahrzeugen, kleinen Lieferrobotern und Scootern, die den Raum gemeinsam nutzen",
            },
            signalFocus: [
                "mixed mobility",
                "autonomous vehicles",
                "delivery robots",
                "human-centered design"
            ],
            landingUrl: "/smart-city/mobility-focus-mixed-mobility",
        }
    ],
};