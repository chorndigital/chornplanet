// src/component/AiCompanionTH/Main/AiFahLandingPage.tsx
import React from "react";
import Image from "next/image";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import FahSideRight from "../SideRight/FahSideRight";
import FahBottomFeature from "@/components/AiCompanions/BottomFeature/FahBottomFeature";
import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

const AiFahLandingPage: React.FC<{ lang: string; fah?: IAiLanding }> = ({lang, fah}) => {
    const content = fah ?? InfoTranslation[lang].AiCompanions.fah;

    return (
        <>
            <div className="portfolio-details-area">
                <div className="container">
                    <h1>{content.title}</h1>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="portfolio-details-image">
                                <Image
                                    src={content.pages.landing.image.path}
                                    alt="portfolio"
                                    width={1000}
                                    height={600}
                                />
                            </div>
                            <FahBottomFeature fah={content}/>
                        </div>
                        <FahSideRight lang={lang} fah={content}/>
                    </div>
                </div>
            </div>
            <DefaultShape/>
        </>
    );
};

export default AiFahLandingPage;
