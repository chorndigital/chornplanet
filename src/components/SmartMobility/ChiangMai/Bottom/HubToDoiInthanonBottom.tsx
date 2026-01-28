import Image from "next/image";
import React from "react";
import {SmartMobility} from "@/data/smart-mobility/SmartMobility";
import SmartMobilityClarificationStatement from "../Common/SmartMobilityClarificationStatement";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {ISmartSection} from "@/data/smart-mobility/model/ISmartMobility";

export default function HubToDoiInthanonBottom({lang}: { lang: string }) {
    const connectivityMatrix = SmartMobility[lang].chiangMai.connectivityMatrix
    const route = connectivityMatrix.routes[2]
    const contact = InfoTranslation[lang].Contact

    return (
        <div className={`portfolio-details-desc portfolio-details-desc-custom`}>
            <div className={'unique-features-container'}>
                <h3>{SmartMobility[lang].chiangMai.vision.title}</h3>

                <a href={contact.line.link}
                   target={'_blank'}>
                    <Image
                        src={contact.line.button}
                        alt="เพิ่มเพื่อน"
                        width={120}
                        height={36}
                    />
                </a>
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

            <SmartMobilityClarificationStatement lang={lang}/>
        </div>
    )
}