import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {IFrontEnd} from "@/data/frontend/model/IFrontEnd";
import {IFullStack} from "@/data/fullstack/model/IFullStack";

export default function WebDevelopmentLeft(
    {lang, frontEnd, fullStack}: { lang: string, frontEnd?: IFrontEnd, fullStack?: IFullStack }
) {
    const frontEndContent = frontEnd ?? InfoTranslation[lang].FrontEnd;
    const fullStackContent = fullStack ?? InfoTranslation[lang].FullStack;

    return (
        <div className={'col-lg-6 add-web-content'}>
            {frontEndContent.services.descriptions.map((item, index) => (
                <p key={index}>{item}</p>
            ))}

            <ul className="feature-list">
                {fullStackContent.services.items.slice(0, 1).map((item, index) => (
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

            {fullStackContent.services.descriptions.map((item, index) => (
                <p key={index}>{item}</p>
            ))}

            <ul className="feature-list">
                {frontEndContent.services.items.slice(0, 1).map((item, index) => (
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
    )
}
