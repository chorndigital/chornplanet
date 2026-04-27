import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import React from "react";
import {IFeature} from "@/data/feature/model/IFeature";

export default function HomeFeatureTop({lang, feature}: { lang: string; feature?: IFeature }) {
    const content = feature ?? InfoTranslation[lang].Feature;

    return (
        <div className="section-title contrast-section-title home-feature-top">
            <span>{content.span}</span>
            <h2>{content.title}</h2>
            <div className="bar"></div>
        </div>
    )
}
