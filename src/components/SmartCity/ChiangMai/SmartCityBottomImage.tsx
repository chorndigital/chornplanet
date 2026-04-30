import React from "react";
import Link from "next/link"
import {ISmartCityItem} from "@/lib/model/ISmartCity";
import {ISmartRoute, ISmartSection} from "@/lib/model/ISmartMobility";

type BottomCard = ISmartCityItem | ISmartSection | ISmartRoute;

export default function SmartCityBottomImage(
    {lang, bottomCards}: { lang: string; bottomCards: Array<ISmartSection | ISmartRoute> }
) {
    return (
        <div className="vision-bottom-container">
            {bottomCards.slice(0, 2).map((smartCityItem, i) => (
                <Link key={`${smartCityItem.title}-${i}`}
                      href={"/" + lang + smartCityItem.link}
                      className="vision-card">
                    <div className="vision-image-wrapper">
                        <img
                            src={smartCityItem.media && smartCityItem.media.image_url}
                            alt={smartCityItem.title}
                            className="vision-image"
                        />
                    </div>

                    <div className="vision-text-box">
                        <p>
                            <strong>{smartCityItem.title}</strong>
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
