import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const WhenHumanLifeShapesTheCityTH: ISmartCityLanding = {
    heroObservation: {
        headline: "เมื่อชีวิตมนุษย์หล่อหลอมเมือง",
        paragraphs: [
            "เมืองไม่ได้ถูกกำหนดด้วยเทคโนโลยีเพียงอย่างเดียว แต่ถูกกำหนดด้วยวิธีที่ผู้คนเคลื่อนไหว หยุดพัก และมีปฏิสัมพันธ์ในแต่ละวัน",
            "จากการสังเกตกิจวัตรท้องถิ่น เราสามารถมองเห็นรูปแบบเมืองที่ปรากฏซ้ำในบริบทและเมืองต่าง ๆ"
        ],
        image: {
            url: "/smart-city/hero/when-human-life-shapes-the-city.png",
            alt: "ชีวิตประจำวันของผู้คนที่หล่อหลอมถนนเมืองอัจฉริยะอย่างสงบ"
        },
        cta: {
            label: "สำรวจรูปแบบ",
            href: `/smart-city/from-local-life-to-global-pattern`
        }
    },

    systemExplanation: {
        headline: "ระบบที่อยู่ใต้ชีวิตประจำวัน",
        paragraphs: [
            "ระบบเมืองทำหน้าที่ประสานการเคลื่อนไหว การเข้าถึง และความปลอดภัย ผ่านการออกแบบในชีวิตประจำวัน",
            "เมื่อออกแบบอย่างเหมาะสม ระบบเหล่านี้จะทำงานอย่างเงียบ ๆ แต่ยังคงมีความสำคัญ"
        ]
    },

    whyItMatters: {
        headline: "เหตุใดสิ่งนี้จึงสำคัญ",
        paragraphs: [
            "เมืองที่สอดคล้องกับจังหวะชีวิตของผู้คน มีแนวโน้มขยายตัวอย่างยั่งยืนและรักษาเสถียรภาพในระยะยาว"
        ]
    },

    relatedSignals: [
        {
            headline: "ถนนที่ใช้ร่วมกันอย่างคาดการณ์ได้",
            paragraphs: [
                "ถนนที่ออกแบบให้คาดการณ์ได้ ช่วยลดความขัดแย้งและสนับสนุนความไว้วางใจร่วมกัน"
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "ถนนที่ใช้ร่วมกันอย่างคาดการณ์ได้"
            },
            cta: {
                label: "อ่านสัญญาณ",
                href: `/smart-city/urban-signals-predictable-street`
            }
        }
    ],
}