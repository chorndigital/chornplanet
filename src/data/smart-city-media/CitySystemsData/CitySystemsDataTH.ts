import {ICitySystems} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const CitySystemsDataTH: ICitySystems = {
    headline: "ระบบเมืองและสมดุลของชีวิตประจำวัน",
    paragraph:
        "ระบบเมืองมักไม่ได้ถูกสัมผัสโดยตรงในฐานะเทคโนโลยีหรือนโยบาย แต่ถูกสัมผัสในรูปของ “สมดุล” ระหว่างการเคลื่อนไหวและการหยุดพัก ระหว่างกิจกรรมและการพักผ่อน ระหว่างประสิทธิภาพและความสบาย ซึ่งกำหนดวิธีที่ผู้คนใช้ชีวิตและเคลื่อนผ่านเมืองในแต่ละวัน",
    systems: [
        {
            title: "การเคลื่อนไหวและการหยุดพัก",
            description:
                "เมืองทำงานได้ดีที่สุดเมื่อการเคลื่อนไหวไม่ลบพื้นที่ของความนิ่ง ถนน ทางข้าม และพื้นที่ร่วมควรเปิดโอกาสให้การไหลของการสัญจรชะลอลงได้อย่างเป็นธรรมชาติ เพื่อสร้างช่วงเวลาที่ผู้คนรู้สึกปลอดภัยพอที่จะหยุด สังเกต และมีปฏิสัมพันธ์",
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "ถนนเมืองที่สร้างสมดุลระหว่างการหยุดพักของคนเดินเท้ากับการไหลของการสัญจร"
            },
            balanceSignals: ["speed vs safety", "flow vs rest"],
            landingUrl: "/smart-city/city-systems-movement-and-pause"
        },
        {
            title: "ความหนาแน่นและความสบาย",
            description:
                "ความหนาแน่นจะน่าอยู่เมื่อพื้นที่ แสง และความเขียวช่วยลดความอึดอัดของการอยู่ใกล้กัน ระบบเมืองที่สมดุลทำให้ผู้คนสามารถใช้พื้นที่ร่วมกันได้โดยไม่รู้สึกถูกบีบอัดหรือเร่งรีบ",
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "ความหนาแน่นของเมืองที่สบายขึ้นด้วยพื้นที่สีเขียวและพื้นที่ใช้ร่วมกัน"
            },
            balanceSignals: ["proximity vs privacy", "activity vs calm"],
            landingUrl: "/smart-city/city-systems-density-and-comfort"
        },
        {
            title: "ประสิทธิภาพและจังหวะชีวิตมนุษย์",
            description:
                "ระบบที่มีประสิทธิภาพควรสนับสนุนจังหวะชีวิตประจำวัน ไม่ใช่บังคับให้ผู้คนต้องเร่งรีบ การขนส่ง โลจิสติกส์ และบริการควรปรับให้เข้ากับจังหวะของมนุษย์ เพื่อให้เมืองรู้สึกคาดเดาได้มากกว่าถูกเร่งให้เร็วขึ้น",
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "โครงสร้างพื้นฐานของเมืองที่สอดคล้องกับจังหวะชีวิตประจำวันของผู้คน"
            },
            balanceSignals: ["automation vs control", "speed vs predictability"],
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm"
        }
    ]
};