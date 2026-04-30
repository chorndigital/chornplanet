import React from "react";
import {IService} from "@/lib/model/IService";

export default function AiSolutionLeft({service}: { service: IService }) {
    const content = service;

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
