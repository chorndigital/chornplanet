// src/app/[locale]/(desktop)/smart-city/chiang-mai/[slug]/page.tsx

import React from "react";
import {Metadata} from "next";
import {headers} from "next/headers";
import {notFound} from "next/navigation"

import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";

import {SmartCity} from "@/data/smart-city/SmartCity";
import {ISmartCityItem} from "@/data/smart-city/model/ISmartCity";
import SmartCityMain from "@/components/SmartCity/ChiangMai/SmartCityMain";
import {MetaSmartCityChiangMai} from "@/metadata/smart-city/MetaSmartCityChiangMai";

export async function generateMetadata(
    {params}: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const {slug} = await params;
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return MetaSmartCityChiangMai({slug, lang})
}

export async function generateStaticParams() {
    return Object.entries(SmartCity).flatMap(([locale, data]) => {
        return (data.chiangMai ?? [])
            .filter(item => item.link.length > 0)
            .map(item => ({
                slug: item.link.replace(/\/+$/, "").split("/").pop()!,
            }));
    });
}

export default async function Page(
    {params}: { params: Promise<{ slug: string }> }
) {
    const {slug} = await params;
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const items: ISmartCityItem[] = SmartCity[lang]?.chiangMai ?? [];

    const normalize = (s: string) => s.replace(/\/+$/, "");

    const smartCityItem = items.find(item =>
        normalize(item.link).endsWith(`/${slug}`)
    );

    if (!smartCityItem) {
        notFound();
    }

    return (
        <div className="container">
            <SmartCityMain lang={lang} smartCityItem={smartCityItem}/>
            <AiSolutionsMain lang={lang}/>
            <HomeFeatureMain lang={lang} isHideTopTitle={true}/>
        </div>
    );
}
