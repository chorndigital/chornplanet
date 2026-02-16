import {IHeroSection} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const HeroSectionDataTH: IHeroSection = {
    headline: "เมื่อชีวิตมนุษย์หล่อหลอมเมือง",
    paragraph:
        "เมืองไม่ได้ถูกกำหนดด้วยเทคโนโลยี โครงสร้างพื้นฐาน หรือนโยบายเพียงอย่างเดียว แต่ถูกหล่อหลอมจากวิธีที่ผู้คนเคลื่อนไหว หยุดพัก รวมกลุ่ม และใช้ชีวิตในแต่ละวัน เมืองอัจฉริยะเริ่มต้นไม่ใช่จากระบบ แต่จากกิจวัตรประจำวันซึ่งค่อย ๆ เผยให้เห็นว่าเมืองทำงานอย่างไร",

    softTexts: [
        {
            title: "ไม่ใช่วิสัยทัศน์ของอนาคต",
            description:
                "นี่คือการสังเกตชีวิตประจำวัน ที่ซึ่งการเคลื่อนที่รูปแบบใหม่ ระบบที่ทำงานอย่างเงียบ ๆ และพฤติกรรมมนุษย์มาบรรจบกันแล้ว"
        },
        {
            title: "ช่วงเวลาท้องถิ่น ความหมายระดับโลก",
            description:
                "สิ่งที่เกิดขึ้นบนถนนสายหนึ่ง มักสะท้อนรูปแบบที่พบร่วมกันในเมืองต่าง ๆ ทั่วโลก"
        }
    ],

    image: {
        url: "/smart-city/hero-section/city-shaped-by-people-move.png",
        alt: "ชีวิตเมืองในแต่ละวันที่ผู้คน ระบบเมือง และการสัญจรอัตโนมัติอยู่ร่วมกันอย่างเป็นธรรมชาติในเมืองขนาดกลาง",
    },
    purpose: "สร้างกรอบมุมมอง ไม่ใช่อธิบายคุณสมบัติ",
    narrativeRole: "สื่อว่าแพลตฟอร์มนี้มองเมืองผ่านชีวิตมนุษย์ ไม่ใช่ผ่านเทคโนโลยี",
    section: "Hero Section",
    category: "Smart City Media",
    editorialTone: "observational",
    signalFocus: ["mobility", "safety", "density", "coordination"],
    landingUrl: "/smart-city/when-human-life-shapes-the-city",
};