import React from "react";
import Image from "next/image";
import {SmartMobility} from "@/data/smart-mobility/SmartMobility";
import UrbanHubSansaiDoiSaketBottom from "../Bottom/UrbanHubSansaiDoiSaketBottom";
import SmartMobilityChiangMaiRight from "../Common/SmartMobilityChiangMaiRight";
import {SmartVisibilityIndex} from "@/data/smart-mobility/SmartVisibilityIndex"
import SmartCityBottomImage from "@/components/SmartCity/ChiangMai/SmartCityBottomImage";
import {SmartMobilityChiangMaiContentPayload} from "@/lib/model/smart-mobility-chiang-mai";
import {ISmartSection} from "@/data/smart-mobility/model/ISmartMobility";

export default function UrbanHubSansaiDoiSaketMain(
    {lang, content}: { lang: string; content?: SmartMobilityChiangMaiContentPayload }
) {
    const urbanHub = (content?.primaryContent as ISmartSection | undefined) ?? SmartMobility[lang].chiangMai.urbanHub

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

                        <UrbanHubSansaiDoiSaketBottom
                            lang={lang}
                            urbanHub={urbanHub}
                            safeStatement={content?.safeStatement}
                        />
                        <SmartCityBottomImage lang={lang} bottomCards={content?.bottomCards}/>
                    </div>
                    <SmartMobilityChiangMaiRight
                        lang={lang}
                        currentIdx={SmartVisibilityIndex.UrbanHub}
                        imageQty={4}
                        rightItems={content?.rightItems}
                    />
                </div>
            </div>
        </div>
    );
}
