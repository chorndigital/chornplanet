//data/smart-city-media/SystemExplainersDataFI.ts

import {ISystemExplainers} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const SystemExplainersDataFI: ISystemExplainers = {
    headline: "Järjestelmät arjen liikkumisen taustalla",
    paragraph:
        "Arjen liikkuminen, joka vaikuttaa luonnolliselta, perustuu usein jatkuvaan koordinointiin. Nämä järjestelmät eivät yleensä vaadi suoraa huomiota, mutta vaikuttavat siihen, miten kaupungit toimivat laajemmassa mittakaavassa.",

    systems: [
        {
            title: "Liikkumisen koordinointi",
            description:
                "Liikennevalot, jalankulkijavirrat, autonomiset ajoneuvot ja joukkoliikenne toimivat yhteensovitettujen aikarakenteiden puitteissa. Vakaissa olosuhteissa liikkuminen voi näyttäytyä jatkuvampana sen sijaan, että se vaikuttaisi erikseen ohjatulta.",
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "Kaupunkien liikkumisjärjestelmät koordinoivat jalankulkijoita, ajoneuvoja ja autonomista liikennettä",
            },
        },
        {
            title: "Kaupunkilogistiikka",
            description:
                "Tavarat liikkuvat kaupungeissa jakelupalvelujen, mikroajoneuvojen ja automatisoitujen järjestelmien kautta. Nämä logistiset toiminnot tukevat päivittäistä toimintaa ja voivat vähentää häiriöitä, kun ne integroidaan kaupunkien liikkumismalleihin.",
            image: {
                url: "/smart-city/system-explainers/urban-logistics.png",
                alt: "Arkipäiväinen logistiikka toiminnassa kaupungin kaduilla",
            },
        },
        {
            title: "Julkisen tilan jäsentely",
            description:
                "Jalkakäytävät, suojatiet, valaistus ja katutoiminta vaikuttavat siihen, miten ihmiset jakavat tilaa päivän aikana. Nämä tekijät vaikuttavat liikkumisolosuhteisiin ja julkisten alueiden yleiseen käytettävyyteen.",
            image: {
                url: "/smart-city/system-explainers/public-space-orchestration.png",
                alt: "Julkinen tila, joka tukee yhteistä kaupunkielämää",
            },
        },
    ],
};