import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPythonDA: Metadata = {
    title: "Python Full Stack Udvikling | Chorn Planet",
    description: "Python full stack udvikling, teknisk ekspertise til at bygge dynamiske og skalerbare webapplikationer.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.backend.python).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Python Udvikling | Chorn Planet",
        description: "Byg dynamiske og skalerbare webapplikationer med teknisk ekspertise inden for Python full stack udvikling.",
        images: metadataLink(LanguageCode.da, MetaLinks.backend.python).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.backend.python).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Python Full Stack Udvikling | Chorn Planet",
        description: "Ekspertise i Python full stack udvikling til dynamiske og skalerbare webapplikationer.",
        images: metadataLink(LanguageCode.da, MetaLinks.backend.python).twitter.images,
    },
    keywords: [
        "Python udvikling", "Python teknisk ekspertise", "Python udvikler", "custom Python udvikling", "Python webapplikationer",
        "Python backend udvikling", "Python full stack udvikling", "custom software udvikling",
        "Skalerbare webapplikationer", "Backend udvikling", "Enterprise Python applikationer",
        "Højtydende applikationer", "Custom webapplikationer", "API udvikling", "Maskinlæring udvikling",
        "Python udvikler Thailand", "Python udvikler Bangkok", "Python udvikler Chiang Mai",
        "Backend udvikler Thailand", "Software ingeniør", "Software udvikler Thailand",
        "Chorn Planet", "Digital innovation", "Enterprise software"
    ]
}
