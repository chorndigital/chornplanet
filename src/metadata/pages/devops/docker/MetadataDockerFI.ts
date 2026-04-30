import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDockerFI: Metadata = {
    title: "Docker DevOps -palvelut | Chorn Planet",
    description: "Docker-pohjainen DevOps-asiantuntemus tehokkaaseen konttien hallintaan ja skaalautuvaan sovellusten käyttöönottoon.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.devops.docker).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Docker DevOps -palvelut | Chorn Planet",
        description: "Hyödynnä Dockeria konttien hallintaan ja skaalautuvaan ohjelmistojen käyttöönottoon DevOps-asiantuntemuksella.",
        images: metadataLink(LanguageCode.fi, MetaLinks.devops.docker).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.devops.docker).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Docker DevOps -palvelut | Chorn Planet",
        description: "Docker DevOps -asiantuntemus konttien hallintaan ja skaalautuvaan sovellusten käyttöönottoon.",
        images: metadataLink(LanguageCode.fi, MetaLinks.devops.docker).twitter.images,
    },
    keywords: [
        "Docker DevOps", "Docker-asiantuntemus", "konttien hallinta", "Chorn Planet", "DevOps", "skaalautuva käyttöönotto",
        "räätälöity ohjelmistokehitys", "pilvipohjaiset sovellukset", "DevOps Suomi", "Docker-kontit"
    ]
};
