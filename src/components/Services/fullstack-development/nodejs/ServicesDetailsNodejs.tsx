import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {ImageUrl} from "@/image/ImageUrl";
import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import FullStackServiceDetails from "@/components/Services/fullstack-development/FullStackServiceDetails";

export default function ServicesDetailsNodejs({lang, stack}: { lang: string, stack?: IFullStackStack }) {
    return (
        <FullStackServiceDetails
            lang={lang}
            stack={stack ?? InfoTranslation[lang].FullStack.nodejs}
            image={ImageUrl.backend.frameworks.nodejs.image1200}
        />
    );
}
