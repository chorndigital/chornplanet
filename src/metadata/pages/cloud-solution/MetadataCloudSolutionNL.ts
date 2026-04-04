import {Metadata} from "next";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataCloudSolutionNL: Metadata = {
    title: "Cloudoplossingsarchitectuur & Systeemanalyse | Chorn Planet | AWS, Azure, GCP, DigitalOcean",
    description: "Chorn Planet biedt deskundigheid in cloudoplossingsarchitectuur en systeemanalyse. Wij optimaliseren cloudinfrastructuren op AWS, Azure, GCP en DigitalOcean, met focus op prestaties, schaalbaarheid en kostenefficiëntie.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.cloudSolutions).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Cloudoplossingsarchitectuur & Systeemanalyse | Chorn Planet",
        description: "Ontdek de expertise van Chorn Planet in cloudoplossingsarchitectuur en systeemanalyse. Wij ontwerpen robuuste, schaalbare en geoptimaliseerde cloudoplossingen op AWS, Azure, GCP en DigitalOcean.",
        images: metadataLink(LanguageCode.nl, MetaLinks.cloudSolutions).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.cloudSolutions).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Cloudoplossingsarchitectuur & Systeemanalyse | Chorn Planet",
        description: "Optimaliseer uw cloudinfrastructuur met de expertise van Chorn Planet in cloudoplossingsarchitectuur en systeemanalyse, inclusief AWS, Azure, GCP en DigitalOcean.",
        images: metadataLink(LanguageCode.nl, MetaLinks.cloudSolutions).twitter.images,
    },
    keywords: [
        "cloudoplossingsarchitectuur", "systeemanalyse", "AWS-architectuur", "Azure-cloudoplossingen",
        "GCP-architectuur", "DigitalOcean-infrastructuur", "cloudoptimalisatie", "multi-cloudstrategieën",
        "cloudschaalbaarheid", "cloudinfrastructuurontwerp", "cloudbeveiligingsanalyse",

        "AWS-cloudadvies", "Azure-systeemintegratie", "GCP-kostenoptimalisatie", "DigitalOcean-oplossingen",
        "cloudmigratie-expertise", "cloudprestatieoptimalisatie", "multi-cloudintegratie", "cloud-native applicaties",

        "cloudarchitect Nederland", "AWS-architect Nederland", "Azure-architect Nederland", "GCP-architect Nederland",
        "DigitalOcean-ontwikkelaar Nederland", "systeemanalyse-expert Nederland", "cloudinfrastructuur-expert Nederland",

        "Chorn Planet", "cloudoplossingen", "digitale innovatie", "cloudinfrastructuurontwerp", "schaalbare cloudsystemen"
    ]
}