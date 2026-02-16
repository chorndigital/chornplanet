import {IGlobalPatterns} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const GlobalPatternsDataFI: IGlobalPatterns = {
    headline: "Maailmanlaajuisesti havaittuja kaupunkien arjen malleja",
    paragraph:
        "Eri kulttuureissa, kokoluokissa ja tulotasoissa toimivissa kaupungeissa havaitaan yhä enemmän samankaltaisia liikkumisen ja julkisen tilan malleja. Nämä ilmiöt eivät johdu yksinomaan teknologiasta, vaan syntyvät ihmisten arjen rutiinien, tilallisten rajoitteiden ja järjestelmien yhteensovittamisen seurauksena ajan kuluessa. Näiden signaalien tarkastelu auttaa ymmärtämään, miten eri alueiden kaupungit osoittavat samankaltaisia toiminnallisia piirteitä säilyttäen samalla paikallisen identiteetin.",

    signals: [
        {
            title: "Ennakoitavat kadut tukevat julkista elämää",
            description:
                "Kun liikkumisjärjestelmät ovat ennakoitavia, ihmiset kokevat suurempaa varmuutta yhteisissä ympäristöissä. Useilla alueilla kadut, jotka vähentävät epävarmuutta nopeuden maksimoinnin sijaan, liittyvät vakaampaan ja mukavampaan julkisen tilan käyttöön.",
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "Rauhallinen jaettu katu, jossa jalankulkijat, pyöräilijät ja ajoneuvot liikkuvat ennakoitavasti"
            },
            signalFocus: [
                "shared streets",
                "predictable mobility",
                "human comfort",
                "street behavior"
            ],
            landingUrl: "/smart-city/global-patterns-predictable-shared-street"
        },
        {
            title: "Monimuotoinen liikkuminen yleistyy kaupungeissa",
            description:
                "Kävely, pyöräily, sähköpotkulaudat, pienet sähköajoneuvot ja jakelurobotit ovat yhä useammin osa kaupunkien arkea. Eri alueilla liikkumisympäristöjä järjestetään siten, että useat liikkumismuodot voivat toimia rinnakkain vastauksena tilallisiin ja toiminnallisiin vaatimuksiin.",
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Useita liikkumismuotoja rinnakkain kaupunkiympäristössä"
            },
            signalFocus: [
                "mixed mobility",
                "coexistence",
                "last-mile movement",
                "urban adaptation"
            ],
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence"
        },
        {
            title: "Kaupunkilogistiikan integrointi päivittäisiin järjestelmiin",
            description:
                "Pienimuotoinen logistiikka, kuten paikalliset jakeluajoneuvot, maatasossa liikkuvat robotit ja ilmajärjestelmät siellä missä se on sallittua, integroidaan yhä useammin osaksi kaupunkien päivittäistä toimintaa. Kaupungit, jotka sovittavat logistiikan olemassa oleviin tilallisiin ja turvallisuuteen liittyviin kehyksiin, säilyttävät yleensä julkisen mukavuuden samalla kun toiminnallinen tehokkuus paranee.",
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "Pienet jakeluajoneuvot ja robotit toiminnassa kaupunkiympäristössä"
            },
            signalFocus: [
                "urban logistics",
                "last-mile delivery",
                "system coordination",
                "integrated infrastructure"
            ],
            landingUrl: "/smart-city/global-patterns-urban-logistics"
        }
    ]
}