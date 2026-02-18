// src/app/[locale]/smart-city/[slug]/page.tsx

import {headers} from "next/headers";
import {notFound} from "next/navigation";

import {getSmartCityLandingData} from "@/data/smart-city-landing/getSmartCityLandingData";
import HeroObservation from "@/components/SmartCity/HeroObservation";
import SystemExplanation from "@/components/SmartCity/SystemExplanation";
import WhyItMatters from "@/components/SmartCity/WhyItMatters";
import RelatesSignals from "@/components/SmartCity/RelatesSignals";
import {Metadata} from "next";
import {getMetaSmartCityLanding} from "@/metadata/smart-city-landing/getMetaSmartCityLanding";

export async function generateMetadata(
    {params}: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const {slug} = await params;
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    const dataMap = getMetaSmartCityLanding({lang})
    return dataMap[slug];
}

export default async function Page(
    {params}: { params: Promise<{ slug: string }> }
) {
    const headers15 = await headers();
    const lang = headers15.get("x-locale") || "en";

    const {slug} = await params
    const dataMap = getSmartCityLandingData({lang});
    const data = dataMap[slug];

    if (!data) notFound();

    return (
        <>
            <HeroObservation lang={lang} {...data.heroObservation} />

            {data.systemExplanation && (
                <SystemExplanation lang={lang} {...data.systemExplanation} />
            )}

            {data.whyItMatters && (
                <WhyItMatters lang={lang} {...data.whyItMatters} />
            )}

            {data.relatedSignals && (
                <RelatesSignals lang={lang} signals={data.relatedSignals}/>
            )}
        </>
    );
}