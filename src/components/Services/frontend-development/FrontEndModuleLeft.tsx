import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {IFrontEnd} from "@/data/frontend/model/IFrontEnd";

const FrontEndModuleLeft: React.FC<{ lang: string, frontEnd?: IFrontEnd }> = ({lang, frontEnd}) => {
    const content = frontEnd ?? InfoTranslation[lang].FrontEnd;

    return (
        <div className={'col-lg-6 add-web-content'}>
            {content.services.descriptions.map((item, index) => (
                <p key={index}>{item}</p>
            ))}

            <ul className="feature-list">
                {content.services.items.map((item, index) => (
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

export default FrontEndModuleLeft
