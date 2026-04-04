// MetaCitySystemsDensityAndComfortTH.ts

import {Metadata} from "next";

export const MetaCitySystemsDensityAndComfortTH: Metadata = {
    title: "ความหนาแน่นและความสบาย | ระบบเมืองอัจฉริยะ",
    description:
        "ความหนาแน่นไม่ใช่ปัญหาโดยตัวมันเอง เมืองจะน่าอยู่เมื่อความหนาแน่นถูกออกแบบให้สมดุลด้วยพื้นที่สีเขียว จังหวะการเคลื่อนไหว และระบบที่อ่านเข้าใจได้",

    alternates: {
        canonical: "/th/smart-city/city-systems-density-and-comfort",
        languages: {
            th: "/th/smart-city/city-systems-density-and-comfort",
        },
    },

    authors: [{ name: "Chorn Planet" }],

    openGraph: {
        title: "ความหนาแน่นและความสบาย | ระบบเมืองอัจฉริยะ",
        description:
            "เมืองอัจฉริยะไม่ได้ลดความหนาแน่น แต่สร้างเงื่อนไขให้พื้นที่ส่วนรวมยังคงสบายและเคลื่อนไหวได้อย่างเป็นธรรมชาติ",
        url: "/th/smart-city/city-systems-density-and-comfort",
        type: "website",
        images: [{
            url: "/images-opengraph/smart-city/city-systems/density-and-comfort.png",
            width: 1200,
            height: 630,
            alt: "ความหนาแน่นเมืองไทยที่ออกแบบให้สบายและร่มรื่น",
        }],
    },

    twitter: {
        card: "summary_large_image",
        title: "ความหนาแน่นและความสบาย | ระบบเมืองอัจฉริยะ",
        description:
            "ระบบที่ออกแบบดีทำให้เมืองหนาแน่นยังคงสงบ เขียว และน่าอยู่",
        images: ["/images-opengraph/smart-city/city-systems/density-and-comfort.png"],
    },
};