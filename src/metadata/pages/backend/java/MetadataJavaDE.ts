import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJavaDE: Metadata = {
    title: "Java Spring Boot Full Stack Entwicklung | Chorn Planet",
    description: "Java Spring Boot Full Stack Entwicklung, technische Expertise zum Aufbau robuster und skalierbarer Unternehmensanwendungen.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.backend.java).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Java Spring Boot Entwicklung | Chorn Planet",
        description: "Nutzen Sie die Java Spring Boot Full Stack Entwicklung mit technischer Expertise, um skalierbare, sichere und leistungsstarke Anwendungen zu erstellen.",
        images: metadataLink(LanguageCode.de, MetaLinks.backend.java).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.backend.java).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Java Spring Boot Full Stack Entwicklung | Chorn Planet",
        description: "Fachkundige Java Spring Boot Full Stack Entwicklung für sichere und skalierbare Anwendungen.",
        images: metadataLink(LanguageCode.de, MetaLinks.backend.java).twitter.images,
    },
    keywords: [
        "Spring Boot Entwicklung", "Java Spring Boot technische Expertise", "Spring Boot Entwickler", "Individuelle Java Entwicklung",
        "Java Spring Boot Anwendungen", "Enterprise Java Entwicklung", "Spring Boot Microservices",
        "Individuelle Softwareentwicklung", "Skalierbare Webanwendungen", "Backend Entwicklung", "Enterprise Softwarelösungen",
        "Hochleistungsanwendungen", "Java Webanwendungen", "Microservices Entwicklung", "API Entwicklung",
        "Spring Boot Entwickler Thailand", "Java Entwickler Thailand", "Java Entwickler Bangkok",
        "Java Entwickler Chiang Mai", "Backend Entwickler Thailand", "Softwareingenieur", "Softwareentwickler Thailand",
        "Chorn Planet", "Digitale Innovation", "Enterprise Software"
    ]
}
