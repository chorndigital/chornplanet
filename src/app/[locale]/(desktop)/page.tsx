// src/app/[locale]/AiBannerFahMain.tsx

import React from "react";
import type {Metadata} from "next";
import {MetadataHome} from "@/metadata/main/MetadataHome";
import {headers} from "next/headers";
// ----------------------------------------------------
import HeroSection from '@/components/Home/HeroSection'
import HumanDailyFlow from '@/components/Home/HumanDailyFlow'
import LocalToGlobal from '@/components/Home/LocalToGlobal'
import SystemExplainers from '@/components/Home/SystemExplainers'
import MobilityFocus from '@/components/Home/MobilityFocus'
import CitySystems from '@/components/Home/CitySystems'
import GlobalPatterns from '@/components/Home/GlobalPatterns'
import UrbanSignals from '@/components/Home/UrbanSignals'
import EditorialPositioning from '@/components/Home/EditorialPositioning'
import {ISmartCityItem} from "@/data/smart-city/model/ISmartCity";
import {SmartCity} from "@/data/smart-city/SmartCity";
import SmartCityMain from "@/components/SmartCity/ChiangMai/SmartCityMain";
import {Tag} from "@/data/tags/Tag";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataHome[lang]
}

export default async function Home() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Chorn Planet | Future Mobility & Smart City Systems Designer, Connected Systems & Early IoT Platforms, Concept to Architecture, System Design & Development",
        "logo": "https://chornplanet.com/images/logo/chorn-logo-2025-circle-md.png",
        "@id": "https://chornplanet.com",
        "url": "https://chornplanet.com",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+66 (0)52 000 548",
            "contactType": "Customer Support",
            "email": "contact@chorn.in.th",
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "405/112, Moo 3, Sannameng Sub-district",
            "addressLocality": "Sansai District",
            "addressRegion": "Chiang Mai",
            "postalCode": "50210",
            "addressCountry": "tonnam"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.846558456865996,
            "longitude": 99.05946162698686
        },
        "openingHours": "Mo-Fr 08:30-17:30",
        "sameAs": [
            "https://www.linkedin.com/company/chornplanet",
            "https://www.facebook.com/chornplanet",
            "https://tiktok.com/@chornplanet",
            "https://x.com/chornplanet",
        ]
    };
    const smartCityItem: ISmartCityItem = SmartCity[lang]?.chiangMai[3];

    return (
        <>
            <main className="flex flex-col">
                <div className="container">
                    <HeroSection lang={lang}/>
                    <SmartCityMain lang={lang} smartCityItem={smartCityItem}/>
                    <HumanDailyFlow lang={lang}/>
                    <LocalToGlobal lang={lang}/>
                    <SystemExplainers lang={lang}/>
                    <MobilityFocus lang={lang}/>

                    <CitySystems lang={lang}/>
                    <GlobalPatterns lang={lang}/>
                    <UrbanSignals lang={lang}/>
                    <EditorialPositioning lang={lang}/>

                    <div className={'neo-tag-smart-city'}>
                        {lang && Tag[lang].smartCity.join(", ")}
                    </div>
                </div>
            </main>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(localBusinessSchema)}}
            />
        </>
    );
}