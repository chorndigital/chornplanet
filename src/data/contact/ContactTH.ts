import {IContact} from "@/data/contact/model/IContact";

export const ContactTH: IContact = {
    location: {
        icon: "flaticon-pin",
        label: "ที่ตั้งสำนักงาน",
        isLink: true,
        link: "https://www.google.com/maps/place/CHORN/@18.84633,99.059526,17z/data=!4m6!3m5!1s0x42b952d661374a4f:0x924779e8f9fe3248!8m2!3d18.8463263!4d99.0594875!16s%2Fg%2F11kp_0g9hq?hl=th-TH&entry=ttu",
        linkText: "Chiang Mai, Thailand",
        button: ""
    },
    email: {
        icon: "flaticon-email-1",
        label: "Email",
        isLink: true,
        link: "mailto:contact@chorn.in.th",
        linkText: "contact@chorn.in.th",
        button: ""
    },
    tel: {
        icon: "flaticon-call",
        label: "052 - 000 548",
        isLink: false,
        link: "",
        linkText: "Mon-  Fri : 08:30 - 17:30",
        button: ""
    },
    github: {
        icon: "bx bxl-github",
        label: "GitHub",
        isLink: true,
        link: "https://github.com/chorndigital",
        linkText: "GitHub Chorn Planet",
        button: ""
    },
    linkedin: {
        icon: "bx bxl-linkedin",
        label: "LinkedIn",
        isLink: true,
        link: "https://www.linkedin.com/company/chornplanet",
        linkText: "LinkedIn Chorn Planet",
        button: ""
    },
    line: {
        icon: "",
        label: "Line OA",
        isLink: false,
        link: "https://lin.ee/YYn0ZYW",
        linkText: "Line - Chorn Planet",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    },
    contacts: [
        {
            icon: "flaticon-pin",
            label: "Location",
            isLink: true,
            link: "https://www.google.com/maps/place/CHORN/@18.84633,99.059526,17z/data=!4m6!3m5!1s0x42b952d661374a4f:0x924779e8f9fe3248!8m2!3d18.8463263!4d99.0594875!16s%2Fg%2F11kp_0g9hq?hl=th-TH&entry=ttu",
            linkText: "Chiang Mai, Thailand",
            button: ""
        },
    ],
    contactInfo: {
        title: "ติดต่อธุรกิจและความร่วมมือ",
        description: "ยินดีต้อนรับการติดต่อจากผู้ก่อตั้ง CEO, CTO และผู้นำด้านผลิตภัณฑ์",
        header: "ข้อมูลการติดต่อ",
        roles: [
            {
                title: "Chorn Planet",
                span: "ช่วยผู้ก่อตั้งในการขยายเทคโนโลยี ทีม และกลยุทธ์",
                email: "contact@chorn.in.th"
            },
            {
                title: "สถานที่ใกล้เคียง",
                span: "",
                nearbyShopping: "เซ็นทรัลเฟสติวัลเชียงใหม่ 20 นาที",
                nearbyUniversity1: "มหาวิทยาลัยแม่โจ้ 22 นาที",
                nearbyUniversity2: "มหาวิทยาลัยเชียงใหม่ 29 นาที",
                nearbyAirport: "สนามบินนานาชาติเชียงใหม่ 30 นาที"
            },
        ]
    }
}