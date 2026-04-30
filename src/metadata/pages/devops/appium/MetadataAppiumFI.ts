import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAppiumFI: Metadata = {
    title: "Appium-testauspalvelut | Chorn Planet",
    description: "Appium-testauksen asiantuntemus automatisoituun mobiilisovellusten testaukseen eri alustoilla laadukkaan suorituskyvyn varmistamiseksi.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.devops.appium).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Appium-testaus | Chorn Planet",
        description: "Automatisoi mobiilisovellustestauksesi Appium-asiantuntemuksella kattavaa monialustatestausta varten.",
        images: metadataLink(LanguageCode.fi, MetaLinks.devops.appium).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.devops.appium).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Appium-testauspalvelut | Chorn Planet",
        description: "Varmista, että mobiilisovelluksesi toimivat moitteettomasti Appium-testauksen asiantuntemuksella kattavaan ja automatisoituun monialustatestaamiseen.",
        images: metadataLink(LanguageCode.fi, MetaLinks.devops.appium).twitter.images,
    },
    keywords: [
        "Appium-testaus", "Mobiilisovellusten testaus", "Chorn Planet", "Cloud DevOps",
        "Monialustatestaus", "Testiautomaatiot", "Laadunvarmistus",
        "Mobiilitestausasiantuntemus", "Ohjelmistotestaus", "Sovelluksen suorituskyky",
        "Testausasiantuntemus Suomessa", "Appium-asiantuntemus", "Mobiilisovellustestaus"
    ]
};
