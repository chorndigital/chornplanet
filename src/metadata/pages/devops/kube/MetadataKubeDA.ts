import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataKubeDA: Metadata = {
    title: "Kubernetes DevOps Services | Chorn Planet",
    description: "Kubernetes-baseret DevOps teknisk ekspertise til at automatisere implementering, skalering og administration af containeriserede applikationer.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.devops.kube).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Kubernetes DevOps Services | Chorn Planet",
        description: "Optimer din infrastruktur med Kubernetes-baseret DevOps teknisk ekspertise til automatisk skalering og administration af applikationer.",
        images: metadataLink(LanguageCode.da, MetaLinks.devops.kube).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.devops.kube).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Kubernetes DevOps Services | Chorn Planet",
        description: "Udnyt Kubernetes DevOps ekspertise til automatisk at skalere og administrere containeriserede applikationer.",
        images: metadataLink(LanguageCode.da, MetaLinks.devops.kube).twitter.images,
    },
    keywords: [
        "Kubernetes DevOps", "Kubernetes teknisk ekspertise", "container orkestrering", "Chorn Planet", "DevOps",
        "skalérbar applikationsadministration", "automatisk skalering", "DevOps Danmark", "cloud-native applikationer"
    ]
};
