import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPythonNL: Metadata = {
    title: "Python Full Stack Ontwikkeling | Chorn Planet",
    description: "Python full stack ontwikkeling, technische expertise voor het bouwen van dynamische en schaalbare webapplicaties.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.backend.python).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Python Ontwikkeling | Chorn Planet",
        description: "Bouw dynamische en schaalbare webapplicaties met de technische expertise van Python full stack ontwikkeling.",
        images: metadataLink(LanguageCode.nl, MetaLinks.backend.python).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.backend.python).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Python Full Stack Ontwikkeling | Chorn Planet",
        description: "Expertise in Python full stack ontwikkeling voor dynamische en schaalbare webapplicaties.",
        images: metadataLink(LanguageCode.nl, MetaLinks.backend.python).twitter.images,
    },
    keywords: [
        "Python ontwikkeling", "Python technische expertise", "Python ontwikkelaar", "maatwerk Python ontwikkeling", "Python webapplicaties",
        "Python backend ontwikkeling", "Python full stack ontwikkeling", "maatwerk software ontwikkeling",
        "Schaalbare webapplicaties", "Backend ontwikkeling", "Enterprise Python applicaties",
        "Hoge prestaties applicaties", "Maatwerk webapplicaties", "API ontwikkeling", "Machine learning ontwikkeling",
        "Python ontwikkelaar Thailand", "Python ontwikkelaar Bangkok", "Python ontwikkelaar Chiang Mai",
        "Backend ontwikkelaar Thailand", "Software engineer", "Software ontwikkelaar Thailand",
        "Chorn Planet", "Digitale innovatie", "Enterprise software"
    ]
}
