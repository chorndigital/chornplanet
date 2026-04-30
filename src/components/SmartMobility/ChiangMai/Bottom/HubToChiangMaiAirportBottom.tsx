import React from "react";
import SmartMobilityClarificationStatement from "../Common/SmartMobilityClarificationStatement";
import {ISmartRoute, ISmartSection} from "@/lib/model/ISmartMobility";

export default function HubToChiangMaiAirportBottom(
    {lang, route, connectivityMatrix, safeStatement}: {
        lang: string;
        route: ISmartRoute;
        connectivityMatrix: { title: string; description: string };
        safeStatement?: ISmartSection['safeStatement'];
    }
) {
    return (
        <div className={`portfolio-details-desc portfolio-details-desc-custom`}>
            <div className={'unique-features-container'}>
                <h3>{connectivityMatrix.title}</h3>
            </div>

            <p>{connectivityMatrix.description}</p>

            <h3>{route.title}</h3>
            <p>{route.transportationModel.title}</p>
            <p>{route.transportationModel.description}</p>
            <ul className="feature-list">
                {
                    route.transportationModel.sections &&
                    route.transportationModel.sections.map((item: ISmartSection, index: number) => (
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
                                {item.description}
                            </div>
                        </li>
                    ))
                }
            </ul>

            <SmartMobilityClarificationStatement lang={lang} safeStatement={safeStatement}/>
        </div>
    )
}
