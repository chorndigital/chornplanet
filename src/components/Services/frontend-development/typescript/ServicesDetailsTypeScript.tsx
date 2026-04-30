import React from "react";
import {ImageUrl} from "@/image/ImageUrl";
import {IFrontEndStack} from "@/lib/model/IFrontEnd";
import {IFrontEnd} from "@/lib/model/IFrontEnd";
import {IFullStack} from "@/lib/model/IFullStack";
import {IDevOps} from "@/lib/model/IDevOps";
import FrontEndServiceDetails from "@/components/Services/frontend-development/FrontEndServiceDetails";

export default function ServicesDetailsTypeScript({lang, stack, frontEnd, fullStack, devOps}: { lang: string, stack: IFrontEndStack, frontEnd: IFrontEnd, fullStack: IFullStack, devOps: IDevOps }) {
    return (
        <FrontEndServiceDetails
            lang={lang}
            stack={stack}
            image={ImageUrl.frontend.frameworks.typescript.image1200}
        frontEnd={frontEnd}
            fullStack={fullStack}
            devOps={devOps}
        />
    );
}
