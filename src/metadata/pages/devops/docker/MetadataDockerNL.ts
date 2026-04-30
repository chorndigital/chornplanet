import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDockerNL: Metadata = {
    title: "Docker DevOps Diensten | Chorn Planet",
    description: "Docker-gebaseerde DevOps technische expertise voor efficiënte containerisatie en schaalbare applicatie-implementatie.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.devops.docker).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Docker DevOps Diensten | Chorn Planet",
        description: "Gebruik Docker voor containerisatie en schaalbare software-implementatie met DevOps technische expertise.",
        images: metadataLink(LanguageCode.nl, MetaLinks.devops.docker).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.devops.docker).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Docker DevOps Diensten | Chorn Planet",
        description: "Docker DevOps technische expertise voor containerisatie en schaalbare applicatie-implementatie.",
        images: metadataLink(LanguageCode.nl, MetaLinks.devops.docker).twitter.images,
    },
    keywords: [
        "Docker DevOps", "Docker technische expertise", "containerisatie", "Chorn Planet", "DevOps", "schaalbare implementatie",
        "op maat gemaakte softwareontwikkeling", "cloudgebaseerde applicaties", "DevOps Nederland", "Docker containers"
    ]
};
