import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsEfficiencyAndRhythmFI: ISmartCityLanding = {
    heroObservation: {
        headline: "Tehokkuus ja Ihmisen Rytmi",
        paragraphs: [
            "Tehokkuus muuttuu ongelmalliseksi, kun järjestelmät edellyttävät ihmisten liikkuvan nopeammin kuin arki kohtuudella sallii.",
            "Kaupungit toimivat parhaiten, kun järjestelmät mukautuvat ihmisen rytmiin: ennakoitava ajoitus, koordinoitu liike ja huomaamaton logistiikka.",
            "Tavoitteena ei ole maksimaalinen nopeus, vaan kaupunki, joka tuntuu vakaalta, luotettavalta ja hengittävältä."
        ],
        image: {
            url: "/smart-city/city-systems/efficiency-and-rhythm.png",
            alt: "Thaimaalainen kaupunki-infrastruktuuri, joka tukee sujuvaa liikkumista ja ennakoitavaa päivittäistä rytmiä",
        },
        cta: {
            label: "Palaa Kaupunkijärjestelmiin",
            href: "/smart-city/city-systems-movement-and-pause",
        },
    },

    systemExplanation: {
        headline: "Mitä Tehokkuus Todella Tarkoittaa",
        paragraphs: [
            "Tehokkuutta ei määritä pelkästään nopeus, vaan kitkan vähentyminen.",
            "Kun liikenne, ylitykset, logistiikka ja julkiset palvelut ovat ajallisesti koordinoituja, kaupungista tulee ennakoitava. Ihmiset luottavat järjestelmään sen sijaan, että kiirehtisivät sen sisällä, jolloin kaupunki pysyy rauhallisena jatkuvasta toiminnasta huolimatta."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Liikenteen koordinointi, joka tukee sujuvaa liikkumista ilman kiireen tunnetta",
        },
    },

    whyItMatters: {
        headline: "Miksi Tehokkuus ja Rytmi Ovat Tärkeitä",
        paragraphs: [
            "Kaupungit, jotka kunnioittavat ihmisen rytmiä, vähentävät usein stressiä ja tukevat pitkäjänteistä tuottavuutta ilman, että mukavuus kärsii."
        ],
        points: [
            {
                title: "Ennakoitavuus Vähentää Ahdistusta",
                description:
                    "Ihmiset pysyvät rauhallisempina, kun liikkumisen ajoitus on ennakoitavissa eikä jatkuvaa reagointia tarvita.",
            },
            {
                title: "Nopeus Ei Ole Sama Kuin Suorituskyky",
                description:
                    "Kaupunki voi toimia nopeasti ja silti tuntua kuormittavalta. Todellinen suorituskyky koetaan usein vakaana ja huomaamattomana.",
            },
            {
                title: "Logistiikan Tulisi Pysyä Taustalla",
                description:
                    "Hyvin suunnitellut järjestelmät tukevat arkea jatkuvasti ilman, että ne vaativat huomiota tai hallitsevat julkista tilaa.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Liikkumisen Koordinointi",
            paragraphs: [
                "Kun signaalit, ajoneuvot, jalankulkijat ja joukkoliikenne ovat ajallisesti linjassa, liikkuminen tuntuu vaivattomalta eikä kontrolloidulta."
            ],
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "Liikkumisen koordinointi tukemassa sujuvaa kaupunkirytmiä",
            },
            landingUrl: "/smart-city/system-explainers-mobility-coordination",
        },
        {
            headline: "Logistiikka Muokkaa Kaupungin Rytmiä Hiljaisesti",
            paragraphs: [
                "Tehokas logistiikka vaikuttaa kaupunkiin vähemmän näkyvän nopeuden ja enemmän ajoituksen sekä huomaamattomuuden kautta."
            ],
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "Kaupunkilogistiikka toimimassa huomaamattomasti modernilla kadulla",
            },
            landingUrl: "/smart-city/global-patterns-urban-logistics",
        },
    ],
};