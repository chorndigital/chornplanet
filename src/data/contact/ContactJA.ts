import {IContact} from "@/data/contact/model/IContact";

export const ContactJA: IContact = {
    location: {
        icon: "flaticon-pin",
        label: "オフィス所在地",
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
        title: "ビジネスのお問い合わせ・パートナーシップ",
        description: "創業者仲間、CEO、CTO、プロダクトリーダーからの歓迎の連絡。",
        header: "連絡先情報",
        roles: [
            {
                title: "Chorn Planet",
                span: "創業者の技術・チーム・戦略のスケールを支援します",
                email: "contact@chorn.in.th"
            },
            {
                title: "近くの場所",
                span: "",
                nearbyShopping: "セントラルフェスティバル・チェンマイ - 20分",
                nearbyUniversity1: "メージョー大学 - 22分",
                nearbyUniversity2: "チェンマイ大学 - 29分",
                nearbyAirport: "チェンマイ国際空港 - 30分"
            }
        ]
    }
}