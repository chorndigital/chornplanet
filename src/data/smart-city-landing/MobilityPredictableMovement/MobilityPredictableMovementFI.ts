import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const MobilityPredictableMovementFI: ISmartCityLanding = {
    heroObservation: {
        headline: "Ennakoitava Liike Jaetuilla Kaduilla",
        paragraphs: [
            "Liikkumista ei koeta ensisijaisesti teknologiana. Se koetaan luottamuksena.",
            "Kun ihmiset voivat ylittää kadun epäröimättä, ajoneuvot hidastavat luonnollisesti ja pyöräilijät liikkuvat vähäisin ristiriidoin, kadusta tulee luettava.",
            "Ennakoitavuus ei ole kontrollia. Se on käytännöllinen perusta arjen turvallisuudelle."
        ],
        image: {
            url: "/smart-city/mobility-focus/predictable-shared-street.png",
            alt: "Thaimaalaiset jalankulkijat ja pyöräilijät liikkuvat rauhallisesti ennakoitavalla jaetulla kadulla, taustalla autonominen kuljetin",
        },
        cta: {
            label: "Tutustu Sekaliikkumiseen",
            href: "/smart-city/mobility-focus-mixed-mobility",
        },
    },

    systemExplanation: {
        headline: "Mikä Tekee Liikkeestä Ennakoitavaa",
        paragraphs: [
            "Ennakoitavuus syntyy suunnittelusta, joka vähentää epävarmuutta: selkeät ylitykset, johdonmukainen kaistalogiikka, luettavat signaalit ja kadut, jotka kannustavat hidastamiseen ilman pakottamista.",
            "Hyvin suunnitellut kadut tuntuvat turvallisilta, ei siksi että ihmisiä valvotaan, vaan siksi että liike synkronoituu luonnollisesti."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Kaupunkiliikenteen koordinointi, joka tukee ennakoitavaa katukäyttäytymistä",
        },
    },

    whyItMatters: {
        headline: "Miksi Ennakoitavuus On Tärkeää",
        paragraphs: [
            "Ennakoitava katu vähentää stressiä, pienentää onnettomuusriskiä ja luo edellytyksiä spontaanille kaupunkielämälle."
        ],
        points: [
            {
                title: "Turvallisuus Ilman Valvontaa",
                description:
                    "Kun liike on luettavaa, ihmiset säätelevät toimintaansa luonnollisesti. Kadut voivat pysyä rauhallisina ilman tiukkaa kontrollia.",
            },
            {
                title: "Luottamus On Käytännöllinen Mittari",
                description:
                    "Yksi keskeinen merkki toimivasta liikenteestä on se, että ihmiset voivat liikkua epäröimättä.",
            },
            {
                title: "Jaetut Kadut Tarvitsevat Yhteistä Luottamusta",
                description:
                    "Ennakoitavuus mahdollistaa jalankulkijoiden, skoottereiden, pyöräilijöiden ja ajoneuvojen rinnakkaiselon ilman jatkuvaa neuvottelua.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Ennakoitava Katukäyttäytyminen",
            paragraphs: [
                "Kun liike tuntuu rauhalliselta ja johdonmukaiselta, se osoittaa, että katu tukee luottamusta päivittäisessä käytössä."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Ennakoitava käyttäytyminen jaetulla kadulla thaimaalaisessa kaupunkiympäristössä",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "Liike ja Tauko",
            paragraphs: [
                "Katu, joka tukee turvallisia pysähdyksiä, on usein sama katu, joka mahdollistaa ennakoitavan liikkeen."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Kaupunkikatu, joka tasapainottaa liikkumisen virtauksen ja jalankulkijoiden turvalliset tauot",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};