import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const WhenHumanLifeShapesTheCityDA: ISmartCityLanding = {
    heroObservation: {
        headline: "Når Menneskeliv Former Byen",
        paragraphs: [
            "Byer defineres ikke udelukkende af teknologi, men af hvordan mennesker bevæger sig, holder pause og interagerer i hverdagen.",
            "Ved at observere lokale rutiner kan vi identificere bymønstre, der gentager sig på tværs af forskellige byer og kontekster."
        ],
        image: {
            url: "/smart-city/hero/when-human-life-shapes-the-city.png",
            alt: "Hverdagsliv der former en rolig smart bygade"
        },
        cta: {
            label: "Udforsk mønstrene",
            href: `/smart-city/from-local-life-to-global-pattern`
        }
    },

    systemExplanation: {
        headline: "Systemer Under Hverdagslivet",
        paragraphs: [
            "Byens systemer koordinerer bevægelse, adgang og sikkerhed gennem daglige designvalg.",
            "Når de er veludformede, fungerer disse systemer stille men forbliver essentielle."
        ]
    },

    whyItMatters: {
        headline: "Hvorfor Det Er Vigtigt",
        paragraphs: [
            "Byer, der er tilpasset menneskelig rytme, har tendens til at udvikle sig mere bæredygtigt og bevare langsigtet stabilitet."
        ]
    },

    relatedSignals: [
        {
            headline: "Forudsigelige Delte Gader",
            paragraphs: [
                "Gader designet til forudsigelighed reducerer friktion og understøtter gensidig tillid."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Forudsigelig delt gade"
            },
            cta: {
                label: "Læs signal",
                href: `/smart-city/urban-signals-predictable-street`
            }
        }
    ],
}