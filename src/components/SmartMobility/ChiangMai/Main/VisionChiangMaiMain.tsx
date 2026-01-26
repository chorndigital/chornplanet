import React from "react";
import Image from "next/image";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import {SmartMobility} from "@/data/smart-mobility/SmartMobility";
import VisionChiangMaiBottom from "../Bottom/VisionChiangMaiBottom";
import SmartMobilityChiangMaiRight from "../Common/SmartMobilityChiangMaiRight";
import {SmartVisibilityIndex} from "@/data/smart-mobility/SmartVisibilityIndex"

export default function VisionChiangMaiMain({lang}: { lang: string }) {
    const vision = SmartMobility[lang].chiangMai.vision

    return (
        <div className="portfolio-details-area smart-container-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="portfolio-details-image neo-image-container">
                            {
                                vision.media?.image_url &&
                                <Image
                                    src={vision.media.image_url}
                                    alt="portfolio"
                                    width={1000}
                                    height={600}
                                />
                            }
                        </div>

                        <div className={"neo-tag"}>
                            {
                                vision.media?.image_tags &&
                                vision.media.image_tags.join(",")
                            }
                        </div>

                        <VisionChiangMaiBottom lang={lang}/>
                    </div>
                    <SmartMobilityChiangMaiRight
                        lang={lang}
                        currentIdx={SmartVisibilityIndex.Vision}
                        imageQty={3}
                    />
                </div>
            </div>
        </div>
    );
}