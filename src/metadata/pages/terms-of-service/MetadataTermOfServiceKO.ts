import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataTermOfServiceKO: Metadata = {
    title: "서비스 이용약관 | Chorn Planet",
    description: "Chorn Planet은 이 웹사이트 이용을 규정하는 서비스 이용약관을 제공합니다. 웹사이트에 접속하거나 이용함으로써 귀하는 본 약관을 준수하는 것에 동의하게 됩니다.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.ko, MetaLinks.termOfServices).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "서비스 이용약관 | Chorn Planet",
        description: "Chorn Planet은 이 웹사이트 이용을 규정하는 서비스 이용약관을 제공합니다. 웹사이트에 접속하거나 이용함으로써 귀하는 본 약관을 준수하는 것에 동의하게 됩니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.termOfServices).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.termOfServices).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "서비스 이용약관 | Chorn Planet",
        description: "Chorn Planet은 이 웹사이트 이용을 규정하는 서비스 이용약관을 제공합니다. 웹사이트에 접속하거나 이용함으로써 귀하는 본 약관을 준수하는 것에 동의하게 됩니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.termOfServices).twitter.images,
    },
}
