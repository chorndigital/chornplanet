//data/smart-city-media/HumanDailyFlowDataDA.ts

import {IHumanDailyFlow} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const HumanDailyFlowDataDA: IHumanDailyFlow = {
    headline: "Byens systemer observeres gennem daglige cyklusser",
    paragraph:
        "Byens systemer kan sjældent observeres fuldt ud i ét enkelt øjeblik. De fremtræder gennem tilbagevendende daglige mønstre — morgenpendling, koordinering midt på dagen og overgange om aftenen. Ved at observere disse mønstre kan komplekse bysystemer fortolkes gennem menneskers daglige bevægelse.",

    morningFlow: {
        title: "Morgenflow — Dagens begyndelse",
        paragraph:
            "Om morgenen ses overgangen fra boligområders stilhed til aktiv mobilitet. Mennesker forlader deres hjem, bevæger sig gennem gaderne og tilpasser sig transportsystemer. Observerbare signaler — trafikmønstre, fodgængerbevægelser og delt mobilitet — indikerer, hvordan mobilitetsinfrastrukturen fungerer ved dagens start.",

        image: {
            url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
            alt: "Tidlig morgen i bymiljø med pendlere, dagslys, grønne områder og mobilitetssystemer i begyndende daglig drift",
        },

        category: "Morning Flow",
        signalFocus: ["mobility readiness", "pedestrian flow", "temporal synchronization"],
        landingUrl: "/smart-city/human-daily-flow-morning",
    },

    middayFlow: {
        title: "Middagsflow — Tæthed og koordinering",
        paragraph:
            "Midt på dagen øges den urbane aktivitet i tæthed. Mennesker, varer og tjenester bevæger sig samtidig. Autonome mobilitetssystemer, logistikinfrastruktur og udformningen af offentlige rum fungerer parallelt for at håndtere større bevægelsesmængder.",

        image: {
            url: "/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
            alt: "Bymiljø midt på dagen med fodgængere, autonome el-køretøjer, leveringsdroner og koordineret bevægelse i offentlige rum",
        },

        category: "Midday Flow",
        signalFocus: ["density", "logistics", "coordination", "autonomous systems"],
        landingUrl: "/smart-city/human-daily-flow-midday",
    },

    eveningFlow: {
        title: "Aftenflow — Aftagende aktivitet og overgang",
        paragraph:
            "Om aftenen skifter aktivitetsniveauet mod reduceret mobilitetsintensitet. Belysningssystemer, gangforhold, gademiljøer og transporttilgængelighed påvirker, hvordan beboere vender hjem og deltager i aftenaktiviteter.",

        image: {
            url: "/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
            alt: "Tidlig aften i bymiljø med fodgængere, oplyste gader, aktive butikker, moderat trafik og synlige sikkerhedsforhold",
        },

        category: "Evening Flow",
        signalFocus: ["safety", "public space", "evening mobility", "urban transition"],
        landingUrl: "/smart-city/human-daily-flow-evening",
    },

    purpose: "Understøtte genkendelse af tilbagevendende urbane mønstre",
    narrativeRole: "Præsentere komplekse bysystemer gennem velkendte daglige rutiner",
    section: "Human Daily Flow",
    category: "Smart City Media",
    lang: "da",
};