import {IProvince} from "../model/ISmartMobility"

export const ChiangMaiDA: IProvince = {
    vision: {
        title: "Vision: Chiang Mai Smart Mobility & Northern Gateway",
        description:
            "Chiang Mai Smart Mobility & Northern Gateway er et langsigtet fremtidsscenarie for mobilitet, der anvendes til at undersøge, hvordan Chiang Mai kan fortolkes som en strategisk transport-, turisme- og forbindelsesport inden for den øvre Mekong-underegion. Gennem en hypotetisk omlokalisering af et primært mobilitetshub til San Sai–Doi Saket-korridoren illustrerer dette scenarie mulige tilgange til aflastning af trængsel i den historiske bykerne, rumlig omfordeling af økonomisk aktivitet samt udviklende mønstre for bæredygtig turisme, logistik og regional sammenkobling med Chiang Rai, Lampang og nærliggende områder.",
        link: "/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway",
        media: {
            image_url: "/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway.png",
            image_tags: ["Fremtidigt mobilitetsscenarie", "Illustrativt koncept", "Ikke-bindende visualisering"]
        },
        safeStatement: {
            title: "Præciserende erklæring",
            description:
                "Alle luftmobilitets- og fremtidige transportelementer, der præsenteres på dette website, er udelukkende illustrative scenarier. De indebærer ikke regulatorisk godkendelse, teknisk gennemførlighed, certificeringsstatus eller implementeringsparathed under nogen luftfarts-, transport- eller statslig myndighed."
        }
    },

    urbanHub: {
        title: "Ny bykerne (The Hub: San Sai – Doi Saket)",
        description:
            "San Sai – Doi Saket Urban Hub repræsenterer en scenariebaseret fortolkning af en fremtidig Smart Mobility-kerne for Chiang Mai, konceptuelt inspireret af principperne for Transit-Oriented Development (TOD). Formålet er at illustrere, hvordan mobilitetssystemer, byfunktioner og økonomiske aktiviteter potentielt kan struktureres inden for en ny bykerne over en udvidet planlægningshorisont.",
        link: "/smart-mobility/chiang-mai/urban-hub-san-sai-doi-saket",
        items: [
            {
                title: "Hubbens primære rolle",
                description:
                    "Illustreret som et konceptuelt intermodalt knudepunkt, der undersøger mulige relationer mellem skinne-, vej- og luftbaserede mobilitetssystemer i en langsigtet scenariekontekst."
            },
            {
                title: "Væsentlige infrastrukturelementer",
                description: "",
                contents: [
                    {
                        title: "Centralstation",
                        description:
                            "Et konceptuelt samlet mobilitetsanlæg, der illustrerer integreret billetlogik og koordinerede skifteoplevelser på tværs af flere transportformer."
                    },
                    {
                        title: "Smart parkering",
                        description:
                            "Scenariebaserede koncepter for intelligent parkering i stor skala, der illustrerer Park & Ride-strategier med henblik på at reducere privatbiltrafik i centrale byområder."
                    },
                    {
                        title: "Erhvervs- og boligområde",
                        description:
                            "Illustrative koncepter for blandet byudvikling – herunder erhverv, turisme og boligfunktioner – anvendt til at udforske ideen om et selvbærende bydistrikt."
                    }
                ]
            }
        ],
        media: {
            image_url: "/smart-mobility/chiang-mai/urban-hub-san-sai-doi-saket.png",
            image_tags: ["Fremtidigt mobilitetsscenarie", "Illustrativt koncept", "Ikke-bindende visualisering"]
        }
    },

    connectivityMatrix: {
        title: "Fremtidig forbindelsesmatrix",
        description:
            "Forbindelsesmatricen præsenterer en fremtidsorienteret analytisk ramme, der illustrerer, hvordan San Sai–Doi Saket-hubben teoretisk kan relateres til centrale destinationer i og omkring Chiang Mai ved hjælp af transportformer, der er afstemt efter afstand, terræn og rejsekarakteristika.",
        routes: [
            {
                title: "Hub – Chiang Mai Internationale Lufthavn (By- og luftforbindelse)",
                description:
                    "En scenariebaseret mobilitetskorridor, der illustrerer, hvordan forbindelsen mellem by og lufthavn kan konceptualiseres med fokus på pålidelighed, forudsigelighed og netværksintegration.",
                link: "/smart-mobility/chiang-mai/hub-to-chiang-mai-airport",
                transportationModel: {
                    title: "Transportmodel: Letbane eller monorail",
                    description: "",
                    sections: [
                        {
                            title: "Væsentlige udfordringer",
                            description:
                                "Bymæssig trængsel, begrænsninger i arealanvendelse og høj tæthed af boligområder."
                        },
                        {
                            title: "Rutestrategi",
                            description:
                                "En konceptuel linjeføring langs den ydre ringvej for at omgå den historiske bykerne og illustrativt forbinde hubben med lufthavnen inden for et indikativt rejsetidsinterval baseret på scenarieantagelser."
                        },
                        {
                            title: "Særligt system",
                            description:
                                "Illustrative servicekoncepter, der undersøger, hvordan bagagehåndtering og skifteoplevelser kan gentænkes i fremtidige mobilitetsøkosystemer."
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-chiang-mai-airport.png",
                    image_tags: ["Fremtidigt mobilitetsscenarie", "Illustrativt koncept", "Ikke-bindende visualisering"]
                }
            },
            {
                title: "Hub – Doi Suthep (Kulturel og naturskøn rute)",
                description:
                    "Et scenarie, der illustrerer konceptuelle mobilitetsløsninger, som forbinder kulturarvsområder og naturlandskaber gennem besøgsfølsomme og lavpåvirkende transportidéer.",
                link: "/smart-mobility/chiang-mai/hub-to-doi-suthep",
                transportationModel: {
                    title: "Transportmodel: El-shuttle + eVTOL",
                    description: "",
                    sections: [
                        {
                            title: "Væsentlige udfordringer",
                            description:
                                "Bjergterræn, miljømæssig følsomhed og varierende besøgstal."
                        },
                        {
                            title: "Kollektiv transport",
                            description:
                                "El-shuttle-koncepter, der illustrerer mulig transferbaseret adgang fra hubben til foden af bjergområder for at reducere afhængigheden af privatbiler."
                        },
                        {
                            title: "Luftrute (Premium)",
                            description:
                                "Konceptuelle eVTOL-rejsefortællinger, der illustrerer naturskønne flyveoplevelser og hypotetisk adgang til vertiports nær udpegede vartegn."
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-doi-suthep.png",
                    image_tags: ["Fremtidigt mobilitetsscenarie", "Illustrativt koncept", "Ikke-bindende visualisering"]
                }
            },
            {
                title: "Hub – Doi Inthanon (Natur- og eventyrrute)",
                description:
                    "Et fremtidsorienteret scenarie, der undersøger koncepter for langdistance-rejser inden for natur og eventyr med fokus på oplevelsesdesign og miljøhensyn.",
                link: "/smart-mobility/chiang-mai/hub-to-doi-inthanon",
                transportationModel: {
                    title: "Transportmodel: Højhastigheds feeder + langtrækkende eVTOL",
                    description: "",
                    sections: [
                        {
                            title: "Væsentlige udfordringer",
                            description:
                                "Lange rejseafstande, tidskrævende vejtransport og komplekst bjergterræn."
                        },
                        {
                            title: "Ekspres-feeder",
                            description:
                                "Illustrative koncepter for ekspresbus eller minibus, der undersøger direkte forbindelser mellem hubben og Chom Thong-området."
                        },
                        {
                            title: "Fremtidig teknologi (undersøgende)",
                            description:
                                "Et spekulativt scenarie for langtrækkende eVTOL, anvendt til at udforske, hvordan rejsetidsfortællinger kan gentænkes i diskussioner om fremtidig mobilitet."
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-doi-inthanon.png",
                    image_tags: ["Fremtidigt mobilitetsscenarie", "Illustrativt koncept", "Ikke-bindende visualisering"]
                }
            }
        ]
    },

    vertiportDesign: {
        title: "Vertiport: Smart luftmobilitetsport",
        description:
            "Vertiporten repræsenterer et illustrativt fremtidsscenarie for luftmobilitet, der undersøger, hvordan lavtflyvende luftfartskoncepter teoretisk kan integreres med byområder, lufthavne, bjergregioner og turistdestinationer.",
        link: "/smart-mobility/chiang-mai/vertiport-design",
        structureTitle: "Illustrative vertiport-komponenter (scenariebaseret)",
        structure: [
            {
                title: "Landingsområder",
                items: [
                    {title: "Illustrative landingszoner, der repræsenterer mulig understøttelse af eVTOL-operationer i fremtidige scenarier"},
                    {title: "Konceptuelle visuelle vejledningselementer inspireret af luftfartsmiljøer"},
                    {title: "Flere niveauer af rumlig organisering, der illustrerer sikkerhedsorienterede designovervejelser"}
                ]
            },
            {
                title: "Terminalområder",
                items: [
                    {title: "Passagerlounge-koncepter orienteret mod by- og bjergudsigter"},
                    {title: "Illustrative koncepter for cirkulation og check-in-flow"},
                    {title: "Faciliteter konceptuelt designet til at understøtte internationale rejsestrømme"}
                ]
            },
            {
                title: "Integration på jorden",
                items: [
                    {title: "Konceptuel adgang fra motorvej og integration med Smart Road"},
                    {title: "Koncepter for el-parkering og grænseflader til autonome shuttles"}
                ]
            },
            {
                title: "Luftrumskoordination",
                items: [
                    {title: "Illustrative koncepter for ikke-krydsende flyveruter"},
                    {title: "Konceptuel koordinering af lavt luftrum inspireret af nye internationale rammeværk"}
                ]
            }
        ],
        media: {
            image_url: "/smart-mobility/chiang-mai/vertiport-design.png",
            image_tags: ["Fremtidigt mobilitetsscenarie", "Illustrativt koncept", "Ikke-bindende visualisering"]
        }
    },

    technologyIntegration: {
        title: "Teknologisk integration",
        description:
            "Dette scenarie forudsætter tilstedeværelsen af integrerede digitale, data- og energisystemer som konceptuelle muliggørere snarere end bekræftede implementeringer.",
        items: [
            {
                title: "MaaS (Mobility as a Service)",
                description:
                    "Et samlet platformskoncept, der illustrerer, hvordan end-to-end rejseplanlægning, booking og betaling kan udforskes på tværs af flere transportformer."
            },
            {
                title: "Styring af drone-luftrum",
                description:
                    "Illustrative koncepter for koordinering af lavt luftrum anvendt til at undersøge hensyn til sikkerhed, effektivitet og regulatorisk tilpasning."
            },
            {
                title: "Grøn energiinfrastruktur",
                description:
                    "Scenariebaserede koncepter for vedvarende energi og energilagring, der illustrerer mulig understøttelse af EV- og eVTOL-fortællinger."
            }
        ]
    },

    summaryExpectedResults: {
        title: "Illustrerede resultater og strategiske indsigter",
        description:
            "Dette scenarie illustrerer mulige retninger for, hvordan Chiang Mais mobilitet, turisme og økonomiske systemer kan udvikle sig under forskellige langsigtede antagelser.",
        items: [
            {
                title: "Reduceret bymæssig trængsel",
                description:
                    "Illustrerer, hvordan presset på historiske byområder potentielt kan mindskes under visse tilgange til omstrukturering af mobilitet."
            },
            {
                title: "Fremvækst af et nyt økonomisk område",
                description:
                    "Demonstrerer, hvordan udviklingsfokus kan forskydes mod alternative vækstkorridorer."
            },
            {
                title: "Global differentiering inden for turisme",
                description:
                    "Undersøger, hvordan avancerede mobilitetskoncepter kan bidrage til differentierede turismefortællinger."
            },
            {
                title: "Indsigt i strategisk fasedeling",
                description:
                    "Indikerer, at jordbaserede el-mobilitetskoncepter kan forudgå skinne- og luftbaserede systemer, efterhånden som styringsmæssige, teknologiske og infrastrukturelle forhold modnes."
            }
        ]
    }
}