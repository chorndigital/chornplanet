"use client"

import React from "react";
import {INavbar} from "@/data/navbar/model/INavbar";
import {useDispatch} from "react-redux";
import {IsActiveNavbar} from "@/lib/utils";
import {toggleMobileMenuVisible} from "@/provider/redux/slice/SliceApp";
import Link from "next/link";

export default function MenuLevel(
    {lang, pathname, navbar}:
    { lang: string, pathname: string, navbar: INavbar }) {
    const dispatch = useDispatch();
    const isActiveNavbar = IsActiveNavbar(pathname, navbar)

    return (
        <div className="x-navbar1-only">
            <Link
                href={'/' + lang + navbar.link}
                className={`nav-link ${isActiveNavbar ? "active" : ""}`}
                onClick={() => dispatch(toggleMobileMenuVisible())}
            >
                {navbar.label}
            </Link>
        </div>
    )
}