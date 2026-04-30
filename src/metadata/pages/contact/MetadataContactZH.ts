import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataContactZH: Metadata = {
    title: "关于 Chorn Planet | 系统分析与全栈软件开发工程",
    description: "探索 Chorn Planet 在系统分析、全栈开发和推动企业成功的现代软件解决方案方面的专业知识。",
    alternates: metadataLink(LanguageCode.zh, MetaLinks.contact).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Chorn Planet - 系统分析与全栈软件开发工程专家",
        description: "探索 Chorn Planet 致力于为企业提供尖端系统现代化、全栈开发和技术支持的承诺。",
        images: metadataLink(LanguageCode.zh, MetaLinks.contact).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks.contact).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Chorn Planet - 领先的系统分析与全栈软件开发工程",
        description: "通过 Chorn Planet 的高级系统分析、全栈开发和现代软件解决方案释放企业潜力。",
        images: metadataLink(LanguageCode.zh, MetaLinks.contact).twitter.images,
    },
}