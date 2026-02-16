//data/smart-city-media/HumanDailyFlowDataTH.ts

import {IHumanDailyFlow} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const HumanDailyFlowDataTH: IHumanDailyFlow = {
    headline: "ระบบเมืองถูกสังเกตได้ผ่านวัฏจักรประจำวัน",
    paragraph:
        "ระบบเมืองมักไม่สามารถสังเกตได้ครบถ้วนในช่วงเวลาเดียว แต่จะปรากฏผ่านรูปแบบที่เกิดซ้ำในแต่ละวัน เช่น กิจกรรมการเดินทางช่วงเช้า การประสานงานช่วงกลางวัน และการเปลี่ยนผ่านในช่วงเย็น การสังเกตรูปแบบเหล่านี้ช่วยให้สามารถตีความระบบเมืองที่ซับซ้อนได้ผ่านการเคลื่อนไหวในกิจวัตรประจำวันของผู้คน",

    morningFlow: {
        title: "การไหลช่วงเช้า — การเริ่มต้นวัน",
        paragraph:
            "ช่วงเช้าแสดงให้เห็นการเปลี่ยนผ่านจากความเงียบสงบในย่านที่อยู่อาศัยไปสู่การเคลื่อนไหวด้านการเดินทาง ผู้คนออกจากบ้าน เดินทางบนถนน และปรับจังหวะให้สอดคล้องกับระบบขนส่ง สัญญาณที่สังเกตได้ เช่น รูปแบบการจราจร การเคลื่อนที่ของคนเดินเท้า และการใช้งานระบบการเดินทางร่วมกัน ช่วยบ่งชี้ว่าระบบโครงสร้างพื้นฐานด้านการเดินทางทำงานอย่างไรในช่วงเริ่มต้นของวัน",

        image: {
            url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
            alt: "สภาพแวดล้อมเมืองช่วงเช้าตรู่ มีผู้คนเดินทาง แสงสว่างยามเช้า พื้นที่สีเขียว และระบบการเดินทางเริ่มเข้าสู่การทำงานประจำวัน",
        },

        category: "Morning Flow",
        signalFocus: ["mobility readiness", "pedestrian flow", "temporal synchronization"],
        landingUrl: "/smart-city/human-daily-flow-morning",
    },

    middayFlow: {
        title: "การไหลช่วงกลางวัน — ความหนาแน่นและการประสานงาน",
        paragraph:
            "ในช่วงกลางวัน กิจกรรมในเมืองมีความหนาแน่นเพิ่มขึ้น ผู้คน สินค้า และบริการเคลื่อนที่พร้อมกัน ระบบการเดินทางอัตโนมัติ โครงสร้างพื้นฐานด้านโลจิสติกส์ และการออกแบบพื้นที่สาธารณะดำเนินการควบคู่กันเพื่อรองรับปริมาณการเคลื่อนไหวที่มากขึ้น",

        image: {
            url: "/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
            alt: "สภาพแวดล้อมเมืองช่วงกลางวัน มีคนเดินเท้า ยานยนต์ไฟฟ้าอัตโนมัติ โดรนส่งของ และการเคลื่อนไหวที่ประสานกันในพื้นที่สาธารณะ",
        },

        category: "Midday Flow",
        signalFocus: ["density", "logistics", "coordination", "autonomous systems"],
        landingUrl: "/smart-city/human-daily-flow-midday",
    },

    eveningFlow: {
        title: "การไหลช่วงเย็น — การชะลอตัวและการเปลี่ยนผ่าน",
        paragraph:
            "กิจกรรมช่วงเย็นเปลี่ยนไปสู่ระดับการเคลื่อนไหวด้านการเดินทางที่ลดลง ระบบแสงสว่าง สภาพการเดินเท้า สภาพแวดล้อมบนถนน และความพร้อมของการเดินทาง ส่งผลต่อรูปแบบการกลับบ้านและการทำกิจกรรมช่วงเย็นของผู้อยู่อาศัย",

        image: {
            url: "/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
            alt: "สภาพแวดล้อมเมืองช่วงหัวค่ำ มีคนเดินเท้า ถนนมีแสงสว่าง ร้านค้าเปิดให้บริการ การจราจรระดับปานกลาง และมีสภาพความปลอดภัยในพื้นที่ที่มองเห็นได้",
        },

        category: "Evening Flow",
        signalFocus: ["safety", "public space", "evening mobility", "urban transition"],
        landingUrl: "/smart-city/human-daily-flow-evening",
    },

    purpose: "สนับสนุนให้ผู้อ่านมองเห็นรูปแบบเมืองที่เกิดซ้ำ",
    narrativeRole: "นำเสนอระบบเมืองที่ซับซ้อนผ่านกิจวัตรประจำวันของผู้คน",
    section: "Human Daily Flow",
    category: "Smart City Media",
    lang: "th",
};