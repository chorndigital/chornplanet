import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGalleryFI: Metadata = {
    title: "Kansainväliset Matkat | Chorn Planet Galleria",
    description: "CHORNilla on kokemus ja valmius kansainvälisiin matkoihin koulutuksen saamiseksi ja työstä oppimiseen ASEAN-maissa ja Yhdysvalloissa.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.gallery).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Kansainväliset Matkat | Chorn Planet Galleria",
        description: "CHORNilla on kokemus ja valmius kansainvälisiin matkoihin koulutuksen saamiseksi ja työstä oppimiseen ASEAN-maissa ja Yhdysvalloissa.",
        images: metadataLink(LanguageCode.fi, MetaLinks.gallery).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.gallery).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Kansainväliset Matkat | Chorn Planet Galleria",
        description: "CHORNilla on kokemus ja valmius kansainvälisiin matkoihin koulutuksen saamiseksi ja työstä oppimiseen ASEAN-maissa ja Yhdysvalloissa.",
        images: metadataLink(LanguageCode.fi, MetaLinks.gallery).twitter.images,
    },
}