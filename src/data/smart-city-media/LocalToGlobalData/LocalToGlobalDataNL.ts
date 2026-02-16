//data/smart-city-media/LocalToGlobalDataNL.ts

import {ILocalToGlobal} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const LocalToGlobalDataNL: ILocalToGlobal = {
    headline: "Van lokale context naar mondiale patronen",
    paragraph:
        "Stedelijke activiteit wordt doorgaans waargenomen binnen lokale en specifieke contexten. Wanneer vergelijkbare omstandigheden worden geobserveerd in verschillende steden, regio’s en culturen, kunnen terugkerende patronen worden geïdentificeerd. Door alledaagse situaties tussen locaties te vergelijken, kunnen gedeelde structurele systemen worden onderzocht.",

    items: [
        {
            title: "Een routine op straatniveau",
            description:
                "Dagelijkse verplaatsing langs een vertrouwde straat illustreert hoe individuen reageren op ruimtelijke omstandigheden, tijdsstructuren en mobiliteitssystemen. Hoewel lokaal specifiek, weerspiegelen deze routines onderliggende structurele patronen die zijn gevormd door stedelijk ontwerp.",
            image: {
                url: "/smart-city/local-to-global/local-street-daily-routine.png",
                alt: "Alledaagse stedelijke straatomgeving met voetgangers, lokale winkels en mobiliteitssystemen in gebruik",
            },
            signalFocus: ["human routine", "street-level mobility", "local behavior"],
        },
        {
            title: "Terugkerende patronen tussen steden",
            description:
                "Wanneer vergelijkbare bewegingsstructuren in meerdere steden worden waargenomen, wijzen deze op vergelijkbare structurele omstandigheden. Lokaal geobserveerde activiteit kan daarom worden onderzocht als onderdeel van breder stedelijk systeemgedrag over regio’s heen.",
            image: {
                url: "/smart-city/local-to-global/global-urban-pattern.png",
                alt: "Stedelijke omgeving met vergelijkbare mobiliteitsstromen, logistieke systemen en gebruik van openbare ruimte in verschillende steden",
            },
            signalFocus: ["replicability", "urban density", "systemic flow"],
        },
    ],

    purpose: "Brede structurele patronen onderzoeken via lokale vergelijking",
    narrativeRole: "Geobserveerde lokale activiteit verbinden met systeemanalyse",
    section: "From Local Life to Global Pattern",
    category: "Smart City Media",
    landingUrl: "/smart-city/from-local-life-to-global-pattern",
    lang: "nl",
};