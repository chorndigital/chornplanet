import React from "react";
import Link from "next/link"
import {ISmartRoute, ISmartSection} from "@/lib/model/ISmartMobility";

export default function SmartMobilityBottomImage(
    {lang, bottomCards}: { lang: string; bottomCards: Array<ISmartSection | ISmartRoute> }
) {
    return (
        <div className="vision-bottom-container">
            {bottomCards.map((card, index) => (
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
