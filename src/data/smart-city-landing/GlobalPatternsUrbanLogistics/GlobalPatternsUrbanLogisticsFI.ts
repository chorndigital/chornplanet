import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const GlobalPatternsUrbanLogisticsFI: ISmartCityLanding = {
    heroObservation: {
        headline: "Logistiikka Muokkaa Hiljaisesti Kaupungin Rytmiä",
        paragraphs: [
            "Tavarat liikkuvat jatkuvasti kaupunkien läpi — usein ilman että ne herättävät huomiota.",
            "Monilla alueilla logistiikka siirtyy suurista ja näkyvistä rakenteista pienempiin ja hiljaisempiin järjestelmiin, kuten mikro-sähköajoneuvoihin, jakelurobotteihin, drooneihin ja ajastettuun jakeluun.",
            "Kaupungeissa, joissa logistiikka integroidaan sujuvasti, arki tuntuu usein mukavammalta, vaikka liikkuminen lisääntyy."
        ],
        image: {
            url: "/smart-city/global-patterns/urban-logistics.png",
            alt: "Kaupunkilogistiikka toimimassa hiljaisesti modernilla kaupunkikadulla",
        },
        cta: {
            label: "Palaa Ennakoitaviin Katuihin",
            href: "/smart-city/global-patterns-predictable-shared-street",
        },
    },

    systemExplanation: {
        headline: "Miten Logistiikka Vaikuttaa Kaupunkiin",
        paragraphs: [
            "Logistiikka vaikuttaa kaupunkiin ensisijaisesti rytmin kautta, ei nopeuden.",
            "Kun toimitukset ajoitetaan, hajautetaan ja koordinoidaan, kadut tuntuvat usein vähemmän ruuhkaisilta ja arjen liikkuminen sujuvoituu. Hyvin integroidut logistiikkajärjestelmät vähentävät kitkaa ilman että niistä tulee kaupunkiympäristön visuaalinen keskipiste."
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "Pienimuotoinen logistiikka integroituna päivittäiseen kaupunkiliikkeeseen",
        },
    },

    whyItMatters: {
        headline: "Miksi Tämä Globaali Ilmiö On Merkityksellinen",
        paragraphs: [
            "Logistiikasta tulee yhä enemmän osa arjen taustalla olevaa infrastruktuuria. Kaupungit, jotka integroivat sen huolellisesti, voivat säilyttää rauhallisuuden myös silloin, kun aktiivisuus kasvaa."
        ],
        points: [
            {
                title: "Toimitus On Jatkuva Osa Katutilaa",
                description:
                    "Tavarat liikkuvat koko päivän. Keskeinen kysymys on, häiritseekö toimitustoiminta katua vai sulautuuko se siihen.",
            },
            {
                title: "Hiljainen Integraatio Tukee Mukavuutta",
                description:
                    "Toiminnallinen tehokkuus ei saisi tuoda tarpeetonta melua, sekavuutta tai ristiriitoja julkiseen tilaan.",
            },
            {
                title: "Rytmi Tukee Kaupungin Vakautta",
                description:
                    "Kun logistiikka on koordinoitu ajallisesti ja tilallisesti, kaupunki tuntuu usein ennakoitavammalta ja helpommin navigoitavalta.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Logistiikka Sulautuu Arkeen",
            paragraphs: [
                "Kun jakelurobotit ja pienimuotoinen logistiikka toimivat ilman että ne hallitsevat huomiota, arjen kaupunkitilanteet pysyvät rauhallisina ja helposti luettavina."
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Logistiikka integroituna thaimaalaiseen katuelämään arjessa",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
        {
            headline: "Tehokkuus ja Ihmisen Rytmi",
            paragraphs: [
                "Kaupunkitehokkuudesta tulee merkityksellistä silloin, kun järjestelmien ajoitus on linjassa ihmisten rutiinien kanssa eikä ohita niitä."
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "Kaupunkirakenne, joka on linjassa ihmisen rytmin ja ennakoitavan ajoituksen kanssa",
            },
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    ],
};