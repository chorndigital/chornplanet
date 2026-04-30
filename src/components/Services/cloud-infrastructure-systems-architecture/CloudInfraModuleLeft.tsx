import React from "react";
import {ICloudSolution} from "@/lib/model/ICloudSolution";

const CloudInfraModuleLeft: React.FC<{ lang: string, cloudSolution: ICloudSolution }> = ({lang, cloudSolution}) => {
    const content = cloudSolution;

    return (
        <div className={'cloud-infra-left add-web-content'}>
            {content.descriptions.map((item, index) => (
                <p key={index}>{item.description}</p>
            ))}

            <ul className="feature-list">
                {content.sections.map((item, index) => (
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

export default CloudInfraModuleLeft
