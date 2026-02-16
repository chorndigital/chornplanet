//data/smart-city-media/GlobalPatternsDataEN.ts

import {IGlobalPatterns} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const GlobalPatternsDataTH: IGlobalPatterns = {
    headline: "รูปแบบที่สังเกตได้จากเมืองในชีวิตประจำวันทั่วโลก",
    paragraph:
        "ในเมืองที่มีวัฒนธรรม ขนาด และระดับรายได้แตกต่างกัน มีรูปแบบด้านการสัญจรและพื้นที่สาธารณะที่มีลักษณะคล้ายคลึงกันปรากฏให้เห็นมากขึ้น รูปแบบเหล่านี้ไม่ได้เกิดจากเทคโนโลยีเพียงอย่างเดียว แต่เกิดจากการที่พฤติกรรมของผู้คน ข้อจำกัดเชิงพื้นที่ และการประสานงานของระบบต่าง ๆ ค่อย ๆ สอดคล้องกันตามเวลา การสังเกตสัญญาณเหล่านี้ช่วยอธิบายว่าเมืองในภูมิภาคต่าง ๆ มีแนวโน้มด้านการดำเนินงานที่คล้ายคลึงกัน ขณะเดียวกันก็ยังคงแสดงอัตลักษณ์ท้องถิ่นของตนเอง",

    signals: [
        {
            title: "ถนนที่คาดการณ์ได้ช่วยสนับสนุนการใช้พื้นที่สาธารณะ",
            description:
                "เมื่อระบบการเคลื่อนที่มีความคาดการณ์ได้ ผู้คนจะมีความมั่นใจมากขึ้นในการใช้พื้นที่ร่วมกัน ในหลายภูมิภาค ถนนที่ลดความไม่แน่นอน แทนที่จะเน้นความเร็วสูงสุด มักมีความเชื่อมโยงกับการใช้พื้นที่สาธารณะที่มีความมั่นคงและสบายมากขึ้น",
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "ถนนใช้งานร่วมกันที่ผู้เดินเท้า จักรยาน และยานพาหนะเคลื่อนที่อย่างคาดการณ์ได้"
            },
            signalFocus: [
                "shared streets",
                "predictable mobility",
                "human comfort",
                "street behavior"
            ],
            landingUrl: "/smart-city/global-patterns-predictable-shared-street"
        },
        {
            title: "การสัญจรหลายรูปแบบที่พบมากขึ้นในบริบทเมือง",
            description:
                "การเดินเท้า จักรยาน สกูตเตอร์ รถยนต์ไฟฟ้าขนาดเล็ก และหุ่นยนต์ส่งของ ปรากฏให้เห็นมากขึ้นในหลายพื้นที่เมือง ในหลายภูมิภาค สภาพแวดล้อมด้านการสัญจรถูกออกแบบให้รองรับการอยู่ร่วมกันของหลายรูปแบบการเคลื่อนที่ สะท้อนการปรับตัวตามข้อจำกัดด้านพื้นที่และการดำเนินงาน",
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "รูปแบบการสัญจรหลายประเภทใช้งานร่วมกันในสภาพแวดล้อมเมือง"
            },
            signalFocus: [
                "mixed mobility",
                "coexistence",
                "last-mile movement",
                "urban adaptation"
            ],
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence"
        },
        {
            title: "การบูรณาการโลจิสติกส์ภายในระบบเมืองประจำวัน",
            description:
                "โลจิสติกส์ขนาดเล็ก เช่น รถส่งของไฟฟ้า หุ่นยนต์ภาคพื้นดิน และระบบทางอากาศในพื้นที่ที่กฎหมายอนุญาต กำลังถูกผสานเข้าเป็นส่วนหนึ่งของการดำเนินงานเมืองในชีวิตประจำวัน เมืองที่ประสานระบบโลจิสติกส์ภายใต้กรอบความปลอดภัยและพื้นที่ที่มีอยู่ มักสามารถรักษาความสบายของสาธารณะควบคู่กับการเพิ่มประสิทธิภาพเชิงปฏิบัติการ",
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "ยานพาหนะและหุ่นยนต์ส่งของขนาดเล็กที่ดำเนินงานภายในสภาพแวดล้อมเมือง"
            },
            signalFocus: [
                "urban logistics",
                "last-mile delivery",
                "system coordination",
                "integrated infrastructure"
            ],
            landingUrl: "/smart-city/global-patterns-urban-logistics"
        }
    ]
}