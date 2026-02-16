import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowEveningFI: ISmartCityLanding = {
    heroObservation: {
        headline: "Iltavirta — Hidastuminen ja Palautuminen",
        paragraphs: [
            "Ilta ei ole nopeutta varten. Se on palautumista varten.",
            "Kaupungin laatu tulee näkyväksi, kun ihmiset hidastavat: kävelevät kotiin, tapaavat ystäviä, tekevät paikallisia ostoksia tai pysähtyvät hetkeksi julkisessa tilassa.",
            "Älykaupunki näkyy siinä, tuntuvatko kadut riittävän turvallisilta, jotta ihmiset voivat rentoutua ja olla läsnä myös auringonlaskun jälkeen."
        ],
        image: {
            url: "/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
            alt: "Varhainen ilta thaimaalaisella kaupunkikadulla, lämpimät valot, jalankulkijat, rauhalliset skootterit ja turvallinen tunnelma sosiaalista elämää varten",
        },
        cta: {
            label: "Palaa Älykaupunki-yleiskatsaukseen",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
    },

    systemExplanation: {
        headline: "Iltajärjestelmät, Jotka Suojaavat Mukavuutta",
        paragraphs: [
            "Ilta paljastaa, tukeeko kaupunki mukavuutta vai kokevatko ihmiset joutuvansa vetäytymään sisätiloihin.",
            "Valaistus, käveltävyys, katuelämä ja ennakoitava liikkuminen mahdollistavat julkisen elämän jatkumisen pienemmällä epävarmuudella. Kun nämä järjestelmät toimivat yhdessä, kaupunki pysyy käyttökelpoisena ja kutsuvana myös päiväajan jälkeen."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Julkisen tilan orkestrointi valaistuksella ja käveltävyydellä tukemassa iltaelämää",
        },
    },

    whyItMatters: {
        headline: "Miksi Iltavirta On Tärkeä",
        paragraphs: [
            "Kaupunki, joka tukee palautumista illalla, vahvistaa pitkän aikavälin sosiaalista yhteyttä ja koettua turvallisuutta ilman raskasta kontrollia."
        ],
        points: [
            {
                title: "Mukavuus On Järjestelmän Tulosta",
                description:
                    "Iltamukavuus ei ole koriste. Se on turvallisuuden, valaistuksen ja ennakoitavan liikkumisen tulos.",
            },
            {
                title: "Julkisesta Tilasta Tulee Sosiaalista Infrastruktuuria",
                description:
                    "Kun ihmiset pysyvät ulkona auringonlaskun jälkeen, julkinen tila tukee vahvempaa yhteisöllisyyttä ja arjen saavutettavuutta.",
            },
            {
                title: "Turvallisuus Ilman Valvontaa",
                description:
                    "Tehokkaimmat kadut tuntuvat turvallisilta, koska ne on suunniteltu vähentämään riskiä, ei rankaisemaan käyttäytymistä.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Julkista Tilaa Käytetään Tarkoituksen Mukaisesti",
            paragraphs: [
                "Ilta paljastaa, tuntevatko ihmiset olonsa turvalliseksi viipyäkseen. Tämä viipyminen on selkeä mukavuuden merkki."
            ],
            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "Thaimaalaiset asukkaat istuvat ja kävelevät mukavasti hyvin valaistussa julkisessa tilassa",
            },
            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
        {
            headline: "Tiheys ja Mukavuus",
            paragraphs: [
                "Iltamukavuus osoittaa, tuntuuko tiheys elinkelpoiselta vai uuvuttavalta."
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Kaupunkitiheys pehmennettynä vihreydellä ja rauhallisella ilta-aktiivisuudella",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};