import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowEveningDA: ISmartCityLanding = {
    heroObservation: {
        headline: "Aftenflow — At Sænke Tempoet og Restituere",
        paragraphs: [
            "Aften handler ikke om hastighed. Den handler om restitution.",
            "En bys kvalitet bliver synlig, når mennesker sænker tempoet: går hjem, mødes med venner, handler lokalt eller blot tager en pause i det offentlige rum.",
            "En smart by afspejles i, om gaderne føles sikre nok til, at mennesker kan slappe af og stadig være til stede efter solnedgang."
        ],
        image: {
            url: "/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
            alt: "Tidlig aften på en thailandsk bygade med varme lys, fodgængere, rolige scootere og en tryg atmosfære for socialt liv",
        },
        cta: {
            label: "Tilbage til Smart City-overblikket",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
    },

    systemExplanation: {
        headline: "Aftensystemer Der Beskytter Komfort",
        paragraphs: [
            "Aftenen viser, om byen understøtter komfort, eller om mennesker føler sig presset til at trække sig indendørs.",
            "Belysning, gangvenlighed, gadeaktivitet og forudsigelig mobilitet gør det muligt for det offentlige liv at fortsætte med mindre usikkerhed. Når disse systemer arbejder sammen, forbliver byen brugbar og imødekommende også efter dagtimerne."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Orkestrering af offentlige rum med belysning og gangvenlighed, der understøtter aftenlivet",
        },
    },

    whyItMatters: {
        headline: "Hvorfor Aftenflow Er Vigtigt",
        paragraphs: [
            "En by, der understøtter restitution om aftenen, styrker langsigtet social sammenhæng og oplevet tryghed uden at kræve hård kontrol."
        ],
        points: [
            {
                title: "Komfort Er et Systemresultat",
                description:
                    "Komfort om aftenen er ikke dekoration. Det er resultatet af tryghed, belysning og forudsigelig bevægelse.",
            },
            {
                title: "Offentlige Rum Bliver Social Infrastruktur",
                description:
                    "Når mennesker bliver ude efter solnedgang, understøtter det offentlige rum stærkere fællesskab og daglig tilgængelighed.",
            },
            {
                title: "Tryghed Uden Håndhævelse",
                description:
                    "De mest effektive gader føles trygge, fordi de er designet til at reducere risiko, ikke til at straffe adfærd.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Offentlige Rum Bruges Som Tiltænkt",
            paragraphs: [
                "Aftenen viser, om mennesker føler sig trygge nok til at blive hængende. Den adfærd er et tydeligt signal på komfort."
            ],
            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "Thailandske borgere, der sidder og går komfortabelt i et veloplyst offentligt rum",
            },
            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
        {
            headline: "Tæthed og Komfort",
            paragraphs: [
                "Komfort om aftenen viser, om tæthed føles beboelig eller udmattende."
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Urban tæthed blødgjort af grønne områder og rolig aftenaktivitet",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};