import React from "react";
import Link from "next/link";
import Image from "next/image";
import {ImageUrl} from "@/image/ImageUrl";
import LanguageButton from "@/components/Navbar/LanguageButton";
import HamburgerButton from "@/components/Navbar/HamburgerButton";
import DesktopNavbarContainer from "@/components/Navbar/DesktopNavbarContainer";

export default function NavbarContainer({lang}: { lang: string }) {
    return (
        <div id="navbar" className="navbar-area navbar-container">
            <div className="main-navbar">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/" className="navbar-brand add-navbar-logo">
                            <Image
                                src={ImageUrl.logo.rec.md.path}
                                alt={ImageUrl.logo.rec.md.title}
                                width={200}
                                height={100}
                            />
                        </Link>

                        <LanguageButton lang={lang}/>
                        <HamburgerButton/>
                        <DesktopNavbarContainer lang={lang}/>
                    </nav>
                </div>
            </div>
        </div>
    )
}