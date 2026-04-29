import React from "react";
import Link from "next/link";
import Image from "next/image";

import {SmartCity} from "@/data/smart-city/SmartCity";
import {ISmartCityItem} from "@/data/smart-city/model/ISmartCity";

export default function SmartCityRight(
    {
        lang,
        imageQty = 4,
        selectedSmartCityItem,
        relatedItems
    }:
    {
        lang: string,
        imageQty: number,
        selectedSmartCityItem: ISmartCityItem,
        relatedItems?: ISmartCityItem[]
    }
) {
    const items: ISmartCityItem[] = relatedItems ?? SmartCity[lang]?.chiangMai ?? [];

    if (items.length === 0) {
        return null;
    }

    const currentIndex = items.findIndex(
        item => item.link === selectedSmartCityItem.link
    )

    const startIndex = currentIndex >= 0 ? currentIndex : 0;

    const filteredArray: ISmartCityItem[] = relatedItems
        ? items.slice(0, imageQty)
        : Array.from(
            {length: Math.min(imageQty, items.length)},
            (_, i) => items[(startIndex + 1 + i) % items.length]
        )

    return (
        <div className="col-lg-4 col-md-12">
            <div className="smart-right-container">
                <ul className="smart-right-list">
                    {
                        filteredArray.map((item: ISmartCityItem, index) =>
                            <Link key={index} href={'/' + lang + item.link}>
                                <li className="smart-right-item">
                                    <div className="smart-right-image-wrapper">
                                        {
                                            <Image
                                                src={item.media.image_url}
                                                alt={item.title}
                                                width={650}
                                                height={500}
                                            />
                                        }

                                        <div className="smart-right-caption">
                                            <strong>
                                                {
                                                    item.title.length > 35 ?
                                                        item.title.slice(0, 35) + "..." : item.title
                                                }</strong>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}
