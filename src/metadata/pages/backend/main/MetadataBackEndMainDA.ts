import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataBackEndMainDA: Metadata = {
    title: "Back-End API-udvikling | Chorn Planet",
    description: "Back-End API-udviklingstjenester med teknisk ekspertise ved hjælp af moderne teknologier som Node.js, Java Spring Boot, .NET Core, Go, Python og PHP for at skabe højkvalitets og skalerbare applikationer til forretningsbehov.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.backend.main).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Back-End API-udvikling | Chorn Planet",
        description: "Back-End API-udvikling med teknisk ekspertise ved hjælp af Node.js, Java Spring Boot, .NET Core, Go, Python og PHP for at bygge skalerbare applikationer.",
        images: metadataLink(LanguageCode.da, MetaLinks.backend.main).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.backend.main).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Back-End API-udvikling | Chorn Planet",
        description: "Udvikling af skalerbare webapplikationer ved hjælp af Node.js, Java Spring Boot, .NET Core, Go, Python og PHP.",
        images: metadataLink(LanguageCode.da, MetaLinks.backend.main).twitter.images,
    },
}