import React from "react";
import {IFeature} from "@/lib/model/IFeature";

export default function HomeFeatureTop({feature}: { lang: string; feature: IFeature }) {
    const content = feature;

    return (
        <div className="section-title contrast-section-title home-feature-top">
            <span>{content.span}</span>
            <h2>{content.title}</h2>
            <div className="bar"></div>
        </div>
    )
}
