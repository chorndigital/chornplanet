//data/smart-city-media/LocalToGlobalDataDA.ts

import {ILocalToGlobal} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const LocalToGlobalDataDA: ILocalToGlobal = {
    headline: "Fra lokal kontekst til globale mønstre",
    paragraph:
        "Urban aktivitet opleves typisk inden for lokale og specifikke sammenhænge. Når lignende forhold observeres på tværs af byer, regioner og kulturer, kan tilbagevendende mønstre identificeres. Sammenligning af hverdagssituationer mellem forskellige steder gør det muligt at analysere fælles strukturelle systemer.",

    items: [
        {
            title: "En gaderutine på lokalt niveau",
            description:
                "Daglig bevægelse langs en velkendt gade illustrerer, hvordan individer tilpasser sig rumlige forhold, tidsstrukturer og mobilitetssystemer. Selvom rutinerne er lokalt forankrede, afspejler de underliggende strukturelle mønstre formet af byens udformning.",
            image: {
                url: "/smart-city/local-to-global/local-street-daily-routine.png",
                alt: "Hverdagsligt bymiljø med fodgængere, lokale butikker og mobilitetssystemer i drift",
            },
            signalFocus: ["human routine", "street-level mobility", "local behavior"],
        },
        {
            title: "Tilbagevendende mønstre på tværs af byer",
            description:
                "Når lignende bevægelsesstrukturer observeres i flere byer, indikerer det sammenlignelige strukturelle forhold. Lokalt observeret aktivitet kan derfor analyseres som en del af bredere urbane systemers adfærd på tværs af regioner.",
            image: {
                url: "/smart-city/local-to-global/global-urban-pattern.png",
                alt: "Urbant miljø med sammenlignelige mobilitetsstrømme, logistiske systemer og brug af offentlige rum på tværs af byer",
            },
            signalFocus: ["replicability", "urban density", "systemic flow"],
        },
    ],

    purpose: "Analysere bredere strukturelle mønstre gennem lokal sammenligning",
    narrativeRole: "Forbinde observeret lokal aktivitet med systemisk analyse",
    section: "From Local Life to Global Pattern",
    category: "Smart City Media",
    landingUrl: "/smart-city/from-local-life-to-global-pattern",
    lang: "da",
};