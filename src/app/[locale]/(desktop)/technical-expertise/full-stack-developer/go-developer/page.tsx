import React from "react";
import ServicesDetailsGoLang from "@/components/Services/fullstack-development/go-lang/ServicesDetailsGoLang";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataGo} from "@/metadata/main/backend/MetadataGo";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataGo[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <div className="smart-container-top">
            <ServicesDetailsGoLang lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="Go Full Stack Development | Chorn Planet"
                description="Chorn Planet offers Go full stack development services for building efficient and scalable web applications."
                url="https://chornplanet.com/en/technical-expertise/full-stack-developer/go-developer/"
            />
        </div>
    )
}