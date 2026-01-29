import Image from "next/image";
import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import SmartMobilityClarificationStatement
    from "@/components/SmartMobility/ChiangMai/Common/SmartMobilityClarificationStatement";
import SmartMobilityBottomImage from "../../SmartMobility/ChiangMai/Common/SmartMobilityBottomImage";
import {ISmartCityItem} from "@/data/smart-city/model/ISmartCity";

export default function SmartCityBottom(
    {lang, smartCityItem}: { lang: string, smartCityItem: ISmartCityItem }
) {
    const contact = InfoTranslation[lang].Contact

    return (
        <>
            <div className={`portfolio-details-desc portfolio-details-desc-custom`}>
                <div className={'unique-features-container'}>
                    <h3>{smartCityItem.title}</h3>

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
                <p>{smartCityItem.description}</p>

                <ul className="feature-list">
                    {smartCityItem.features.map((feature, index: number) => (
                        <li key={index} className="feature-item">
                            <div className="feature-icon-container">
                                <div className="feature-icon">
                                    <i className="flaticon-check"></i>
                                </div>
                                <div className="feature-title">
                                    {feature.title}
                                </div>
                            </div>
                            <div className="feature-content">
                                {feature.description}
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="smart-city-clarification-statement">
                    <SmartMobilityClarificationStatement lang={lang}/>
                </div>

                <SmartMobilityBottomImage lang={lang}/>
            </div>
        </>
    )
}