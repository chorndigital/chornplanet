import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGalleryEN: Metadata = {
    title: "International Travel | Chorn Planet Gallery",
    description: "Chorn Planet has the experience and readiness for international travel to receive training and learn from work in ASEAN and the United States.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.gallery).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "International Travel | Chorn Planet Gallery",
        description: "Chorn Planet has the experience and readiness for international travel to receive training and learn from work in ASEAN and the United States.",
        images: metadataLink(LanguageCode.en, MetaLinks.gallery).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.gallery).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "International Travel | Chorn Planet Gallery",
        description: "Chorn Planet has the experience and readiness for international travel to receive training and learn from work in ASEAN and the United States.",
        images: metadataLink(LanguageCode.en, MetaLinks.gallery).twitter.images,
    },
}