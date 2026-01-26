import {IProvince} from "../model/ISmartMobility"

export const ChiangMaiFR: IProvince = {
    vision: {
        title: "Vision : Mobilité intelligente de Chiang Mai et passerelle du Nord",
        description:
            "La Mobilité intelligente de Chiang Mai et la passerelle du Nord constituent un scénario de mobilité future à long terme visant à explorer comment Chiang Mai pourrait être interprétée comme une plateforme stratégique de transport, de tourisme et de connectivité régionale au sein du sous-région du Mékong supérieur. En examinant un déplacement hypothétique d’un pôle principal de mobilité vers le corridor San Sai–Doi Saket, ce scénario illustre des approches potentielles de réduction de la congestion dans la vieille ville, de redistribution spatiale des activités économiques, ainsi que l’évolution de modèles de tourisme durable, de logistique et de connectivité régionale reliant Chiang Rai, Lampang et les zones voisines.",
        link: "/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway",
        media: {
            image_url: "/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway.png",
            image_tags: ["Scénario de mobilité future", "Concept illustratif", "Visualisation non contraignante"]
        },
        safeStatement: {
            title: "Déclaration de clarification",
            description:
                "Tous les éléments liés à la mobilité aérienne et aux transports futurs présentés sur ce site sont exclusivement des scénarios illustratifs. Ils n’impliquent aucune approbation réglementaire, faisabilité technique, statut de certification ou préparation à la mise en œuvre au regard d’une quelconque autorité aéronautique, de transport ou gouvernementale."
        }
    },

    urbanHub: {
        title: "Nouveau cœur urbain (Le pôle : San Sai – Doi Saket)",
        description:
            "Le pôle urbain de San Sai – Doi Saket représente une interprétation fondée sur des scénarios d’un futur noyau de mobilité intelligente pour Chiang Mai, conceptuellement inspirée des principes de développement orienté vers les transports (TOD). Il vise à illustrer comment les systèmes de mobilité, les fonctions urbaines et les activités économiques pourraient être structurés au sein d’un nouveau centre urbain sur un horizon de planification étendu.",
        link: "/smart-mobility/chiang-mai/urban-hub-san-sai-doi-saket",
        items: [
            {
                title: "Rôle principal du pôle",
                description:
                    "Illustré comme un échangeur intermodal conceptuel explorant les relations potentielles entre les systèmes de mobilité ferroviaire, routière et aérienne dans un cadre de scénario à long terme."
            },
            {
                title: "Composants d’infrastructure clés",
                description: "",
                contents: [
                    {
                        title: "Gare centrale",
                        description:
                            "Installation de mobilité unifiée à caractère conceptuel illustrant une logique de billetterie intégrée et des expériences de correspondance coordonnées entre plusieurs modes de transport."
                    },
                    {
                        title: "Stationnement intelligent",
                        description:
                            "Concepts de stationnement intelligent à grande échelle fondés sur des scénarios, illustrant des stratégies de parc-relais visant à réduire la pénétration des véhicules privés dans les zones urbaines centrales."
                    },
                    {
                        title: "Zone commerciale et résidentielle",
                        description:
                            "Concepts illustratifs de développement à usage mixte — incluant des fonctions commerciales, hôtelières et résidentielles — destinés à explorer l’idée d’un quartier urbain autonome."
                    }
                ]
            }
        ],
        media: {
            image_url: "/smart-mobility/chiang-mai/urban-hub-san-sai-doi-saket.png",
            image_tags: ["Scénario de mobilité future", "Concept illustratif", "Visualisation non contraignante"]
        }
    },

    connectivityMatrix: {
        title: "Matrice de connectivité future",
        description:
            "La matrice de connectivité présente un cadre analytique orienté vers le futur illustrant comment le pôle de San Sai–Doi Saket pourrait, en théorie, se relier à des destinations clés de Chiang Mai et de ses environs, en utilisant des modes de transport adaptés à la distance, au relief et aux caractéristiques de déplacement.",
        routes: [
            {
                title: "Pôle – Aéroport international de Chiang Mai (liaison urbaine et aérienne)",
                description:
                    "Corridor de mobilité fondé sur des scénarios illustrant comment la connectivité entre la ville et l’aéroport pourrait être conceptualisée en mettant l’accent sur la fiabilité, la prévisibilité et l’intégration au réseau.",
                link: "/smart-mobility/chiang-mai/hub-to-chiang-mai-airport",
                transportationModel: {
                    title: "Modèle de transport : LRT ou monorail",
                    description: "",
                    sections: [
                        {
                            title: "Principaux défis",
                            description:
                                "Congestion urbaine, contraintes d’usage du sol et environnements résidentiels à forte densité."
                        },
                        {
                            title: "Stratégie de tracé",
                            description:
                                "Alignement conceptuel suivant le périphérique extérieur afin de contourner la vieille ville et d’illustrer la connexion entre le pôle et l’aéroport dans une fourchette de temps de parcours indicative, selon des hypothèses de scénario."
                        },
                        {
                            title: "Système spécifique",
                            description:
                                "Concepts de services illustratifs examinant comment la gestion des bagages et les expériences de transfert pourraient être repensées au sein des écosystèmes de mobilité future."
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-chiang-mai-airport.png",
                    image_tags: ["Scénario de mobilité future", "Concept illustratif", "Visualisation non contraignante"]
                }
            },
            {
                title: "Pôle – Doi Suthep (itinéraire culturel et paysager)",
                description:
                    "Scénario illustrant des approches conceptuelles de mobilité reliant des zones de patrimoine culturel et des paysages naturels à travers des idées de transport à faible impact et sensibles aux visiteurs.",
                link: "/smart-mobility/chiang-mai/hub-to-doi-suthep",
                transportationModel: {
                    title: "Modèle de transport : navette électrique + eVTOL",
                    description: "",
                    sections: [
                        {
                            title: "Principaux défis",
                            description:
                                "Relief montagneux, sensibilité environnementale et demande touristique variable."
                        },
                        {
                            title: "Transport collectif",
                            description:
                                "Concepts de navettes électriques illustrant des accès basés sur des correspondances depuis le pôle vers des zones de transition en piémont, afin de réduire la dépendance aux véhicules privés."
                        },
                        {
                            title: "Itinéraire aérien (premium)",
                            description:
                                "Récits de trajets eVTOL conceptuels illustrant des possibilités de vols panoramiques et un accès hypothétique à des vertiports à proximité de zones de repère désignées."
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-doi-suthep.png",
                    image_tags: ["Scénario de mobilité future", "Concept illustratif", "Visualisation non contraignante"]
                }
            },
            {
                title: "Pôle – Doi Inthanon (itinéraire nature et aventure)",
                description:
                    "Scénario orienté vers le futur explorant des concepts de déplacement de longue distance liés à la nature et à l’aventure, en mettant l’accent sur la conception de l’expérience et les considérations environnementales.",
                link: "/smart-mobility/chiang-mai/hub-to-doi-inthanon",
                transportationModel: {
                    title: "Modèle de transport : liaison rapide + eVTOL longue portée",
                    description: "",
                    sections: [
                        {
                            title: "Principaux défis",
                            description:
                                "Distances étendues, trajets routiers prolongés et relief montagneux complexe."
                        },
                        {
                            title: "Liaison express",
                            description:
                                "Concepts illustratifs de bus ou de minibus express examinant des connexions directes entre le pôle et la zone de Chom Thong."
                        },
                        {
                            title: "Technologie future (exploratoire)",
                            description:
                                "Scénario spéculatif d’eVTOL longue portée utilisé pour explorer comment les récits de temps de trajet pourraient être reconfigurés dans les discussions sur la mobilité future."
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-doi-inthanon.png",
                    image_tags: ["Scénario de mobilité future", "Concept illustratif", "Visualisation non contraignante"]
                }
            }
        ]
    },

    vertiportDesign: {
        title: "Vertiport : passerelle de mobilité aérienne intelligente",
        description:
            "Le vertiport représente un scénario illustratif de mobilité aérienne future explorant comment des concepts d’aviation à basse altitude pourraient, en théorie, s’interfacer avec des zones urbaines, des aéroports, des régions montagneuses et des destinations touristiques.",
        link: "/smart-mobility/chiang-mai/vertiport-design",
        structureTitle: "Composants illustratifs du vertiport (fondés sur des scénarios)",
        structure: [
            {
                title: "Zones d’atterrissage",
                items: [
                    {title: "Zones d’atterrissage illustratives représentant l’accueil potentiel d’opérations eVTOL dans des scénarios futurs"},
                    {title: "Éléments de guidage visuel conceptuels inspirés des environnements aéronautiques"},
                    {title: "Configurations spatiales à plusieurs niveaux illustrant des considérations de conception axées sur la sécurité"}
                ]
            },
            {
                title: "Espaces terminaux",
                items: [
                    {title: "Concepts de salons passagers orientés vers des vues urbaines et montagneuses"},
                    {title: "Concepts illustratifs de circulation et de flux d’enregistrement"},
                    {title: "Installations conçues de manière conceptuelle pour soutenir les déplacements de visiteurs internationaux"}
                ]
            },
            {
                title: "Intégration au sol",
                items: [
                    {title: "Accès autoroutier conceptuel et intégration aux routes intelligentes"},
                    {title: "Concepts d’interface avec le stationnement pour véhicules électriques et les navettes autonomes"}
                ]
            },
            {
                title: "Coordination de l’espace aérien",
                items: [
                    {title: "Concepts illustratifs de trajectoires de vol non intersectantes"},
                    {title: "Coordination conceptuelle de l’espace aérien à basse altitude inspirée de cadres internationaux émergents"}
                ]
            }
        ],
        media: {
            image_url: "/smart-mobility/chiang-mai/vertiport-design.png",
            image_tags: ["Scénario de mobilité future", "Concept illustratif", "Visualisation non contraignante"]
        }
    },

    technologyIntegration: {
        title: "Intégration technologique",
        description:
            "Ce scénario suppose la présence de systèmes numériques, de données et d’énergie intégrés en tant que facilitateurs conceptuels, et non comme des mises en œuvre confirmées.",
        items: [
            {
                title: "MaaS (Mobility as a Service)",
                description:
                    "Concept de plateforme unifiée illustrant comment la planification, la réservation et le paiement de trajets de bout en bout pourraient être explorés à travers plusieurs modes de transport."
            },
            {
                title: "Gestion de l’espace aérien des drones",
                description:
                    "Concepts illustratifs de coordination de l’espace aérien à basse altitude utilisés pour examiner les considérations de sécurité, d’efficacité et d’alignement réglementaire."
            },
            {
                title: "Réseau énergétique vert",
                description:
                    "Concepts de production et de stockage d’énergie renouvelable fondés sur des scénarios, illustrant un soutien potentiel aux récits liés aux véhicules électriques et aux eVTOL."
            }
        ]
    },

    summaryExpectedResults: {
        title: "Résultats illustrés et enseignements stratégiques",
        description:
            "Ce scénario illustre des orientations possibles de l’évolution des systèmes de mobilité, de tourisme et d’économie de Chiang Mai selon différentes hypothèses à long terme.",
        items: [
            {
                title: "Réduction de la congestion urbaine",
                description:
                    "Illustration de la manière dont la pression exercée sur les zones urbaines historiques pourrait être atténuée dans le cadre de certaines approches de restructuration de la mobilité."
            },
            {
                title: "Émergence d’une nouvelle zone économique",
                description:
                    "Démonstration de la possibilité d’un déplacement de l’attention en matière de développement vers des corridors de croissance alternatifs."
            },
            {
                title: "Différenciation touristique internationale",
                description:
                    "Exploration de la manière dont des concepts de mobilité avancés pourraient contribuer à des récits touristiques différenciés."
            },
            {
                title: "Perspective de phasage stratégique",
                description:
                    "Indication que les concepts de mobilité électrique terrestre pourraient précéder les systèmes ferroviaires et aériens à mesure que les conditions de gouvernance, de technologie et d’infrastructure arrivent à maturité."
            }
        ]
    }
}