// src/component/AiCompanionTH/Main/AiFahLandingPage.tsx
import React from "react";
import Image from "next/image";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import PloySideRight from "@/components/AiCompanions/SideRight/PloySideRight";
import PloyBottomFeature from "@/components/AiCompanions/BottomFeature/PloyBottomFeature";
import {IAiLanding} from "@/data/ai/model/IAiLanding";

const AiPloyLandingPage: React.FC<{ lang: string; ploy?: IAiLanding }> = ({lang, ploy}) => {
    const content = ploy ?? InfoTranslation[lang].AiCompanions.ploy;

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
                            <PloyBottomFeature lang={lang} ploy={content}/>
                        </div>
                        <PloySideRight lang={lang} ploy={content}/>
                    </div>
                </div>
            </div>
            <DefaultShape/>
        </>
    );
};

export default AiPloyLandingPage;
