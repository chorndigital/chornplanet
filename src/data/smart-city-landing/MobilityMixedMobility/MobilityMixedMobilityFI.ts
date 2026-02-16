import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const MobilityMixedMobilityFI: ISmartCityLanding = {
    heroObservation: {
        headline: "Sekaliikkumisen Yhteiselo",
        paragraphs: [
            "Nykyaikaisia katuja ei enää rakenneta yhden liikkumismuodon ympärille.",
            "Skootterit, polkupyörät, jalankulkijat, toimitusrobotit ja autonomiset ajoneuvot ovat yhä useammin osa katujen arkea.",
            "Älykaupunki ei määritelmällisesti tarkoita kaiken erottamista toisistaan. Se näkyy siinä, että yhteiselo tuntuu luonnolliselta ja turvalliselta."
        ],
        image: {
            url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
            alt: "Thaimaalainen katu, jossa jalankulkijat, skootterit, pyöräilijät ja autonominen kuljetin toimivat luonnollisesti yhdessä",
        },
        cta: {
            label: "Palaa Liikkumisen Teemaan",
            href: "/smart-city/mobility-focus-mixed-mobility",
        },
    },

    systemExplanation: {
        headline: "Mikä Tekee Yhteiselosta Toimivan",
        paragraphs: [
            "Sekaliikkuminen toimii, kun mikään yksittäinen liikkumismuoto ei hallitse huomiota. Kadut muuttuvat luettaviksi johdonmukaisen suunnittelun kautta: nopeuksien yhteensovittaminen, selkeät etusijamerkit ja tila, joka voi mukautua ajan mukaan.",
            "Kun suunnittelu on onnistunut, yhteiselo tuntuu vaivattomalta — ihmiset lakkaavat ajattelemasta järjestelmiä ja liikkuvat vain."
        ],
        image: {
            url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
            alt: "Useita liikkumismuotoja, jotka toimivat rauhallisesti yhdessä modernilla kadulla",
        },
    },

    whyItMatters: {
        headline: "Miksi Sekaliikkuminen On Tärkeää",
        paragraphs: [
            "Kaupungit, jotka tukevat sekaliikkumista, voivat vähentää ruuhkapaineita ja luoda elävämpää julkista tilaa."
        ],
        points: [
            {
                title: "Liikkumisen Monimuotoisuus On Resilienssiä",
                description:
                    "Kun yksi liikkumismuoto hidastuu, muut voivat ylläpitää kaupungin rytmiä. Yhteiselo luo järjestelmään varmuutta.",
            },
            {
                title: "Vähemmän Hallintaa, Enemmän Mukavuutta",
                description:
                    "Kadut voivat tuntua rauhallisemmilta, kun mikään yksittäinen ajoneuvotyyppi ei hallitse tilaa.",
            },
            {
                title: "Muutos On Jo Näkyvissä",
                description:
                    "Sekaliikkuminen näkyy yhä enemmän kaupunkien arkipäiväisessä katukäyttäytymisessä eri puolilla maailmaa.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Sekaliikkumisesta Tulee Globaali Oletus",
            paragraphs: [
                "Eri kulttuureissa kadut kehittyvät kohti yhteisiä yhteiselon malleja tiukan erottelun sijaan."
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Globaali sekalaisen liikkumisen malli, joka näkyy eri kaupungeissa",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
        {
            headline: "Logistiikka Sulautuu Päivittäiseen Elämään",
            paragraphs: [
                "Yhteiselo sisältää myös toimitusjärjestelmät. Hyvin integroiduissa kaupungeissa logistiikka toimii häiritsemättä julkista tilaa."
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Toimitusrobotit ja pienet sähköiset logistiikkaratkaisut osana päivittäistä kaupunkielämää",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
    ],
};