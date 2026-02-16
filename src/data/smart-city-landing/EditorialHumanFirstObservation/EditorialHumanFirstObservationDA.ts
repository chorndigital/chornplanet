import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialHumanFirstObservationDA: ISmartCityLanding = {
    heroObservation: {
        headline: "Mennesket Først: Observation",
        paragraphs: [
            "Byer forstås mest klart gennem levede erfaringer snarere end gennem tekniske forklaringer alene.",
            "Mange pålidelige signaler om bykvalitet findes ikke i dashboards, men i hvordan mennesker går, venter, holder pause, krydser og deler rum.",
            "Denne platform tager udgangspunkt i menneskelivet, fordi hverdagsadfærd viser, hvordan bysystemer faktisk fungerer."
        ],
        image: {
            url: "/smart-city/editorial/human-first-observation.png",
            alt: "Thailandske mennesker, der bevæger sig roligt gennem en bygade som et primært signal om bysystemer",
        },
        cta: {
            label: "Udforsk System Før Teknologi",
            href: "/smart-city/editorial-system-before-technology",
        },
    },

    systemExplanation: {
        headline: "Hvorfor Observation Kommer Først",
        paragraphs: [
            "Mange fortællinger om byer begynder med teknologi, infrastruktur eller politik. Byer opleves dog ikke primært gennem disse perspektiver.",
            "Mennesker oplever byen gennem friktion, komfort, rytme og oplevet sikkerhed. Observation hjælper med at oversætte komplekse systemer til synlige mønstre uden at være afhængig af teknisk sprog."
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "Offentligt rum, der viser menneskelige rutiner og komfort som primære systemsignaler",
        },
    },

    whyItMatters: {
        headline: "Hvorfor Menneske-Først Observation Er Vigtigt",
        paragraphs: [
            "At observere menneskelige rutiner først skaber et fælles referencepunkt, der forbliver meningsfuldt på tværs af kulturer, byer og forskellige niveauer af systemkompleksitet."
        ],
        points: [
            {
                title: "Adfærd Afspejler Reelle Forhold",
                description:
                    "Mennesker tilpasser sig hurtigt til komfort og risiko. Deres daglige bevægelse afspejler faktiske byforhold.",
            },
            {
                title: "Forståelse Skalerer Uden Forudsigelser",
                description:
                    "Observation understøtter forståelse uden at påstå sikkerhed om fremtidige udfald.",
            },
            {
                title: "Systemer Bliver Forståelige Uden Fagsprog",
                description:
                    "Et menneske-først perspektiv gør bysystemer forståelige ud over tekniske og ekspertorienterede målgrupper.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "By-Signaler du Lægger Mærke til Uden Besvær",
            paragraphs: [
                "Små hverdagsadfærd kan afsløre bykvalitet uden behov for formel måling eller forklaring."
            ],
            image: {
                url: "/smart-city/urban-signals/predictable-shared-street.png",
                alt: "Forudsigelig gadeadfærd observeret gennem hverdagsbevægelse",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "Byer Opleves Gennem Daglige Cyklusser",
            paragraphs: [
                "Komplekse systemer bliver ofte tydeligere, når de ses gennem daglige rytmer som morgen, middag og aften."
            ],
            image: {
                url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
                alt: "Morgenflow der illustrerer daglig rytme som et signal om systemkvalitet",
            },
            landingUrl: "/smart-city/human-daily-flow-morning",
        },
    ],
};