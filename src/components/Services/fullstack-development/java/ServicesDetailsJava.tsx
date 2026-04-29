import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {ImageUrl} from "@/image/ImageUrl";
import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import FullStackServiceDetails from "@/components/Services/fullstack-development/FullStackServiceDetails";

export default function ServicesDetailsJava({lang, stack}: { lang: string, stack?: IFullStackStack }) {
    return (
        <FullStackServiceDetails
            lang={lang}
            stack={stack ?? InfoTranslation[lang].FullStack.java}
            image={ImageUrl.backend.frameworks.java.image1200}
        />
    );
}
