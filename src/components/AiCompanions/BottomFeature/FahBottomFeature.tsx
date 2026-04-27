import Image from "next/image";
import React from "react";
import {IAiLanding} from "@/data/ai/model/IAiLanding";

export default function FahBottomFeature({fah}: { fah: IAiLanding }) {
    return (
        <>
            {fah.features.map((feature, index: number) => (
                <div key={index} className={`portfolio-details-desc portfolio-details-desc-custom`}>
                    <div className={'unique-features-container'}>
                        <h3>{feature.title}</h3>

                        {index == 0 &&
                            <a href={fah.line.link}
                               target={'_blank'}>
                                <Image
                                    src={fah.line.button}
                                    alt="เพิ่มเพื่อน"
                                    width={120}
                                    height={36}
                                    style={{width: 120, height: 'auto'}}
                                />
                            </a>
                        }
                    </div>

                    <p>{feature.description}</p>

                    <ul className="feature-list">
                        {feature.items.length > 1 && feature.items.map((item, index: number) => (
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
                                    <p className="feature-description">
                                        {item.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}
