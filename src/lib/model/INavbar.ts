
// INavbar.ts
export interface INavbar {
    group: string,
    label: string;
    level: number;
    image?: string
    link: string;
    activeLinks?: string[];
    isSeparated?: boolean;
    isSubmenu: boolean;
    isFrontend?: boolean;
    isBackend?: boolean;
    isDevOps?: boolean;
    submenu: INavbar[];
}

export interface INavbarGroup {
    group: string;
    firstPathname: string;
}