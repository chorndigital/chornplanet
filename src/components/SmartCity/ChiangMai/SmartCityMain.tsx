import React from "react";
import Image from "next/image";
import SmartCityRight from "./SmartCityRight";
import SmartCityBottom from "./SmartCityBottom";
import {ISmartCityItem} from "@/lib/model/ISmartCity";
import {SmartCityChiangMaiBottomContent} from "@/lib/model/ISmartCityChiangMai";

export default function SmartCityMain(
    {lang, smartCityItem, relatedItems, bottomContent}: {
        lang: string,
        smartCityItem: ISmartCityItem,
        relatedItems?: ISmartCityItem[],
        bottomContent?: SmartCityChiangMaiBottomContent
    }
) {

    return (
        <div className="portfolio-details-area smart-container-top">
            <div className="row">
                <div className="col-lg-8">
                    <div className="portfolio-details-image neo-image-container">
                        {
                            <Image
                                src={smartCityItem.media.image_url}
                                alt="portfolio"
                                width={1000}
                                height={600}
                            />
                        }
                    </div>

                    <div className={"neo-tag"}>
                        {
                            smartCityItem.media.image_tags.join(",")
                        }
                    </div>

                    <SmartCityBottom
                        lang={lang}
                        smartCityItem={smartCityItem}
                        bottomContent={bottomContent}
                    />
                </div>
                <SmartCityRight
                    lang={lang}
                    imageQty={4}
                    selectedSmartCityItem={smartCityItem}
                    relatedItems={relatedItems}
                />
            </div>
        </div>
    );
}
