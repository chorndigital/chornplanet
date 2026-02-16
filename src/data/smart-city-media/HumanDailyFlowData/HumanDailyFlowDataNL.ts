//data/smart-city-media/HumanDailyFlowDataNL.ts

import {IHumanDailyFlow} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const HumanDailyFlowDataNL: IHumanDailyFlow = {
    headline: "Stedelijke systemen worden waargenomen via dagelijkse cycli",
    paragraph:
        "Stedelijke systemen zijn zelden in één enkel moment volledig te overzien. Ze worden zichtbaar via terugkerende dagelijkse patronen — ochtendverplaatsingen, coördinatie rond het midden van de dag en overgangen in de avond. Door deze patronen te observeren kunnen complexe stedelijke systemen worden geïnterpreteerd aan de hand van routinematige menselijke beweging.",

    morningFlow: {
        title: "Ochtendstroom — Begin van de dag",
        paragraph:
            "De ochtend laat de overgang zien van residentiële rust naar meer actieve mobiliteit. Mensen verlaten hun woning, bewegen zich door de straten en stemmen hun gedrag af op transportsystemen. Observeerbare signalen — verkeerspatronen, voetgangersbeweging en gedeelde mobiliteit — geven aan hoe de mobiliteitsinfrastructuur aan het begin van de dag functioneert.",

        image: {
            url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
            alt: "Vroege ochtend in een stedelijke omgeving met pendelaars, daglicht, groene elementen en mobiliteitssystemen die de dagelijkse werking starten",
        },

        category: "Morning Flow",
        signalFocus: ["mobility readiness", "pedestrian flow", "temporal synchronization"],
        landingUrl: "/smart-city/human-daily-flow-morning",
    },

    middayFlow: {
        title: "Middagstroom — Dichtheid en coördinatie",
        paragraph:
            "Rond het midden van de dag neemt de dichtheid van stedelijke activiteit toe. Mensen, goederen en diensten bewegen gelijktijdig. Autonome mobiliteitssystemen, logistieke infrastructuur en het ontwerp van de openbare ruimte functioneren parallel om grotere bewegingsvolumes te verwerken.",

        image: {
            url: "/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
            alt: "Stedelijke omgeving rond het midden van de dag met voetgangers, autonome elektrische voertuigen, bezorgdrones en gecoördineerde beweging in de openbare ruimte",
        },

        category: "Midday Flow",
        signalFocus: ["density", "logistics", "coordination", "autonomous systems"],
        landingUrl: "/smart-city/human-daily-flow-midday",
    },

    eveningFlow: {
        title: "Avondstroom — Afname van activiteit en overgang",
        paragraph:
            "In de avond verschuift het activiteitsniveau naar een lagere mobiliteitsintensiteit. Verlichtingssystemen, loopomstandigheden, de straatomgeving en transportbeschikbaarheid beïnvloeden hoe bewoners naar huis terugkeren en deelnemen aan avondactiviteiten.",

        image: {
            url: "/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
            alt: "Vroege avond in een stedelijke omgeving met voetgangers, verlichte straten, actieve winkels, matig verkeer en zichtbare veiligheidscondities",
        },

        category: "Evening Flow",
        signalFocus: ["safety", "public space", "evening mobility", "urban transition"],
        landingUrl: "/smart-city/human-daily-flow-evening",
    },

    purpose: "Ondersteunen van herkenning van terugkerende stedelijke patronen",
    narrativeRole: "Complexe stedelijke systemen presenteren via vertrouwde dagelijkse routines",
    section: "Human Daily Flow",
    category: "Smart City Media",
    lang: "nl",
};