"use client"

import {setLanguageOption, toggleLanguageMenuVisible} from "@/provider/redux/slice/SliceApp";
import {Globe} from "lucide-react";
import React from "react";
import {useDispatch} from "react-redux";
import {useLanguageMenuVisible, useLanguageOption} from "@/provider/hooks/hookStateApp";
import {ILanguageOption} from "@/lib/model/ILanguage";
import {useRouter} from "next/navigation";

export default function LanguageButton(
    {lang, languageOptions}: { lang: string, languageOptions: ILanguageOption[] }
) {
    const dispatch = useDispatch();
    const languageOption = useLanguageOption()
    const languageMenuVisible = useLanguageMenuVisible()
    const router = useRouter()

    const changeLanguage = (languageOption: ILanguageOption) => {
        dispatch(setLanguageOption(languageOption));
        dispatch(toggleLanguageMenuVisible());

        const pathSegments = window.location.pathname.split("/");
        const currentPath = pathSegments.slice(2).join("/") || "";

        router.push(`/${languageOption.language}/${currentPath}`);
    }

    return (
        <div className="navbar-langs">
            <button
                onClick={() =>
                    dispatch(toggleLanguageMenuVisible())}
                className="language-button"
                type="button"
                aria-label="Select language"
            >
                <Globe size={16} color="white" style={{marginRight: "5px"}}/>
                {languageOption.label}
            </button>
            {
                languageMenuVisible &&
                <ul className="dropdown-langs">
                    {languageOptions.map((translate, index) =>
                        <li key={index}
                            className={translate.language == lang ? 'dropdown-active' : ''}
                            onClick={() => changeLanguage(translate)}
                        >
                            {translate.label}
                        </li>)}
                </ul>
            }
        </div>
    )
}
