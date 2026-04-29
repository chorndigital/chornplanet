import React from "react";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsDotNetCore
    from "@/components/Services/fullstack-development/dotnetcore/ServicesDetailsDotNetCore";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataDotnetCore} from "@/metadata/main/backend/MetadataDotnetCore";
import {getTechnicalExpertiseContent} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataDotnetCore[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const {fullStack, cloud} = await getTechnicalExpertiseContent(lang);

    return (
        <div className="smart-container-top">
            <ServicesDetailsDotNetCore lang={lang} stack={fullStack.dotnetcore}/>
            <CloudExperience lang={lang} cloud={cloud}/>
            <SchemaMarkupServicePage
                name=".NET Core C# Full Stack Development | Chorn Planet"
                description="Chorn Planet offers .NET Core C# full stack development services to build modern, scalable, and secure web applications."
                url="https://chornplanet.com/en/technical-expertise/full-stack-developer/dotnetcore-developer/"
            />
        </div>
    );
}
