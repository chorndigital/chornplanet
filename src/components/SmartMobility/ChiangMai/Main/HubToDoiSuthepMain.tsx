import React from "react";
import Image from "next/image";
import {SmartMobility} from "@/data/smart-mobility/SmartMobility";
import HubToDoiSuthepBottom from "../Bottom/HubToDoiSuthepBottom";
import SmartMobilityChiangMaiRight from "../Common/SmartMobilityChiangMaiRight";
import {SmartVisibilityIndex} from "@/data/smart-mobility/SmartVisibilityIndex"
import SmartCityBottomImage from "@/components/SmartCity/ChiangMai/SmartCityBottomImage";
import {SmartMobilityChiangMaiContentPayload} from "@/lib/model/smart-mobility-chiang-mai";
import {ISmartRoute} from "@/data/smart-mobility/model/ISmartMobility";

export default function HubToDoiSuthepMain(
    {lang, content}: { lang: string; content?: SmartMobilityChiangMaiContentPayload }
) {
    const fallbackConnectivityMatrix = SmartMobility[lang].chiangMai.connectivityMatrix
    const connectivityMatrix = content?.connectivityMatrix ?? fallbackConnectivityMatrix
    const route = (content?.primaryContent as ISmartRoute | undefined) ?? fallbackConnectivityMatrix.routes[1]

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

                        <HubToDoiSuthepBottom
                            lang={lang}
                            route={route}
                            connectivityMatrix={connectivityMatrix}
                            safeStatement={content?.safeStatement}
                        />
                        <SmartCityBottomImage lang={lang} bottomCards={content?.bottomCards}/>
                    </div>
                    <SmartMobilityChiangMaiRight
                        lang={lang}
                        currentIdx={SmartVisibilityIndex.HubToDoiSuthep}
                        imageQty={4}
                        rightItems={content?.rightItems}
                    />
                </div>
            </div>
        </div>
    );
}
