import {ICitySystems} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const CitySystemsDataFI: ICitySystems = {
    headline: "Kaupunkijärjestelmät ja Arjen Tasapaino",
    paragraph:
        "Kaupunkijärjestelmiä ei yleensä koeta suoraan teknologiana tai politiikkana. Ne koetaan tasapainona — liikkeen ja pysähtymisen, toiminnan ja levon sekä tehokkuuden ja mukavuuden välillä — ja ne muovaavat sitä, miten ihmiset liikkuvat kaupungissa joka päivä.",
    systems: [
        {
            title: "Liike ja Tauko",
            description:
                "Kaupungit toimivat parhaiten silloin, kun liike ei poista pysähtymisen mahdollisuutta. Kadut, ylitykset ja jaetut tilat mahdollistavat virran luonnollisen hidastumisen ja luovat hetkiä, joissa ihmiset tuntevat olonsa riittävän turvalliseksi pysähtyäkseen, havainnoidakseen ja ollakseen vuorovaikutuksessa.",
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Katuympäristö, jossa jalankulkijoiden pysähtyminen ja liikennevirta ovat tasapainossa"
            },
            balanceSignals: ["speed vs safety", "flow vs rest"],
            landingUrl: "/smart-city/city-systems-movement-and-pause"
        },
        {
            title: "Tiheys ja Mukavuus",
            description:
                "Tiheydestä tulee elinkelpoista, kun tila, valo ja vihreys pehmentävät läheisyyttä. Hyvin tasapainotetut kaupunkijärjestelmät mahdollistavat tilan jakamisen ilman että ihmiset kokevat olonsa ahtaaksi tai kiirehdityksi.",
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Mukava kaupunkitiheys vihreyden ja jaetun tilan ansiosta"
            },
            balanceSignals: ["proximity vs privacy", "activity vs calm"],
            landingUrl: "/smart-city/city-systems-density-and-comfort"
        },
        {
            title: "Tehokkuus ja Ihmisen Rytmi",
            description:
                "Tehokkaat järjestelmät tukevat arjen rytmejä sen sijaan, että ne ohittaisivat ne. Liikenne, logistiikka ja palvelut mukautuvat ihmisen tahtiin, jolloin kaupunki tuntuu ennakoitavalta eikä kiireiseltä.",
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "Kaupunkirakenne ihmisten päivittäisen rytmin mukaisesti"
            },
            balanceSignals: ["automation vs control", "speed vs predictability"],
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm"
        }
    ]
};