import React from "react";
import Link from "next/link";
import Image from "next/image";
import {SmartMobility} from "@/data/smart-mobility/SmartMobility";
import {SmartVisibilityIndex} from "@/data/smart-mobility/SmartVisibilityIndex"
import {ISmartImage} from "@/data/smart-mobility/model/ISmartMobility";

export default function SmartMobilityChiangMaiRight(
    {lang, currentIdx, imageQty = 3, rightItems}: {
        lang: string,
        currentIdx: number,
        imageQty: number,
        rightItems?: ISmartImage[]
    }
) {
    const vision = SmartMobility[lang].chiangMai.vision
    const urbanHub = SmartMobility[lang].chiangMai.urbanHub
    const connectivityMatrix = SmartMobility[lang].chiangMai.connectivityMatrix
    const vertiportDesign = SmartMobility[lang].chiangMai.vertiportDesign
    const images: ISmartImage[] = [
        {
            title: vision.title,
            link: vision.link,
            media: vision.media
        },
        {
            title: urbanHub.title,
            link: urbanHub.link,
            media: urbanHub.media
        },
        {
            title: connectivityMatrix.routes[0].title,
            link: connectivityMatrix.routes[0].link,
            media: connectivityMatrix.routes[0].media
        },
        {
            title: connectivityMatrix.routes[1].title,
            link: connectivityMatrix.routes[1].link,
            media: connectivityMatrix.routes[1].media
        },
        {
            title: connectivityMatrix.routes[2].title,
            link: connectivityMatrix.routes[2].link,
            media: connectivityMatrix.routes[2].media
        },
        {
            title: vertiportDesign.title,
            link: vertiportDesign.link,
            media: vertiportDesign.media
        },
    ]

    // circular (rotating) selection
    const filteredArray: ISmartImage[] = rightItems ?? Array.from(
        {length: imageQty}, (_, i) => {
            return images[(currentIdx + 1 + i) % images.length];
        }
    )

    return (
        <div className="col-lg-4 col-md-12">
            <div className="smart-right-container">
                <ul className="smart-right-list">
                    {
                        filteredArray.map((item: ISmartImage, index) =>
                            <Link key={index} href={'/' + lang + item.link}>
                                <li className="smart-right-item">
                                    <div className="smart-right-image-wrapper">
                                        {
                                            item.media?.image_url &&
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
