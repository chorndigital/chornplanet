import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const CitySystemsDensityAndComfortFI: ISmartCityLanding = {
    heroObservation: {
        headline: "Tiheys ja Mukavuus",
        paragraphs: [
            "Tiheys ei itsessään ole välttämättä ongelma. Epämukavuus syntyy silloin, kun järjestelmät on suunniteltu heikosti.",
            "Kaupungit muuttuvat elinkelpoisemmiksi, kun tiheyttä tasapainotetaan tilalla, vihreydellä ja ennakoitavilla liikkumismalleilla.",
            "Älykaupunki ei pyri poistamaan ruuhkaa, vaan luo olosuhteet, joissa yhteiset tilat pysyvät mukavina ja helposti hahmotettavina."
        ],
        image: {
            url: "/smart-city/city-systems/density-and-comfort.png",
            alt: "Mukava thaimaalainen kaupunkitiheys vihreydellä, varjoisilla jalkakäytävillä ja rauhallisella katutahdilla",
        },
        cta: {
            label: "Tutustu Tehokkuuteen ja Rytmiin",
            href: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    },

    systemExplanation: {
        headline: "Miten Mukavuus Suunnitellaan Tiheyteen",
        paragraphs: [
            "Mukavuus ei ole koristeellinen kerros, vaan koordinoitujen järjestelmien tulos.",
            "Varjo, käveltävät reunat, valaistus, vihreys ja julkisten tilojen rytmi vaikuttavat siihen, koetaanko tiheys stressaavana vai tukevana. Kun nämä järjestelmät toimivat johdonmukaisesti yhdessä, tiheät ympäristöt voivat säilyä rauhallisina ja toimivina."
        ],
        image: {
            url: "/smart-city/system-explainers/public-space-orchestration.png",
            alt: "Kaupunkisuunnittelun järjestelmät, jotka tukevat mukavuutta vihreyden ja käveltävän tilan avulla",
        },
    },

    whyItMatters: {
        headline: "Miksi Tiheys ja Mukavuus Ovat Tärkeitä",
        paragraphs: [
            "Kaupungit, jotka pystyvät ylläpitämään mukavuutta korkeammilla tiheystasoilla, tukevat usein kestävyyttä, turvallisuutta ja sosiaalista vuorovaikutusta tehokkaammin."
        ],
        points: [
            {
                title: "Mukavuus Vähentää Jännitteitä",
                description:
                    "Kun tiheät ympäristöt koetaan järjestelmällisiksi ja rauhallisiksi, ihmiset jakavat tilaa todennäköisemmin yhteistyössä.",
            },
            {
                title: "Elinkelpoisuus Vähentää Laajenemispainetta",
                description:
                    "Kaupungit, jotka pystyvät vastaanottamaan tiheyttä mukavasti, voivat rajoittaa tarvetta laajentua ulospäin.",
            },
            {
                title: "Vihreys Toimii Infrastruktuurina",
                description:
                    "Varjo, puut ja pehmeät reunat ovat toiminnallisia osia, jotka vaikuttavat lämpötilan säätelyyn, liikkumismalleihin ja kokonaiskokemukseen.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Julkisen Tilan Orkestrointi",
            paragraphs: [
                "Mukavuuteen vaikuttaa se, miten jalkakäytävät, valaistus ja katutoiminta koordinoidaan ajallisesti."
            ],
            image: {
                url: "/smart-city/system-explainers/public-space-orchestration.png",
                alt: "Julkisen tilan orkestrointi, joka tukee mukavuutta ja sosiaalista rytmiä",
            },
            landingUrl: "/smart-city/system-explainers-public-space-orchestration",
        },
        {
            headline: "Sekaliikenne Muodostuu Globaaliksi Oletukseksi",
            paragraphs: [
                "Tiheät kadut edellyttävät rinnakkaiseloa. Sekaliikenne heijastaa kehittyvää globaalia tilannetta eikä ole pelkkä valinnainen suunnitteluratkaisu."
            ],
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Sekaliikenne, joka tukee tiheyttä rinnakkaiselon kautta",
            },
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence",
        },
    ],
};