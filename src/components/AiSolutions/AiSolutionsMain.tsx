import React from "react";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import AiSolutionLeft from "@/components/AiSolutions/AiSolutionLeft";
import AiSolutionRight from "@/components/AiSolutions/AiSolutionRight";
import {IService} from "@/lib/model/IService";
import {IImageResponsiveUnit} from "@/image/model/IImageResponsiveUnit";

export default function AiSolutionsMain(
    {service, llmSlides}: { lang: string; service: IService; llmSlides?: IImageResponsiveUnit[] }
) {
    const content = service;

    return (
        <>
            <div className="services-area">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <h1>{content.title}</h1>
                        <div className="row align-items-center align-items-center-custom">
                            <AiSolutionLeft service={content}/>
                            <AiSolutionRight llmSlides={llmSlides}/>
                        </div>
                    </div>
                </div>
            </div>
            <DefaultShape/>
        </>
    );
};
