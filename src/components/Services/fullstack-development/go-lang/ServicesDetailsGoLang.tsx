import React from "react";
import {ImageUrl} from "@/image/ImageUrl";
import {IFullStackStack} from "@/lib/model/IFullStack";
import {IFrontEnd} from "@/lib/model/IFrontEnd";
import {IFullStack} from "@/lib/model/IFullStack";
import {IDevOps} from "@/lib/model/IDevOps";
import FullStackServiceDetails from "@/components/Services/fullstack-development/FullStackServiceDetails";

export default function ServicesDetailsGoLang({lang, stack, frontEnd, fullStack, devOps}: { lang: string, stack: IFullStackStack, frontEnd: IFrontEnd, fullStack: IFullStack, devOps: IDevOps }) {
    return (
        <FullStackServiceDetails
            lang={lang}
            stack={stack}
            image={ImageUrl.backend.frameworks.go.image1200}
        frontEnd={frontEnd}
            fullStack={fullStack}
            devOps={devOps}
        />
    );
}
