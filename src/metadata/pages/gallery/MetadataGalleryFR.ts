import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGalleryFR: Metadata = {
    title: "Voyages Internationaux | Galerie Chorn Planet",
    description: "Chorn Planet possède l'expérience et la préparation nécessaires pour les voyages internationaux afin de recevoir une formation et d'apprendre du travail en ASEAN et aux États-Unis.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.gallery).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Voyages Internationaux | Galerie Chorn Planet",
        description: "Chorn Planet possède l'expérience et la préparation nécessaires pour les voyages internationaux afin de recevoir une formation et d'apprendre du travail en ASEAN et aux États-Unis.",
        images: metadataLink(LanguageCode.fr, MetaLinks.gallery).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.gallery).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Voyages Internationaux | Galerie Chorn Planet",
        description: "Chorn Planet possède l'expérience et la préparation nécessaires pour les voyages internationaux afin de recevoir une formation et d'apprendre du travail en ASEAN et aux États-Unis.",
        images: metadataLink(LanguageCode.fr, MetaLinks.gallery).twitter.images,
    },
}