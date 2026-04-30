import {IFeatureStack} from "@/lib/model/IFeature";
import Link from "next/link";
import {truncateText} from "@/lib/truncateText";
import React from "react";
import {IFeature} from "@/lib/model/IFeature";

export default function HomeFeatureRight({lang, feature}: { lang: string; feature: IFeature }) {
    const content = feature;

    return (
        <div className="col-lg-6">
            <div className="row">
                {content.stacks.map((stack: IFeatureStack, index: number) => (
                    <div key={index} className="home-feature-container">
                        <Link href={'/' + lang + stack.link}>
                            <div className="custom-single-features-box feature-box">
                                <div className="icon feature-box-icon">
                                    <i className={stack.icon + " feature-icon hover-rotate"}/>
                                    <span className="feature-box-title">
                                        {stack.title}
                                    </span>
                                </div>
                                <p className="feature-box-description">
                                    {truncateText(stack.description, 110)}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
