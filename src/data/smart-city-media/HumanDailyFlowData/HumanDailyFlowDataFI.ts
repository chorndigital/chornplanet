//data/smart-city-media/HumanDailyFlowDataFI.ts

import {IHumanDailyFlow} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const HumanDailyFlowDataFI: IHumanDailyFlow = {
    headline: "Kaupunkijärjestelmiä havainnoidaan päivittäisten syklien kautta",
    paragraph:
        "Kaupunkijärjestelmiä on harvoin mahdollista tarkastella kokonaisuudessaan yhdessä hetkessä. Ne ilmenevät toistuvina päivittäisinä rakenteina — aamun työmatkaliikenne, keskipäivän koordinointi ja illan siirtymät. Näiden rakenteiden havainnointi mahdollistaa monimutkaisten kaupunkijärjestelmien tulkinnan arjen liikkumisen kautta.",

    morningFlow: {
        title: "Aamuvirta — Päivän aloitus",
        paragraph:
            "Aamulla tapahtuu siirtymä asuinalueiden hiljaisuudesta aktiiviseen liikkumiseen. Ihmiset poistuvat kodeistaan, liikkuvat katuverkossa ja mukautuvat liikennejärjestelmiin. Havaittavat signaalit — liikennekuviot, jalankulkijoiden liike ja jaettu liikkuminen — osoittavat, miten liikenneinfrastruktuuri toimii päivän alkaessa.",

        image: {
            url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
            alt: "Aikainen aamu kaupunkiympäristössä, jossa työmatkalaisia, päivänvalo, viheralueita ja liikkumisjärjestelmiä käynnistymässä",
        },

        category: "Morning Flow",
        signalFocus: ["mobility readiness", "pedestrian flow", "temporal synchronization"],
        landingUrl: "/smart-city/human-daily-flow-morning",
    },

    middayFlow: {
        title: "Keskipäivän virta — Tiheys ja koordinointi",
        paragraph:
            "Keskipäivällä kaupunkitoiminta tihenee. Ihmiset, tavarat ja palvelut liikkuvat samanaikaisesti. Autonomiset liikkumisjärjestelmät, logistiikkainfrastruktuuri ja julkisten tilojen suunnittelu toimivat rinnakkain hallitakseen suurempia liikkumismääriä.",

        image: {
            url: "/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
            alt: "Keskipäivän kaupunkiympäristö, jossa jalankulkijoita, autonomisia sähköajoneuvoja, toimitusdrooneja ja koordinoitua liikkumista julkisessa tilassa",
        },

        category: "Midday Flow",
        signalFocus: ["density", "logistics", "coordination", "autonomous systems"],
        landingUrl: "/smart-city/human-daily-flow-midday",
    },

    eveningFlow: {
        title: "Ilta­virta — Liikkumisen väheneminen ja siirtymä",
        paragraph:
            "Illalla aktiivisuustaso siirtyy kohti vähäisempää liikkumisintensiteettiä. Valaistusjärjestelmät, kävelyolosuhteet, katuympäristö ja liikenteen saatavuus vaikuttavat siihen, miten asukkaat palaavat kotiin ja osallistuvat ilta-ajan toimintoihin.",

        image: {
            url: "/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
            alt: "Varhainen ilta kaupunkiympäristössä, jalankulkijoita, valaistut kadut, avoimia liikkeitä, maltillinen liikenne ja näkyvät turvallisuusolosuhteet",
        },

        category: "Evening Flow",
        signalFocus: ["safety", "public space", "evening mobility", "urban transition"],
        landingUrl: "/smart-city/human-daily-flow-evening",
    },

    purpose: "Tukea toistuvien kaupunkirakenteiden tunnistamista",
    narrativeRole: "Esittää monimutkaiset kaupunkijärjestelmät tuttujen päivittäisten rutiinien kautta",
    section: "Human Daily Flow",
    category: "Smart City Media",
    lang: "fi",
};