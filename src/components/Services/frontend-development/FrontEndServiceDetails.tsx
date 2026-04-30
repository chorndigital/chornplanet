import React from "react";
import Image from "next/image";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import SidebarDevOps from "@/components/Services/SidebarDevOps";
import SidebarFrontEnd from "@/components/Services/SidebarFrontEnd";
import SidebarFullStack from "@/components/Services/SidebarFullStack";
import {IFrontEndStack} from "@/lib/model/IFrontEnd";
import FrontEndServiceFaq from "@/components/Services/frontend-development/FrontEndServiceFaq";
import {IFrontEnd} from "@/lib/model/IFrontEnd";
import {IFullStack} from "@/lib/model/IFullStack";
import {IDevOps} from "@/lib/model/IDevOps";

export default function FrontEndServiceDetails(
    {lang, stack, image, frontEnd, fullStack, devOps}: {
        lang: string,
        stack: IFrontEndStack,
        image: string,
        frontEnd: IFrontEnd,
        fullStack: IFullStack,
        devOps: IDevOps,
    }
) {
    return (
        <>
            <div className="services-details-area pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                                <h1>{stack.features[0].title}</h1>
                                <p>{stack.features[0].description}</p>

                                <h2 className="pt-4">{stack.features[1].title}</h2>
                                <p>{stack.features[1].description}</p>

                                <div className="services-details-features">
                                    <div className="row align-items-center">
                                        <Image
                                            src={image}
                                            alt="image"
                                            width={500}
                                            height={500}
                                        />

                                        <div className="col-lg-6">
                                            <ul className="feature-list">
                                                {stack.features[1].list.map((item: string, index: number) => (
                                                    <li key={index} className="feature-item">
                                                        <div className="feature-icon-container">
                                                            <div className="feature-icon">
                                                                <i className="flaticon-check"></i>
                                                            </div>
                                                            <div className="feature-title">
                                                                {item}
                                                            </div>
                                                        </div>
                                                        <div className="feature-content"/>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {stack.features.slice(2).map((feature, index) => (
                                    <div key={index} className={index === 0 ? "text-result" : undefined}>
                                        <h3>{feature.title}</h3>
                                        <p>{feature.description}</p>
                                    </div>
                                ))}

                                <FrontEndServiceFaq faqs={stack.faqs}/>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <SidebarFrontEnd lang={lang} frontEnd={frontEnd}/>
                            <SidebarFullStack lang={lang} fullStack={fullStack}/>
                            <SidebarDevOps lang={lang} devOps={devOps}/>
                        </div>
                    </div>
                </div>
            </div>
            <DefaultShape/>
        </>
    );
}
