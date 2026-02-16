import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const WhenHumanLifeShapesTheCityNL: ISmartCityLanding = {
    heroObservation: {
        headline: "Wanneer Menselijk Leven de Stad Vormgeeft",
        paragraphs: [
            "Steden worden niet alleen door technologie bepaald, maar door hoe mensen zich dagelijks verplaatsen, pauzeren en met elkaar omgaan.",
            "Door lokale routines te observeren kunnen we stedelijke patronen herkennen die in verschillende steden en contexten terugkomen."
        ],
        image: {
            url: "/smart-city/hero/when-human-life-shapes-the-city.png",
            alt: "Het dagelijks leven vormt een rustige smart city-straat"
        },
        cta: {
            label: "Ontdek de patronen",
            href: `/smart-city/from-local-life-to-global-pattern`
        }
    },

    systemExplanation: {
        headline: "Systemen Onder het Dagelijks Leven",
        paragraphs: [
            "Stedelijke systemen coördineren beweging, toegang en veiligheid via dagelijkse ontwerpkeuzes.",
            "Wanneer ze goed ontworpen zijn, werken deze systemen stil maar blijven ze essentieel."
        ]
    },

    whyItMatters: {
        headline: "Waarom Dit Belangrijk Is",
        paragraphs: [
            "Steden die aansluiten bij het menselijke ritme ontwikkelen zich doorgaans duurzamer en behouden stabiliteit op de lange termijn."
        ]
    },

    relatedSignals: [
        {
            headline: "Voorspelbare Gedeelde Straten",
            paragraphs: [
                "Straten die op voorspelbaarheid zijn ontworpen verminderen wrijving en ondersteunen gedeeld vertrouwen."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Voorspelbare gedeelde straat"
            },
            cta: {
                label: "Lees signaal",
                href: `/smart-city/urban-signals-predictable-street`
            }
        }
    ],
}