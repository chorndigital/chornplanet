import React from "react";
import {Metadata} from "next";
import {headers} from "next/headers";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import VertiportDesignMain from "@/components/SmartMobility/ChiangMai/Main/VertiportDesignMain";
import {MetaVertiportDesign} from "@/metadata/smart-mobility/chiang-mai/MetaVertiportDesign";
import {getSmartMobilityChiangMaiContent} from "@/lib/smart-mobility-chiang-mai-content/smartMobilityChiangMaiContent.service";
import {getAiCompanionsContent} from "@/lib/ai-companions-content/aiCompanionsContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetaVertiportDesign[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const [content, aiContent] = await Promise.all([
        getSmartMobilityChiangMaiContent(lang, 'vertiport-design'),
        getAiCompanionsContent(lang),
    ]);

    return (
        <>
            <VertiportDesignMain lang={lang} content={content}/>
            <AiSolutionsMain
                lang={lang}
                service={aiContent.service}
                llmSlides={aiContent.media.llmSlides}
            />
            <HomeFeatureMain
                lang={lang}
                feature={aiContent.feature}
                featureImage={aiContent.media.featureImage}
                isHideTopTitle={true}
            />
        </>
    )
}
