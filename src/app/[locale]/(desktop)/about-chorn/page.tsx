import React from "react";
import AboutContent from "@/components/About/AboutContent";
import type {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataAbout} from "@/metadata/main/MetadataAbout";
import HomeBackEndContainer from "@/components/Common/HomeBackEnd/HomeBackEndContainer";
import HomeFrontEndContainer from "@/components/Common/HomeFrontEnd/HomeFrontEndContainer";
import CloudInfraPageMain from "@/components/Services/cloud-infrastructure-systems-architecture/CloudInfraPageMain";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataAbout[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <div className="smart-container-top">
            <AboutContent lang={lang}/>
            <CloudInfraPageMain lang={lang}/>
            <HomeBackEndContainer lang={lang} isRemoveTopSpace={true}/>
            <HomeFrontEndContainer lang={lang}/>

            <SchemaMarkupServicePage
                name="About Us | CHORN - Custom Software Development Experts"
                description="Discover CHORN's innovative custom software development solutions and how we empower industries with cutting-edge technology."
                url="https://chorndigital.com/en/about-chorn/"
            />
        </div>
    );
}