import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const UrbanSignalsPublicSpaceUseFI: ISmartCityLanding = {
    heroObservation: {
        headline: "Julkinen Tila Käytössä Kuten Tarkoitettu",
        paragraphs: [
            "Julkinen tila paljastaa kaupungin laadun arjen käytön kautta.",
            "Kun ihmiset istuvat, pysähtyvät, keskustelevat ja viipyvät luontevasti, se viittaa siihen, että kaupunki on saavuttanut tasapainon liikkeen ja mukavuuden sekä tehokkuuden ja sosiaalisen elämän välillä.",
            "Yksi selkeimmistä toimivan kaupungin merkeistä ei ole nopeus, vaan se, kokevatko ihmiset olonsa riittävän mukavaksi jäädäkseen."
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "Thaimaalaiset asukkaat istuvat ja kävelevät mukavasti hyvin suunnitellussa julkisessa tilassa",
        },
        cta: {
            label: "Palaa Ennakoitaville Kaduille",
            href: "/smart-city/urban-signals-predictable-street",
        },
    },

    systemExplanation: {
        headline: "Mitä Julkisen Tilan Käyttö Kertoo",
        paragraphs: [
            "Ihmiset eivät viivy epämukavissa paikoissa. He jäävät vain sinne, missä kaupunki tarjoaa turvallisuutta, varjoa, valaistusta, käveltävyyttä ja rauhallista katutason rytmiä.",
            "Julkinen tila ei ole koristeellinen kerros. Se on järjestelmän lopputulos. Kun se toimii hyvin, kaupunki muuttuu sosiaalisesti aktiiviseksi ilman että sitä täytyy lavastaa tai ohjelmoida."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Julkisen tilan orkestrointi valaistuksen, jalkakäytävien ja käveltävyyden avulla",
        },
    },

    whyItMatters: {
        headline: "Miksi Tämä Signaali On Tärkeä",
        paragraphs: [
            "Kun julkista tilaa käytetään luontevasti, se viittaa siihen, että kaupunki tukee pitkäjänteistä sosiaalista hyvinvointia, turvallisuutta ja arjen mukavuutta."
        ],
        points: [
            {
                title: "Mukavuus On Todiste",
                description:
                    "Julkisen tilan arkinen käyttö osoittaa, että järjestelmät toimivat myös poliittisten linjausten ulkopuolella.",
            },
            {
                title: "Sosiaalinen Elämä On Infrastruktuuria",
                description:
                    "Luonteva kokoontuminen vahvistaa yhteyttä ja kaupungin kestävyyttä.",
            },
            {
                title: "Turvallisuus Koetaan",
                description:
                    "Hyvin toimivat kadut tuntuvat turvallisilta ilman että ne nojaavat näkyvään kontrolliin tai valvontaan.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Liike ja Tauko",
            paragraphs: [
                "Julkinen tila on käytettävissä vain silloin, kun liike sallii pysähtymisen. Tauko on keskeinen järjestelmäsignaali."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Liikkeen ja tauon tasapaino ihmiskeskeisessä katutilajärjestelmässä",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
        {
            headline: "Tiheys ja Mukavuus",
            paragraphs: [
                "Kun tiheys pysyy mukavana, ihmiset viipyvät ulkona pidempään. Mukavuus on elinkelpoisen tiheyden perusstrategia."
            ],
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Kaupunkitiheys pehmennettynä vihreydellä ja jaetun tilan mukavuudella",
            },
            landingUrl: "/smart-city/city-systems-density-and-comfort",
        },
    ],
};