import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHomeFI: Metadata = {
    title: "CHORN | Mediaympäristö järjestelmille ja sovelletulle teknologialle",
    description:
        "CHORN on mediaympäristö, joka esittelee jäsenneltyjä kuvauksia järjestelmäanalyysistä, ohjelmistotekniikasta, integraatiokäytännöistä ja sovelletuista teknologiateemoista, mukaan lukien tekoälyautomaatio, pilvijärjestelmät ja modernisointilähestymistavat, julkisiin, sijoittaja- ja politiikkakonteksteihin.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.en, MetaLinks.home).alternates,
    authors: [
        { name: "Chorn Planet" }
    ],
    openGraph: {
        title: "CHORN | Mediaympäristö järjestelmille ja sovelletulle teknologialle",
        description:
            "CHORN on mediaympäristö, joka esittelee jäsenneltyjä kuvauksia järjestelmäanalyysistä, ohjelmistotekniikasta, integraatiokäytännöistä ja sovelletuista teknologiateemoista, mukaan lukien tekoälyautomaatio, pilvijärjestelmät ja modernisointilähestymistavat, julkisiin, sijoittaja- ja politiikkakonteksteihin.",
        images: metadataLink(LanguageCode.en, MetaLinks.home).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.home).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN | Mediaympäristö järjestelmille ja sovelletulle teknologialle",
        description:
            "CHORN on mediaympäristö, joka esittelee jäsenneltyjä kuvauksia järjestelmäanalyysistä, ohjelmistotekniikasta, integraatiokäytännöistä ja sovelletuista teknologiateemoista, mukaan lukien tekoälyautomaatio, pilvijärjestelmät ja modernisointilähestymistavat, julkisiin, sijoittaja- ja politiikkakonteksteihin.",
        images: metadataLink(LanguageCode.en, MetaLinks.home).twitter.images,
    },
    keywords: [
        "CHORN", "Chorn Planet", "mediaympäristö", "järjestelmäanalyysi",
        "ohjelmistotekniikka", "järjestelmäintegraatio", "pilvijärjestelmät",
        "tekoälyintegraatio", "DevOps", "mikropalvelut", "tekninen arkkitehtuuri"
    ]
}