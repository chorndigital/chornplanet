import Image from "next/image";
import React from "react";
import {SmartMobility} from "@/data/smart-mobility/SmartMobility";

export default function SmartMobilityClarificationStatement({lang}: { lang: string }) {
    const vision = SmartMobility[lang].chiangMai.vision

    return (
        <div>
            <strong>
                {
                    vision.safeStatement &&
                    vision.safeStatement.title
                }
            </strong>
            <p>
                {
                    vision.safeStatement &&
                    vision.safeStatement.description
                }
            </p>
        </div>
    )
}