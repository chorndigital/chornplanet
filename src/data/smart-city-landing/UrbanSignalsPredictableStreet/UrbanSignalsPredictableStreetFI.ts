import { ISmartCityLanding } from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsPredictableStreetFI: ISmartCityLanding = {
    heroObservation: {
        headline: "Ennakoitava Katukäyttäytyminen",
        paragraphs: [
            "Kaupungit viestivät käyttäytymisen kautta ennen kuin ne viestivät politiikan kautta.",
            "Kun jalankulkijat ylittävät kadun epäröimättä, skootterit hidastavat luonnollisesti ja ajoneuvot liikkuvat rauhallisella varmuudella, katu kertoo jotain olennaista: ihmiset kokevat järjestelmän luotettavana.",
            "Ennakoitavuus on yksi selkeimmistä kaupunkisignaaleista, koska se näkyy ilman mittaamista."
        ],
        image: {
            url: "/smart-city/urban-signals/predictable-shared-street.png",
            alt: "Thaimaalaiset jalankulkijat ja pyöräilijät liikkuvat sujuvasti ennakoitavassa jaetussa katuympäristössä",
        },
        cta: {
            label: "Tutustu Logistiikan Integraatioon",
            href: "/smart-city/urban-signals-logistics-integration",
        },
    },

    systemExplanation: {
        headline: "Mitä Ennakoitavuus Kertoo",
        paragraphs: [
            "Ennakoitava käyttäytyminen ei synny sattumalta. Se on seurausta katutilan suunnittelusta, joka vähentää epävarmuutta: selkeät ylitykset, johdonmukainen kaistarytmi, selkeät visuaaliset vihjeet ja nopeuksien yhteensovittaminen.",
            "Kun nämä järjestelmät toimivat yhdessä, ihmisten ei tarvitse neuvotella jokaisesta askeleesta. Kaupunki tuntuu turvalliselta ilman, että se perustuu näkyvään kontrolliin."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Liikkumisen koordinointi, joka tukee ennakoitavaa katukäyttäytymistä",
        },
    },

    whyItMatters: {
        headline: "Miksi Tämä Signaali On Tärkeä",
        paragraphs: [
            "Ennakoitavuus on suora osoitus luottamuksesta katutasolla."
        ],
        points: [
            {
                title: "Luottamus On Havaittavissa",
                description:
                    "Kun ihmiset liikkuvat itsevarmasti, se viittaa siihen, että he odottavat kadun toimivan johdonmukaisesti.",
            },
            {
                title: "Turvallisuus Tuntuu Normaalilta",
                description:
                    "Ennakoitava katu vähentää riskejä ilman, että turvallisuus tuntuu valvonnalta.",
            },
            {
                title: "Mukavuus Mahdollistaa Kaupunkielämän",
                description:
                    "Spontaani julkinen elämä edellyttää liikkumisen sääntöjä, jotka ovat luettavia ja yhteisesti ymmärrettyjä.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Ennakoitavat Kadut Mahdollistavat Spontaanin Elämän",
            paragraphs: [
                "Kaupungeissa ympäri maailmaa ennakoitavat kadut tukevat johdonmukaisesti rauhallisempaa liikkumista ja arjen sosiaalista elämää."
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "Ennakoitavien jaettujen katujen globaali malli",
            },
            landingUrl: "/smart-city/global-patterns-predictable-shared-street",
        },
        {
            headline: "Liike ja Tauko",
            paragraphs: [
                "Ennakoitavuus mahdollistaa pysähtymisen. Ilman sitä pysähtyminen voi muuttua turvattomaksi."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Katutilajärjestelmä, joka tasapainottaa liikkeen ja tauon",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};