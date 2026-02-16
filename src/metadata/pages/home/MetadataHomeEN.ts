import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHomeEN: Metadata = {
    title: "CHORN | Media Platform for Systems and Applied Technology",
    description:
        "CHORN is a media platform presenting structured explanations of system analysis, software engineering, integration practices, and applied technology topics, including AI automation, cloud systems, and modernization approaches, for public, investor, and policy-facing contexts.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.en, MetaLinks.home).alternates,
    authors: [
        {
            name: "CHORN Digital"
        }
    ],
    openGraph: {
        title: "CHORN | Media Platform for Systems and Applied Technology",
        description:
            "CHORN is a media platform presenting structured explanations of system analysis, software engineering, integration practices, and applied technology topics, including AI automation, cloud systems, and modernization approaches, for public, investor, and policy-facing contexts.",
        images: metadataLink(LanguageCode.en, MetaLinks.home).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.home).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN | Media Platform for Systems and Applied Technology",
        description:
            "CHORN is a media platform presenting structured explanations of system analysis, software engineering, integration practices, and applied technology topics, including AI automation, cloud systems, and modernization approaches, for public, investor, and policy-facing contexts.",
        images: metadataLink(LanguageCode.en, MetaLinks.home).twitter.images,
    },
    keywords: [
        // Brand Keywords
        "CHORN", "CHORN Digital", "CHORN media platform", "CHORN systems media", "What is CHORN",
        "CHORN Thailand", "CHORN Chiang Mai", "CHORN Bangkok",

        // Core Topics (Neutral, descriptive)
        "system analysis", "software engineering", "system integration", "enterprise software",
        "full-stack development", "API design", "microservices", "cloud systems", "DevOps",
        "automation", "AI integration", "system modernization", "technical architecture",

        // Roles & Practice Areas (Descriptive)
        "software engineer", "software developer", "frontend development", "backend development",
        "full stack development", "web development", "mobile development", "system architect",
        "system analyst", "engineering management",

        // Technologies & Frameworks (General, non-claiming)
        "Next.js", "React", "Node.js", "Spring Boot", ".NET", "PHP", "Java",
        "cloud architecture", "distributed systems"
    ]
}