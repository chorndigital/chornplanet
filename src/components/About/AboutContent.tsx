import React from "react";
import AboutLeft from "@/components/About/AboutLeft";
import AboutRight from "@/components/About/AboutRight";
import {AboutContentMedia, IAbout} from "@/lib/model/about";

export default function AboutContent({
    about,
    media,
}: {
    about: IAbout;
    media: AboutContentMedia;
}) {
    return (
        <>
            <div className="about-area pb-70">
                <div className="container">
                    <h1>{about.title}</h1>
                    <strong>{about.subTitle}</strong>
                    <div className="row pt-2">
                        <AboutLeft media={media}/>
                        <AboutRight about={about}/>
                    </div>
                </div>
            </div>
        </>
    );
}
