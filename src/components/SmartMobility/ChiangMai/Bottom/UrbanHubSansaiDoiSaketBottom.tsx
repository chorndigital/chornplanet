import Image from "next/image";
import React from "react";
import {SmartMobility} from "@/data/smart-mobility/SmartMobility";
import SmartMobilityClarificationStatement from "../Common/SmartMobilityClarificationStatement";
import {Contact2025} from "@/data/contact/Contact2025";

export default function UrbanHubSansaiDoiSaketBottom({lang}: { lang: string }) {
    const urbanHub = SmartMobility[lang].chiangMai.urbanHub
    const contact = Contact2025

    return (
        <>
            <div className={`portfolio-details-desc portfolio-details-desc-custom`}>
                <div className={'unique-features-container'}>
                    <h3>{urbanHub.title}</h3>

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

                <p>{urbanHub.description}</p>

                <ul className="feature-list">
                    {
                        urbanHub.items &&
                        urbanHub.items.map((item, index: number) => (
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
                                    {item.contents && item.contents.map((item, index: number) => (
                                        <li key={index} className="feature-item">
                                            {item.title} - {item.description}
                                        </li>
                                    ))}
                                </div>
                            </li>
                        ))
                    }
                </ul>

                <SmartMobilityClarificationStatement lang={lang}/>
            </div>
        </>
    )
}