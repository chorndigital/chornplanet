import {INavbar} from "@/data/navbar/model/INavbar";
import {Navbar3FrontEnd} from "@/data/navbar/navbar3/Navbar3FrontEnd";
import {Navbar3BackEnd} from "@/data/navbar/navbar3/Navbar3BackEnd";
import {Navbar3DevOps} from "@/data/navbar/navbar3/Navbar3DevOps";

export const NavbarJA: INavbar[] = [
    {
        group: "Home",
        label: "ホーム",
        level: 1,
        link: "/",
        isSubmenu: false,
        submenu: [],
    },
    {
        group: "Smart City",
        label: "スマートシティ",
        level: 1,
        link: "/smart-city/",
        isSubmenu: false,
        submenu: [],
    },
    {
        group: "Smart Mobility",
        label: "スマートモビリティ",
        level: 1,
        link: "/smart-mobility/",
        isSubmenu: false,
        submenu: [],
    },
    {
        group: "Technology",
        label: "テクノロジー",
        level: 1,
        link: "/technology/",
        isSubmenu: true,
        submenu: [],
    },
    {
        group: "AI Integration",
        label: "AI統合",
        level: 1,
        link: "/ai-integration/",
        isSubmenu: false,
        submenu: [],
    },
    {
        group: "About",
        label: "会社概要",
        level: 1,
        link: "/about/",
        isSubmenu: false,
        submenu: [],
    },
];
