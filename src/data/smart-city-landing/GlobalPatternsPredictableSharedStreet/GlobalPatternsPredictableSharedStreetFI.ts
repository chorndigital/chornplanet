import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const GlobalPatternsPredictableSharedStreetFI: ISmartCityLanding = {
    heroObservation: {
        headline: "Ennakoitavat Kadut Mahdollistavat Spontaanin Elämän",
        paragraphs: [
            "Eri kulttuurien kaupungeissa ennakoitavat kadut tuottavat usein samankaltaisen vaikutuksen: ihmiset kokevat olonsa rennommaksi julkisessa tilassa.",
            "Kun liikkumisen säännöt ovat helposti luettavissa, jalankulkijat ylittävät kadun luontevasti, ajoneuvot hidastavat vähemmällä kitkalla ja katuelämä muuttuu spontaanimmaksi.",
            "Tämä on globaali ilmiö — jota ei muokkaa pelkkä teknologia, vaan luottamus yhteiseen tilaan."
        ],
        image: {
            url: "/smart-city/global-patterns/predictable-shared-street.png",
            alt: "Ennakoitava jaettu katu, jossa jalankulkijat, pyöräilijät ja ajoneuvot liikkuvat rauhallisesti",
        },
        cta: {
            label: "Tutustu Sekaliikkumisen Malliin",
            href: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    },

    systemExplanation: {
        headline: "Miksi Ennakoitavuus Toistuu Kaupungeissa",
        paragraphs: [
            "Ennakoitavuus vähentää epävarmuutta. Tämä vähennys on laajasti merkityksellinen eri konteksteissa ja tulotasoissa.",
            "Kun kadut viestivät selkeää rytmiä suunnittelun kautta, ihmisten ei tarvitse neuvotella jokaisesta askeleesta. Katu muuttuu riittävän turvalliseksi tukemaan arjen spontaaniutta: pysähtymistä, kohtaamista, ylittämistä ja viipymistä."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Liikkumisen koordinointijärjestelmät tukemassa ennakoitavaa liikkumista",
        },
    },

    whyItMatters: {
        headline: "Miksi Tämä Globaali Ilmiö On Merkityksellinen",
        paragraphs: [
            "Ennakoitavuus on yksi harvoista liikkumisen periaatteista, joka voi skaalautua monenlaisiin kaupunkeihin, koska se koetaan suoraan arjen liikkeen kautta."
        ],
        points: [
            {
                title: "Luottamus On Eräänlaista Infrastruktuuria",
                description:
                    "Ennakoitava katu tukee luottamusta ilman jatkuvaa valvontaa tai poliisitoimintaa.",
            },
            {
                title: "Turvallisuus Tukee Julkista Elämää",
                description:
                    "Kun kadun ylittäminen tuntuu turvalliselta, ihmiset viipyvät ulkona pidempään ja käyttävät kaupunkia vapaammin.",
            },
            {
                title: "Suunnittelu Vähentää Kontrollin Tarvetta",
                description:
                    "Tehokkaimmat kadut ohjaavat käyttäytymistä luettavuuden kautta, eivät rangaistuksen avulla.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Ennakoitava Katukäyttäytyminen",
            paragraphs: [
                "Ennakoitavuus ei ole ominaisuus — se on arjen signaali kadusta, jota ihmiset voivat käyttää luottavaisesti."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Ennakoitava katukäyttäytyminen thaimaalaisessa kaupunkiympäristössä",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "Liike ja Pysähtyminen",
            paragraphs: [
                "Ennakoitavuus mahdollistaa pysähtymisen. Ilman sitä paikallaan olo voi tuntua turvattomalta."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Katu, joka tasapainottaa liikkeen ja pysähtymisen järjestelmän tuloksena",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};