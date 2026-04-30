import React from "react";
import HomeFrontEndTop from "@/components/Common/HomeFrontEnd/HomeFrontEndTop";
import HomeFrontEndBottom from "@/components/Common/HomeFrontEnd/HomeFrontEndBottom";
import {IFrontEnd} from "@/lib/model/IFrontEnd";

export default function HomeFrontEndContainer({lang, frontEnd}: { lang: string; frontEnd: IFrontEnd }) {
    return (
        <>
            <div className="services-area bg-fafafa pt-100 pb-70">
                <HomeFrontEndTop lang={lang} frontEnd={frontEnd}/>
                <HomeFrontEndBottom lang={lang} frontEnd={frontEnd}/>
            </div>
        </>
    );
};
