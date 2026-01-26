import {IProvince} from "../model/ISmartMobility"

export const ChiangMaiNL: IProvince = {
    vision: {
        title: "Visie: Chiang Mai Smart Mobility & Northern Gateway",
        description:
            "Chiang Mai Smart Mobility & Northern Gateway is een langetermijnscenario voor toekomstige mobiliteit dat onderzoekt hoe Chiang Mai kan worden geïnterpreteerd als een strategisch knooppunt voor vervoer, toerisme en regionale connectiviteit binnen de Boven-Mekongregio. Door een hypothetische verplaatsing van het primaire mobiliteitshub naar de San Sai–Doi Saket-corridor te verkennen, analyseert dit scenario mogelijke vermindering van congestie in de historische binnenstad, ruimtelijke herverdeling van economische activiteiten en veranderingen in duurzame toeristische, logistieke en interregionale verbindingspatronen met Chiang Rai, Lampang en aangrenzende gebieden.",
        link: "/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway",
        media: {
            image_url: "/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway.png",
            image_tags: ["toekomstig mobiliteitsscenario", "conceptuele visualisatie", "niet-bindende afbeelding"]
        },
        safeStatement: {
            title: "Aanvullende toelichting",
            description:
                "Alle luchtmobiliteits- en toekomstige vervoerselementen op deze website zijn gebaseerd op conceptuele scenario’s en vormen geen indicatie van regelgevingstoestemming, technische haalbaarheid, certificeringsstatus of operationele gereedheid door enige luchtvaart-, transport- of overheidsinstantie."
        }
    },

    urbanHub: {
        title: "Nieuw stedelijk centrum (Hub: San Sai – Doi Saket)",
        description:
            "Het stedelijk hubconcept San Sai–Doi Saket is een scenario-gebaseerde interpretatie van een mogelijk toekomstig smart-mobilitycentrum voor Chiang Mai, geïnspireerd op TOD-principes (Transit-Oriented Development). Het dient om op lange termijn te verkennen hoe mobiliteitssystemen, stedelijke functies en economische activiteiten zich rond een nieuw stedelijk zwaartepunt zouden kunnen organiseren.",
        link: "/smart-mobility/chiang-mai/urban-hub-san-sai-doi-saket",
        items: [
            {
                title: "Primaire rol van de hub",
                description:
                    "Gepresenteerd als een conceptueel multimodaal knooppunt dat in een langetermijnscenario de potentiële relaties tussen spoor-, weg- en luchtmobiliteitssystemen verkent."
            },
            {
                title: "Belangrijke infrastructuurelementen",
                description: "",
                contents: [
                    {
                        title: "Centraal station",
                        description:
                            "Een conceptuele geïntegreerde mobiliteitsfaciliteit die is bedoeld om overstapervaringen en mogelijke tariefintegratie tussen meerdere vervoersvormen te illustreren."
                    },
                    {
                        title: "Slim parkeren",
                        description:
                            "Een scenario-gebaseerd concept voor grootschalig intelligent parkeren ter illustratie van park-and-ride-strategieën gericht op het verminderen van autoverkeer richting het stadscentrum."
                    },
                    {
                        title: "Commerciële en residentiële zones",
                        description:
                            "Een beschrijvende opzet die de mogelijkheid van gemengd gebruik (commercieel, hospitality en wonen) verkent ter ondersteuning van een zelfvoorzienend stedelijk district."
                    }
                ]
            }
        ],
        media: {
            image_url: "/smart-mobility/chiang-mai/urban-hub-san-sai-doi-saket.png",
            image_tags: ["toekomstig mobiliteitsscenario", "conceptuele visualisatie", "niet-bindende afbeelding"]
        }
    },

    connectivityMatrix: {
        title: "Toekomstige connectiviteitsmatrix",
        description:
            "De connectiviteitsmatrix is een toekomstgericht analytisch raamwerk dat beschrijft hoe de San Sai–Doi Saket-hub zich theoretisch zou kunnen verbinden met Chiang Mai en omliggende belangrijke bestemmingen, op basis van afstand, terrein en verplaatsingskenmerken.",
        routes: [
            {
                title: "Hub – Chiang Mai International Airport (stedelijke–luchtvaartverbinding)",
                description:
                    "Een scenario-gebaseerde mobiliteitscorridor die illustreert hoe stedelijke en luchthavenverbindingen conceptueel kunnen worden benaderd met nadruk op betrouwbaarheid, voorspelbaarheid en netwerkintegratie.",
                link: "/smart-mobility/chiang-mai/hub-to-chiang-mai-airport",
                transportationModel: {
                    title: "Vervoersmodel: LRT of monorail",
                    description: "",
                    sections: [
                        {
                            title: "Belangrijkste uitdagingen",
                            description:
                                "Stedelijke congestie, beperkingen in landgebruik en hoge woondichtheid."
                        },
                        {
                            title: "Route-strategie",
                            description:
                                "Een veronderstelde conceptuele uitlijning langs een buitenring om de historische stad te vermijden, met een beschrijving van mogelijke reistijdbandbreedtes tussen hub en luchthaven binnen het scenario."
                        },
                        {
                            title: "Speciale systemen",
                            description:
                                "Conceptuele diensten die verkennen hoe bagageafhandeling en overstapervaringen binnen een toekomstig mobiliteitsecosysteem zouden kunnen worden herzien."
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-chiang-mai-airport.png",
                    image_tags: ["toekomstig mobiliteitsscenario", "conceptuele visualisatie", "niet-bindende afbeelding"]
                }
            },
            {
                title: "Hub – Doi Suthep (culturele en landschappelijke route)",
                description:
                    "Een conceptueel mobiliteitsscenario dat culturele erfgoedlocaties en natuurlijke landschappen verbindt via laag-impact, bezoekersgerichte vervoersideeën.",
                link: "/smart-mobility/chiang-mai/hub-to-doi-suthep",
                transportationModel: {
                    title: "Vervoersmodel: EV-shuttle + eVTOL",
                    description: "",
                    sections: [
                        {
                            title: "Belangrijkste uitdagingen",
                            description:
                                "Bergachtig terrein, ecologische gevoeligheid en fluctuerende bezoekersvraag."
                        },
                        {
                            title: "Openbaar vervoer",
                            description:
                                "Een EV-shuttleconcept dat de afhankelijkheid van privéauto’s vermindert via overstap-gebaseerde toegang van de hub naar een voetheuvel-transferpunt."
                        },
                        {
                            title: "Luchtroute (premium)",
                            description:
                                "Een eVTOL-verplaatsingsscenario dat landschappelijke vluchtmogelijkheden en hypothetische toegang tot virtuele vertiports nabij aangewezen herkenningspunten beschrijft."
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-doi-suthep.png",
                    image_tags: ["toekomstig mobiliteitsscenario", "conceptuele visualisatie", "niet-bindende afbeelding"]
                }
            },
            {
                title: "Hub – Doi Inthanon (natuur- en avonturenroute)",
                description:
                    "Een toekomstgericht scenario dat langeafstandsverplaatsingen naar natuur- en avonturenbestemmingen verkent, met nadruk op belevingsontwerp en milieubewuste overwegingen.",
                link: "/smart-mobility/chiang-mai/hub-to-doi-inthanon",
                transportationModel: {
                    title: "Vervoersmodel: snelle feeder + langeafstand eVTOL",
                    description: "",
                    sections: [
                        {
                            title: "Belangrijkste uitdagingen",
                            description:
                                "Lange afstanden, langdurige wegverplaatsingen en complex bergachtig terrein."
                        },
                        {
                            title: "Express feeder",
                            description:
                                "Een concept voor snel bus- of minibusvervoer dat een directe verbinding tussen de hub en het Chom Thong-gebied verkent."
                        },
                        {
                            title: "Toekomstige technologie (verkennend)",
                            description:
                                "Een speculatief langeafstand eVTOL-scenario dat onderzoekt hoe percepties van reistijd binnen toekomstige mobiliteitsdiscussies zouden kunnen veranderen."
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-doi-inthanon.png",
                    image_tags: ["toekomstig mobiliteitsscenario", "conceptuele visualisatie", "niet-bindende afbeelding"]
                }
            }
        ]
    },

    vertiportDesign: {
        title: "Vertiport: slimme luchtmobiliteitsgateway",
        description:
            "De vertiport is een toekomstgericht luchtmobiliteitsscenario dat onderzoekt hoe laagvliegende luchtvaartconcepten theoretisch zouden kunnen worden geïntegreerd met stedelijke gebieden, luchthavens, bergregio’s en toeristische bestemmingen.",
        link: "/smart-mobility/chiang-mai/vertiport-design",
        structureTitle: "Vertiport-structuur (scenario-gebaseerd)",
        structure: [
            {
                title: "Landingszones",
                items: [
                    {title: "Conceptuele landingszones ter illustratie van mogelijke eVTOL-operaties in toekomstige scenario’s"},
                    {title: "Visuele geleidingselementen geïnspireerd op luchtvaartomgevingen"},
                    {title: "Meerniveau-ruimtelijke opzet met nadruk op veiligheid"}
                ]
            },
            {
                title: "Terminalruimtes",
                items: [
                    {title: "Concept voor passagierslounges met stedelijk en bergzicht"},
                    {title: "Conceptuele weergave van circulatie- en check-instromen"},
                    {title: "Faciliteiten ontworpen ter ondersteuning van internationale bezoekersstromen"}
                ]
            },
            {
                title: "Grondverbindingen",
                items: [
                    {title: "Conceptuele integratie met snelwegtoegang en slimme wegen"},
                    {title: "EV-parkeren en koppeling met autonome shuttles"}
                ]
            },
            {
                title: "Luchtruimcoördinatie",
                items: [
                    {title: "Conceptuele representatie van niet-kruisende vluchtpaden"},
                    {title: "Lage-luchtruimcoördinatie geïnspireerd op internationaal besproken kaders"}
                ]
            }
        ],
        media: {
            image_url: "/smart-mobility/chiang-mai/vertiport-design.png",
            image_tags: ["toekomstig mobiliteitsscenario", "conceptuele visualisatie", "niet-bindende afbeelding"]
        }
    },

    technologyIntegration: {
        title: "Technologie-integratie",
        description:
            "Dit scenario veronderstelt digitale, data- en energie-integratiesystemen uitsluitend als conceptuele uitgangspunten en niet als bevestigde implementaties.",
        items: [
            {
                title: "MaaS (Mobility as a Service)",
                description:
                    "Een platformconcept dat is bedoeld om geïntegreerde verkenning van reisplanning, reservering en betaling over meerdere vervoersmodaliteiten mogelijk te maken."
            },
            {
                title: "Drone-luchtruimbeheer",
                description:
                    "Een concept voor lage-luchtruimcoördinatie gericht op het onderzoeken van veiligheid, efficiëntie en regelgevingsconsistentie."
            },
            {
                title: "Groene energie-infrastructuur",
                description:
                    "Een beschrijving van hernieuwbare energie- en opslagconcepten die mogelijk narratieven rond EV- en eVTOL-gebruik ondersteunen."
            }
        ]
    },

    summaryExpectedResults: {
        title: "Samengevatte inzichten en strategische implicaties",
        description:
            "Dit scenario laat zien hoe mobiliteit, toerisme en economische systemen in Chiang Mai zich onder verschillende langetermijnaannames zouden kunnen ontwikkelen.",
        items: [
            {
                title: "Vermindering van stedelijke congestie",
                description:
                    "Illustreert hoe druk op historische stedelijke gebieden onder specifieke herconfiguratiebenaderingen van mobiliteit zou kunnen afnemen."
            },
            {
                title: "Ontstaan van nieuwe economische zones",
                description:
                    "Toont hoe ontwikkelingsinteresse zich mogelijk verplaatst naar alternatieve groeicorridors."
            },
            {
                title: "Internationale toeristische differentiatie",
                description:
                    "Verkent het potentieel van geavanceerde mobiliteitsconcepten om bij te dragen aan onderscheidende toeristische narratieven."
            },
            {
                title: "Gefaseerde strategische inzichten",
                description:
                    "Suggeert dat op grond gebaseerde EV-mobiliteit eerder zou kunnen worden verkend dan spoor- of luchtsystemen, afhankelijk van governance-, technologische en infrastructurele randvoorwaarden."
            }
        ]
    }
}