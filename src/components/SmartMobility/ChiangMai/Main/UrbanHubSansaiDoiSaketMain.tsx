import React from "react";
import Image from "next/image";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import {SmartMobility} from "@/data/smart-mobility/SmartMobility";
import UrbanHubSansaiDoiSaketBottom from "../Bottom/UrbanHubSansaiDoiSaketBottom";
import SmartMobilityChiangMaiRight from "../Common/SmartMobilityChiangMaiRight";
import {SmartVisibilityIndex} from "@/data/smart-mobility/SmartVisibilityIndex"

export default function UrbanHubSansaiDoiSaketMain({lang}: { lang: string }) {
    const urbanHub = SmartMobility[lang].chiangMai.urbanHub

    return (
        <div className="portfolio-details-area smart-container-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="portfolio-details-image neo-image-container">
                            {
                                urbanHub.media?.image_url &&
                                <Image
                                    src={urbanHub.media.image_url}
                                    alt="portfolio"
                                    width={1000}
                                    height={600}
                                />
                            }
                        </div>

                        <div className={"neo-tag"}>
                            {
                                urbanHub.media?.image_tags &&
                                urbanHub.media.image_tags.join(",")
                            }
                        </div>

                        <UrbanHubSansaiDoiSaketBottom lang={lang}/>
                    </div>
                    <SmartMobilityChiangMaiRight
                        lang={lang}
                        currentIdx={SmartVisibilityIndex.UrbanHub}
                        imageQty={4}
                    />
                </div>
            </div>
        </div>
    );
}