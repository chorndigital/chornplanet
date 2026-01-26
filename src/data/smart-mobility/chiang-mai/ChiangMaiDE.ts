import {IProvince} from "../model/ISmartMobility"

export const ChiangMaiDE: IProvince = {
    vision: {
        title: "Vision: Chiang Mai Smart Mobility & Northern Gateway",
        description:
            "Chiang Mai Smart Mobility & Northern Gateway ist ein langfristiges Zukunftsszenario für Mobilität, das dazu dient, zu untersuchen, wie Chiang Mai als strategisches Transport-, Tourismus- und Konnektivitätsdrehkreuz innerhalb der Oberen Mekong-Subregion interpretiert werden könnte. Durch die Betrachtung einer hypothetischen Verlagerung eines primären Mobilitätshubs in den Korridor San Sai–Doi Saket veranschaulicht dieses Szenario mögliche Ansätze zur Entlastung des Verkehrs in der historischen Altstadt, zur räumlichen Umverteilung wirtschaftlicher Aktivitäten sowie zur Entwicklung nachhaltiger Muster in Tourismus, Logistik und regionaler Vernetzung mit Chiang Rai, Lampang und angrenzenden Gebieten.",
        link: "/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway",
        media: {
            image_url: "/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway.png",
            image_tags: ["Zukunftsszenario Mobilität", "Illustratives Konzept", "Unverbindliche Visualisierung"]
        },
        safeStatement: {
            title: "Klarstellende Erklärung",
            description:
                "Alle auf dieser Website dargestellten Elemente der Luftmobilität und des zukünftigen Verkehrs sind ausschließlich illustrative Szenarien. Sie implizieren weder eine regulatorische Genehmigung noch technische Machbarkeit, Zertifizierungsstatus oder Umsetzungsbereitschaft durch eine Luftfahrt-, Verkehrs- oder staatliche Behörde."
        }
    },

    urbanHub: {
        title: "Neuer urbaner Kern (The Hub: San Sai – Doi Saket)",
        description:
            "Der urbane Hub San Sai – Doi Saket stellt eine szenariobasierte Interpretation eines zukünftigen Smart-Mobility-Kerns für Chiang Mai dar, konzeptionell orientiert an den Prinzipien der Transit-Oriented Development (TOD). Er dient dazu, zu veranschaulichen, wie Mobilitätssysteme, urbane Funktionen und wirtschaftliche Aktivitäten über einen erweiterten Planungshorizont in einem neuen Stadtkern strukturiert werden könnten.",
        link: "/smart-mobility/chiang-mai/urban-hub-san-sai-doi-saket",
        items: [
            {
                title: "Primäre Rolle des Hubs",
                description:
                    "Dargestellt als konzeptioneller intermodaler Knotenpunkt zur Untersuchung potenzieller Wechselwirkungen zwischen schienen-, straßen- und luftbasierten Mobilitätssystemen im Kontext langfristiger Szenarien."
            },
            {
                title: "Zentrale Infrastrukturkomponenten",
                description: "",
                contents: [
                    {
                        title: "Zentralstation",
                        description:
                            "Eine konzeptionelle integrierte Mobilitätseinrichtung, die eine einheitliche Ticketlogik und koordinierte Umsteigeprozesse über mehrere Verkehrsträger hinweg veranschaulicht."
                    },
                    {
                        title: "Intelligentes Parken",
                        description:
                            "Szenariobasierte Konzepte für großflächige intelligente Parklösungen, die Park-and-Ride-Strategien zur Reduzierung des Individualverkehrs in zentralen Stadtbereichen illustrieren."
                    },
                    {
                        title: "Gewerbe- und Wohnzone",
                        description:
                            "Illustrative Konzepte für gemischt genutzte Entwicklungen – einschließlich Gewerbe-, Tourismus- und Wohnfunktionen – zur Untersuchung der Idee eines in sich geschlossenen urbanen Distrikts."
                    }
                ]
            }
        ],
        media: {
            image_url: "/smart-mobility/chiang-mai/urban-hub-san-sai-doi-saket.png",
            image_tags: ["Zukunftsszenario Mobilität", "Illustratives Konzept", "Unverbindliche Visualisierung"]
        }
    },

    connectivityMatrix: {
        title: "Zukünftige Konnektivitätsmatrix",
        description:
            "Die Konnektivitätsmatrix stellt einen zukunftsorientierten analytischen Rahmen dar, der veranschaulicht, wie der Hub San Sai–Doi Saket theoretisch mit zentralen Zielen in und um Chiang Mai in Beziehung stehen könnte, unter Nutzung von Verkehrsmitteln, die an Entfernung, Topografie und Reisecharakteristika angepasst sind.",
        routes: [
            {
                title: "Hub – Internationaler Flughafen Chiang Mai (Stadt- und Luftanbindung)",
                description:
                    "Ein szenariobasierter Mobilitätskorridor, der veranschaulicht, wie die Anbindung zwischen Stadt und Flughafen mit Schwerpunkt auf Zuverlässigkeit, Planbarkeit und Netzwerkintegration konzipiert werden könnte.",
                link: "/smart-mobility/chiang-mai/hub-to-chiang-mai-airport",
                transportationModel: {
                    title: "Verkehrsmodell: Stadtbahn oder Monorail",
                    description: "",
                    sections: [
                        {
                            title: "Zentrale Herausforderungen",
                            description:
                                "Städtische Verkehrsüberlastung, Einschränkungen der Flächennutzung und hohe Dichte von Wohngebieten."
                        },
                        {
                            title: "Routenstrategie",
                            description:
                                "Eine konzeptionelle Trassenführung entlang des äußeren Ringstraßensystems zur Umfahrung der Altstadt und zur illustrativen Verbindung des Hubs mit dem Flughafen innerhalb eines indikativ angenommenen Reisezeitraums."
                        },
                        {
                            title: "Spezialsystem",
                            description:
                                "Illustrative Servicekonzepte zur Untersuchung, wie Gepäckabfertigung und Umsteigeerlebnisse in zukünftigen Mobilitätsökosystemen neu gedacht werden könnten."
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-chiang-mai-airport.png",
                    image_tags: ["Zukunftsszenario Mobilität", "Illustratives Konzept", "Unverbindliche Visualisierung"]
                }
            },
            {
                title: "Hub – Doi Suthep (Kulturelle und landschaftliche Route)",
                description:
                    "Ein Szenario zur Veranschaulichung konzeptioneller Mobilitätsansätze, die Kulturstätten und Naturlandschaften durch besuchersensible und gering belastende Transportideen miteinander verbinden.",
                link: "/smart-mobility/chiang-mai/hub-to-doi-suthep",
                transportationModel: {
                    title: "Verkehrsmodell: Elektro-Shuttle + eVTOL",
                    description: "",
                    sections: [
                        {
                            title: "Zentrale Herausforderungen",
                            description:
                                "Gebirgstopografie, ökologische Sensibilität und schwankende Besucherzahlen."
                        },
                        {
                            title: "Öffentlicher Verkehr",
                            description:
                                "Konzepte für Elektro-Shuttles, die eine transferbasierte Erschließung vom Hub zu vorgelagerten Sammelpunkten veranschaulichen, um die Abhängigkeit vom Individualverkehr zu reduzieren."
                        },
                        {
                            title: "Luftbasierte Route (Premium)",
                            description:
                                "Konzeptionelle eVTOL-Reisenarrative, die landschaftliche Flugerlebnisse und hypothetischen Zugang zu Vertiports in der Nähe ausgewählter Wahrzeichen illustrieren."
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-doi-suthep.png",
                    image_tags: ["Zukunftsszenario Mobilität", "Illustratives Konzept", "Unverbindliche Visualisierung"]
                }
            },
            {
                title: "Hub – Doi Inthanon (Natur- und Abenteuerroute)",
                description:
                    "Ein zukunftsorientiertes Szenario zur Untersuchung von Konzepten für Fernreisen im Natur- und Abenteuertourismus mit Fokus auf Erlebnisgestaltung und Umweltaspekte.",
                link: "/smart-mobility/chiang-mai/hub-to-doi-inthanon",
                transportationModel: {
                    title: "Verkehrsmodell: Hochgeschwindigkeits-Feeder + Langstrecken-eVTOL",
                    description: "",
                    sections: [
                        {
                            title: "Zentrale Herausforderungen",
                            description:
                                "Große Entfernungen, lange Fahrzeiten auf der Straße und komplexes Gebirgsgelände."
                        },
                        {
                            title: "Express-Feeder",
                            description:
                                "Illustrative Konzepte für Expressbus- oder Van-Verbindungen zur Untersuchung direkter Anbindungen zwischen dem Hub und dem Gebiet Chom Thong."
                        },
                        {
                            title: "Zukunftstechnologie (explorativ)",
                            description:
                                "Ein spekulatives Langstrecken-eVTOL-Szenario zur Untersuchung, wie Reisezeitnarrative im Kontext zukünftiger Mobilität neu gerahmt werden könnten."
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-doi-inthanon.png",
                    image_tags: ["Zukunftsszenario Mobilität", "Illustratives Konzept", "Unverbindliche Visualisierung"]
                }
            }
        ]
    },

    vertiportDesign: {
        title: "Vertiport: Gateway für intelligente Luftmobilität",
        description:
            "Der Vertiport stellt ein illustratives Zukunftsszenario der Luftmobilität dar, das untersucht, wie Konzepte der Niedrigflughöhen-Luftfahrt theoretisch mit urbanen Räumen, Flughäfen, Gebirgsregionen und touristischen Zielen interagieren könnten.",
        link: "/smart-mobility/chiang-mai/vertiport-design",
        structureTitle: "Illustrative Vertiport-Komponenten (szenariobasiert)",
        structure: [
            {
                title: "Landebereiche",
                items: [
                    {title: "Illustrative Landezonen zur Darstellung potenzieller eVTOL-Betriebe in zukünftigen Szenarien"},
                    {title: "Konzeptionelle visuelle Leitelemente, inspiriert von luftfahrtbezogenen Umgebungen"},
                    {title: "Mehrstufige räumliche Anordnungen zur Illustration sicherheitsorientierter Gestaltungsüberlegungen"}
                ]
            },
            {
                title: "Terminalbereiche",
                items: [
                    {title: "Passagierlounge-Konzepte mit Ausrichtung auf Stadt- und Bergblicke"},
                    {title: "Illustrative Konzepte für Zirkulation und Check-in-Abläufe"},
                    {title: "Konzeptionell gestaltete Einrichtungen zur Unterstützung internationaler Besucherströme"}
                ]
            },
            {
                title: "Bodenintegration",
                items: [
                    {title: "Konzeptionelle Anbindung an Schnellstraßen und Integration in Smart-Road-Konzepte"},
                    {title: "Konzepte für Ladeinfrastruktur, Parkbereiche und Schnittstellen zu autonomen Shuttles"}
                ]
            },
            {
                title: "Luftraumkoordination",
                items: [
                    {title: "Illustrative Konzepte für sich nicht kreuzende Flugrouten"},
                    {title: "Konzeptionelle Koordination des niedrigen Luftraums, inspiriert von entstehenden internationalen Rahmenwerken"}
                ]
            }
        ],
        media: {
            image_url: "/smart-mobility/chiang-mai/vertiport-design.png",
            image_tags: ["Zukunftsszenario Mobilität", "Illustratives Konzept", "Unverbindliche Visualisierung"]
        }
    },

    technologyIntegration: {
        title: "Technologische Integration",
        description:
            "Dieses Szenario geht von der Existenz integrierter digitaler, datenbasierter und energetischer Systeme als konzeptionelle Ermöglicher aus und nicht von bestätigten Implementierungen.",
        items: [
            {
                title: "MaaS (Mobility as a Service)",
                description:
                    "Ein integriertes Plattformkonzept zur Illustration, wie durchgängige Reiseplanung, Buchung und Zahlung über mehrere Verkehrsträger hinweg untersucht werden könnten."
            },
            {
                title: "Luftraummanagement für Drohnen",
                description:
                    "Illustrative Konzepte zur Koordination des niedrigen Luftraums, die zur Untersuchung von Sicherheits-, Effizienz- und regulatorischen Aspekten dienen."
            },
            {
                title: "Grüne Energieinfrastruktur",
                description:
                    "Szenariobasierte Konzepte für erneuerbare Energie und Energiespeicherung zur Illustration potenzieller Unterstützung für EV- und eVTOL-Narrative."
            }
        ]
    },

    summaryExpectedResults: {
        title: "Illustrierte Ergebnisse und strategische Erkenntnisse",
        description:
            "Dieses Szenario veranschaulicht mögliche Entwicklungsrichtungen für Mobilität, Tourismus und wirtschaftliche Systeme in Chiang Mai unter unterschiedlichen langfristigen Annahmen.",
        items: [
            {
                title: "Reduzierte urbane Verkehrsbelastung",
                description:
                    "Veranschaulicht, wie der Druck auf historische Stadtbereiche unter bestimmten Ansätzen zur Neustrukturierung von Mobilität gemindert werden könnte."
            },
            {
                title: "Entstehung einer neuen Wirtschaftszone",
                description:
                    "Demonstriert, wie sich der Entwicklungsschwerpunkt auf alternative Wachstumskorridore verlagern könnte."
            },
            {
                title: "Globale Differenzierung im Tourismus",
                description:
                    "Untersucht, wie fortschrittliche Mobilitätskonzepte zu differenzierten Tourismusnarrativen beitragen könnten."
            },
            {
                title: "Einblick in strategische Phasierung",
                description:
                    "Weist darauf hin, dass bodengebundene Elektromobilitätskonzepte Schienen- und luftbasierte Systeme zeitlich vorangehen könnten, während Governance-, Technologie- und Infrastrukturbedingungen reifen."
            }
        ]
    }
}