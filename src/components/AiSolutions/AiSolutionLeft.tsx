import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {IService} from "@/data/service/model/IService";

export default function AiSolutionLeft({lang, service}: { lang: string; service?: IService }) {
    const content = service ?? InfoTranslation[lang].Service;

    return (
        <div className={'col-lg-6 add-web-content'}>
            <p
                className={"mb-4"}
                dangerouslySetInnerHTML={
                    {__html: content.description} as { __html: string }
                }
            />

            <div className={"add-web-content"}>
                <ul className="feature-list">
                    {content.services.map((item, index) => (
                        <li key={index} className="feature-item">
                            <div className="feature-icon-container">
                                <div className="feature-icon">
                                    <i className="flaticon-check"></i>
                                </div>
                                <div className="feature-title">
                                    {item.title}
                                </div>
                            </div>
                            <div className="feature-content">
                                <p className="feature-description">
                                    {item.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
