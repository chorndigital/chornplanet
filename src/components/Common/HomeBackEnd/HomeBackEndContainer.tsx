import React from "react";
import HomeBackEndTop from "@/components/Common/HomeBackEnd/HomeBackEndTop";
import HomeBackEndIcon from "@/components/Common/HomeBackEnd/HomeBackEndIcon";
import HomeBackEndBottom from "@/components/Common/HomeBackEnd/HomeBackEndBottom";
import {IFullStack} from "@/lib/model/IFullStack";

export default function HomeBackEndContainer({lang, fullStack, isRemoveTopSpace = false}: {
    lang: string,
    fullStack: IFullStack,
    isRemoveTopSpace?: boolean
}) {
    const classes = isRemoveTopSpace ? "digital-experience-area" : "digital-experience-area ptb-100";

    return (
        <>
            <div className={`${classes}`}>
                <div className="container">
                    <HomeBackEndTop lang={lang} fullStack={fullStack}/>
                    <HomeBackEndIcon lang={lang} fullStack={fullStack}/>
                    <HomeBackEndBottom lang={lang} fullStack={fullStack}/>
                </div>
            </div>
        </>
    );
};
