import React from "react";
import {INavbar} from "@/data/navbar/model/INavbar";
import MenuLevel from "./MenuLevel";

export default function MenuLevelContainer(
    {lang, pathname, navbar}:
    { lang: string, pathname: string, navbar: INavbar }) {
    return <MenuLevel lang={lang} pathname={pathname} navbar={navbar}/>
}