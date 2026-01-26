import {INavbar} from "@/data/navbar/model/INavbar";
import {NavbarGroups} from "@/data/navbar/common/NavbarGroups"

export function sanitizeUUID(text: string): string {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}

export function IsActiveNavbar(pathname: string, navbar: INavbar): boolean {
    const pathnames = pathname.split("/");
    const firstPathname = pathnames[2] ?? "";

    const matchedGroup = NavbarGroups.find(
        (item) => item.firstPathname === firstPathname
    )?.group ?? "Home";

    return navbar.group === matchedGroup;
}

export function publishTime() {
    const currentDate = new Date()
    return currentDate.toISOString()
}