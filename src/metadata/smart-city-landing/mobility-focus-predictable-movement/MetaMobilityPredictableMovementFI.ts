// src/metadata/smart-city-landing/mobility-focus-predictable-movement/MetaMobilityPredictableMovementFI.ts

import {Metadata} from "next";

export const MetaMobilityPredictableMovementFI: Metadata = {
    title: "Ennakoitava liikkuminen jaetuilla kaduilla | Smart City Mobility",
    description:
        "Liikkuminen koetaan luottamuksena. Kun suojatiet ovat selkeitä ja ajoneuvot hidastavat luonnollisesti, ennakoitava liike luo arjen turvallisuutta ilman tiukkaa valvontaa.",

    alternates: {
        canonical: "/en/smart-city/mobility-focus-predictable-movement",
        languages: {
            en: "/en/smart-city/mobility-focus-predictable-movement",
            th: "/th/smart-city/mobility-focus-predictable-movement",
            da: "/da/smart-city/mobility-focus-predictable-movement",
            de: "/de/smart-city/mobility-focus-predictable-movement",
            fi: "/fi/smart-city/mobility-focus-predictable-movement",
            fr: "/fr/smart-city/mobility-focus-predictable-movement",
            ja: "/ja/smart-city/mobility-focus-predictable-movement",
            ko: "/ko/smart-city/mobility-focus-predictable-movement",
            nl: "/nl/smart-city/mobility-focus-predictable-movement",
            zh: "/zh-cn/smart-city/mobility-focus-predictable-movement",
        },
    },

    authors: [
        {
            name: "CHORN Digital",
        },
    ],

    openGraph: {
        title: "Ennakoitava liikkuminen jaetuilla kaduilla | Smart City Mobility",
        description:
            "Ennakoitavuus vähentää epävarmuutta. Selkeät suojatiet, helposti luettavat signaalit ja synkronoitu liikennevirta mahdollistavat jalankulkijoiden, pyöräilijöiden ja ajoneuvojen rauhallisen rinnakkaiselon.",
        url: "/en/smart-city/mobility-focus-predictable-movement",
        type: "website",
        images: [
            {
                url: "/images-opengraph/smart-city/mobility-focus/predictable-shared-street.png",
                width: 1200,
                height: 630,
                alt: "Thaimaalaiset jalankulkijat ja pyöräilijät liikkuvat rauhallisesti ennakoitavalla jaetulla kadulla autonomisen shuttle-ajoneuvon taustalla",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Ennakoitava liikkuminen jaetuilla kaduilla | Smart City Mobility",
        description:
            "Ennakoitava liikkuminen rakentaa luottamusta, vähentää stressiä ja mahdollistaa turvallisen rinnakkaiselon jaetuilla kaduilla.",
        images: [
            "/images-opengraph/smart-city/mobility-focus/predictable-shared-street.png",
        ],
    },
};
