import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPrivacyPolicyJA: Metadata = {
    title: "プライバシーポリシー | Chorn Planet",
    description: "Chorn Planetはお客様のプライバシーを尊重し、個人データの保護に努めています。本プライバシーポリシーでは、Webサイトの利用時におけるデータの取り扱い方法と、分析目的でのクッキーの使用について説明します。",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.ja, MetaLinks.privacyPolicy).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "プライバシーポリシー | Chorn Planet",
        description: "Chorn Planetはお客様のプライバシーを尊重し、個人データの保護に努めています。本プライバシーポリシーでは、Webサイトの利用時におけるデータの取り扱い方法と、分析目的でのクッキーの使用について説明します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.privacyPolicy).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.privacyPolicy).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "プライバシーポリシー | Chorn Planet",
        description: "Chorn Planetはお客様のプライバシーを尊重し、個人データの保護に努めています。本プライバシーポリシーでは、Webサイトの利用時におけるデータの取り扱い方法と、分析目的でのクッキーの使用について説明します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.privacyPolicy).twitter.images,
    },
}