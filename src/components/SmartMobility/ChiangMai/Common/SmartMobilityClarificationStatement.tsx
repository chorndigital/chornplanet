import Image from "next/image";
import React from "react";
import {SmartMobility} from "@/data/smart-mobility/SmartMobility";
import {ISmartSection} from "@/data/smart-mobility/model/ISmartMobility";

export default function SmartMobilityClarificationStatement(
    {lang, safeStatement}: { lang: string; safeStatement?: ISmartSection['safeStatement'] }
) {
    const vision = SmartMobility[lang].chiangMai.vision
    const statement = safeStatement ?? vision.safeStatement;

    return (
        <div>
            <strong>
                {
                    statement &&
                    statement.title
                }
            </strong>
            <p>
                {
                    statement &&
                    statement.description
                }
            </p>
        </div>
    )
}
