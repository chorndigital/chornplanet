import React from "react";
import Image from "next/image";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import {SmartMobility} from "@/data/smart-mobility/SmartMobility";
import HubToChiangMaiAirportBottom from "../Bottom/HubToChiangMaiAirportBottom";
import SmartMobilityChiangMaiRight from "../Common/SmartMobilityChiangMaiRight";
import {SmartVisibilityIndex} from "@/data/smart-mobility/SmartVisibilityIndex"

export default function HubToChiangMaiAirportMain({lang}: { lang: string }) {
    const connectivityMatrix = SmartMobility[lang].chiangMai.connectivityMatrix
    const route = connectivityMatrix.routes[0]

    return (
        <div className="portfolio-details-area smart-container-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="portfolio-details-image neo-image-container">
                            {
                                route.media?.image_url &&
                                <Image
                                    src={route.media.image_url}
                                    alt="portfolio"
                                    width={1000}
                                    height={600}
                                />
                            }
                        </div>

                        <div className={"neo-tag"}>
                            {
                                route.media?.image_tags &&
                                route.media.image_tags.join(",")
                            }
                        </div>

                        <HubToChiangMaiAirportBottom lang={lang}/>
                    </div>
                    <SmartMobilityChiangMaiRight
                        lang={lang}
                        currentIdx={SmartVisibilityIndex.HubToChiangMaiAirport}
                        imageQty={4}
                    />
                </div>
            </div>
        </div>
    );
}