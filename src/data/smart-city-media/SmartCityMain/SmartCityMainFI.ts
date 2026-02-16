// src/data/smart-city-media/SmartCityMainFI.ts

import {ISmartCityMain} from "@/data/smart-city-media/_model/ISmartCityMain";

export const SmartCityMainFI: ISmartCityMain = {
    hero: {
        title: "Smart City Media",
        paragraphs: [
            "Tämä ei ole tulevaisuuden ennuste. Se on havainto siitä, miten kaupungit nykyisin toimivat ihmisten arkipäiväisen toiminnan kautta.",
            "Tarkastelemalla rutiineja, liikkumiskäyttäytymistä ja järjestelmien koordinointia tunnistamme malleja, joita voidaan havaita useiden alueiden kaupungeissa.",
        ],
        cta: {
            label: "Aloita yleiskatsauksesta",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
        image: {
            url: "/smart-city/hero/when-human-life-shapes-the-city.png",
            alt: "Fotorealistinen thaimaalainen kaupunkikatu, joka esittää ihmiskeskeistä älykaupunkielämää",
        },
    },

    navigation: {
        items: [
            {
                title: "Human Daily Flow",
                description: "Aamu, keskipäivä ja ilta kuvaavat järjestelmän käyttäytymistä.",
                href: "/smart-city/human-daily-flow/morning",
            },
            {
                title: "Local to Global",
                description: "Miten paikallisia rutiineja voidaan tarkastella laajempina malleina.",
                href: "/smart-city/from-local-life-to-global-pattern",
            },
            {
                title: "Mobility Focus",
                description: "Liikkumista havainnoidaan ennen kuin se ymmärretään.",
                href: "/smart-city/mobility-focus/predictable-movement",
            },
            {
                title: "City Systems",
                description: "Signaalit, jotka vaikuttavat arjen kaupunkiolosuhteisiin.",
                href: "/smart-city/city-systems/movement-and-pause",
            },
            {
                title: "Global Patterns",
                description: "Signaaleja, joita havaitaan useissa kaupungeissa.",
                href: "/smart-city/global-patterns/predictable-shared-street",
            },
            {
                title: "Urban Signals",
                description: "Katutasoiset käyttäytymismallit, jotka kuvaavat järjestelmäolosuhteita.",
                href: "/smart-city/urban-signals/predictable-street",
            },
            {
                title: "Editorial Positioning",
                description: "Näkökulma Smart City Median taustalla.",
                href: "/smart-city/editorial/human-first-observation",
            },
        ],
    },
};