import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGalleryZH: Metadata = {
    title: "国际旅行 | Chorn Planet 画廊",
    description: "Chorn Planet 具备国际旅行的经验和准备，以接受培训并从东盟和美国的工作中学习。",
    alternates: metadataLink(LanguageCode.zh, MetaLinks.gallery).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "国际旅行 | Chorn Planet 画廊",
        description: "Chorn Planet 具备国际旅行的经验和准备，以接受培训并从东盟和美国的工作中学习。",
        images: metadataLink(LanguageCode.zh, MetaLinks.gallery).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks.gallery).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "国际旅行 | Chorn Planet 画廊",
        description: "Chorn Planet 具备国际旅行的经验和准备，以接受培训并从东盟和美国的工作中学习。",
        images: metadataLink(LanguageCode.zh, MetaLinks.gallery).twitter.images,
    },
}