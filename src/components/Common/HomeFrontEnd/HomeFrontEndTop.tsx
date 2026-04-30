import React from "react";
import {IFrontEnd} from "@/lib/model/IFrontEnd";

export default function HomeFrontEndTop({frontEnd}: { lang: string; frontEnd: IFrontEnd }) {
    return (
        <div className="section-title contrast-section-title">
            <span>{frontEnd.span}</span>
            <h2>{frontEnd.title}</h2>
            <div className="bar"></div>
        </div>
    )
}
