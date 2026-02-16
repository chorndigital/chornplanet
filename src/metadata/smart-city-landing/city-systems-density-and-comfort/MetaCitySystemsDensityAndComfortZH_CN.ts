// src/metadata/smart-city-landing/city-systems-density-and-comfort/MetaCitySystemsDensityAndComfortEN.ts

import {Metadata} from "next";

export const MetaCitySystemsDensityAndComfortZH_CN: Metadata = {
    title: "密度与舒适 | 智慧城市系统",
    description:
        "密度本身并非问题。当通过绿化、空间与可预测的流动加以调节时，城市会更加宜居。",

    alternates: {
        canonical: "/zh-cn/smart-city/city-systems-density-and-comfort",
        languages: {"zh-cn": "/zh-cn/smart-city/city-systems-density-and-comfort"},
    },

    authors: [{name: "CHORN Digital"}],

    openGraph: {
        title: "密度与舒适 | 智慧城市系统",
        description:
            "智慧城市并不消除拥挤，而是通过系统设计，使共享空间保持舒适与可达。",
        url: "/zh-cn/smart-city/city-systems-density-and-comfort",
        type: "website",
        images: [{
            url: "/images-opengraph/smart-city/city-systems/density-and-comfort.png",
            width: 1200,
            height: 630,
            alt: "绿化与舒适并存的城市密度",
        }],
    },

    twitter: {
        card: "summary_large_image",
        title: "密度与舒适 | 智慧城市",
        description:
            "良好设计的系统使高密度城市依然平衡与宜居。",
        images: ["/images-opengraph/smart-city/city-systems/density-and-comfort.png"],
    },
};