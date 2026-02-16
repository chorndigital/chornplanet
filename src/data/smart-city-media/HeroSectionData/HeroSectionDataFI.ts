import {IHeroSection} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const HeroSectionDataFI: IHeroSection = {
    headline: "Kun Ihmiselämä Muokkaa Kaupunkia",
    paragraph:
        "Kaupunkeja eivät määrittele pelkästään teknologia, infrastruktuuri tai politiikka. Niitä muokkaa se, miten ihmiset liikkuvat, pysähtyvät, kokoontuvat ja elävät arjessaan. Älykkäät kaupungit alkavat arjen rutiineista, jotka hiljaisesti paljastavat, miten kaupunki toimii.",

    softTexts: [
        {
            title: "Ei tulevaisuusvisio",
            description:
                "Tämä on havainto arjesta, jossa kehittyvä liikkuminen, huomaamattomat järjestelmät ja ihmisten käyttäytyminen kohtaavat jo nyt."
        },
        {
            title: "Paikalliset hetket, globaali merkitys",
            description:
                "Yhdellä kadulla tapahtuva toiminta heijastaa usein eri puolilla maailmaa toistuvia kaupunkimalleja."
        }
    ],

    image: {
        url: "/smart-city/hero-section/city-shaped-by-people-move.png",
        alt: "Arjen kaupunkielämä, jossa ihmiset, autonominen liikkuminen ja kaupunkijärjestelmät toimivat luontevasti yhdessä",
    },
    purpose: "Maailmankuvan luominen, ei ominaisuuksien selittäminen",
    narrativeRole: "Viestii, että alusta tarkastelee kaupunkeja ihmisten elämän kautta, ei teknologian",
    section: "Hero Section",
    category: "Smart City Media",
    editorialTone: "observational",
    signalFocus: ["mobility", "safety", "density", "coordination"],
    landingUrl: "/smart-city/when-human-life-shapes-the-city",
};