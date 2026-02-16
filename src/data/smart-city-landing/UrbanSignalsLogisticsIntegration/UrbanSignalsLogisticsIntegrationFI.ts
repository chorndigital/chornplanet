import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsLogisticsIntegrationFI: ISmartCityLanding = {
    heroObservation: {
        headline: "Logistiikka Sulautuu Päivittäiseen Elämään",
        paragraphs: [
            "Logistiikka on kaupungin perusjärjestelmä, ja hyvin integroitu logistiikka jää usein lähes huomaamatta.",
            "Kun toimitusrobotit, kuriirit ja pienet sähköajoneuvot voivat toimia hallitsematta huomiota, se viittaa siihen, että logistiikka on integroitu eikä päälleliimattu.",
            "Älykaupunkia ei määritä se, kuinka näkyviä toimitusjärjestelmät ovat. Sitä määrittää se, sopiiko logistiikka päivittäiseen rytmiin häiritsemättä katuelämää."
        ],
        image: {
            url: "/smart-city/urban-signals/urban-logistics.png",
            alt: "Thaimaalainen katu, jossa toimitusrobotit ja pienimuotoinen sähkölogistiikka sulautuvat arkeen",
        },
        cta: {
            label: "Tutustu Julkisen Tilaan Käyttöön",
            href: "/smart-city/urban-signals-public-space-use",
        },
    },

    systemExplanation: {
        headline: "Mitä Logistiikan Integraatio Kertoo",
        paragraphs: [
            "Integroitu logistiikka tarkoittaa, että tavarat voivat liikkua jatkuvasti häiritsemättä ihmisten mukavuutta.",
            "Tämä perustuu ajoitukseen, reititykseen ja koordinointiin. Kadun tulee pysyä jalankulkijoille luettavana samalla, kun logistiikkajärjestelmät toimivat hiljaisesti reunoilla."
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "Kaupunkilogistiikkajärjestelmä, joka toimii hiljaisesti arjen liikkeen taustalla",
        },
    },

    whyItMatters: {
        headline: "Miksi Tämä Signaali On Tärkeä",
        paragraphs: [
            "Logistiikan integraatio on merkki järjestelmän kypsyydestä. Se osoittaa, että kaupunki voi vastata päivittäiseen kysyntään muuttamatta katuja infrastruktuurialueiksi."
        ],
        points: [
            {
                title: "Tehokkuutta Ilman Hälyä",
                description:
                    "Hyvin integroitu logistiikka vähentää kitkaa ja säilyttää samalla rauhallisen julkisen tilan.",
            },
            {
                title: "Katu Säilyy Inhimillisenä",
                description:
                    "Kun logistiikka sulautuu ympäristöön, jalankulkijat ja sosiaalinen elämä voivat säilyä kadun ensisijaisena identiteettinä.",
            },
            {
                title: "Ajoitus Tukee Ennaltaehkäisevää Suunnittelua",
                description:
                    "Koordinoitu toimitusrytmi voi vähentää ruuhkahuippuja ennen kuin ne syntyvät.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Logistiikka Muokkaa Hiljaisesti Kaupungin Rytmiä",
            paragraphs: [
                "Kaupungeissa ympäri maailmaa logistiikka siirtyy pienempiin ja hiljaisempiin järjestelmiin, jotka vaikuttavat päivittäiseen liikkeeseen."
            ],
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "Kaupunkilogistiikan globaali malli, joka muokkaa päivittäistä rytmiä",
            },
            landingUrl: "/smart-city/global-patterns-urban-logistics",
        },
        {
            headline: "Tehokkuus ja Ihmisen Rytmi",
            paragraphs: [
                "Logistiikan integraatio toimii parhaiten silloin, kun kaupunkijärjestelmät ovat linjassa ihmisten rytmin kanssa eivätkä aseta nopeutta etusijalle."
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "Tehokkuus, joka on sovitettu ihmisen rytmiin modernissa kaupunkijärjestelmässä",
            },
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    ],
};