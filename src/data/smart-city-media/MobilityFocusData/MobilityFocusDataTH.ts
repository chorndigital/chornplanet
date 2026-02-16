//data/smart-city-media/MobilityFocusDataTH.ts

import {IMobilityFocus} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const MobilityFocusDataTH: IMobilityFocus = {
    headline: "การเดินทางมักถูกสังเกตก่อนที่จะถูกทำความเข้าใจ",
    paragraph:
        "ผู้คนไม่ได้มีปฏิสัมพันธ์กับระบบการเดินทางโดยตรงเสมอไป แต่จะพบผ่านสถานการณ์เล็ก ๆ เช่น การข้ามถนน การรอการเดินทาง หรือการใช้พื้นที่ร่วมกับผู้อื่น เมื่อระบบการเดินทางทำงานได้อย่างสม่ำเสมอ ระบบดังกล่าวจะไม่เป็นจุดสนใจมากนัก และช่วยสนับสนุนการเคลื่อนไหวตามกิจวัตรในชีวิตประจำวัน",

    signals: [
        {
            title: "การเคลื่อนไหวที่คาดการณ์ได้ในถนนที่ใช้ร่วมกัน",
            description:
                "การเดินทางที่ประสานกันสามารถลดความไม่แน่นอนในการเคลื่อนไหว คนเดินเท้าข้ามถนนได้โดยมีความคาดหมายที่ชัดเจนขึ้น ยานพาหนะลดความเร็วภายใต้สภาพถนนที่ใช้ร่วมกัน และถนนลักษณะดังกล่าวสามารถถูกตีความได้โดยมีความตึงเครียดลดลง ความคาดการณ์ได้อาจมีส่วนช่วยต่อความปลอดภัยในชีวิตประจำวัน",
            image: {
                url: "/smart-city/mobility-focus/predictable-shared-street.png",
                alt: "ถนนในเมืองที่มีคนเดินเท้า ยานยนต์ไฟฟ้า และหุ่นยนต์ส่งของเคลื่อนที่อย่างสงบ มีสัญญาณภาพที่ชัดเจนและการไหลที่คาดการณ์ได้",
            },
            signalFocus: [
                "pedestrian confidence",
                "shared space",
                "predictability",
                "street readability"
            ],
            landingUrl: "/smart-city/mobility-focus-predictable-movement",
        },
        {
            title: "การอยู่ร่วมกันของการเดินทางหลายรูปแบบ",
            description:
                "ถนนในเมืองอาจมีรูปแบบการเดินทางหลายประเภท ผู้คนอาจเดินร่วมกับยานยนต์อัตโนมัติ หุ่นยนต์ส่งของขนาดเล็ก และการเดินทางด้วยพาหนะไฟฟ้าขนาดเบา ภายใต้เงื่อนไขการออกแบบที่สนับสนุนการใช้ร่วมกัน ไม่จำเป็นต้องมีรูปแบบใดรูปแบบหนึ่งเป็นจุดสนใจหลัก และหลายรูปแบบสามารถทำงานควบคู่กันได้",
            image: {
                url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                alt: "ถนนในเมืองที่มีคนเดินเท้า ยานยนต์ไฟฟ้าอัตโนมัติ หุ่นยนต์ส่งของขนาดเล็ก และสกู๊ตเตอร์ใช้พื้นที่ร่วมกัน",
            },
            signalFocus: [
                "mixed mobility",
                "autonomous vehicles",
                "delivery robots",
                "human-centered design"
            ],
            landingUrl: "/smart-city/mobility-focus-mixed-mobility",
        }
    ],
};