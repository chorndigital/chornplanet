import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPrivacyPolicyNL: Metadata = {
    title: "Privacybeleid | Chorn Planet",
    description: "Chorn Planet respecteert uw privacy en zet zich in voor de bescherming van uw persoonlijke gegevens. Dit privacybeleid legt uit hoe gegevens worden verwerkt bij het gebruik van de website en het gebruik van cookies voor analytische doeleinden.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.nl, MetaLinks.privacyPolicy).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Privacybeleid | Chorn Planet",
        description: "Chorn Planet respecteert uw privacy en zet zich in voor de bescherming van uw persoonlijke gegevens. Dit privacybeleid legt uit hoe gegevens worden verwerkt bij het gebruik van de website en het gebruik van cookies voor analytische doeleinden.",
        images: metadataLink(LanguageCode.nl, MetaLinks.privacyPolicy).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.privacyPolicy).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacybeleid | Chorn Planet",
        description: "Chorn Planet respecteert uw privacy en zet zich in voor de bescherming van uw persoonlijke gegevens. Dit privacybeleid legt uit hoe gegevens worden verwerkt bij het gebruik van de website en het gebruik van cookies voor analytische doeleinden.",
        images: metadataLink(LanguageCode.nl, MetaLinks.privacyPolicy).twitter.images,
    },
}