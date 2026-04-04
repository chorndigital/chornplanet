import {IContact} from "@/data/contact/model/IContact";

export const ContactKO: IContact = {
    location: {
        icon: "flaticon-pin",
        label: "사무실 위치",
        isLink: true,
        link: "https://www.google.com/maps/place/Chorn Planet/@18.84633,99.059526,17z/data=!4m6!3m5!1s0x42b952d661374a4f:0x924779e8f9fe3248!8m2!3d18.8463263!4d99.0594875!16s%2Fg%2F11kp_0g9hq?hl=th-TH&entry=ttu",
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
            link: "https://www.google.com/maps/place/Chorn Planet/@18.84633,99.059526,17z/data=!4m6!3m5!1s0x42b952d661374a4f:0x924779e8f9fe3248!8m2!3d18.8463263!4d99.0594875!16s%2Fg%2F11kp_0g9hq?hl=th-TH&entry=ttu",
            linkText: "Chiang Mai, Thailand",
            button: ""
        },
    ],
    contactInfo: {
        title: "비즈니스 문의 및 파트너십",
        description: "공동 창업자, CEO, CTO 및 제품 리더의 환영 연락입니다.",
        header: "연락처 정보",
        roles: [
            {
                title: "Chorn Planet",
                span: "창업가가 기술, 팀, 전략을 확장할 수 있도록 지원합니다",
                email: "contact@chorn.in.th"
            },
            {
                title: "주변 장소",
                span: "",
                nearbyShopping: "센트럴 페스티벌 치앙마이 - 20분",
                nearbyUniversity1: "매조 대학교 - 22분",
                nearbyUniversity2: "치앙마이 대학교 - 29분",
                nearbyAirport: "치앙마이 국제공항 - 30분"
            }
        ]
    }
}