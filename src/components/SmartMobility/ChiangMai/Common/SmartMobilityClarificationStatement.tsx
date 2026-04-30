import React from "react";
import {ISmartSection} from "@/lib/model/ISmartMobility";

export default function SmartMobilityClarificationStatement(
    {safeStatement}: { lang: string; safeStatement?: ISmartSection['safeStatement'] }
) {
    return (
        <div>
            <strong>
                {
                    safeStatement &&
                    safeStatement.title
                }
            </strong>
            <p>
                {
                    safeStatement &&
                    safeStatement.description
                }
            </p>
        </div>
    )
}
