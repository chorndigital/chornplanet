import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const WhenHumanLifeShapesTheCityDE: ISmartCityLanding = {
    heroObservation: {
        headline: "Wenn Menschliches Leben Die Stadt Formt",
        paragraphs: [
            "Städte werden nicht allein durch Technologie definiert, sondern durch die Art, wie Menschen sich bewegen, pausieren und im Alltag interagieren.",
            "Durch die Beobachtung lokaler Routinen lassen sich urbane Muster erkennen, die in unterschiedlichen Städten und Kontexten auftreten."
        ],
        image: {
            url: "/smart-city/hero/when-human-life-shapes-the-city.png",
            alt: "Alltägliches Leben formt eine ruhige Smart-City-Straße"
        },
        cta: {
            label: "Muster erkunden",
            href: `/smart-city/from-local-life-to-global-pattern`
        }
    },

    systemExplanation: {
        headline: "Systeme Unter Dem Alltäglichen Leben",
        paragraphs: [
            "Städtische Systeme koordinieren Bewegung, Zugang und Sicherheit durch alltägliche Gestaltungsentscheidungen.",
            "Bei guter Gestaltung arbeiten diese Systeme leise und bleiben dennoch wesentlich."
        ]
    },

    whyItMatters: {
        headline: "Warum Das Wichtig Ist",
        paragraphs: [
            "Städte, die sich am menschlichen Rhythmus orientieren, entwickeln sich tendenziell nachhaltiger und bewahren langfristige Stabilität."
        ]
    },

    relatedSignals: [
        {
            headline: "Vorhersehbare Geteilte Straßen",
            paragraphs: [
                "Straßen mit klarer Vorhersehbarkeit verringern Reibung und fördern gegenseitiges Vertrauen."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Vorhersehbare geteilte Straße"
            },
            cta: {
                label: "Signal lesen",
                href: `/smart-city/urban-signals-predictable-street`
            }
        }
    ],
}