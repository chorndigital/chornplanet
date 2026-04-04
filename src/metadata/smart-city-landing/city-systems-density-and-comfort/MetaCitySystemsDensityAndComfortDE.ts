// src/metadata/smart-city-landing/city-systems-density-and-comfort/MetaCitySystemsDensityAndComfortEN.ts

import {Metadata} from "next";

export const MetaCitySystemsDensityAndComfortDE: Metadata = {
    title: "Dichte und Komfort | Intelligente Stadtsysteme",
    description:
        "Dichte ist nicht das Problem. Städte werden lebenswerter, wenn sie durch Grünflächen, Raum und klare Bewegungsmuster ausgeglichen wird.",

    alternates: {
        canonical: "/de/smart-city/city-systems-density-and-comfort",
        languages: { de: "/de/smart-city/city-systems-density-and-comfort" },
    },

    authors: [{ name: "Chorn Planet" }],

    openGraph: {
        title: "Dichte und Komfort | Intelligente Stadtsysteme",
        description:
            "Eine Smart City beseitigt keine Dichte – sie gestaltet Systeme, die geteilte Räume angenehm und nutzbar machen.",
        url: "/de/smart-city/city-systems-density-and-comfort",
        type: "website",
        images: [{
            url: "/images-opengraph/smart-city/city-systems/density-and-comfort.png",
            width: 1200,
            height: 630,
            alt: "Komfortable urbane Dichte mit Grünflächen",
        }],
    },

    twitter: {
        card: "summary_large_image",
        title: "Dichte und Komfort | Intelligente Stadtsysteme",
        description:
            "Gut gestaltete Systeme halten dichte Städte ruhig und lebenswert.",
        images: ["/images-opengraph/smart-city/city-systems/density-and-comfort.png"],
    },
};