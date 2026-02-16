//data/smart-city-media/LocalToGlobalDataTH.ts

import {ILocalToGlobal} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const LocalToGlobalDataTH: ILocalToGlobal = {
    headline: "จากบริบทท้องถิ่นสู่รูปแบบระดับโลก",
    paragraph:
        "กิจกรรมในเมืองมักถูกรับรู้ภายในบริบทเฉพาะของพื้นที่ เมื่อเงื่อนไขที่คล้ายคลึงกันถูกสังเกตในหลายเมือง หลายภูมิภาค และหลายวัฒนธรรม จะสามารถระบุรูปแบบที่เกิดซ้ำได้ การเปรียบเทียบสถานการณ์ในชีวิตประจำวันระหว่างพื้นที่ต่าง ๆ ช่วยให้สามารถพิจารณาโครงสร้างระบบที่มีลักษณะร่วมกันได้",

    items: [
        {
            title: "กิจวัตรในระดับถนน",
            description:
                "การเคลื่อนไหวประจำวันบนถนนที่คุ้นเคยสะท้อนให้เห็นว่าบุคคลปรับตัวต่อเงื่อนไขด้านพื้นที่ โครงสร้างเวลา และระบบการเดินทางอย่างไร แม้จะมีลักษณะเฉพาะในแต่ละพื้นที่ กิจวัตรเหล่านี้สะท้อนรูปแบบเชิงโครงสร้างที่เกิดจากการออกแบบเมือง",
            image: {
                url: "/smart-city/local-to-global/local-street-daily-routine.png",
                alt: "สภาพแวดล้อมถนนในเมืองประจำวัน มีคนเดินเท้า ร้านค้าในท้องถิ่น และระบบการเดินทางที่กำลังทำงาน",
            },
            signalFocus: ["human routine", "street-level mobility", "local behavior"],
        },
        {
            title: "รูปแบบที่เกิดซ้ำในหลายเมือง",
            description:
                "เมื่อโครงสร้างการเคลื่อนไหวที่คล้ายกันถูกสังเกตในหลายเมือง ย่อมสะท้อนเงื่อนไขเชิงโครงสร้างที่ใกล้เคียงกัน กิจกรรมที่เห็นในระดับท้องถิ่นจึงสามารถนำมาพิจารณาในบริบทของพฤติกรรมระบบเมืองในวงกว้างได้",
            image: {
                url: "/smart-city/local-to-global/global-urban-pattern.png",
                alt: "สภาพแวดล้อมเมืองที่แสดงการไหลของการเดินทาง ระบบโลจิสติกส์ และการใช้พื้นที่สาธารณะที่คล้ายคลึงกันในหลายเมือง",
            },
            signalFocus: ["replicability", "urban density", "systemic flow"],
        },
    ],

    purpose: "พิจารณารูปแบบเชิงโครงสร้างในวงกว้างผ่านการเปรียบเทียบบริบทท้องถิ่น",
    narrativeRole: "เชื่อมโยงกิจกรรมระดับท้องถิ่นที่สังเกตได้กับการวิเคราะห์เชิงระบบ",
    section: "From Local Life to Global Pattern",
    category: "Smart City Media",
    landingUrl: "/smart-city/from-local-life-to-global-pattern",
    lang: "th",
};