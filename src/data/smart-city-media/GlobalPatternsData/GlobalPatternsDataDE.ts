import {IGlobalPatterns} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const GlobalPatternsDataDE: IGlobalPatterns = {
    headline: "Globale Muster im städtischen Alltag",
    paragraph:
        "In Städten mit unterschiedlichen Kulturen, Größen und Einkommensniveaus werden zunehmend vergleichbare Mobilitäts- und Stadtraummuster beobachtet. Diese Muster entstehen nicht ausschließlich durch Technologie, sondern durch das Zusammenspiel menschlicher Routinen, räumlicher Rahmenbedingungen und systemischer Koordination über Zeit. Die Beobachtung dieser Signale trägt zum Verständnis bei, wie Städte in verschiedenen Regionen ähnliche betriebliche Tendenzen aufweisen und zugleich ihre lokale Identität bewahren.",

    signals: [
        {
            title: "Vorhersehbare Straßen unterstützen das öffentliche Leben",
            description:
                "Wenn Bewegungssysteme vorhersehbar sind, entsteht mehr Sicherheit in gemeinsam genutzten Räumen. In verschiedenen Regionen werden Straßen, die Unsicherheit reduzieren statt Geschwindigkeit zu maximieren, mit stabilerer und komfortablerer Nutzung öffentlicher Räume in Verbindung gebracht.",
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "Eine ruhige Shared Street, auf der sich Fußgänger, Radfahrer und Fahrzeuge vorhersehbar bewegen"
            },
            signalFocus: [
                "shared streets",
                "predictable mobility",
                "human comfort",
                "street behavior"
            ],
            landingUrl: "/smart-city/global-patterns-predictable-shared-street"
        },
        {
            title: "Gemischte Mobilität wird zunehmend im urbanen Kontext beobachtet",
            description:
                "Zu Fuß gehen, Radfahren, E-Scooter, kleine Elektrofahrzeuge und Lieferroboter sind in vielen Städten zunehmend präsent. In unterschiedlichen Regionen werden Mobilitätsumgebungen so strukturiert, dass mehrere Verkehrsformen koexistieren können, als Reaktion auf räumliche und betriebliche Anforderungen.",
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Mehrere Mobilitätsformen koexistieren in einer städtischen Umgebung"
            },
            signalFocus: [
                "mixed mobility",
                "coexistence",
                "last-mile movement",
                "urban adaptation"
            ],
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence"
        },
        {
            title: "Integration urbaner Logistik in tägliche Systeme",
            description:
                "Kleinskalige Logistik, einschließlich lokaler Lieferfahrzeuge, bodengebundener Roboter und Luftsysteme, sofern zulässig, wird zunehmend in den städtischen Alltag integriert. Städte, die Logistik innerhalb bestehender räumlicher und sicherheitsbezogener Rahmen koordinieren, erhalten in der Regel den öffentlichen Komfort bei gleichzeitiger Verbesserung der betrieblichen Effizienz.",
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "Kleine Lieferfahrzeuge und Roboter im städtischen Einsatz"
            },
            signalFocus: [
                "urban logistics",
                "last-mile delivery",
                "system coordination",
                "integrated infrastructure"
            ],
            landingUrl: "/smart-city/global-patterns-urban-logistics"
        }
    ]
}