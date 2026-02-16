//data/smart-city-media/UrbanSignalsDataFI.ts

import {IUrbanSignals} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const UrbanSignalsDataFI: IUrbanSignals = {
    headline: "Arjessa havaittavat kaupunkisignaalit",
    paragraph:
        "Kaupungit viestivät pienillä havaittavilla signaaleilla — miltä kadut tuntuvat, miten ihmiset liikkuvat ja miten tila muuttuu ajan myötä. Näitä hetkiä ei aina kuvata järjestelminä, mutta ne voivat osoittaa, miten kaupunkiolosuhteet toimivat.",

    signals: [
        {
            title: "Ennakoitava käyttäytyminen kadulla",
            description:
                "Kun jalankulkijat, pyöräilijät ja ajoneuvot liikkuvat selkeiden odotusten mukaisesti, se voi osoittaa yhteisiä normeja ja tilallista selkeyttä, myös ilman selkeää valvontaa.",

            signalFocus: ["predictability", "shared space", "human trust"],

            image: {
                url: "/smart-city/urban-signals/predictable-shared-street.png",
                alt: "Ihmisiä, polkupyöriä ja ajoneuvoja liikkumassa sujuvasti yhdessä jaetulla kaupunkikadulla ilman näkyvää ruuhkaa tai jännitteitä",
            },

            landingUrl: "/smart-city/urban-signals-predictable-street",
        },

        {
            title: "Logistiikka osana arkea",
            description:
                "Toimitusrobotit, pienet sähköajoneuvot ja kuriirit voivat toimia ilman, että ne hallitsevat huomiota, mikä voi osoittaa, että logistiikka on integroitu päivittäisiin liikkumismalleihin.",

            signalFocus: ["logistics", "integration", "low friction"],

            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Pienet toimitusajoneuvot ja robotit toimimassa rauhallisesti modernin kaupungin katuelämän rinnalla",
            },

            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },

        {
            title: "Julkinen tila käytössä tarkoitetulla tavalla",
            description:
                "Kun ihmiset viipyvät, pysähtyvät ja jakavat tilaa rutiininomaisilla tavoilla, se voi heijastaa tasapainoa liikkumisen tehokkuuden ja julkisten alueiden käytettävyyden välillä.",

            signalFocus: ["public space", "comfort", "social rhythm"],

            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "Ihmisiä istumassa, kävelemässä ja vuorovaikuttamassa miellyttävästi hyvin suunnitellussa kaupunkitilassa",
            },

            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
    ],
}