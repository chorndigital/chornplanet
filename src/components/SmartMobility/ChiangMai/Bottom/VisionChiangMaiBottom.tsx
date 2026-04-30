import React from "react";
import SmartMobilityClarificationStatement from "../Common/SmartMobilityClarificationStatement";
import {ISmartSection} from "@/lib/model/ISmartMobility";

export default function VisionChiangMaiBottom(
    {lang, vision, safeStatement}: {
        lang: string;
        vision: ISmartSection;
        safeStatement?: ISmartSection['safeStatement'];
    }
) {
    return (
        <>
            <div className={`portfolio-details-desc portfolio-details-desc-custom`}>
                <div className={'unique-features-container'}>
                    <h3>{vision.title}</h3>
                </div>
                <p>{vision.description}</p>

                {/*<SmartMobilityBottomImage lang={lang}/>*/}
                <SmartMobilityClarificationStatement lang={lang} safeStatement={safeStatement}/>
            </div>
        </>
    )
}
