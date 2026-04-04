import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPostmanDA: Metadata = {
    title: "Postman API-testtjenester | Chorn Planet",
    description: "Tilbyd teknisk ekspertise til API-test med Postman for at sikre pålideligheden og ydeevnen af din webteknologi.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.devops.postman).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Postman API-testtjenester | Chorn Planet",
        description: "Sørg for, at dine API'er fungerer som forventet med Postman-baseret API-testteknisk ekspertise.",
        images: metadataLink(LanguageCode.da, MetaLinks.devops.postman).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.devops.postman).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Postman API-testtjenester | Chorn Planet",
        description: "Postman-baseret API-testteknisk ekspertise til at validere pålideligheden og ydeevnen af din webteknologi.",
        images: metadataLink(LanguageCode.da, MetaLinks.devops.postman).twitter.images,
    },
    keywords: [
        "Postman API-test", "Postman teknisk ekspertise", "API-test", "DevOps", "Automatiserede API-test", "Chorn Planet",
        "Webteknologi test", "API-ydeevne", "Brugerdefineret softwareudvikling", "DevOps Danmark"
    ]
}
