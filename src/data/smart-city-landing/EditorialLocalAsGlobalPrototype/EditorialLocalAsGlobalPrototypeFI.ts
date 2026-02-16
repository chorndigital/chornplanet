import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialLocalAsGlobalPrototypeFI: ISmartCityLanding = {
    heroObservation: {
        headline: "Paikallinen Globaalina Prototyyppinä",
        paragraphs: [
            "Keskisuuret kaupungit tekevät usein kaupunkijärjestelmät helpommin havaittaviksi.",
            "Ne ovat riittävän tiheitä paljastaakseen järjestelmäpaineen, mutta pysyvät silti luettavina arjen ihmistoiminnan kautta.",
            "Paikallisten katujen huolellinen havainnointi voi auttaa tunnistamaan malleja, jotka myöhemmin ilmenevät erilaisissa kaupunkiympäristöissä."
        ],
        image: {
            url: "/smart-city/editorial/local-as-global-prototype.png",
            alt: "Thaimaalainen paikallinen katu, joka heijastaa monissa kaupungeissa maailmanlaajuisesti havaittavia kaupunkimalleja",
        },
        cta: {
            label: "Palaa Smart City Yleiskatsaukseen",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
    },

    systemExplanation: {
        headline: "Miksi Keskisuuret Kaupungit Paljastavat Enemmän",
        paragraphs: [
            "Suuret metropolialueet voivat peittää järjestelmiä mittakaavansa vuoksi. Keskisuuret kaupungit tekevät järjestelmät usein näkyvämmiksi arjen toiminnan kautta, kuten ylitysten, jonojen, toimitusten ja katutason koordinoinnin kautta.",
            "Tällaiset ympäristöt mahdollistavat toistuvien mallien selkeän havainnoinnin ennen kuin ne ilmenevät suuremmissa tai monimutkaisemmissa kaupunkirakenteissa."
        ],
        image: {
            url: "/smart-city/local-to-global/local-street-daily-routine.png",
            alt: "Paikallinen katuelämän rutiini, joka näyttää ihmisten käyttäytymisen kaupunkijärjestelmien indikaattorina",
        },
    },

    whyItMatters: {
        headline: "Miksi Paikallinen Globaalina Prototyyppinä On Tärkeää",
        paragraphs: [
            "Kaupunkien lähentyminen ei synny pelkästään suunnittelun kautta. Se kehittyy myös toistuvien paikallisten mallien kautta, jotka toimivat käytännössä arjessa."
        ],
        points: [
            {
                title: "Paikalliset Mallit Voivat Skaalautua Luontevasti",
                description:
                    "Kun jokin rutiini toimii hyvin, se voi levitä muihin paikkoihin ilman muodollista koordinointia.",
            },
            {
                title: "Näkyvyys Tukee Käytännön Oppimista",
                description:
                    "Keskisuuret kaupungit mahdollistavat kaupunkijärjestelmien ymmärtämisen suoran havainnoinnin kautta ilman abstraktiota.",
            },
            {
                title: "Paikallinen Identiteetti Voi Yhdistyä Globaaleihin Periaatteisiin",
                description:
                    "Kaupungit voivat säilyttää kulttuurisen erityispiirteensä ja samalla ilmentää järjestelmäkäyttäytymistä, jota havaitaan useilla alueilla.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Paikallisesta Elämästä Globaaliksi Malliksi",
            paragraphs: [
                "Kun samanlaisia paikallisia tilanteita esiintyy eri kaupungeissa, se viittaa yhteisiin järjestelmäkäyttäytymisiin."
            ],
            image: {
                url: "/smart-city/local-to-global/global-urban-pattern.png",
                alt: "Paikallisten tilanteiden vertailu, joka paljastaa yhteisiä kaupunkimalleja",
            },
            landingUrl: "/smart-city/from-local-life-to-global-pattern",
        },
        {
            headline: "Globaalit Mallit Arjen Kaupungeista",
            paragraphs: [
                "Ennakoitavuus, monimuotoinen liikkuminen ja vähäisesti näkyvä logistiikka havaitaan yhä useammin erilaisissa kaupunkiympäristöissä."
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "Ennakoitavat jaetun kadun mallit, joita havaitaan useissa kaupungeissa",
            },
            landingUrl: "/smart-city/global-patterns/predictable-shared-street",
        },
    ],
};