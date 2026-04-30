import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJavaNL: Metadata = {
    title: "Java Spring Boot Full Stack Ontwikkeling | Chorn Planet",
    description: "Java Spring Boot full stack ontwikkeling, technische expertise om robuuste en schaalbare bedrijfstoepassingen te bouwen.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.backend.java).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Java Spring Boot Ontwikkeling | Chorn Planet",
        description: "Maak gebruik van Java Spring Boot full stack ontwikkeling met technische expertise om schaalbare, veilige en high-performance toepassingen te bouwen.",
        images: metadataLink(LanguageCode.nl, MetaLinks.backend.java).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.backend.java).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Java Spring Boot Full Stack Ontwikkeling | Chorn Planet",
        description: "Expert Java Spring Boot full stack ontwikkeling voor veilige en schaalbare toepassingen.",
        images: metadataLink(LanguageCode.nl, MetaLinks.backend.java).twitter.images,
    },
    keywords: [
        "Spring Boot ontwikkeling", "Java Spring Boot technische expertise", "Spring Boot ontwikkelaar", "Maatwerk Java ontwikkeling",
        "Java Spring Boot toepassingen", "Enterprise Java ontwikkeling", "Spring Boot microservices",
        "Maatwerk softwareontwikkeling", "Schaalbare webtoepassingen", "Backend ontwikkeling", "Enterprise softwareoplossingen",
        "High-performance toepassingen", "Java webtoepassingen", "Microservices ontwikkeling", "API ontwikkeling",
        "Spring Boot ontwikkelaar Thailand", "Java ontwikkelaar Thailand", "Java ontwikkelaar Bangkok",
        "Java ontwikkelaar Chiang Mai", "Backend ontwikkelaar Thailand", "Software engineer", "Software ontwikkelaar Thailand",
        "Chorn Planet", "Digitale innovatie", "Enterprise software"
    ]
}
