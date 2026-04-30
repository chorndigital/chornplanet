import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAboutJA: Metadata = {
    title: "Chorn Planetについて | システム分析とフルスタックソフトウェア開発エンジニアリング",
    description: "ビジネスの成功を促進するシステム分析、フルスタック開発、最新のソフトウェアソリューションにおけるChorn Planetの専門知識をご覧ください。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.about).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Chorn Planet - システム分析とフルスタックソフトウェア開発エンジニアリングの専門家",
        description: "ビジネス向けの最先端システム近代化、フルスタック開発、技術サポートを提供するChorn Planetの取り組みをご覧ください。",
        images: metadataLink(LanguageCode.ja, MetaLinks.about).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.about).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Chorn Planet - システム分析とフルスタックソフトウェア開発エンジニアリングのリーディングカンパニー",
        description: "Chorn Planetの高度なシステム分析、フルスタック開発、最新のソフトウェアソリューションでビジネスの可能性を解き放ちましょう。",
        images: metadataLink(LanguageCode.ja, MetaLinks.about).twitter.images,
    },
}