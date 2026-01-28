import {IContact} from "@/data/contact/model/IContact";

export const ContactEN: IContact = {
    location: {
        icon: "flaticon-pin",
        label: "Location",
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
        title: "Business Inquiries & Collaborations",
        description: "Welcome contact from fellow founders, CEO, CTO, and product leaders.",
        header: "Contact Information",
        roles: [
            {
                title: "Project Manager",
                span: "Client project coordination",
                email: "pm@chorn.in.th"
            },
            {
                title: "CEO | CTO Consultant",
                span: "Helping Founders Scale Technology, Teams, and Strategy",
                email: "cto@chorn.in.th"
            },
            {
                title: "Nearby places",
                span: "",
                nearbyShopping: "Central Festival Chiang Mai - 20 minutes",
                nearbyUniversity1: "Maejo University - 22 minutes",
                nearbyUniversity2: "Chiang Mai University - 29 minutes",
                nearbyAirport: "Chiang Mai International Airport - 30 minutes",
            }
        ]
    }
}