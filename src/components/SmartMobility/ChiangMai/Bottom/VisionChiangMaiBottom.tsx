import Image from "next/image";
import React from "react";
import {SmartMobility} from "@/data/smart-mobility/SmartMobility";
import SmartMobilityBottomImage from "../Common/SmartMobilityBottomImage";
import SmartMobilityClarificationStatement from "../Common/SmartMobilityClarificationStatement";
import {Contact2025} from "@/data/contact/Contact2025";
import {ISmartSection} from "@/data/smart-mobility/model/ISmartMobility";

export default function VisionChiangMaiBottom({lang}: { lang: string }) {
    const vision = SmartMobility[lang].chiangMai.vision
    const urbanHub = SmartMobility[lang].chiangMai.urbanHub
    const route1 = SmartMobility[lang].chiangMai.connectivityMatrix.routes[0]
    const contact = Contact2025

    return (
        <>
            <div className={`portfolio-details-desc portfolio-details-desc-custom`}>
                <div className={'unique-features-container'}>
                    <h3>{vision.title}</h3>

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
                <p>{vision.description}</p>

                {/*<SmartMobilityBottomImage lang={lang}/>*/}
                <SmartMobilityClarificationStatement lang={lang}/>
            </div>
        </>
    )
}