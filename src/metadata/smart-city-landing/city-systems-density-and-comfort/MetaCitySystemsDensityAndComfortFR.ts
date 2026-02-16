// src/metadata/smart-city-landing/city-systems-density-and-comfort/MetaCitySystemsDensityAndComfortEN.ts

import {Metadata} from "next";

export const MetaCitySystemsDensityAndComfortFR: Metadata = {
    title: "Densité et Confort | Systèmes Urbains Intelligents",
    description:
        "La densité n’est pas un problème en soi. Une ville devient vivable lorsque la densité est équilibrée par l’espace, la verdure et des mouvements prévisibles.",

    alternates: {
        canonical: "/fr/smart-city/city-systems-density-and-comfort",
        languages: { fr: "/fr/smart-city/city-systems-density-and-comfort" },
    },

    authors: [{ name: "CHORN Digital" }],

    openGraph: {
        title: "Densité et Confort | Systèmes Urbains Intelligents",
        description:
            "Une ville intelligente ne supprime pas la densité — elle conçoit des systèmes qui rendent l’espace partagé confortable.",
        url: "/fr/smart-city/city-systems-density-and-comfort",
        type: "website",
        images: [{
            url: "/images-opengraph/smart-city/city-systems/density-and-comfort.png",
            width: 1200,
            height: 630,
            alt: "Densité urbaine confortable avec espaces verts",
        }],
    },

    twitter: {
        card: "summary_large_image",
        title: "Densité et Confort | Systèmes Urbains Intelligents",
        description:
            "Des systèmes bien coordonnés rendent la densité urbaine plus vivable.",
        images: ["/images-opengraph/smart-city/city-systems/density-and-comfort.png"],
    },
};