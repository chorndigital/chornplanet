import CookieConsentDisplay from "@/components/Consent/modules/CookieConsentDisplay";
import {IConsent} from "@/lib/model/IConsent";

export default function CookieConsentChecking(
    {lang, isCookieConsent, consent}: { lang: string, isCookieConsent: boolean, consent: IConsent }
) {

    if (isCookieConsent) {
        return null;
    }

    return <CookieConsentDisplay lang={lang} consent={consent}/>;
}
