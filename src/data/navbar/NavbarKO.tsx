import {INavbar} from "@/data/navbar/model/INavbar";
import {Navbar3FrontEnd} from "@/data/navbar/navbar3/Navbar3FrontEnd";
import {Navbar3BackEnd} from "@/data/navbar/navbar3/Navbar3BackEnd";
import {Navbar3DevOps} from "@/data/navbar/navbar3/Navbar3DevOps";

export const NavbarKO: INavbar[] = [
    {
        group: "Home",
        label: "홈",
        level: 1,
        link: "/",
        isSubmenu: false,
        submenu: [],
    },
    {
        group: "Smart City",
        label: "스마트 시티",
        level: 1,
        link: "/smart-city/",
        isSubmenu: false,
        submenu: [],
    },
    {
        group: "Smart Mobility",
        label: "스마트 모빌리티",
        level: 1,
        link: "/smart-mobility/",
        isSubmenu: false,
        submenu: [],
    },
    {
        group: "Technology",
        label: "기술",
        level: 1,
        link: "/technology/",
        isSubmenu: true,
        submenu: [],
    },
    {
        group: "AI Integration",
        label: "AI 통합",
        level: 1,
        link: "/ai-integration/",
        isSubmenu: false,
        submenu: [],
    },
    {
        group: "About",
        label: "소개",
        level: 1,
        link: "/about/",
        isSubmenu: false,
        submenu: [],
    },
];
