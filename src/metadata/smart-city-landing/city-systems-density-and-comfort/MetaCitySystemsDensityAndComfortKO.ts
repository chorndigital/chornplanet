// src/metadata/smart-city-landing/city-systems-density-and-comfort/MetaCitySystemsDensityAndComfortEN.ts

import {Metadata} from "next";

export const MetaCitySystemsDensityAndComfortKO: Metadata = {
    title: "밀도와 편안함 | 스마트 시티 시스템",
    description:
        "밀도 자체는 문제가 아닙니다. 녹지와 예측 가능한 이동 체계가 결합될 때 도시는 더욱 살기 좋아집니다.",

    alternates: {
        canonical: "/ko/smart-city/city-systems-density-and-comfort",
        languages: {ko: "/ko/smart-city/city-systems-density-and-comfort"},
    },

    authors: [{name: "Chorn Planet"}],

    openGraph: {
        title: "밀도와 편안함 | 스마트 시티 시스템",
        description:
            "스마트 도시는 밀집을 제거하는 것이 아니라, 공유 공간을 편안하게 만드는 시스템을 설계합니다.",
        url: "/ko/smart-city/city-systems-density-and-comfort",
        type: "website",
        images: [{
            url: "/images-opengraph/smart-city/city-systems/density-and-comfort.png",
            width: 1200,
            height: 630,
            alt: "녹지와 함께한 편안한 도시 밀도",
        }],
    },

    twitter: {
        card: "summary_large_image",
        title: "밀도와 편안함 | 스마트 시티",
        description:
            "잘 설계된 시스템은 밀집된 도시를 더 차분하고 쾌적하게 만듭니다.",
        images: ["/images-opengraph/smart-city/city-systems/density-and-comfort.png"],
    },
};