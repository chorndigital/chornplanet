import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataSoapUIFI: Metadata = {
    title: "SoapUI Testauspalvelut | Chorn Planet",
    description: "SoapUI-testauksen asiantuntemusta varmistaaksesi, että API:t ja verkkotekniikka testataan perusteellisesti ja ovat luotettavia.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.devops.soapui).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "SoapUI Testaus | Chorn Planet",
        description: "Varmista API:esi ja verkkotekniikkasi luotettavuus testausasiantuntemuksella.",
        images: metadataLink(LanguageCode.fi, MetaLinks.devops.soapui).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.devops.soapui).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "SoapUI Testauspalvelut | Chorn Planet",
        description: "Optimoi API-testauksesi SoapUI-asiantuntemuksella kattavaan ja luotettavaan verkkopalvelutestaukseen.",
        images: metadataLink(LanguageCode.fi, MetaLinks.devops.soapui).twitter.images,
    },
    keywords: [
        "SoapUI testaus", "API testaus", "Chorn Planet", "Cloud DevOps",
        "Verkkopalvelutestaus", "Luotettava testaus", "Testiautomaatio",
        "Laadunvarmistus", "Ohjelmistotestaus", "API-luotettavuus",
        "Testausasiantuntemus Suomessa", "SoapUI asiantuntemus", "Web-sovellusten testaus"
    ]
};
