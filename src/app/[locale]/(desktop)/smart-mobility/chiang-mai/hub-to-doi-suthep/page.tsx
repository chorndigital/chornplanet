import React from "react";
import {Metadata} from "next";
import {headers} from "next/headers";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import HubToDoiSuthepMain from "@/components/SmartMobility/ChiangMai/Main/HubToDoiSuthepMain";
import {MetaHubDoiSuthep} from "@/metadata/smart-mobility/chiang-mai/MetaHubDoiSuthep";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetaHubDoiSuthep[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
            <HubToDoiSuthepMain lang={lang}/>
            <AiSolutionsMain lang={lang}/>
            <HomeFeatureMain lang={lang} isHideTopTitle={true}/>
        </>
    )
}