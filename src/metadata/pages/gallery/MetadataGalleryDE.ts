import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGalleryDE: Metadata = {
    title: "Internationale Reisen | Chorn Planet Galerie",
    description: "Chorn Planet verfügt über die Erfahrung und Bereitschaft für internationale Reisen, um Schulungen zu erhalten und aus der Arbeit in ASEAN und den Vereinigten Staaten zu lernen.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.gallery).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Internationale Reisen | Chorn Planet Galerie",
        description: "Chorn Planet verfügt über die Erfahrung und Bereitschaft für internationale Reisen, um Schulungen zu erhalten und aus der Arbeit in ASEAN und den Vereinigten Staaten zu lernen.",
        images: metadataLink(LanguageCode.de, MetaLinks.gallery).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.gallery).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Internationale Reisen | Chorn Planet Galerie",
        description: "Chorn Planet verfügt über die Erfahrung und Bereitschaft für internationale Reisen, um Schulungen zu erhalten und aus der Arbeit in ASEAN und den Vereinigten Staaten zu lernen.",
        images: metadataLink(LanguageCode.de, MetaLinks.gallery).twitter.images,
    },
}