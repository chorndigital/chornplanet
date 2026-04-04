// src/metadata/smart-city-landing/mobility-focus-mixed-mobility/MetaMobilityMixedMobilityTH.ts

import {Metadata} from "next";

export const MetaMobilityMixedMobilityTH: Metadata = {
    title: "การอยู่ร่วมกันของ Mixed Mobility | Smart City Mobility",
    description:
        "ถนนยุคใหม่ไม่ได้ถูกออกแบบเพื่อการเดินทางเพียงรูปแบบเดียวอีกต่อไป Mixed mobility ช่วยให้คนเดินเท้า สกู๊ตเตอร์ จักรยาน หุ่นยนต์ และยานยนต์ไร้คนขับ สามารถอยู่ร่วมกันได้อย่างเป็นธรรมชาติและปลอดภัย",

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
            name: "Chorn Planet",
        },
    ],

    openGraph: {
        title: "การอยู่ร่วมกันของ Mixed Mobility | Smart City Mobility",
        description:
            "เมืองอัจฉริยะไม่ได้ถูกนิยามด้วยการแยกพื้นที่อย่างเคร่งครัด แต่คือการทำให้การอยู่ร่วมกันของรูปแบบการเดินทางต่าง ๆ มีความชัดเจน สงบ และปลอดภัย",
        url: "/en/smart-city/mobility-focus-mixed-mobility",
        type: "website",
        images: [
            {
                url: "/images-opengraph/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                width: 1200,
                height: 630,
                alt: "ถนนในประเทศไทยที่มีคนเดินเท้า สกู๊ตเตอร์ นักปั่นจักรยาน และรถชัตเทิลไร้คนขับ ใช้พื้นที่ร่วมกันอย่างเป็นธรรมชาติ",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "การอยู่ร่วมกันของ Mixed Mobility | Smart City Mobility",
        description:
            "Mixed mobility สะท้อนการเปลี่ยนผ่านสู่ถนนสาธารณะที่รูปแบบการเดินทางหลากหลายสามารถอยู่ร่วมกันได้อย่างราบรื่น",
        images: [
            "/images-opengraph/smart-city/mobility-focus/mixed-mobility-coexistence.png",
        ],
    },
};