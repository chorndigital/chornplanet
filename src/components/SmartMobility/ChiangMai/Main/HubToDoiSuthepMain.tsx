import React from "react";
import Image from "next/image";
import HubToDoiSuthepBottom from "../Bottom/HubToDoiSuthepBottom";
import SmartMobilityChiangMaiRight from "../Common/SmartMobilityChiangMaiRight";
import SmartCityBottomImage from "@/components/SmartCity/ChiangMai/SmartCityBottomImage";
import {SmartMobilityChiangMaiContentPayload} from "@/lib/model/ISmartMobilityChiangMai";
import {ISmartRoute} from "@/lib/model/ISmartMobility";

export default function HubToDoiSuthepMain(
    {lang, content}: { lang: string; content: SmartMobilityChiangMaiContentPayload }
) {
    const connectivityMatrix = content.connectivityMatrix!
    const route = content.primaryContent as ISmartRoute

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
                            safeStatement={content.safeStatement}
                        />
                        <SmartCityBottomImage lang={lang} bottomCards={content.bottomCards}/>
                    </div>
                    <SmartMobilityChiangMaiRight
                        lang={lang}
                        rightItems={content.rightItems}
                    />
                </div>
            </div>
        </div>
    );
}
