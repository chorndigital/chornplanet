import React from "react";
import SmartMobilityClarificationStatement from "../Common/SmartMobilityClarificationStatement";
import {ISmartSection, IVertiport} from "@/lib/model/ISmartMobility";

export default function VertiportDesignBottom(
    {lang, vertiportDesign, safeStatement}: {
        lang: string;
        vertiportDesign: IVertiport;
        safeStatement?: ISmartSection['safeStatement'];
    }
) {
    return (
        <div className={`portfolio-details-desc portfolio-details-desc-custom`}>
            <div className={'unique-features-container'}>
                <h3>{vertiportDesign.title}</h3>
            </div>

            <p>{vertiportDesign.description}</p>
            <h3>{vertiportDesign.structureTitle}</h3>

            <ul className="feature-list">
                {vertiportDesign.structure.map((structure, index: number) => (
                    <li key={index} className="feature-item">
                        <div className="feature-icon-container">
                            <div className="feature-icon">
                                <i className="flaticon-check"></i>
                            </div>
                            <div className="feature-title">
                                {structure.title}
                            </div>
                        </div>
                        <div className="feature-content">
                            {structure.items.map((item, index: number) => (
                                <p className="feature-description-vertiport" key={index}>
                                    {item.title}
                                </p>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>

            <SmartMobilityClarificationStatement lang={lang} safeStatement={safeStatement}/>
        </div>
    )
}
