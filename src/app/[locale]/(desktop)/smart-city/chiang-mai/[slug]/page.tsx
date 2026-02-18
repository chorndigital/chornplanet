// src/app/[locale]/(desktop)/smart-city/chiang-mai/[slug]/page.tsx

import React from "react";
import {Metadata} from "next";
import {headers} from "next/headers";
import {notFound} from "next/navigation"

import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";

import SmartCityMain from "@/components/SmartCity/ChiangMai/SmartCityMain";
import {getSmartCityData} from "@/data/smart-city/getSmartCityData";
import {getMetaSmartCity} from "@/metadata/smart-city/getMetaSmartCity";

export async function generateMetadata(
    {params}: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const {slug} = await params;
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    const dataMap = getMetaSmartCity({lang})
    return dataMap[slug];
}

export default async function Page(
    {params}: { params: Promise<{ slug: string }> }
) {
    const headers15 = await headers();
    const lang = headers15.get("x-locale") || "en";

    const {slug} = await params
    const smartCityData = getSmartCityData({lang});
    const smartCityItem = smartCityData[slug];
    if (!smartCityItem) notFound();

    return (
        <div className="container">
            <SmartCityMain lang={lang} smartCityItem={smartCityItem}/>
            <AiSolutionsMain lang={lang}/>
            <HomeFeatureMain lang={lang} isHideTopTitle={true}/>
        </div>
    );
}
