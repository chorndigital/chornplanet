import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowMorningFI: ISmartCityLanding = {
    heroObservation: {
        headline: "Aamun Virta — Päivän Alku",
        paragraphs: [
            "Aamu paljastaa, onko kaupunki valmis, kun arki alkaa.",
            "Työmatkat, koulukuljetukset, pienet asioinnit ja varhaiset toimitukset osoittavat, tukevatko liikkumisjärjestelmät vuorokausirytmiä vai aiheuttavatko ne kitkaa arjessa.",
            "Älykaupunki tulee näkyväksi juuri tässä — ensimmäisissä ylityksissä, ensimmäisissä signaaleissa ja päivän ensimmäisissä yhteisissä liikkeissä."
        ],
        image: {
            url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
            alt: "Varhainen aamu thaimaalaisella kaupunkikadulla, työmatkalaisia kävellen, rauhallisia skoottereita ja hiljainen autonominen sähkökuljetin taustalla",
        },
        cta: {
            label: "Katso Keskipäivän Virta",
            href: "/smart-city/human-daily-flow-midday",
        },
    },

    systemExplanation: {
        headline: "Mitä Aamu Kertoo Kaupungista",
        paragraphs: [
            "Aamu toimii kaupunkijärjestelmien varhaisena stressitestinä. Jos ylitykset ovat epäselviä, jalkakäytävät tuntuvat turvattomilta tai liikenne on arvaamatonta, ihmiset mukauttavat käyttäytymistään välittömästi.",
            "Luotettavia kaupunkeja ei määritellä nopeudella. Ne määritellään luettavuudella — sillä, kuinka jalankulkijat, skootterit, pyöräilijät ja ajoneuvot voivat toimia yhdessä vähäisin ristiriidoin."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Kaupunkiliikenteen koordinointi ennakoitavilla ylityksillä ja rauhallisella aamuliikkeellä",
        },
    },

    whyItMatters: {
        headline: "Miksi Aamun Virta On Tärkeä",
        paragraphs: [
            "Kaupungit, jotka tukevat aamun rytmiä, vähentävät stressiä, parantavat turvallisuutta ja rakentavat luottamusta ilman valvontaa."
        ],
        points: [
            {
                title: "Luottamus Alkaa Ensimmäisestä Ylityksestä",
                description:
                    "Kun ihmiset kokevat voivansa ylittää tien luonnollisesti ja turvallisesti, kaupunki viestii luotettavuutta ilman ohjeita.",
            },
            {
                title: "Rytmi On Nopeutta Tärkeämpi",
                description:
                    "Aamun virta toimii parhaiten, kun kadut tukevat ennakoitavaa ajoitusta maksimaalisen kapasiteetin sijaan.",
            },
            {
                title: "Arjen Turvallisuus On Ennaltaehkäisevää Suunnittelua",
                description:
                    "Rauhallinen aamumatka vähentää riskejä, ruuhkia ja kitkaa ennen kuin ne syntyvät.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Ennakoitava Katukäyttäytyminen",
            paragraphs: [
                "Aamu sujuu vain, kun ihmiset voivat liikkua epäröimättä. Ennakoitavuus on luottamuksen perusta."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Thaimaalaiset jalankulkijat ja pyöräilijät liikkuvat ennakoitavasti jaetulla kadulla rauhallisen liikenteen keskellä",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "Liike ja Tauko",
            paragraphs: [
                "Kaupunki herää pehmeästi, kun liike voi hidastua luonnollisesti ilman pelkoa tai vaaraa."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Katumuotoilu, joka tasapainottaa aamuliikkeen ja turvalliset pysähdykset jalankulkijoille",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};