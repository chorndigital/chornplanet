import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataContactFR: Metadata = {
    title: "À propos de Chorn Planet | Analyse de système et ingénierie de développement logiciel Full-Stack",
    description: "Découvrez l'expertise de Chorn Planet en analyse de système, développement full-stack et solutions logicielles modernes qui favorisent le succès des entreprises.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.contact).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Chorn Planet - Experts en analyse de système et ingénierie de développement logiciel Full-Stack",
        description: "Explorez l'engagement de Chorn Planet à fournir une modernisation de système de pointe, un développement full-stack et un support technique pour les entreprises.",
        images: metadataLink(LanguageCode.fr, MetaLinks.contact).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.contact).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Chorn Planet - Leader en analyse de système et ingénierie de développement logiciel Full-Stack",
        description: "Libérez le potentiel de votre entreprise avec l'analyse de système avancée, le développement full-stack et les solutions logicielles modernes de Chorn Planet.",
        images: metadataLink(LanguageCode.fr, MetaLinks.contact).twitter.images,
    },
}