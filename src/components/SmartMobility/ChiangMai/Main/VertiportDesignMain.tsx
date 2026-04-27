import React from "react";
import Image from "next/image";
import {SmartMobility} from "@/data/smart-mobility/SmartMobility";
import VertiportDesignBottom from "../Bottom/VertiportDesignBottom";
import SmartMobilityChiangMaiRight from "../Common/SmartMobilityChiangMaiRight";
import {SmartVisibilityIndex} from "@/data/smart-mobility/SmartVisibilityIndex"
import SmartCityBottomImage from "@/components/SmartCity/ChiangMai/SmartCityBottomImage";
import {SmartMobilityChiangMaiContentPayload} from "@/lib/model/smart-mobility-chiang-mai";
import {IVertiport} from "@/data/smart-mobility/model/ISmartMobility";

export default function VertiportDesignMain(
    {lang, content}: { lang: string; content?: SmartMobilityChiangMaiContentPayload }
) {
    const vertiportDesign = (content?.primaryContent as IVertiport | undefined) ?? SmartMobility[lang].chiangMai.vertiportDesign

    return (
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

                        <VertiportDesignBottom
                            lang={lang}
                            vertiportDesign={vertiportDesign}
                            safeStatement={content?.safeStatement}
                        />
                        <SmartCityBottomImage lang={lang} bottomCards={content?.bottomCards}/>
                    </div>
                    <SmartMobilityChiangMaiRight
                        lang={lang}
                        currentIdx={SmartVisibilityIndex.VertiportDesign}
                        imageQty={4}
                        rightItems={content?.rightItems}
                    />
                </div>
            </div>
        </div>
    );
}
