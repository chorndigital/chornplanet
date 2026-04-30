import React from "react";
import HomeFeatureTop from "@/components/Features/HomeFeatureTop";
import HomeFeatureLeft from "@/components/Features/HomeFeatureLeft";
import HomeFeatureRight from "@/components/Features/HomeFeatureRight";
import {IFeature} from "@/lib/model/IFeature";
import {IImageUnit} from "@/image/model/IImageUnit";

export default function HomeFeatureMain(
    {lang, feature, featureImage, isTopSpace = false, isHideTopTitle = false}:
    { lang: string, feature: IFeature, featureImage?: IImageUnit, isTopSpace?: boolean, isHideTopTitle?: boolean }) {

    const classes = isTopSpace ? "features-area pt-100 pb-70" : "features-area pb-70"

    return (
        <>
            <div className={`${classes}`}>
                <div className="container">
                    {!isHideTopTitle && <HomeFeatureTop lang={lang} feature={feature}/>}
                    <div className="row align-items-center">
                        <HomeFeatureLeft lang={lang} featureImage={featureImage}/>
                        <HomeFeatureRight lang={lang} feature={feature}/>
                    </div>
                </div>
            </div>
        </>
    );
}
