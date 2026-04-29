import React from "react";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import AiSolutionLeft from "@/components/AiSolutions/AiSolutionLeft";
import AiSolutionRight from "@/components/AiSolutions/AiSolutionRight";
import {IService} from "@/data/service/model/IService";
import {IImageResponsiveUnit} from "@/image/model/IImageResponsiveUnit";

export default function AiSolutionsMain(
    {lang, service, llmSlides}: { lang: string; service?: IService; llmSlides?: IImageResponsiveUnit[] }
) {
    const content = service ?? InfoTranslation[lang].Service;

    return (
        <>
            <div className="services-area">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <h1>{content.title}</h1>
                        <div className="row align-items-center align-items-center-custom">
                            <AiSolutionLeft lang={lang} service={content}/>
                            <AiSolutionRight llmSlides={llmSlides}/>
                        </div>
                    </div>
                </div>
            </div>
            <DefaultShape/>
        </>
    );
};
