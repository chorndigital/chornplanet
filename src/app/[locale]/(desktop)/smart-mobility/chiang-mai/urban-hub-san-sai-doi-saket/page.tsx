import React from "react";
import {Metadata} from "next";
import {headers} from "next/headers";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import UrbanHubSansaiDoiSaketMain
    from "@/components/SmartMobility/ChiangMai/Main/UrbanHubSansaiDoiSaketMain";
import {
    MetaUrbanHubSansaiDoiSaket
} from "@/metadata/smart-mobility/chiang-mai/MetaUrbanHubSansaiDoiSaket";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetaUrbanHubSansaiDoiSaket[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
            <UrbanHubSansaiDoiSaketMain lang={lang}/>
            <AiSolutionsMain lang={lang}/>
            <HomeFeatureMain lang={lang} isHideTopTitle={true}/>
        </>
    );
}