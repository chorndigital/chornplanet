import {IEditorialPositioning} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const EditorialPositioningDataTH: IEditorialPositioning = {
    headline: "จากชีวิตประจำวันสู่ความเข้าใจเชิงระบบ",
    paragraphs: [
        "แพลตฟอร์มนี้ไม่ได้คาดการณ์อนาคตของเมือง แต่สังเกตว่าเมืองทำงานอย่างไรผ่านชีวิตประจำวันของผู้คน",
        "เมื่อโฟกัสที่กิจวัตร การเคลื่อนไหว การหยุดพัก และการประสานกัน ระบบเมืองจะมองเห็นได้โดยไม่ถูกลดทอนให้เหลือเพียงภาษาเทคโนโลยีหรือนโยบาย",
        "เป้าหมายไม่ใช่การผลักดันทางออก แต่คือการสนับสนุนความเข้าใจร่วมกันระหว่างเมือง วัฒนธรรม และระดับขนาดที่แตกต่าง"
    ],
    principles: [
        {
            title: "การสังเกตโดยยึดมนุษย์เป็นศูนย์กลาง",
            description:
                "ระบบเมืองควรถูกเข้าใจผ่านประสบการณ์จริง กิจวัตรและการตัดสินใจในชีวิตประจำวันของผู้คนถูกมองเป็นสัญญาณหลัก ไม่ใช่ผลลัพธ์รอง",
            image: {
                url: "/smart-city/editorial/human-first-observation.png",
                alt: "ผู้คนเคลื่อนผ่านถนนเมืองอย่างสงบ โดยเป็นสัญญาณหลักของระบบเมือง",
            },
            landingUrl: "/smart-city/editorial-human-first-observation",
        },
        {
            title: "ระบบมาก่อนเทคโนโลยี",
            description:
                "เทคโนโลยีจะถูกพิจารณาก็ต่อเมื่อมันส่งผลต่อพฤติกรรม ความปลอดภัย การเข้าถึง หรือความสบายอย่างมีความหมาย ไม่ใช่ในฐานะคุณสมบัติที่แยกเดี่ยว",
            image: {
                url: "/smart-city/editorial/system-before-technology.png",
                alt: "การสัญจรและโครงสร้างพื้นฐานของเมืองที่ทำงานอย่างเงียบ ๆ อยู่เบื้องหลังชีวิตประจำวัน",
            },
            landingUrl: "/smart-city/editorial-system-before-technology",
        },
        {
            title: "ท้องถิ่นในฐานะต้นแบบระดับโลก",
            description:
                "เมืองขนาดกลางสามารถทำหน้าที่เป็นห้องทดลองที่มีชีวิต รูปแบบท้องถิ่นอาจขยายไปสู่ระบบเมืองในวงกว้างได้เมื่อสังเกตอย่างรอบคอบ",
            image: {
                url: "/smart-city/editorial/local-as-global-prototype.png",
                alt: "ฉากถนนท้องถิ่นที่สะท้อนรูปแบบร่วมกับเมืองต่าง ๆ ทั่วโลก",
            },
            landingUrl: "/smart-city/editorial-local-as-global-prototype",
        },
    ],
}