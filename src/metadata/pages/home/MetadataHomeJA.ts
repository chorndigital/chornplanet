import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHomeJA: Metadata = {
    title: "Chorn Planet | システムと応用技術のためのメディアプラットフォーム",
    description:
        "Chorn Planetは、システム分析、ソフトウェアエンジニアリング、統合に関する実務、および応用技術に関するテーマを構造的に解説するメディアプラットフォームです。AIによる自動化、クラウドシステム、システム近代化のアプローチを含み、公的、投資家、政策関連の文脈で利用可能な情報を提供します。",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.en, MetaLinks.home).alternates,
    authors: [
        { name: "Chorn Planet" }
    ],
    openGraph: {
        title: "Chorn Planet | システムと応用技術のためのメディアプラットフォーム",
        description:
            "Chorn Planetは、システム分析、ソフトウェアエンジニアリング、統合に関する実務、および応用技術に関するテーマを構造的に解説するメディアプラットフォームです。AIによる自動化、クラウドシステム、システム近代化のアプローチを含み、公的、投資家、政策関連の文脈で利用可能な情報を提供します。",
        images: metadataLink(LanguageCode.en, MetaLinks.home).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.home).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Chorn Planet | システムと応用技術のためのメディアプラットフォーム",
        description:
            "Chorn Planetは、システム分析、ソフトウェアエンジニアリング、統合に関する実務、および応用技術に関するテーマを構造的に解説するメディアプラットフォームです。AIによる自動化、クラウドシステム、システム近代化のアプローチを含み、公的、投資家、政策関連の文脈で利用可能な情報を提供します。",
        images: metadataLink(LanguageCode.en, MetaLinks.home).twitter.images,
    },
    keywords: [
        "Chorn Planet", "Chorn Planet", "メディアプラットフォーム", "システム分析",
        "ソフトウェアエンジニアリング", "システム統合", "クラウドシステム",
        "AI統合", "DevOps", "マイクロサービス", "技術アーキテクチャ"
    ]
}