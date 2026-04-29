import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {ImageUrl} from "@/image/ImageUrl";
import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import FrontEndServiceDetails from "@/components/Services/frontend-development/FrontEndServiceDetails";

export default function ServicesDetailsAngular({lang, stack}: { lang: string, stack?: IFrontEndStack }) {
    return (
        <FrontEndServiceDetails
            lang={lang}
            stack={stack ?? InfoTranslation[lang].FrontEnd.angular}
            image={ImageUrl.frontend.frameworks.angular.image1200}
        />
    );
}
