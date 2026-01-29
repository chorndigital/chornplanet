import {INavbar} from "@/data/navbar/model/INavbar";
import {Navbar3FrontEnd} from "@/data/navbar/navbar3/Navbar3FrontEnd";
import {Navbar3BackEnd} from "@/data/navbar/navbar3/Navbar3BackEnd";
import {Navbar3DevOps} from "@/data/navbar/navbar3/Navbar3DevOps";

export const NavbarFI: INavbar[] = [
    {
        group: "Home",
        label: "Etusivu",
        level: 1,
        link: "/",
        isSubmenu: false,
        submenu: [],
    },
    {
        group: "Smart City",
        label: "Älykaupunki",
        level: 1,
        link: "/smart-city/",
        isSubmenu: false,
        submenu: [],
    },
    {
        group: "Smart Mobility",
        label: "Älykäs Liikenne",
        level: 1,
        link: "/smart-mobility/",
        isSubmenu: false,
        submenu: [],
    },
    {
        group: "Technology",
        label: "Teknologia",
        level: 1,
        link: "/technology/",
        isSubmenu: true,
        submenu: [],
    },
    {
        group: "AI Integration",
        label: "Tekoälyn integrointi",
        level: 1,
        link: "/ai-integration/",
        isSubmenu: false,
        submenu: [],
    },
    {
        group: "About",
        label: "Tietoa",
        level: 1,
        link: "/about/",
        isSubmenu: false,
        submenu: [],
    },
];
