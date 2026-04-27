import GalleryPageMain from "@/components/Gallery/GalleryPageMain";
import GalleryModuleBottom from "@/components/Gallery/GalleryModuleBottom";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataGallery} from "@/metadata/main/MetadataGallery";
import AiAomLandingPage from "@/components/AiCompanions/Main/AiAomLandingPage";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import React from "react";
import CloudExperience from "@/components/Common/CloudExperience";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import {getGalleryContent} from "@/lib/gallery-content/galleryContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataGallery[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const galleryContent = await getGalleryContent(lang);

    return (
        <div className="smart-container-top">
            <GalleryPageMain global={galleryContent.gallery.global}/>
            <GalleryModuleBottom slides={galleryContent.media.bottomSlides}/>
            <CloudExperience lang={lang}/>
            <AiAomLandingPage lang={lang}/>
            <HomeFeatureMain lang={lang} isTopSpace={true} isHideTopTitle={true}/>
        </div>
    );
}
