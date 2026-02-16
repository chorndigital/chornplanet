import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialSystemBeforeTechnologyFI: ISmartCityLanding = {
    heroObservation: {
        headline: "Järjestelmä Ennen Teknologiaa",
        paragraphs: [
            "Pelkkä teknologia ei luo älykästä kaupunkia.",
            "Kaupungit muuttuvat älykkäämmiksi, kun järjestelmät muovaavat arjen käyttäytymistä huomaamattomasti: turvallisemmat ylitykset, ennakoitava virtaus, sujuvampi logistiikka ja julkiset tilat, jotka toimivat luotettavasti.",
            "Teknologia on merkityksellisintä silloin, kun se parantaa ihmisten elämää mitattavalla tavalla. Ilman tätä yhteyttä sen arvo jää rajalliseksi."
        ],
        image: {
            url: "/smart-city/editorial/system-before-technology.png",
            alt: "Kaupunkirakenne, joka toimii huomaamattomasti thaimaalaisen arjen taustalla",
        },
        cta: {
            label: "Tutustu Paikalliseen Globaalina Prototyyppinä",
            href: "/smart-city/editorial-local-as-global-prototype",
        },
    },

    systemExplanation: {
        headline: "Mitä Järjestelmänäkökulma Paljastaa",
        paragraphs: [
            "Järjestelmänäkökulma alkaa tuloksista: mukavuudesta, turvallisuudesta, rytmistä ja saavutettavuudesta.",
            "Vasta kun tulokset ovat nähtävissä, kysymme, mitä teknologiaa niiden tukemiseen tarvitaan. Tämä auttaa kaupunkeja välttämään innovaatioita, jotka näyttävät edistyneiltä mutta tuottavat vain rajallisen vaikutuksen arjessa."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Liikkumisen koordinointijärjestelmä tukemassa päivittäistä liikkumista ilman näkyvyyttä",
        },
    },

    whyItMatters: {
        headline: "Miksi Järjestelmä Ennen Teknologiaa On Tärkeää",
        paragraphs: [
            "Kaupungit, jotka aloittavat järjestelmistä, rakentavat useammin ratkaisuja, jotka voidaan skaalata. Kaupungit, jotka aloittavat teknologiasta, tuottavat usein yksittäisiä toteutuksia."
        ],
        points: [
            {
                title: "Tulokset Tulevat Ensin",
                description:
                    "Jos mukavuus ja turvallisuus eivät parane, teknologia ei täytä sille asetettua tarkoitusta.",
            },
            {
                title: "Huomaamaton Onnistuminen on Tavoite",
                description:
                    "Toimivat järjestelmät sulautuvat arkeen. Ihmiset kokevat parannuksia ilman, että heidän tarvitsee keskittyä itse työkaluun.",
            },
            {
                title: "Ennaltaehkäisy Tukee Pitkän Aikavälin Vakautta",
                description:
                    "Järjestelmälähtöinen lähestymistapa vähentää riskejä varhaisessa vaiheessa sen sijaan, että ongelmia käsiteltäisiin vasta vahingon tapahduttua.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Liikkumisen Koordinointi",
            paragraphs: [
                "Järjestelmät koordinoivat aikaa, virtausta ja käyttäytymistä. Teknologia on vain yksi osa koordinointikerrosta."
            ],
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "Liikkumisen koordinointi tukemassa ennakoitavaa liikkumista",
            },
            landingUrl: "/smart-city/system-explainers-mobility-coordination",
        },
        {
            headline: "Tehokkuus ja Ihmisen Rytmi",
            paragraphs: [
                "Tehokkuudesta tulee merkityksellistä silloin, kun se tukee ihmisten rytmiä eikä ohita sitä."
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "Kaupunkijärjestelmät ihmisen rytmin ja mukavuuden mukaisesti",
            },
            landingUrl: "/smart-city/city-systems/efficiency-and-rhythm",
        },
    ],
};