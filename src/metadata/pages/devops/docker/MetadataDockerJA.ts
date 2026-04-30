import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDockerJA: Metadata = {
    title: "Docker DevOps サービス | Chorn Planet",
    description: "Docker ベースの DevOps 技術専門知識を活用し、効率的なコンテナ化とスケーラブルなアプリケーションのデプロイを実現。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.devops.docker).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Docker DevOps サービス | Chorn Planet",
        description: "Docker を活用したコンテナ化とスケーラブルなソフトウェアのデプロイを DevOps 技術専門知識で支援。",
        images: metadataLink(LanguageCode.ja, MetaLinks.devops.docker).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.devops.docker).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Docker DevOps サービス | Chorn Planet",
        description: "Docker DevOps 技術専門知識を活用し、コンテナ化とスケーラブルなアプリケーションのデプロイを実現。",
        images: metadataLink(LanguageCode.ja, MetaLinks.devops.docker).twitter.images,
    },
    keywords: [
        "Docker DevOps", "Docker 技術専門知識", "コンテナ化", "Chorn Planet", "DevOps", "スケーラブルなデプロイ",
        "カスタムソフトウェア開発", "クラウドアプリケーション", "DevOps 日本", "Docker コンテナ"
    ]
};
