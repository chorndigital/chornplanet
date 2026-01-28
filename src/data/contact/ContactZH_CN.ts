import {IContact} from "@/data/contact/model/IContact";

export const ContactZH_CN: IContact = {
    location: {
        icon: "flaticon-pin",
        label: "办公地点",
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
        linkText: "GitHub CHORN Digital",
        button: ""
    },
    linkedin: {
        icon: "bx bxl-linkedin",
        label: "LinkedIn",
        isLink: true,
        link: "https://www.linkedin.com/company/chorn",
        linkText: "LinkedIn CHORN Digital",
        button: ""
    },
    line: {
        icon: "",
        label: "Line OA",
        isLink: false,
        link: "https://lin.ee/YYn0ZYW",
        linkText: "Line - CHORN Digital",
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
        title: "商务咨询与合作",
        description: "来自联合创始人、CEO、CTO 和产品负责人的欢迎联系。",
        header: "联系信息",
        roles: [
            {
                title: "项目经理",
                span: "客户项目协调",
                email: "pm@chorn.in.th"
            },
            {
                title: "CEO | CTO Consultant",
                span: "帮助创业者扩大技术、团队和战略",
                email: "cto@chorn.in.th"
            },
            {
                title: "附近地点",
                span: "",
                nearbyShopping: "清迈中央百货节 - 20分钟",
                nearbyUniversity1: "美乔大学 - 22分钟",
                nearbyUniversity2: "清迈大学 - 29分钟",
                nearbyAirport: "清迈国际机场 - 30分钟"
            }
        ]
    }
}