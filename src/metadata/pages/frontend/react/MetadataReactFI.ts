import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataReactFI: Metadata = {
    title: "React-kehityspalvelut | Chorn Planet",
    description: "Huipputason React-kehitys teknisellä asiantuntemuksella, rakenna dynaamisia ja responsiivisia käyttöliittymiä Reactilla.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.frontend.react).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "React-kehitys | Chorn Planet",
        description: "Paranna verkkosovelluksiasi asiantuntevalla React-kehityksellä, tekninen asiantuntemus suorituskykyisiin sovelluksiin.",
        images: metadataLink(LanguageCode.fi, MetaLinks.frontend.react).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.frontend.react).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "React-kehityspalvelut | Chorn Planet",
        description: "Asiantuntevaa React-kehitystä, teknistä asiantuntemusta houkuttelevien käyttöliittymien luomiseksi Reactilla.",
        images: metadataLink(LanguageCode.fi, MetaLinks.frontend.react).twitter.images,
    },
    keywords: [
        "React-kehitys", "React-asiantuntemus", "React-kehittäjä", "Mukautettu React-kehitys", "React.js-sovellukset",
        "Full-stack React-kehitys", "React-yksisivuiset sovellukset", "React-käyttöliittymät", "Mukautetut verkkosovellukset",
        "Mukautettu ohjelmistokehitys",
        "Skaalautuvat verkkosovellukset", "Frontend-kehitys", "Suorituskykyiset verkkosovellukset",
        "Dynaamiset käyttöliittymät", "Yksisivuiset sovellukset", "React.js-kehittäjä",
        "React-kehittäjä Suomi", "React-kehittäjä Helsinki", "React-kehittäjä Tampere", "Frontend-kehittäjä Suomi",
        "Verkkokehittäjä Helsinki", "Ohjelmistoinsinööri", "Ohjelmistokehittäjä Suomi",
        "Chorn Planet", "Digitaalinen innovaatio", "Yritysohjelmointi"
    ]
}
