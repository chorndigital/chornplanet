import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const FromLocalLifeToGlobalPatternFI: ISmartCityLanding = {
    heroObservation: {
        headline: "Paikallisesta Elämästä Globaaliksi Malliksi",
        paragraphs: [
            "Kaupunkielämä tuntuu usein paikalliselta, tuttujen katujen, tapojen ja rutiinien muovaamalta.",
            "Kun samankaltaisia tilanteita esiintyy eri kaupungeissa, kulttuureissa ja mittakaavoissa, ne tarjoavat vertailtavaa näyttöä siitä, miten kaupungit tyypillisesti toimivat.",
            "Tämä ei ole ennustamista. Se on vertailua — arjen hetkiä asetetaan rinnakkain, kunnes taustalla olevat järjestelmät tulevat näkyviin."
        ],
        image: {
            url: "/smart-city/local-to-global/global-urban-pattern.png",
            alt: "Arjen katunäkymät viittaavat yhteisiin liikkumismalleihin eri kaupungeissa",
        },
        cta: {
            label: "Tutustu Globaaleihin Mal­leihin",
            href: "/smart-city/global-patterns-predictable-shared-street",
        },
    },

    systemExplanation: {
        headline: "Miten Kaupungista Tulee Vertailtava",
        paragraphs: [
            "Kaupungit ovat vertailtavissa, kun havaitaan samanlaisia hetkiä: ylityksiä, jonoja, pysähtymisiä, toimituksia ja rinnakkaiseloa.",
            "Kun paikallinen käyttäytyminen toistuu eri paikoissa, se siirtyy yksilöllisestä mieltymyksestä tunnistettavaksi signaaliksi, joka viittaa yhteisiin rakenteellisiin olosuhteisiin arjen taustalla."
        ],
        image: {
            url: "/smart-city/editorial/local-as-global-prototype.png",
            alt: "Paikallinen katunäkymä viitepisteenä laajempien kaupunkijärjestelmien ymmärtämiseen",
        },
    },

    whyItMatters: {
        headline: "Miksi Paikallisesta Globaaliksi On Tärkeää",
        paragraphs: [
            "Toistuvat mallit leviävät usein nopeammin kuin viralliset politiikat. Kun paikallinen rutiini ilmenee monissa kaupungeissa, se viittaa yhteisiin reaktioihin samankaltaisiin kaupunkiolosuhteisiin."
        ],
        points: [
            {
                title: "Arjen Kadut Heijastavat Järjestelmäolosuhteita",
                description:
                    "Luotettava tapa ymmärtää kaupungin laatua on tarkastella, mitä tapahtuu tavallisella kadulla tavallisena hetkenä.",
            },
            {
                title: "Mallit Voivat Syntyä Ilman Koordinointia",
                description:
                    "Yhteinen katukäyttäytyminen voi syntyä eri kaupungeissa itsenäisesti, samanlaisten rajoitteiden ja tarpeiden muovaamana.",
            },
            {
                title: "Ymmärrys Tukee Vuoropuhelua",
                description:
                    "Mallien havainnointi auttaa kaupunkeja muodostamaan yhteistä ymmärrystä ilman tiettyjen ratkaisujen tai ideologioiden edistämistä.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Globaalit Mallit Arjen Kaupungeista",
            paragraphs: [
                "Kun samankaltaisia signaaleja esiintyy eri kulttuurisissa ympäristöissä, ne voivat viitata lähentymiseen kohti yhteisiä toimintakäyttäytymisiä."
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "Rauhallinen jaettu katu edustaa ennakoitavaa liikkumismallia, jota havaitaan useissa kaupungeissa",
            },
            landingUrl: "/smart-city/global-patterns-predictable-shared-street",
        },
        {
            headline: "Paikallinen Globaalina Prototyyppinä",
            paragraphs: [
                "Keskisuuret kaupungit tekevät toistuvat mallit usein helpommin havaittaviksi, koska katukäyttäytyminen pysyy näkyvänä ja luettavana."
            ],
            image: {
                url: "/smart-city/editorial/local-as-global-prototype.png",
                alt: "Paikallinen katuelämä heijastaa malleja, joita havaitaan monissa kaupungeissa maailmanlaajuisesti",
            },
            landingUrl: "/smart-city/editorial-local-as-global-prototype",
        },
    ],
};