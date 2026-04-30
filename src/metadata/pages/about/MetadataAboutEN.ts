import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAboutEN: Metadata = {
    title: "About Chorn Planet | System Analysis & Full-Stack Software Development Engineering",
    description: "Discover Chorn Planet's expertise in system analysis, full-stack development, and modern software solutions that drive business success.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.about).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Chorn Planet - Experts in System Analysis & Full-Stack Software Development Engineering",
        description: "Explore Chorn Planet's commitment to delivering cutting-edge system modernization, full-stack development, and technical support for businesses.",
        images: metadataLink(LanguageCode.en, MetaLinks.about).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.about).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Chorn Planet - Leading System Analysis & Full-Stack Software Development Engineering",
        description: "Unlock business potential with Chorn Planet's advanced system analysis, full-stack development, and modern software solutions.",
        images: metadataLink(LanguageCode.en, MetaLinks.about).twitter.images,
    },
}