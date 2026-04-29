import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {ImageUrl} from "@/image/ImageUrl";
import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import FrontEndServiceDetails from "@/components/Services/frontend-development/FrontEndServiceDetails";

export default function ServicesDetailsHtml5({lang, stack}: { lang: string, stack?: IFrontEndStack }) {
    return (
        <FrontEndServiceDetails
            lang={lang}
            stack={stack ?? InfoTranslation[lang].FrontEnd.html5}
            image={ImageUrl.frontend.frameworks.html5.image1200}
        />
    );
}
