import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataTermOfServiceDE: Metadata = {
    title: "Nutzungsbedingungen | Chorn Planet",
    description: "Chorn Planet stellt die Nutzungsbedingungen bereit, die die Nutzung dieser Website regeln. Durch den Zugriff auf oder die Nutzung der Website erklären Sie sich mit diesen Bedingungen einverstanden.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.de, MetaLinks.termOfServices).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Nutzungsbedingungen | Chorn Planet",
        description: "Chorn Planet stellt die Nutzungsbedingungen bereit, die die Nutzung dieser Website regeln. Durch den Zugriff auf oder die Nutzung der Website erklären Sie sich mit diesen Bedingungen einverstanden.",
        images: metadataLink(LanguageCode.de, MetaLinks.termOfServices).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.termOfServices).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Nutzungsbedingungen | Chorn Planet",
        description: "Chorn Planet stellt die Nutzungsbedingungen bereit, die die Nutzung dieser Website regeln. Durch den Zugriff auf oder die Nutzung der Website erklären Sie sich mit diesen Bedingungen einverstanden.",
        images: metadataLink(LanguageCode.de, MetaLinks.termOfServices).twitter.images,
    },
}