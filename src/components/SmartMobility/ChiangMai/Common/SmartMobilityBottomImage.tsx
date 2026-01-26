import Image from "next/image";
import React from "react";
import {SmartMobility} from "@/data/smart-mobility/SmartMobility";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import Link from "next/link"

export default function SmartMobilityBottomImage({lang}: { lang: string }) {
    const vision = SmartMobility[lang].chiangMai.vision
    const urbanHub = SmartMobility[lang].chiangMai.urbanHub
    const route1 = SmartMobility[lang].chiangMai.connectivityMatrix.routes[0]

    return (
        <div className="vision-bottom-container">
            <Link href={"/" + lang + urbanHub.link} className="vision-card">
                <div className="vision-image-wrapper">
                    <img
                        src={urbanHub.media && urbanHub.media.image_url}
                        alt={urbanHub.title}
                        className="vision-image"
                    />
                </div>

                <div className="vision-text-box">
                    <p>
                        <strong>{urbanHub.title}</strong>
                    </p>
                </div>
            </Link>

            <Link href={"/" + lang + route1.link} className="vision-card">
                <div className="vision-image-wrapper">
                    <img
                        src={route1.media && route1.media.image_url}
                        alt={route1.title}
                        className="vision-image"
                    />
                </div>

                <div className="vision-text-box">
                    <p>
                        <strong>{route1.title}</strong>
                    </p>
                </div>
            </Link>
        </div>
    )
}