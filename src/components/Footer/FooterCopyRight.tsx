import React from "react";
import Link from "next/link";
import {IFooter} from "@/lib/model/IFooter";

export default function Information({lang, footer}: { lang: string, footer: IFooter }) {
    const year = new Date().getFullYear()
    const termOfService = footer.important.items[2]
    const privacyPolicy = footer.important.items[3]
    const workplacePolicy = footer.important.items[4]

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
