import React from "react";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsSelenium from "@/components/Services/cloud-devops/selenium/ServicesDetailsSelenium";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataSelenium} from "@/metadata/main/devops/MetadataSelenium";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataSelenium[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <div className="smart-container-top">
            <ServicesDetailsSelenium lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="Selenium Testing Services | Chorn Planet"
                description="Chorn Planet offers comprehensive Selenium testing services to ensure the quality and performance of your applications through automated testing."
                url="https://chornplanet.com/en/technical-expertise/cloud-devops/selenium/"
            />
        </div>
    )
}