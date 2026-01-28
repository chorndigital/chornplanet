import React from "react";
import AboutLeft from "@/components/About/AboutLeft";
import AboutRight from "@/components/About/AboutRight";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function AboutContent({lang}: { lang: string }) {
    const about = InfoTranslation[lang].About

    return (
        <>
            <div className="about-area pb-70">
                <div className="container">
                    <h1>{about.title}</h1>
                    <strong>{about.subTitle}</strong>
                    <div className="row pt-2">
                        <AboutLeft lang={lang}/>
                        <AboutRight lang={lang}/>
                    </div>
                </div>
            </div>
        </>
    );
}
