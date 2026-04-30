import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJenkinsNL: Metadata = {
    title: "Jenkins DevOps Diensten | Chorn Planet",
    description: "DevOps technische expertise gebaseerd op Jenkins voor het automatiseren van builds, tests en implementaties in uw ontwikkel-pijplijn.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.devops.jenkins).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Jenkins DevOps Diensten | Chorn Planet",
        description: "Automatiseer uw ontwikkelingsproces met Jenkins-gebaseerde DevOps technische expertise voor continue integratie en implementatie.",
        images: metadataLink(LanguageCode.nl, MetaLinks.devops.jenkins).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.devops.jenkins).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Jenkins DevOps Diensten | Chorn Planet",
        description: "Verbeter uw softwareontwikkelingscyclus met Jenkins-gebaseerde DevOps technische expertise van Chorn Planet voor CI/CD-automatisering.",
        images: metadataLink(LanguageCode.nl, MetaLinks.devops.jenkins).twitter.images,
    },
    keywords: [
        "Jenkins DevOps", "Jenkins technische expertise", "CI/CD automatisering", "DevOps", "continue integratie", "DevOps Nederland",
        "Jenkins pipeline", "geautomatiseerde tests", "build automatisering", "maatwerksoftwareontwikkeling"
    ]
};
