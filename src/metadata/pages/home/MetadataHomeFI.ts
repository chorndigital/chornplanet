import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHomeFI: Metadata = {
    title: "Chorn Planet | Mediaympäristö järjestelmille ja sovelletulle teknologialle",
    description:
        "Chorn Planet on mediaympäristö, joka esittelee jäsenneltyjä kuvauksia järjestelmäanalyysistä, ohjelmistotekniikasta, integraatiokäytännöistä ja sovelletuista teknologiateemoista, mukaan lukien tekoälyautomaatio, pilvijärjestelmät ja modernisointilähestymistavat, julkisiin, sijoittaja- ja politiikkakonteksteihin.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.en, MetaLinks.home).alternates,
    authors: [
        { name: "Chorn Planet" }
    ],
    openGraph: {
        title: "Chorn Planet | Mediaympäristö järjestelmille ja sovelletulle teknologialle",
        description:
            "Chorn Planet on mediaympäristö, joka esittelee jäsenneltyjä kuvauksia järjestelmäanalyysistä, ohjelmistotekniikasta, integraatiokäytännöistä ja sovelletuista teknologiateemoista, mukaan lukien tekoälyautomaatio, pilvijärjestelmät ja modernisointilähestymistavat, julkisiin, sijoittaja- ja politiikkakonteksteihin.",
        images: metadataLink(LanguageCode.en, MetaLinks.home).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.home).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Chorn Planet | Mediaympäristö järjestelmille ja sovelletulle teknologialle",
        description:
            "Chorn Planet on mediaympäristö, joka esittelee jäsenneltyjä kuvauksia järjestelmäanalyysistä, ohjelmistotekniikasta, integraatiokäytännöistä ja sovelletuista teknologiateemoista, mukaan lukien tekoälyautomaatio, pilvijärjestelmät ja modernisointilähestymistavat, julkisiin, sijoittaja- ja politiikkakonteksteihin.",
        images: metadataLink(LanguageCode.en, MetaLinks.home).twitter.images,
    },
    keywords: [
        "Chorn Planet", "Chorn Planet", "mediaympäristö", "järjestelmäanalyysi",
        "ohjelmistotekniikka", "järjestelmäintegraatio", "pilvijärjestelmät",
        "tekoälyintegraatio", "DevOps", "mikropalvelut", "tekninen arkkitehtuuri"
    ]
}