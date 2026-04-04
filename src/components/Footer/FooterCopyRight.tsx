import React from "react";
import Link from "next/link";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function Information({lang}: { lang: string }) {
    const year = new Date().getFullYear()
    const termOfService = InfoTranslation[lang].Footer.important.items[2]
    const privacyPolicy = InfoTranslation[lang].Footer.important.items[3]
    const workplacePolicy = InfoTranslation[lang].Footer.important.items[4]

    return (
        <div className="copyright-area">
            <div className="container">
                <div className="copyright-area-content copyright-area-content-x">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>
                                Copyright &copy; {year} by <a href={'/' + lang}>Chorn Planet</a>
                            </p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link
                                        href={'/' + lang + termOfService.link}>
                                        {termOfService.label}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/' + lang + privacyPolicy.link}>
                                        {privacyPolicy.label}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/' + lang + workplacePolicy.link}>
                                        {workplacePolicy.label}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}