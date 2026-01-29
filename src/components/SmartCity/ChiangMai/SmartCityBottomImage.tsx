import React from "react";
import Link from "next/link"
import {ISmartCityItem} from "@/data/smart-city/model/ISmartCity";
import {SmartCity} from "@/data/smart-city/SmartCity";

export default function SmartCityBottomImage({lang}: { lang: string }) {
    const items: ISmartCityItem[] = SmartCity[lang]?.chiangMai ?? [];

    return (
        <div className="vision-bottom-container">
            {items.slice(0, 2).map((smartCityItem, i) => (
                <Link key={smartCityItem.sceneNumber}
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