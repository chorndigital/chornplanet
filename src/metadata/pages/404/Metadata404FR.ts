import {LanguageCode} from "@/data/translate/LanguageCode";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {Metadata} from "next";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const Metadata404FR: Metadata = {
    title: "404 - AiBannerFahMain Non Trouvée",
    description: "Oups ! Nous n'avons pas trouvé la page que vous cherchiez. Veuillez vérifier l'URL ou retourner à notre page d'accueil pour continuer à explorer Chorn Planet.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.fr, MetaLinks._404).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "404 - AiBannerFahMain Non Trouvée",
        description: "Oups ! Nous n'avons pas trouvé la page que vous cherchiez. Veuillez vérifier l'URL ou retourner à notre page d'accueil pour continuer à explorer Chorn Planet.",
        url: metadataLink(LanguageCode.fr, MetaLinks._404).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "404 - AiBannerFahMain Non Trouvée",
        description: "Oups ! Nous n'avons pas trouvé la page que vous cherchiez. Veuillez vérifier l'URL ou retourner à notre page d'accueil pour continuer à explorer Chorn Planet.",
        images: metadataLink(LanguageCode.fr, MetaLinks._404).twitter.images,
    },
}