import React from "react";
import {SmartMobility} from "@/data/smart-mobility/SmartMobility";
import Link from "next/link"
import {ISmartRoute, ISmartSection} from "@/data/smart-mobility/model/ISmartMobility";

export default function SmartMobilityBottomImage(
    {lang, bottomCards}: { lang: string; bottomCards?: Array<ISmartSection | ISmartRoute> }
) {
    const urbanHub = SmartMobility[lang].chiangMai.urbanHub
    const route1 = SmartMobility[lang].chiangMai.connectivityMatrix.routes[0]
    const cards = bottomCards ?? [urbanHub, route1];

    return (
        <div className="vision-bottom-container">
            {cards.map((card, index) => (
                <Link key={index} href={"/" + lang + card.link} className="vision-card">
                    <div className="vision-image-wrapper">
                        <img
                            src={card.media && card.media.image_url}
                            alt={card.title}
                            className="vision-image"
                        />
                    </div>

                    <div className="vision-text-box">
                        <p>
                            <strong>{card.title}</strong>
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
