// src/metadata/smart-city-landing/city-systems-density-and-comfort/MetaCitySystemsDensityAndComfortEN.ts

import {Metadata} from "next";

export const MetaCitySystemsDensityAndComfortJA: Metadata = {
    title: "密度と快適性 | スマートシティ・システム",
    description:
        "密度そのものが問題ではありません。緑や予測可能な動きによって調整されたとき、都市はより快適になります。",

    alternates: {
        canonical: "/ja/smart-city/city-systems-density-and-comfort",
        languages: {ja: "/ja/smart-city/city-systems-density-and-comfort"},
    },

    authors: [{name: "Chorn Planet"}],

    openGraph: {
        title: "密度と快適性 | スマートシティ・システム",
        description:
            "スマートシティは混雑を排除するのではなく、共有空間を快適に保つシステムを設計します。",
        url: "/ja/smart-city/city-systems-density-and-comfort",
        type: "website",
        images: [{
            url: "/images-opengraph/smart-city/city-systems/density-and-comfort.png",
            width: 1200,
            height: 630,
            alt: "緑に囲まれた快適な都市密度",
        }],
    },

    twitter: {
        card: "summary_large_image",
        title: "密度と快適性 | スマートシティ",
        description:
            "設計されたシステムが都市の密度を穏やかで快適に保ちます。",
        images: ["/images-opengraph/smart-city/city-systems/density-and-comfort.png"],
    },
};