// src/metadata/smart-city-landing/city-systems-density-and-comfort/MetaCitySystemsDensityAndComfortEN.ts

import {Metadata} from "next";

export const MetaCitySystemsDensityAndComfortNL: Metadata = {
    title: "Dichtheid en Comfort | Slimme Stadssystemen",
    description:
        "Dichtheid is op zichzelf geen probleem. Steden worden leefbaar wanneer dichtheid wordt ondersteund door groen en voorspelbare beweging.",

    alternates: {
        canonical: "/nl/smart-city/city-systems-density-and-comfort",
        languages: {nl: "/nl/smart-city/city-systems-density-and-comfort"},
    },

    authors: [{name: "Chorn Planet"}],

    openGraph: {
        title: "Dichtheid en Comfort | Slimme Stadssystemen",
        description:
            "Een slimme stad elimineert drukte niet, maar ontwerpt systemen die gedeelde ruimte comfortabel maken.",
        url: "/nl/smart-city/city-systems-density-and-comfort",
        type: "website",
        images: [{
            url: "/images-opengraph/smart-city/city-systems/density-and-comfort.png",
            width: 1200,
            height: 630,
            alt: "Comfortabele stedelijke dichtheid met groen",
        }],
    },

    twitter: {
        card: "summary_large_image",
        title: "Dichtheid en Comfort | Slimme Stad",
        description:
            "Goed ontworpen systemen maken dichte steden rustiger en leefbaarder.",
        images: ["/images-opengraph/smart-city/city-systems/density-and-comfort.png"],
    },
};