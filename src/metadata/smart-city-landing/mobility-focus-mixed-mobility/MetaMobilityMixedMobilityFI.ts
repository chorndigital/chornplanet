// src/metadata/smart-city-landing/mobility-focus-mixed-mobility/MetaMobilityMixedMobilityFI.ts

import {Metadata} from "next";

export const MetaMobilityMixedMobilityFI: Metadata = {
    title: "Mixed Mobilityn rinnakkaiselo | Smart City Mobility",
    description:
        "Nykyaikaisia katuja ei enää suunnitella yhden liikkumismuodon ympärille. Mixed mobility mahdollistaa jalankulkijoiden, skoottereiden, polkupyörien, robottien ja autonomisten ajoneuvojen luonnollisen ja turvallisen rinnakkaiselon.",

    alternates: {
        canonical: "/en/smart-city/mobility-focus-mixed-mobility",
        languages: {
            en: "/en/smart-city/mobility-focus-mixed-mobility",
            th: "/th/smart-city/mobility-focus-mixed-mobility",
            da: "/da/smart-city/mobility-focus-mixed-mobility",
            de: "/de/smart-city/mobility-focus-mixed-mobility",
            fi: "/fi/smart-city/mobility-focus-mixed-mobility",
            fr: "/fr/smart-city/mobility-focus-mixed-mobility",
            ja: "/ja/smart-city/mobility-focus-mixed-mobility",
            ko: "/ko/smart-city/mobility-focus-mixed-mobility",
            nl: "/nl/smart-city/mobility-focus-mixed-mobility",
            zh: "/zh-cn/smart-city/mobility-focus-mixed-mobility",
        },
    },

    authors: [
        {
            name: "CHORN Digital",
        },
    ],

    openGraph: {
        title: "Mixed Mobilityn rinnakkaiselo | Smart City Mobility",
        description:
            "Älykästä kaupunkia ei määritä tiukka erottelu, vaan kyky tehdä eri liikkumismuotojen rinnakkaiselosta selkeää, rauhallista ja turvallista.",
        url: "/en/smart-city/mobility-focus-mixed-mobility",
        type: "website",
        images: [
            {
                url: "/images-opengraph/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                width: 1200,
                height: 630,
                alt: "Thaimaalainen katu, jossa jalankulkijat, skootterit, pyöräilijät ja autonominen shuttle elävät rinnakkain luonnollisesti",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Mixed Mobilityn rinnakkaiselo | Smart City Mobility",
        description:
            "Mixed mobility kuvastaa siirtymää kohti jaettuja katuja, joilla erilaiset liikkumismuodot voivat toimia rinnakkain sujuvasti.",
        images: [
            "/images-opengraph/smart-city/mobility-focus/mixed-mobility-coexistence.png",
        ],
    },
};