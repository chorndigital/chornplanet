import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDockerZH: Metadata = {
    title: "Docker DevOps 服务 | Chorn Planet",
    description: "基于 Docker 的 DevOps 技术专长，提供高效的容器化和可扩展的应用程序部署解决方案。",
    alternates: metadataLink(LanguageCode.zh, MetaLinks.devops.docker).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Docker DevOps 服务 | Chorn Planet",
        description: "利用 Docker 进行容器化和可扩展的软件部署，结合 DevOps 技术专长。",
        images: metadataLink(LanguageCode.zh, MetaLinks.devops.docker).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks.devops.docker).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Docker DevOps 服务 | Chorn Planet",
        description: "Docker DevOps 技术专长，提供容器化和可扩展的应用程序部署方案。",
        images: metadataLink(LanguageCode.zh, MetaLinks.devops.docker).twitter.images,
    },
    keywords: [
        "Docker DevOps", "Docker 技术专长", "容器化", "Chorn Planet", "DevOps", "可扩展部署",
        "定制软件开发", "云端应用", "DevOps 中国", "Docker 容器"
    ]
};
