import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHomeZH: Metadata = {
    title: "Chorn Planet | 面向系统与应用技术的媒体平台",
    description:
        "Chorn Planet 是一个媒体平台，提供关于系统分析、软件工程、系统集成实践以及应用技术主题的结构化说明，内容包括 AI 自动化、云系统与系统现代化方法，可用于公共、投资者与政策相关语境。",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.en, MetaLinks.home).alternates,
    authors: [
        {name: "Chorn Planet"}
    ],
    openGraph: {
        title: "Chorn Planet | 面向系统与应用技术的媒体平台",
        description:
            "Chorn Planet 是一个媒体平台，提供关于系统分析、软件工程、系统集成实践以及应用技术主题的结构化说明，内容包括 AI 自动化、云系统与系统现代化方法，可用于公共、投资者与政策相关语境。",
        images: metadataLink(LanguageCode.en, MetaLinks.home).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.home).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Chorn Planet | 面向系统与应用技术的媒体平台",
        description:
            "Chorn Planet 是一个媒体平台，提供关于系统分析、软件工程、系统集成实践以及应用技术主题的结构化说明，内容包括 AI 自动化、云系统与系统现代化方法，可用于公共、投资者与政策相关语境。",
        images: metadataLink(LanguageCode.en, MetaLinks.home).twitter.images,
    },
    keywords: [
        "Chorn Planet", "Chorn Planet", "媒体平台", "系统分析",
        "软件工程", "系统集成", "云系统",
        "AI 集成", "DevOps", "微服务", "技术架构"
    ]
}