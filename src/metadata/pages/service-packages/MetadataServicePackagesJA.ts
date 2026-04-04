import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataServicePackagesJA: Metadata = {
    title: "サービスパッケージ | システム分析・フルスタック開発",
    description: "Chorn Planetのサービスパッケージで、革新的なソフトウェア開発、ブロックチェーン、Web3、NFTに対応。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.servicePackages).alternates,
    authors: [{name: "Chorn Planet"}],
    openGraph: {
        title: "サービスパッケージ | システム分析・フルスタック開発",
        description: "Chorn Planetによる専任フルタイムと共有プロジェクト向けのパッケージで、Web3と現代的な開発ニーズに対応。",
        images: metadataLink(LanguageCode.ja, MetaLinks.servicePackages).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.servicePackages).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Chorn Planetの開発サービスパッケージ",
        description: "ソフトウェア開発、Web3、NFT向けの高品質なサービスパッケージでプロジェクトを加速。",
        images: metadataLink(LanguageCode.ja, MetaLinks.servicePackages).twitter.images,
    },
    keywords: [
        // ブランド関連キーワード
        "Chorn Planet", "Chorn Planet ソフトウェア開発", "Chorn Planet ソフトウェアアウトソーシング", "Chorn Planetとは",
        "Chorn Planet ソフトウェア開発 タイ", "Chorn Planet ソフトウェア開発 チェンマイ", "Chorn Planet ソフトウェア開発 バンコク",

        // コアサービス
        "カスタムソフトウェア開発", "ソフトウェアアウトソーシング企業", "ソフトウェア開発外注",
        "ウェブ開発 アウトソーシング", "IT開発会社 タイ", "タイのアウトソーシング会社",
        "チェンマイ ソフトウェア開発", "バンコク ソフトウェアアウトソーシング",

        // 技術職種
        "ソフトウェアエンジニア", "フロントエンド開発者", "バックエンド開発者", "フルスタック開発者",
        "Web開発者", "React開発者", "Java開発者", "Node.js開発者", "API開発者", "ブロックチェーン開発者",
        "Web3開発者", "マイクロサービス開発", "エンタープライズソフトウェア",

        // テクノロジー・フレームワーク
        "Next.js 開発", "React.js 開発", "Spring Boot", "フロントエンドアーキテクチャ", "Web3 開発"
    ]
};