// src/components/Footer/FooterMain.tsx

import React from "react";
import FooterLogoSocial from "./Left/FooterLogoSocial";
import FooterImportantLinks from "@/components/Footer/smart-footer/FooterImportantLinks";
import CopyRight from "./FooterCopyRight";
import FooterProjects from "@/components/Footer/smart-footer/FooterProjects";
import FooterSmartCity from "@/components/Footer/smart-footer/FooterSmartCity";
import FooterConnect from "@/components/Footer/smart-footer/FooterConnect";
import FooterTechnology from "@/components/Footer/smart-footer/FooterTechnology";

export default function FooterMain({lang}: { lang: string }) {
    return (
        <>
            <div className="footer-area footer-container">
                <div className="footer-left">
                    <FooterLogoSocial lang={lang}/>
                </div>

                <div className="footer-right">
                    <FooterImportantLinks lang={lang}/>
                    <FooterProjects lang={lang}/>
                    <FooterSmartCity lang={lang}/>
                    <FooterTechnology lang={lang}/>
                    <FooterConnect lang={lang}/>
                </div>
            </div>
            <CopyRight lang={lang}/>
        </>
    )
}