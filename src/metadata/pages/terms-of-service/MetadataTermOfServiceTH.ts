import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataTermOfServiceTH: Metadata = {
    title: "เงื่อนไขการให้บริการ | Chorn Planet",
    description: "Chorn Planet จัดทำเงื่อนไขการให้บริการเพื่อควบคุมการใช้งานเว็บไซต์ การเข้าถึงหรือการใช้งานเว็บไซต์นี้ถือว่าคุณยอมรับที่จะปฏิบัติตามเงื่อนไขเหล่านี้",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.th, MetaLinks.termOfServices).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "เงื่อนไขการให้บริการ | Chorn Planet",
        description: "Chorn Planet จัดทำเงื่อนไขการให้บริการเพื่อควบคุมการใช้งานเว็บไซต์ การเข้าถึงหรือการใช้งานเว็บไซต์นี้ถือว่าคุณยอมรับที่จะปฏิบัติตามเงื่อนไขเหล่านี้",
        images: metadataLink(LanguageCode.th, MetaLinks.termOfServices).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.termOfServices).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "เงื่อนไขการให้บริการ | Chorn Planet",
        description: "Chorn Planet จัดทำเงื่อนไขการให้บริการเพื่อควบคุมการใช้งานเว็บไซต์ การเข้าถึงหรือการใช้งานเว็บไซต์นี้ถือว่าคุณยอมรับที่จะปฏิบัติตามเงื่อนไขเหล่านี้",
        images: metadataLink(LanguageCode.th, MetaLinks.termOfServices).twitter.images,
    },
}