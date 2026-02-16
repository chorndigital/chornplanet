//data/smart-city-media/UrbanSignalsDataTH.ts

import {IUrbanSignals} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const UrbanSignalsDataTH: IUrbanSignals = {
    headline: "สัญญาณเมืองที่สังเกตได้ในชีวิตประจำวัน",
    paragraph:
        "เมืองสื่อสารผ่านสัญญาณที่สังเกตได้ในรายละเอียดเล็ก ๆ เช่น ความรู้สึกของถนน วิธีที่ผู้คนเคลื่อนไหว และการเปลี่ยนแปลงของพื้นที่ตามเวลา ช่วงเวลาเหล่านี้ไม่ได้ถูกอธิบายว่าเป็นระบบเสมอไป แต่สามารถบ่งชี้ได้ว่าสภาพแวดล้อมเมืองกำลังทำงานอย่างไร",

    signals: [
        {
            title: "พฤติกรรมถนนที่คาดการณ์ได้",
            description:
                "เมื่อคนเดินเท้า ผู้ใช้จักรยาน และยานพาหนะเคลื่อนที่ภายใต้ความคาดหมายที่ชัดเจน อาจสะท้อนบรรทัดฐานร่วมกันและความชัดเจนของพื้นที่ แม้ไม่มีการบังคับใช้ที่ชัดเจน",

            signalFocus: ["predictability", "shared space", "human trust"],

            image: {
                url: "/smart-city/urban-signals/predictable-shared-street.png",
                alt: "ผู้คน จักรยาน และยานพาหนะเคลื่อนที่ร่วมกันอย่างราบรื่นบนถนนเมืองที่ใช้ร่วมกัน โดยไม่เห็นความแออัดหรือความตึงเครียดอย่างชัดเจน",
            },

            landingUrl: "/smart-city/urban-signals-predictable-street",
        },

        {
            title: "โลจิสติกส์กลมกลืนกับชีวิตประจำวัน",
            description:
                "หุ่นยนต์ส่งของ ยานยนต์ไฟฟ้าขนาดเล็ก และผู้ส่งของ อาจทำงานได้โดยไม่เป็นจุดสนใจหลัก ซึ่งบ่งชี้ว่าโลจิสติกส์ถูกผสานเข้ากับรูปแบบการเคลื่อนไหวประจำวัน",

            signalFocus: ["logistics", "integration", "low friction"],

            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "ยานพาหนะส่งของขนาดเล็กและหุ่นยนต์ทำงานอย่างสงบควบคู่กับชีวิตบนถนนในเมืองสมัยใหม่",
            },

            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },

        {
            title: "พื้นที่สาธารณะถูกใช้งานตามบทบาท",
            description:
                "เมื่อผู้คนหยุดพัก อยู่ในพื้นที่ และใช้พื้นที่ร่วมกันในรูปแบบตามกิจวัตร อาจสะท้อนความสมดุลระหว่างประสิทธิภาพการเคลื่อนไหวและความสามารถในการใช้งานพื้นที่สาธารณะ",

            signalFocus: ["public space", "comfort", "social rhythm"],

            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "ผู้คนนั่ง เดิน และมีปฏิสัมพันธ์อย่างสบายในพื้นที่สาธารณะของเมืองที่ออกแบบอย่างเหมาะสม",
            },

            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
    ],
}