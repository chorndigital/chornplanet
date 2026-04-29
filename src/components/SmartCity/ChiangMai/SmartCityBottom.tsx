import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import SmartMobilityClarificationStatement
    from "@/components/SmartMobility/ChiangMai/Common/SmartMobilityClarificationStatement";
import SmartMobilityBottomImage from "../../SmartMobility/ChiangMai/Common/SmartMobilityBottomImage";
import {ISmartCityItem} from "@/data/smart-city/model/ISmartCity";
import {SmartCityChiangMaiBottomContent} from "@/lib/model/smart-city-chiang-mai";

export default function SmartCityBottom(
    {lang, smartCityItem, bottomContent}: {
        lang: string,
        smartCityItem: ISmartCityItem,
        bottomContent?: SmartCityChiangMaiBottomContent
    }
) {
    const contact = InfoTranslation[lang].Contact

    return (
        <>
            <div className={`portfolio-details-desc portfolio-details-desc-custom`}>
                <div className={'unique-features-container'}>
                    <h3>{smartCityItem.title}</h3>
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
                    <SmartMobilityClarificationStatement
                        lang={lang}
                        safeStatement={bottomContent?.safeStatement}
                    />
                </div>

                <SmartMobilityBottomImage
                    lang={lang}
                    bottomCards={bottomContent?.bottomCards}
                />
            </div>
        </>
    )
}
