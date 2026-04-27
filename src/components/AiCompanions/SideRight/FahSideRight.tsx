import React from "react";
import Link from "next/link";
import Image from "next/image";
import {IAiLanding} from "@/data/ai/model/IAiLanding";

export default function FahSideRight({lang, fah}: { lang: string; fah: IAiLanding }) {
    return (
        <div className="col-lg-4 col-md-12">
            <div className="portfolio-details-information ml-10 x-green-border">
                <ul className={'ul-custom'}>
                    {fah.sidebars.map((sidebar, index: number) => (
                        <li key={index} className={'li-sidebar-custom'}>
                            <div className="icon x-orange-font">
                                <i className={sidebar.icon}></i>
                            </div>
                            <span>{sidebar.caption}</span>
                            {sidebar.text}
                        </li>
                    ))}

                    {fah.relevants.map((ai, index) => (
                        <Link key={index} href={'/' + lang + ai.pages.landing.link}>
                            <li className="image-sidebar-list">
                                <Image
                                    src={ai.thumbnail}
                                    alt="image"
                                    width={650}
                                    height={500}
                                />
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}
