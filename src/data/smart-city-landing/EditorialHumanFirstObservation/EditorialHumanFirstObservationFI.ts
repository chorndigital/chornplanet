import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialHumanFirstObservationFI: ISmartCityLanding = {
    heroObservation: {
        headline: "Ihmislähtöinen Havainnointi",
        paragraphs: [
            "Kaupungit ymmärretään selkeimmin eletyn kokemuksen kautta eikä pelkästään teknisten selitysten avulla.",
            "Monet luotettavat signaalit kaupungin laadusta eivät löydy mittaristoista, vaan siitä, miten ihmiset kävelevät, odottavat, pysähtyvät, ylittävät katuja ja jakavat tilaa.",
            "Tämä alusta lähtee liikkeelle ihmisten arjesta, koska jokapäiväinen käyttäytyminen osoittaa, miten kaupunkijärjestelmät todellisuudessa toimivat."
        ],
        image: {
            url: "/smart-city/editorial/human-first-observation.png",
            alt: "Thaimaalaiset ihmiset liikkuvat rauhallisesti kaupunkikadulla kaupunkijärjestelmien ensisijaisena signaalina",
        },
        cta: {
            label: "Tutustu Järjestelmään Ennen Teknologiaa",
            href: "/smart-city/editorial-system-before-technology",
        },
    },

    systemExplanation: {
        headline: "Miksi Havainnointi Tulee Ensin",
        paragraphs: [
            "Monet kaupunkikertomukset alkavat teknologiasta, infrastruktuurista tai politiikasta. Kaupunkia ei kuitenkaan ensisijaisesti koeta näiden näkökulmien kautta.",
            "Ihmiset kokevat kaupungin kitkan, mukavuuden, rytmin ja koetun turvallisuuden kautta. Havainnointi auttaa kääntämään monimutkaiset järjestelmät näkyviksi malleiksi ilman tekniseen kieleen tukeutumista."
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "Julkinen tila, joka näyttää ihmisten rutiinit ja mukavuuden ensisijaisinä järjestelmäsignaaleina",
        },
    },

    whyItMatters: {
        headline: "Miksi Ihmislähtöinen Havainnointi On Tärkeää",
        paragraphs: [
            "Kun ihmisten rutiineja tarkastellaan ensin, syntyy yhteinen viitepiste, joka säilyy merkityksellisenä kulttuurien, kaupunkien ja järjestelmien monimutkaisuuden tasojen yli."
        ],
        points: [
            {
                title: "Käyttäytyminen Heijastaa Todellisia Olosuhteita",
                description:
                    "Ihmiset mukautuvat nopeasti mukavuuteen ja riskiin. Heidän arkinen liikkumisensa heijastaa todellisia kaupunkiolosuhteita.",
            },
            {
                title: "Ymmärrys Skaalautuu Ilman Ennustamista",
                description:
                    "Havainnointi tukee ymmärrystä ilman väitteitä varmuudesta tulevista lopputuloksista.",
            },
            {
                title: "Järjestelmät Ovat Ymmärrettäviä Ilman Jargonia",
                description:
                    "Ihmislähtöinen näkökulma tekee kaupunkijärjestelmistä ymmärrettäviä myös teknisten ja asiantuntijayleisöjen ulkopuolella.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Kaupunkisignaalit, jotka Huomaat Ilman Vaivaa",
            paragraphs: [
                "Pienet arkiset käyttäytymismallit voivat paljastaa kaupungin laatua ilman muodollista mittaamista tai selitystä."
            ],
            image: {
                url: "/smart-city/urban-signals/predictable-shared-street.png",
                alt: "Ennakoitava katujen käyttäytyminen havaittuna arkisen liikkeen kautta",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "Kaupungit Koetaan Päivittäisten Syklien Kautta",
            paragraphs: [
                "Monimutkaiset järjestelmät selkeytyvät usein, kun niitä tarkastellaan päivittäisten rytmien kuten aamun, keskipäivän ja illan kautta."
            ],
            image: {
                url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
                alt: "Aamun liike kuvaamassa päivittäistä rytmiä järjestelmän laadun signaalina",
            },
            landingUrl: "/smart-city/human-daily-flow-morning",
        },
    ],
};