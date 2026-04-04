import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataSeleniumJA: Metadata = {
    title: "Seleniumテストサービス | Chorn Planet",
    description: "自動化テストを通じて、アプリケーションの品質とパフォーマンスを保証するSeleniumの包括的な技術専門知識。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.devops.selenium).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Seleniumテスト | Chorn Planet",
        description: "Seleniumの技術専門知識を活用して、アプリケーションのテストを自動化し、堅牢で信頼性の高い結果を得る。",
        images: metadataLink(LanguageCode.ja, MetaLinks.devops.selenium).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.devops.selenium).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Seleniumテストサービス | Chorn Planet",
        description: "Seleniumの技術専門知識を活用して、アプリケーションの品質を向上させ、効果的な自動化テストを実現。",
        images: metadataLink(LanguageCode.ja, MetaLinks.devops.selenium).twitter.images,
    },
    keywords: [
        "Seleniumテスト", "自動化テスト", "Chorn Planet", "クラウドDevOps",
        "アプリケーション品質保証", "テスト自動化", "ソフトウェアテスト",
        "品質保証の技術専門知識", "テストの技術専門知識", "テストスクリプト",
        "ソフトウェアテスト 日本", "Seleniumの技術専門知識", "ウェブアプリケーションテスト"
    ]
}
