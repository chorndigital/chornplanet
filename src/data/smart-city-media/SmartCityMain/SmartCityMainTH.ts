// src/data/smart-city-media/SmartCityMainTH.ts

import {ISmartCityMain} from "@/data/smart-city-media/_model/ISmartCityMain";

export const SmartCityMainTH: ISmartCityMain = {
    hero: {
        title: "Smart City Media",
        paragraphs: [
            "นี่ไม่ใช่การคาดการณ์อนาคต แต่เป็นการสังเกตว่าปัจจุบันเมืองทำงานอย่างไรผ่านกิจกรรมในชีวิตประจำวันของผู้คน",
            "ด้วยการพิจารณากิจวัตร พฤติกรรมการเดินทาง และการประสานงานของระบบ เราสามารถระบุรูปแบบที่สังเกตได้ในหลายเมืองและหลายภูมิภาค",
        ],
        cta: {
            label: "เริ่มต้นด้วยภาพรวม",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
        image: {
            url: "/smart-city/hero/when-human-life-shapes-the-city.png",
            alt: "ถนนในเมืองไทยแบบสมจริง แสดงชีวิตเมืองอัจฉริยะที่ให้ความสำคัญกับผู้คนเป็นศูนย์กลาง",
        },
    },

    navigation: {
        items: [
            {
                title: "Human Daily Flow",
                description: "ช่วงเช้า กลางวัน และเย็น สะท้อนพฤติกรรมของระบบ",
                href: "/smart-city/human-daily-flow-morning/",
            },
            {
                title: "Local to Global",
                description: "วิธีพิจารณากิจวัตรท้องถิ่นในฐานะรูปแบบที่กว้างขึ้น",
                href: "/smart-city/from-local-life-to-global-pattern",
            },
            {
                title: "Mobility Focus",
                description: "การเดินทางมักถูกสังเกตก่อนที่จะถูกทำความเข้าใจ",
                href: "/smart-city/mobility-focus-predictable-movement/",
            },
            {
                title: "City Systems",
                description: "สัญญาณที่มีอิทธิพลต่อสภาพแวดล้อมเมืองในชีวิตประจำวัน",
                href: "/smart-city/city-systems-movement-and-pause/",
            },
            {
                title: "Global Patterns",
                description: "สัญญาณที่สังเกตได้ในหลายเมือง",
                href: "/smart-city/global-patterns-predictable-shared-street/",
            },
            {
                title: "Urban Signals",
                description: "พฤติกรรมระดับถนนที่บ่งชี้สภาพของระบบ",
                href: "/smart-city/urban-signals-predictable-street/",
            },
            {
                title: "Editorial Positioning",
                description: "มุมมองเบื้องหลัง Smart City Media",
                href: "/smart-city/editorial-human-first-observation/",
            },
        ],
    },
};