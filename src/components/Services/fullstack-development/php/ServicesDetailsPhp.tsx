import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {ImageUrl} from "@/image/ImageUrl";
import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import FullStackServiceDetails from "@/components/Services/fullstack-development/FullStackServiceDetails";

export default function ServicesDetailsPhp({lang, stack}: { lang: string, stack?: IFullStackStack }) {
    return (
        <FullStackServiceDetails
            lang={lang}
            stack={stack ?? InfoTranslation[lang].FullStack.php}
            image={ImageUrl.backend.frameworks.php.image1200}
        />
    );
}
