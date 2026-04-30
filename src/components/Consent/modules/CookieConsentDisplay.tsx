// src/component/CookieConsentDisplay.tsx
"use client"

import Link from "next/link";
import Image from "next/image";
import {ImageUrl} from "@/image/ImageUrl";
import ConsentCookieButton from "@/components/Consent/modules/ConsentCookieButton";
import {useCookieConsent} from "@/provider/hooks/hookStateApp";
import {IConsent} from "@/lib/model/IConsent";

export default function CookieConsentDisplay({lang, consent}: { lang: string, consent: IConsent }) {
    const isCookieConsent = useCookieConsent()

    if (isCookieConsent) {
        return null;
    }

    return (
        <div
            className="modal fade show d-block"
            style={{display: 'block', backgroundColor: 'rgba(0,0,0,0)'}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="add-cookie-left">
                            <Image
                                className="logo"
                                src={ImageUrl.logo.sm.path}
                                alt={ImageUrl.logo.sm.title}
                                width={50}
                                height={50}
                            />
                            <div className="text">
                                {consent.description}
                                <Link
                                    className="a-privacy"
                                    href={'/' + lang + consent.policyLink}
                                >
                                    {consent.policyLabel}
                                </Link>
                            </div>
                        </div>

                        <div className="add-cookie-right">
                            <ConsentCookieButton buttonText={consent.buttonText}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
