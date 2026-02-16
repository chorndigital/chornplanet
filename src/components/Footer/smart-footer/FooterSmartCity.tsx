import React from "react";
import {IFooterDetail} from "@/data/footer/model/IFooter";
import Link from "next/link";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function FooterSmartCity({lang}: { lang: string }) {
    return (
        <div className="footer-right-column">
            <div className="single-footer-widget pl-5">
                <h3 className='pb-2'>{InfoTranslation[lang].Footer.smartCity.title}</h3>
                <div className="footer-bar footer-bar-bottom-addition"/>
                <ul className="quick-links ul-footer">
                    {InfoTranslation[lang].Footer.smartCity.items
                        .filter((item: IFooterDetail) => item.link !== undefined)
                        .map((item: IFooterDetail, index: number) => (
                            <li key={index}>
                                <Link href={'/' + lang + item.link}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}