import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const WhenHumanLifeShapesTheCityFR: ISmartCityLanding = {
    heroObservation: {
        headline: "Quand la Vie Humaine Façonne la Ville",
        paragraphs: [
            "Les villes ne sont pas définies uniquement par la technologie, mais par la manière dont les personnes se déplacent, s’arrêtent et interagissent au quotidien.",
            "En observant les routines locales, il devient possible d’identifier des schémas urbains qui apparaissent dans différentes villes et contextes."
        ],
        image: {
            url: "/smart-city/hero/when-human-life-shapes-the-city.png",
            alt: "La vie quotidienne façonne une rue de smart city calme"
        },
        cta: {
            label: "Explorer les schémas",
            href: `/smart-city/from-local-life-to-global-pattern`
        }
    },

    systemExplanation: {
        headline: "Les Systèmes Sous la Vie Quotidienne",
        paragraphs: [
            "Les systèmes urbains coordonnent les déplacements, l’accès et la sécurité à travers des choix de conception du quotidien.",
            "Lorsqu’ils sont bien conçus, ces systèmes fonctionnent discrètement tout en restant essentiels."
        ]
    },

    whyItMatters: {
        headline: "Pourquoi Cela Compte",
        paragraphs: [
            "Les villes qui s’alignent sur le rythme humain ont tendance à se développer de manière plus durable et à maintenir une stabilité à long terme."
        ]
    },

    relatedSignals: [
        {
            headline: "Rues Partagées Prévisibles",
            paragraphs: [
                "Les rues conçues pour la prévisibilité réduisent les frictions et soutiennent une confiance partagée."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Rue partagée prévisible"
            },
            cta: {
                label: "Lire le signal",
                href: `/smart-city/urban-signals-predictable-street`
            }
        }
    ],
}