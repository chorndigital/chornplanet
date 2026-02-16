import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const GlobalPatternsMixedMobilityCoexistenceFI: ISmartCityLanding = {
    heroObservation: {
        headline: "Sekaliikkuminen On Yhä Useammin Globaali Lähtökohta",
        paragraphs: [
            "Kävely, pyöräily, potkulaudat, pienet sähköajoneuvot ja jakelurobotit ovat yhä useammin osa kaupunkien päivittäistä liikkumista.",
            "Monissa kaupungeissa kadut kehittyvät kohti sekaliikkumisen ympäristöjä, joissa rinnakkaiselo — ei tiukka erottelu — muokkaa arkea.",
            "Tämä kuvastaa havaittavaa muutosta siinä, miten kaupunkitilaa käytetään ja jaetaan."
        ],
        image: {
            url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
            alt: "Useita liikkumismuotoja rauhallisesti rinnakkain kaupunkikadulla",
        },
        cta: {
            label: "Tutustu Logistiikkamalleihin",
            href: "/smart-city/global-patterns-urban-logistics",
        },
    },

    systemExplanation: {
        headline: "Miksi Rinnakkaiseloa Esiintyy Kaupungeissa",
        paragraphs: [
            "Kaupunkikaduilla ei useinkaan ole riittävästi tilaa erottaa kaikkia liikkumismuotoja täysin toisistaan. Tiheyden kasvaessa yhteiskäyttö yleistyy.",
            "Konfliktin ja mukavuuden välinen ero syntyy järjestelmäsuunnittelusta: nopeuksien yhteensovittamisesta, selkeistä etuoikeusviesteistä, helposti luettavista ylityksistä sekä kaduista, jotka vähentävät kitkaa ilman jatkuvaa valvontaa."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Julkisen tilan orkestrointi tukemassa sekaliikkumisen rinnakkaiseloa",
        },
    },

    whyItMatters: {
        headline: "Miksi Tämä Globaali Ilmiö On Merkityksellinen",
        paragraphs: [
            "Sekaliikkuminen heijastaa sitä, miten kaupungit sopeutuvat rajalliseen tilaan ja monimuotoisiin liikkumistarpeisiin. Hyvin suunniteltu rinnakkaiselo tukee turvallisuutta, rauhallisuutta ja toiminnallista tehokkuutta."
        ],
        points: [
            {
                title: "Rinnakkaiselo Tukee Kapasiteettia",
                description:
                    "Kun kadut palvelevat useita liikkumismuotoja, liike jakautuu tasaisemmin sen sijaan, että se keskittyisi yhteen järjestelmään.",
            },
            {
                title: "Tasapainoinen Käyttö Lisää Mukavuutta",
                description:
                    "Kun mikään yksittäinen liikkumismuoto ei hallitse katua, ihmiset kokevat olonsa yleensä turvallisemmaksi ja julkinen tila toimii paremmin.",
            },
            {
                title: "Jaetut Kadut Heijastavat Yhteiskäyttöä",
                description:
                    "Sekaliikkuminen ei ole vain liikenteellinen ilmiö, vaan myös osoitus tilan yhteisestä käytöstä.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Sekaliikkumisen Rinnakkaiselo",
            paragraphs: [
                "Katua tarkastellaan yhä useammin jaettuna ympäristönä, jossa kävely, potkulaudat, polkupyörät, robotit ja sähköajoneuvot toimivat yhdessä."
            ],
            image: {
                url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                alt: "Sekaliikkumisen rinnakkaiselo modernissa thaimaalaisessa katutilassa",
            },
            landingUrl: "/smart-city/mobility-focus-mixed-mobility",
        },
        {
            headline: "Tiheys ja Mukavuus",
            paragraphs: [
                "Rinnakkaiselo auttaa ylläpitämään mukavuutta tiheissä ympäristöissä. Ilman yhteiskäyttöön perustuvaa suunnittelua tiheys voi johtaa kitkaan."
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Mukava tiheys, jota tukevat suunnittelu ja jaettu liikkuminen",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};