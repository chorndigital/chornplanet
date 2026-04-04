import React from "react";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsPostman from "@/components/Services/cloud-devops/postman/ServicesDetailsPostman";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataPostman} from "@/metadata/main/devops/MetadataPostman";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataPostman[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <div className="smart-container-top">
            <ServicesDetailsPostman lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="Postman API Testing Services | Chorn Planet"
                description="Chorn Planet provides API testing services using Postman to ensure the reliability and performance of your web services."
                url="https://chornplanet.com/en/technical-expertise/cloud-devops/postman/"
            />
        </div>
    )
}