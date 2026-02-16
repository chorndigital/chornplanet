//data/smart-city-media/LocalToGlobalDataFI.ts

import {ILocalToGlobal} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const LocalToGlobalDataFI: ILocalToGlobal = {
    headline: "Paikallisesta kontekstista globaaleihin malleihin",
    paragraph:
        "Kaupunkitoiminta koetaan yleensä paikallisissa ja erityisissä konteksteissa. Kun samankaltaisia olosuhteita havaitaan eri kaupungeissa, alueilla ja kulttuureissa, voidaan tunnistaa toistuvia malleja. Arjen tilanteiden vertailu eri paikkojen välillä mahdollistaa yhteisten rakenteellisten järjestelmien tarkastelun.",

    items: [
        {
            title: "Rutiini katutasolla",
            description:
                "Päivittäinen liikkuminen tutulla kadulla havainnollistaa, miten yksilöt reagoivat tilallisiin olosuhteisiin, ajallisiin rakenteisiin ja liikkumisjärjestelmiin. Vaikka rutiinit ovat paikallisesti erityisiä, ne heijastavat kaupunkisuunnittelun muovaamia rakenteellisia malleja.",
            image: {
                url: "/smart-city/local-to-global/local-street-daily-routine.png",
                alt: "Arkipäiväinen kaupunkikatu, jossa jalankulkijoita, paikallisia liikkeitä ja toiminnassa olevia liikkumisjärjestelmiä",
            },
            signalFocus: ["human routine", "street-level mobility", "local behavior"],
        },
        {
            title: "Toistuvat mallit eri kaupungeissa",
            description:
                "Kun samankaltaisia liikkumisrakenteita havaitaan useissa kaupungeissa, ne viittaavat vertailukelpoisiin rakenteellisiin olosuhteisiin. Paikallisesti havaittua toimintaa voidaan siten tarkastella osana laajempaa kaupunkijärjestelmien käyttäytymistä eri alueilla.",
            image: {
                url: "/smart-city/local-to-global/global-urban-pattern.png",
                alt: "Kaupunkimaisema, jossa samankaltaisia liikkumisvirtoja, logistiikkajärjestelmiä ja julkisten tilojen käyttöä eri kaupungeissa",
            },
            signalFocus: ["replicability", "urban density", "systemic flow"],
        },
    ],

    purpose: "Tarkastella laajempia rakenteellisia malleja paikallisen vertailun kautta",
    narrativeRole: "Yhdistää havaittu paikallinen toiminta systeemiseen analyysiin",
    section: "From Local Life to Global Pattern",
    category: "Smart City Media",
    landingUrl: "/smart-city/from-local-life-to-global-pattern",
    lang: "fi",
};