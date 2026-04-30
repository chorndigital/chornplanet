import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJavaScriptFI: Metadata = {
    title: "JavaScript | Chorn Planet - Räätälöityjen ohjelmistoratkaisujen asiantuntijat",
    description: "Hyödyntää JavaScriptiä luodakseen skaalautuvia, kestäviä ja tehokkaita räätälöityjä ohjelmistoratkaisuja yrityksille eri toimialoilla.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.frontend.javascript).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Chorn Planet - JavaScript räätälöity ohjelmistokehitys",
        description: "JavaScript-asiantuntemus, tehokas työkalu skaalautuvien ja suorituskykyisten sovellusten rakentamiseen. Opi, miksi valitsemme JavaScriptin räätälöityihin ohjelmistoratkaisuihin.",
        images: metadataLink(LanguageCode.fi, MetaLinks.frontend.javascript).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.frontend.javascript).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Chorn Planet - JavaScript kehitys räätälöityihin ohjelmistoratkaisuihin",
        description: "Hyödynnä JavaScriptiä toimittaaksesi skaalautuvia ja korkealaatuisia ohjelmistoratkaisuja, jotka on räätälöity yritysten tarpeiden mukaan.",
        images: metadataLink(LanguageCode.fi, MetaLinks.frontend.javascript).twitter.images,
    },
    keywords: [
        "JavaScript-kehitys", "JavaScript-asiantuntemus", "JavaScript-kehittäjä", "räätälöity JavaScript-kehitys",
        "JavaScript-verkkosovellukset", "JavaScript full stack kehitys", "JavaScript frontend kehitys",
        "räätälöity ohjelmistokehitys",
        "skaalautuvat verkkosovellukset", "frontend-kehitys", "backend-kehitys",
        "suorituskykyiset sovellukset", "yritysohjelmistoratkaisut", "räätälöidyt verkkosovellukset", "API-kehitys",
        "JavaScript-kehittäjä Thaimaa", "JavaScript-kehittäjä Bangkok", "JavaScript-kehittäjä Chiang Mai",
        "frontend-kehittäjä Thaimaa", "backend-kehittäjä Thaimaa", "full stack-kehittäjä Thaimaa",
        "ohjelmistoinsinööri", "ohjelmistokehittäjä Thaimaa",
        "Chorn Planet", "digitaalinen innovaatio", "yritysohjelmisto"
    ]
}
