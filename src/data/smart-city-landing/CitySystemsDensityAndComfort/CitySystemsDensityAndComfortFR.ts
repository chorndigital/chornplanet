import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsDensityAndComfortFR: ISmartCityLanding = {
    heroObservation: {
        headline: "Densité et Confort",
        paragraphs: [
            "La densité n’est pas problématique en soi. L’inconfort apparaît lorsque les systèmes sont mal conçus.",
            "Les villes deviennent plus vivables lorsque la densité est équilibrée par de l’espace, de la végétation et des schémas de déplacement prévisibles.",
            "Une ville intelligente ne cherche pas à supprimer la foule ; elle crée des conditions dans lesquelles l’espace partagé reste confortable et facilement praticable."
        ],
        image: {
            url: "/smart-city/city-systems/density-and-comfort.png",
            alt: "Densité urbaine thaïlandaise confortable avec végétation, trottoirs ombragés et rythme de rue apaisé",
        },
        cta: {
            label: "Explorer l’Efficacité et le Rythme",
            href: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    },

    systemExplanation: {
        headline: "Comment le Confort est Intégré à la Densité",
        paragraphs: [
            "Le confort n’est pas une couche décorative ; il résulte de systèmes coordonnés.",
            "L’ombre, des bords praticables à pied, l’éclairage, la végétation et le rythme de l’espace public influencent le ressenti de la densité, qu’elle soit stressante ou soutenante. Lorsque ces systèmes fonctionnent de manière cohérente, des environnements denses peuvent rester calmes et fonctionnels."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Systèmes de conception urbaine soutenant le confort grâce à la végétation et à des espaces marchables",
        },
    },

    whyItMatters: {
        headline: "Pourquoi la Densité et le Confort Comptent",
        paragraphs: [
            "Les villes qui maintiennent le confort à des niveaux de densité plus élevés soutiennent souvent plus efficacement la durabilité, la sécurité et l’interaction sociale."
        ],
        points: [
            {
                title: "Le Confort Réduit les Tensions",
                description:
                    "Lorsque des environnements denses paraissent ordonnés et calmes, les personnes sont plus enclines à partager l’espace de manière coopérative.",
            },
            {
                title: "La Vivabilité Réduit la Pression d’Expansion",
                description:
                    "Les villes capables d’accueillir la densité de façon confortable peuvent limiter le besoin de s’étendre vers l’extérieur.",
            },
            {
                title: "La Végétation Fonctionne Comme une Infrastructure",
                description:
                    "L’ombre, les arbres et des lisières adoucies sont des composantes fonctionnelles qui influencent la régulation thermique, les schémas de déplacement et l’expérience globale.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Orchestration de l’Espace Public",
            paragraphs: [
                "Le confort est influencé par la manière dont les trottoirs, l’éclairage et l’activité de rue sont coordonnés dans le temps."
            ],
            image: {
                url: "/smart-city/system-explainers/public-space-orchestration.png",
                alt: "Orchestration de l’espace public soutenant le confort et le rythme social",
            },
            landingUrl: "/smart-city/system-explainers-public-space-orchestration",
        },
        {
            headline: "La Mobilité Mixte Devient une Référence Mondiale",
            paragraphs: [
                "Les rues denses exigent la coexistence. La mobilité mixte reflète une condition mondiale émergente plutôt qu’un choix de conception optionnel."
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Mobilité mixte soutenant la densité par la coexistence",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    ],
};