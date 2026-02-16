import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHomeKO: Metadata = {
    title: "CHORN | 시스템 및 응용 기술을 위한 미디어 플랫폼",
    description:
        "CHORN은 시스템 분석, 소프트웨어 엔지니어링, 통합 실무, 그리고 응용 기술 주제를 구조적으로 설명하는 미디어 플랫폼이다. AI 기반 자동화, 클라우드 시스템, 시스템 현대화 접근을 포함하며, 공공, 투자자, 정책 관련 맥락에서 활용할 수 있는 정보를 제공한다.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.en, MetaLinks.home).alternates,
    authors: [
        { name: "CHORN Digital" }
    ],
    openGraph: {
        title: "CHORN | 시스템 및 응용 기술을 위한 미디어 플랫폼",
        description:
            "CHORN은 시스템 분석, 소프트웨어 엔지니어링, 통합 실무, 그리고 응용 기술 주제를 구조적으로 설명하는 미디어 플랫폼이다. AI 기반 자동화, 클라우드 시스템, 시스템 현대화 접근을 포함하며, 공공, 투자자, 정책 관련 맥락에서 활용할 수 있는 정보를 제공한다.",
        images: metadataLink(LanguageCode.en, MetaLinks.home).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.home).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN | 시스템 및 응용 기술을 위한 미디어 플랫폼",
        description:
            "CHORN은 시스템 분석, 소프트웨어 엔지니어링, 통합 실무, 그리고 응용 기술 주제를 구조적으로 설명하는 미디어 플랫폼이다. AI 기반 자동화, 클라우드 시스템, 시스템 현대화 접근을 포함하며, 공공, 투자자, 정책 관련 맥락에서 활용할 수 있는 정보를 제공한다.",
        images: metadataLink(LanguageCode.en, MetaLinks.home).twitter.images,
    },
    keywords: [
        "CHORN", "CHORN Digital", "미디어 플랫폼", "시스템 분석",
        "소프트웨어 엔지니어링", "시스템 통합", "클라우드 시스템",
        "AI 통합", "DevOps", "마이크로서비스", "기술 아키텍처"
    ]
}