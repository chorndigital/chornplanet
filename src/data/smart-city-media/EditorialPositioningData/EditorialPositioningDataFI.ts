import {IEditorialPositioning} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const EditorialPositioningDataFI: IEditorialPositioning = {
    headline: "Arjesta järjestelmäymmärrykseen",
    paragraphs: [
        "Tämä alusta ei ennusta kaupunkien tulevaisuutta. Se havainnoi, miten kaupungit toimivat ihmisten arjen kautta.",
        "Keskittymällä rutiineihin, liikkeeseen, taukoihin ja koordinointiin kaupunkijärjestelmät tulevat näkyviksi ilman että ne supistuvat teknologia- tai politiikkakieleksi.",
        "Tavoitteena ei ole ratkaisujen markkinointi, vaan yhteisen ymmärryksen tukeminen kaupunkien, kulttuurien ja mittakaavojen välillä."
    ],
    principles: [
        {
            title: "Ihminen ensin -havainnointi",
            description:
                "Kaupunkijärjestelmiä ymmärretään eletyn kokemuksen kautta. Ihmisten rutiineja ja päivittäisiä päätöksiä käsitellään ensisijaisina signaaleina, ei toissijaisina seurauksina.",
            image: {
                url: "/smart-city/editorial/human-first-observation.png",
                alt: "Ihmiset liikkuvat rauhallisella kaupunkikadulla ensisijaisena signaalina kaupunkijärjestelmistä",
            },
            landingUrl: "/smart-city/editorial-human-first-observation",
        },
        {
            title: "Järjestelmä ennen teknologiaa",
            description:
                "Teknologiaa tarkastellaan vain silloin, kun se merkityksellisesti muokkaa käyttäytymistä, turvallisuutta, saavutettavuutta tai mukavuutta — ei irrallisena ominaisuutena.",
            image: {
                url: "/smart-city/editorial/system-before-technology.png",
                alt: "Kaupunkiliikkuminen ja infrastruktuuri toimivat huomaamattomasti arjen taustalla",
            },
            landingUrl: "/smart-city/editorial/system-before-technology",
        },
        {
            title: "Paikallinen globaalina prototyyppinä",
            description:
                "Keskikokoiset kaupungit voivat toimia elävinä laboratorioina. Paikalliset mallit voivat kehittyä laajemmiksi kaupunkijärjestelmiksi, kun niitä havainnoidaan huolellisesti.",
            image: {
                url: "/smart-city/editorial/local-as-global-prototype.png",
                alt: "Paikallinen katunäkymä, joka heijastaa kaupunkien maailmanlaajuisesti jakamia malleja",
            },
            landingUrl: "/smart-city/editorial-local-as-global-prototype",
        },
    ],
}
