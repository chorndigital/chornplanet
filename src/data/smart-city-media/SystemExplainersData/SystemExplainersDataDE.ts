//data/smart-city-media/SystemExplainersDataDE.ts

import {ISystemExplainers} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const SystemExplainersDataDE: ISystemExplainers = {
    headline: "Systeme hinter alltäglicher Bewegung",
    paragraph:
        "Alltägliche Bewegung, die natürlich erscheint, wird häufig durch fortlaufende Koordination unterstützt. Diese Systeme erfordern selten direkte Aufmerksamkeit, beeinflussen jedoch, wie Städte in größerem Maßstab funktionieren.",

    systems: [
        {
            title: "Mobilitätskoordination",
            description:
                "Verkehrssignale, Fußgängerströme, autonome Fahrzeuge und öffentlicher Verkehr arbeiten innerhalb abgestimmter Zeitabläufe. Unter stabilen Bedingungen kann Bewegung kontinuierlicher wirken, anstatt ausdrücklich gesteuert zu erscheinen.",
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "Urbane Mobilitätssysteme koordinieren Fußgänger, Fahrzeuge und autonomen Transport",
            },
        },
        {
            title: "Urbane Logistik",
            description:
                "Waren bewegen sich durch Städte über Lieferdienste, Mikrofahzeuge und automatisierte Systeme. Diese logistischen Abläufe unterstützen alltägliche Aktivitäten und können Störungen verringern, wenn sie in urbane Bewegungsmuster integriert sind.",
            image: {
                url: "/smart-city/system-explainers/urban-logistics.png",
                alt: "Alltägliche Logistik, die kontinuierlich durch Stadtstraßen betrieben wird",
            },
        },
        {
            title: "Gestaltung öffentlicher Räume",
            description:
                "Gehwege, Übergänge, Beleuchtung und Straßenaktivität beeinflussen, wie Menschen im Tagesverlauf Raum teilen. Diese Elemente wirken sich auf Bewegungsbedingungen und die allgemeine Nutzbarkeit öffentlicher Bereiche aus.",
            image: {
                url: "/smart-city/system-explainers/public-space-orchestration.png",
                alt: "Öffentlicher Raum, der gemeinsames urbanes Leben unterstützt",
            },
        },
    ],
};