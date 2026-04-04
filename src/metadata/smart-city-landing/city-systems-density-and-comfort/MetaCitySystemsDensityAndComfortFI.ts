// src/metadata/smart-city-landing/city-systems-density-and-comfort/MetaCitySystemsDensityAndComfortEN.ts

import {Metadata} from "next";

export const MetaCitySystemsDensityAndComfortFI: Metadata = {
    title: "Tiheys ja Mukavuus | Älykaupunkijärjestelmät",
    description:
        "Tiheys ei ole itsessään ongelma. Kaupunki muuttuu viihtyisäksi, kun tiheyttä tasapainottavat vihreys ja ennakoitava liikkuminen.",

    alternates: {
        canonical: "/fi/smart-city/city-systems-density-and-comfort",
        languages: {fi: "/fi/smart-city/city-systems-density-and-comfort"},
    },

    authors: [{name: "Chorn Planet"}],

    openGraph: {
        title: "Tiheys ja Mukavuus | Älykaupunkijärjestelmät",
        description:
            "Älykaupunki ei poista tiheyttä, vaan suunnittelee järjestelmiä, jotka tekevät yhteisistä tiloista mukavia.",
        url: "/fi/smart-city/city-systems-density-and-comfort",
        type: "website",
        images: [{
            url: "/images-opengraph/smart-city/city-systems/density-and-comfort.png",
            width: 1200,
            height: 630,
            alt: "Viihtyisä urbaani tiheys viherympäristössä",
        }],
    },

    twitter: {
        card: "summary_large_image",
        title: "Tiheys ja Mukavuus | Älykaupunkijärjestelmät",
        description:
            "Hyvin suunnitellut järjestelmät tekevät tiheistä kaupungeista rauhallisia.",
        images: ["/images-opengraph/smart-city/city-systems/density-and-comfort.png"],
    },
};