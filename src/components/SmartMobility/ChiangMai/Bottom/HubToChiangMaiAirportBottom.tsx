import React from "react";
import {SmartMobility} from "@/data/smart-mobility/SmartMobility";
import SmartMobilityClarificationStatement from "../Common/SmartMobilityClarificationStatement";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {ISmartRoute, ISmartSection} from "@/data/smart-mobility/model/ISmartMobility";

export default function HubToChiangMaiAirportBottom(
    {lang, route: injectedRoute, connectivityMatrix: injectedConnectivityMatrix, safeStatement}: {
        lang: string;
        route?: ISmartRoute;
        connectivityMatrix?: { title: string; description: string };
        safeStatement?: ISmartSection['safeStatement'];
    }
) {
    const fallbackConnectivityMatrix = SmartMobility[lang].chiangMai.connectivityMatrix
    const connectivityMatrix = injectedConnectivityMatrix ?? fallbackConnectivityMatrix
    const route = injectedRoute ?? fallbackConnectivityMatrix.routes[0]
    const contact = InfoTranslation[lang].Contact

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
