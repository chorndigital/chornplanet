import React from "react";
import ServicesDetailsVue from "@/components/Services/frontend-development/vue/ServicesDetailsVue";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataVue} from "@/metadata/main/frontend/MetadataVue";
import {getTechnicalExpertiseContent} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataVue[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const {frontEnd, cloud} = await getTechnicalExpertiseContent(lang);

    return (
        <div className="smart-container-top">
            <ServicesDetailsVue lang={lang} stack={frontEnd.vue}/>
            <CloudExperience lang={lang} cloud={cloud}/>
            <SchemaMarkupServicePage
                name="Vue.js Development Services | Chorn Planet"
                description="Chorn Planet specializes in Vue.js development to create interactive and scalable web applications."
                url="https://chornplanet.com/en/technical-expertise/front-end-developer/vue-developer/"
            />
        </div>
    )
}
