import React from "react";
import VisionChiangMaiMain from "@/components/SmartMobility/ChiangMai/Main/VisionChiangMaiMain";
import {Metadata} from "next";
import {headers} from "next/headers";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import {MetaVisionMobilityChiangMai} from "@/metadata/smart-mobility/chiang-mai/MetaVisionMobilityChiangMai";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetaVisionMobilityChiangMai[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
            <VisionChiangMaiMain lang={lang}/>
            <AiSolutionsMain lang={lang}/>
            <HomeFeatureMain lang={lang} isHideTopTitle={true}/>
        </>
    )
}