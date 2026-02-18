import React from "react";
import {SmartMobility} from "@/data/smart-mobility/SmartMobility";
import SmartMobilityClarificationStatement from "../Common/SmartMobilityClarificationStatement";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function VisionChiangMaiBottom({lang}: { lang: string }) {
    const vision = SmartMobility[lang].chiangMai.vision
    const urbanHub = SmartMobility[lang].chiangMai.urbanHub
    const route1 = SmartMobility[lang].chiangMai.connectivityMatrix.routes[0]
    const contact = InfoTranslation[lang].Contact

    return (
        <>
            <div className={`portfolio-details-desc portfolio-details-desc-custom`}>
                <div className={'unique-features-container'}>
                    <h3>{vision.title}</h3>
                </div>
                <p>{vision.description}</p>

                {/*<SmartMobilityBottomImage lang={lang}/>*/}
                <SmartMobilityClarificationStatement lang={lang}/>
            </div>
        </>
    )
}