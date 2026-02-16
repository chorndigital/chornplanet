import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowMiddayFI: ISmartCityLanding = {
    heroObservation: {
        headline: "Keskipäivän Virta — Tiheys ja Koordinointi",
        paragraphs: [
            "Keskipäivällä kaupungin monimutkaisuus näkyy selkeimmin.",
            "Ihmiset, tavarat, toimitukset, palvelut ja liikkuminen limittyvät samaan aikaan. Katu ruuhkautuu, mutta arjen tulisi silti tuntua rauhalliselta.",
            "Älykaupunkia ei määritä se, että se poistaa tiheyden. Se näkyy siinä, tuntuuko tiheys koordinoidulta."
        ],
        image: {
            url: "/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
            alt: "Vilkas thaimaalainen kaupunkikatu keskipäivällä, jossa jalankulkijat, skootterit, pyöräilijät, toimitusrobotit ja autonominen sähköinen shuttle liikkuvat yhdessä",
        },
        cta: {
            label: "Katso Iltavirta",
            href: "/smart-city/human-daily-flow-evening",
        },
    },

    systemExplanation: {
        headline: "Keskipäivän Järjestelmät, Joita Ihmiset Eivät Näe",
        paragraphs: [
            "Huipputiheydessä kaupunki koordinoi useita kerroksia: logistiikan ajoitusta, liikennevaloja, jalankulkijoiden liikettä, toimitusreittejä ja julkisen tilan jakamista.",
            "Kun nämä järjestelmät toimivat hyvin, ne vaativat vain vähän huomiota. Ihmiset kokevat liikkumisen yksinkertaisesti ennakoitavampana ja vähemmän jännittyneenä."
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "Kaupunkilogistiikka toimii hiljaisesti arjen rinnalla",
        },
    },

    whyItMatters: {
        headline: "Miksi Keskipäivän Virta On Tärkeä",
        paragraphs: [
            "Keskipäivä osoittaa, pystyykö kaupunki tukemaan arkea laajassa mittakaavassa muuttumatta stressaavaksi tai kaoottiseksi."
        ],
        points: [
            {
                title: "Tiheys Testaa Järjestelmä-Älykkyyttä",
                description:
                    "Keskipäivällä koordinointi on tärkeintä: kun monet toiminnot limittyvät, järjestelmien on pysyttävä hiljaisina ja luotettavina.",
            },
            {
                title: "Logistiikan Tulee Olla Huomaamatonta",
                description:
                    "Toimitusten ei tulisi hallita katua. Niiden tulisi sulautua arkeen häiritsemättä mukavuutta.",
            },
            {
                title: "Yhteiselo On Uusi Oletus",
                description:
                    "Skootterien, jalankulkijoiden, pyörien, robottien ja ajoneuvojen tulee pystyä toimimaan yhdessä luonnollisesti sen sijaan, että ne kilpailisivat hallinnasta.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Logistiikka Sulautuu Päivittäiseen Elämään",
            paragraphs: [
                "Kun toimitukset toimivat ilman että ne hallitsevat huomiota, kaupunki voi tuntua rauhalliselta myös huipputiheydessä."
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Toimitusrobotit ja pienet sähköiset logistiikkaratkaisut sulautumassa thaimaalaiseen katumaisemaan",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
        {
            headline: "Sekaliikkuminen On Muodostumassa Oletukseksi",
            paragraphs: [
                "Keskipäivä paljastaa, onko sekaliikkumista tuettu tarkoituksella vai jätetty sattuman varaan. Ero näkyy mukavuudessa."
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Useita liikkumismuotoja yhdessä modernilla kaupunkikadulla",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    ],
};