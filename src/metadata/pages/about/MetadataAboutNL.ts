import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAboutNL: Metadata = {
    title: "Over Chorn Planet | Systeemanalyse & Full-Stack Softwareontwikkelingstechniek",
    description: "Ontdek de expertise van Chorn Planet in systeemanalyse, full-stack ontwikkeling en moderne softwareoplossingen die zakelijk succes stimuleren.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.about).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Chorn Planet - Experts in Systeemanalyse & Full-Stack Softwareontwikkelingstechniek",
        description: "Verken CHORNs toewijding aan het leveren van geavanceerde systeemmodernisering, full-stack ontwikkeling en technische ondersteuning voor bedrijven.",
        images: metadataLink(LanguageCode.nl, MetaLinks.about).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.about).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Chorn Planet - Toonaangevend in Systeemanalyse & Full-Stack Softwareontwikkelingstechniek",
        description: "Ontgrendel zakelijk potentieel met CHORNs geavanceerde systeemanalyse, full-stack ontwikkeling en moderne softwareoplossingen.",
        images: metadataLink(LanguageCode.nl, MetaLinks.about).twitter.images,
    },
}