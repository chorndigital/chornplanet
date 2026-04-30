import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataFrontEndMainDE: Metadata = {
    title: "Frontend-Entwicklungsdienstleistungen | Chorn Planet",
    description: "Chorn Planet bietet Fachwissen in der Frontend-Entwicklung mit modernen Frameworks wie Next.js, React, Angular, Vue, HTML5 und CSS3. Erstellen Sie responsive und skalierbare Websites mit modernster Technologie.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.frontend.main).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Frontend-Entwicklungsdienstleistungen | Chorn Planet",
        description: "Chorn Planet bietet Fachwissen in der Frontend-Entwicklung mit modernen Technologien wie Next.js, React, Angular, Vue, HTML5 und CSS3, um schnelle, responsive und skalierbare Websites zu erstellen.",
        images: metadataLink(LanguageCode.de, MetaLinks.frontend.main).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.frontend.main).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Frontend-Entwicklungsdienstleistungen | Chorn Planet",
        description: "Chorn Planet bietet Fachwissen in der Frontend-Entwicklung mit Next.js, React, Angular, Vue, HTML5 und CSS3 für responsive und skalierbare Websites.",
        images: metadataLink(LanguageCode.de, MetaLinks.frontend.main).twitter.images,
    },
    keywords: [
        "Frontend-Entwicklung", "Frontend-Experten", "Frontend-Entwickler", "individuelle Frontend-Entwicklung",
        "dynamische Benutzeroberflächen", "Single-AiBannerFahMain-Anwendungen", "responsives Webdesign",
        "leistungsstarke Frontend-Anwendungen", "individuelle Softwareentwicklung",
        "React-Entwicklung", "Angular-Entwicklung", "Vue.js-Entwicklung", "Next.js Frontend-Entwicklung",
        "React.js-Entwicklung", "individuelle Angular-Frontend-Entwicklung", "React.js-Frontend-Anwendungen",
        "Vue.js Frontend-Experten", "individuelle Vue.js-Entwicklung",
        "Frontend-Entwickler Deutschland", "Webentwickler Deutschland", "Softwareingenieur Deutschland",
        "Chorn Planet", "digitale Innovation", "Unternehmenssoftware", "skalierbare Webanwendungen"
    ]
}