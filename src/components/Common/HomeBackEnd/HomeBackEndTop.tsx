import React from "react";
import {IFullStack} from "@/lib/model/IFullStack";

export default function HomeBackEndTop({fullStack}: { lang: string; fullStack: IFullStack }) {
    return (
        <div className="section-title contrast-section-title">
            <span>{fullStack.span}</span>
            <h2>{fullStack.title}</h2>
            <div className="bar"></div>
        </div>
    )
}
