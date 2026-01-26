import React from "react";
import Image from "next/image";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import {SmartMobility} from "@/data/smart-mobility/SmartMobility";
import VertiportDesignBottom from "../Bottom/VertiportDesignBottom";
import SmartMobilityChiangMaiRight from "../Common/SmartMobilityChiangMaiRight";
import {SmartVisibilityIndex} from "@/data/smart-mobility/SmartVisibilityIndex"

export default function VertiportDesignMain({lang}: { lang: string }) {
    const vertiportDesign = SmartMobility[lang].chiangMai.vertiportDesign

    return (
        <>
            <div className="portfolio-details-area smart-container-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="portfolio-details-image neo-image-container">
                                {
                                    vertiportDesign.media?.image_url &&
                                    <Image
                                        src={vertiportDesign.media.image_url}
                                        alt="portfolio"
                                        width={1000}
                                        height={600}
                                    />
                                }
                            </div>

                            <div className={"neo-tag"}>
                                {
                                    vertiportDesign.media?.image_tags &&
                                    vertiportDesign.media.image_tags.join(",")
                                }
                            </div>

                            <VertiportDesignBottom lang={lang}/>
                        </div>
                        <SmartMobilityChiangMaiRight
                            lang={lang}
                            currentIdx={SmartVisibilityIndex.VertiportDesign}
                            imageQty={4}
                        />
                    </div>
                </div>
            </div>
            <DefaultShape/>
        </>
    );
}