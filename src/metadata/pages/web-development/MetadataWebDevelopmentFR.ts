import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataWebDevelopmentFR: Metadata = {
    title: "Services de développement web | Solutions logicielles personnalisées et technologiques",
    description: "Découvrez l'expertise technique de Chorn Planet en développement web, incluant une expertise dans Next.js, React, Angular, Vue et plus. Chorn Planet propose des solutions sur mesure pour les entreprises dans des domaines variés tels que le marketing numérique, la blockchain, l'e-commerce et plus encore.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.webDevelopment).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Services de développement web de premier plan | Chorn Planet",
        description: "Chorn Planet offre une expertise technique de pointe en développement web, avec une expertise dans des frameworks populaires comme Next.js, React, Angular et bien plus encore. Chorn Planet répond aux besoins d'affaires variés, incluant le marketing numérique, l'e-commerce, la blockchain et plus encore.",
        images: metadataLink(LanguageCode.fr, MetaLinks.webDevelopment).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.webDevelopment).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Services de développement web | Chorn Planet",
        description: "Découvrez l'expertise de Chorn Planet en développement web. De Next.js à Angular et bien plus, Chorn Planet propose des solutions pour tous les besoins d'affaires incluant le marketing numérique, la blockchain, l'e-commerce et plus encore.",
        images: metadataLink(LanguageCode.fr, MetaLinks.webDevelopment).twitter.images
    },
    keywords: [
        "développement web", "expertise en développement web", "développeur web", "développement web personnalisé",
        "développement web responsive", "sites web dynamiques", "développement web pour entreprises",
        "applications web évolutives", "applications web personnalisées", "développement de logiciels personnalisés",
        "développeur web full stack senior", "développeur web principal", "développeur web .NET Core Angular senior",
        "développeur React Node.js senior", "développeur React Java principal", "développeur Angular Spring Boot senior",
        "développeur PHP Laravel principal", "développeur web senior", "développement web .NET Core", "développement web React",
        "développement web Angular", "développement web Vue.js", "développement web Node.js", "développement web Java Spring Boot",
        "développement web PHP Laravel", "développement web React personnalisé", "développement web Angular pour entreprises",
        "développeur web Thaïlande", "développeur web Bangkok", "développeur web Chiang Mai", "développeur web senior Thaïlande",
        "développeur web principal Thaïlande", "développeur back-end Thaïlande", "développeur front-end Thaïlande", "ingénieur logiciel Thaïlande",
        "Chorn Planet", "innovation numérique", "logiciels pour entreprises", "applications web évolutives"
    ]
}