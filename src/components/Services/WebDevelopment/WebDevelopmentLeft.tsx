import React from "react";
import {IFrontEnd} from "@/lib/model/IFrontEnd";
import {IFullStack} from "@/lib/model/IFullStack";

export default function WebDevelopmentLeft(
    {lang, frontEnd, fullStack}: { lang: string, frontEnd: IFrontEnd, fullStack: IFullStack }
) {
    const frontEndContent = frontEnd;
    const fullStackContent = fullStack;

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
