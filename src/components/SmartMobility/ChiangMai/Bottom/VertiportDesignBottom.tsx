import Image from "next/image";
import React from "react";
import {SmartMobility} from "@/data/smart-mobility/SmartMobility";
import SmartMobilityClarificationStatement from "../Common/SmartMobilityClarificationStatement";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {ISmartSection} from "@/data/smart-mobility/model/ISmartMobility";

export default function VertiportDesignBottom({lang}: { lang: string }) {
    const vertiportDesign = SmartMobility[lang].chiangMai.vertiportDesign
    const contact = InfoTranslation[lang].Contact

    return (
        <div className={`portfolio-details-desc portfolio-details-desc-custom`}>
            <div className={'unique-features-container'}>
                <h3>{vertiportDesign.title}</h3>

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

            <SmartMobilityClarificationStatement lang={lang}/>
        </div>
    )
}