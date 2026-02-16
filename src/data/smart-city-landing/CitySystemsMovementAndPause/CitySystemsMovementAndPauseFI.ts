import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsMovementAndPauseFI: ISmartCityLanding = {
    heroObservation: {
        headline: "Liike ja Pysähtyminen",
        paragraphs: [
            "Kaupunkia ei määritä se, kuinka nopeasti se liikkuu, vaan se, mahdollistaako se ihmisille pysähtymisen ilman riskiä tai painetta.",
            "Terveet kadut eivät ole moottoriteitä. Ne ovat jaettuja ympäristöjä, joissa liike voi hidastua luonnollisesti ja pysähtyminen on turvallista.",
            "Kun kaupunki tasapainottaa liikkeen ja paikallaanolon, arjesta voi tulla rauhallisempaa, sosiaalisempaa ja ihmislähtöisempää."
        ],
        image: {
            url: "/smart-city/city-systems/movement-and-pause.png",
            alt: "Thaimaalainen kaupunkikatu, jossa jalankulkijoiden pysähdykset ja rauhallinen liikennevirta ovat tasapainossa",
        },
        cta: {
            label: "Tutustu Tiheyteen ja Mukavuuteen",
            href: "/smart-city/city-systems-density-and-comfort",
        },
    },

    systemExplanation: {
        headline: "Mikä Luo Tasapainon Kadulla",
        paragraphs: [
            "Liike ja pysähtyminen eivät ole vastakohtia. Ne ovat toisiaan täydentäviä toimintoja samassa katutilajärjestelmässä.",
            "Ylitykset, reunakiveyksen muotoilu, jalkakäytävien rytmi ja liikennekäyttäytyminen vaikuttavat siihen, kokevatko ihmiset olonsa turvalliseksi hidastaessaan, tarkkaillessaan ja ollessaan vuorovaikutuksessa. Kun katu on luettava ja ennakoitava, sosiaalinen elämä voi kehittyä ilman laajaa valvontaa."
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "Julkisen tilan suunnittelu, joka mahdollistaa turvallisen pysähtymisen ja jaetun kaupunkielämän",
        },
    },

    whyItMatters: {
        headline: "Miksi Liike ja Pysähtyminen Ovat Tärkeitä",
        paragraphs: [
            "Kun ihmiset voivat pysähtyä luontevasti, kadut muuttuvat usein turvallisemmiksi, mukavammiksi ja sosiaalisesti aktiivisemmiksi."
        ],
        points: [
            {
                title: "Pysähtyminen Voi Viestiä Turvallisuutta",
                description:
                    "Jos ihmiset tuntevat olonsa riittävän turvalliseksi pysähtyäkseen, katu toimii todennäköisesti jo ennaltaehkäisevänä ympäristönä.",
            },
            {
                title: "Virtaus Ilman Painetta",
                description:
                    "Ennakoitava liike vähentää konflikteja ja tekee hidastamisesta luonnollista eikä riskialtista.",
            },
            {
                title: "Sosiaalinen Elämä Tarvitsee Paikallaanoloa",
                description:
                    "Kaupunki muuttuu ihmislähtöisemmäksi, kun kadut tukevat odottamista, havainnointia, kohtaamista ja lepäämistä.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Julkinen Tila Käytössä Tarkoituksenmukaisesti",
            paragraphs: [
                "Kun ihmiset viipyvät tilassa mukavasti, se viittaa siihen, että kaupunki on saavuttanut toimivan tasapainon liikkeen ja mukavuuden välillä."
            ],
            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "Asukkaat käyttävät julkista tilaa luonnollisesti ja mukavasti",
            },
            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
        {
            headline: "Ennakoitava Katujen Käyttäytyminen",
            paragraphs: [
                "Ennakoitavuus mahdollistaa turvallisen pysähtymisen. Ilman sitä jokaisesta pysähdyksestä voi tulla riski."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Ennakoitava yhteiskäyttöinen katu tukemassa turvallista jalankulkuliikennettä",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
    ],
};