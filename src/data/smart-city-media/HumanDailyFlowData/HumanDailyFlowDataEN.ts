//data/smart-city-media/HumanDailyFlowDataEN.ts

import {IHumanDailyFlow} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const HumanDailyFlowDataEN: IHumanDailyFlow = {
    headline: "Urban Systems Observed Through Daily Cycles",
    paragraph:
        "Urban systems are rarely observed in a single moment. They are encountered through recurring daily patterns — morning commuting activity, midday coordination, and evening transitions. Observing these patterns allows complex urban systems to be interpreted through routine human movement.",

    morningFlow: {
        title: "Morning Flow — Beginning the Day",
        paragraph:
            "Morning illustrates the transition from residential stillness to active mobility. People leave their homes, navigate streets, and align with transport systems. Observable signals — traffic patterns, pedestrian movement, and shared mobility usage — indicate how mobility infrastructure functions at the start of the day.",

        image: {
            url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
            alt: "Early morning urban environment with people commuting, daylight conditions, green surroundings, and mobility systems beginning daily operation",
        },

        category: "Morning Flow",
        signalFocus: ["mobility readiness", "pedestrian flow", "temporal synchronization"],
        landingUrl: "/smart-city/human-daily-flow-morning",
    },

    middayFlow: {
        title: "Midday Flow — Density and Coordination",
        paragraph:
            "At midday, urban activity increases in density. People, goods, and services move simultaneously. Autonomous mobility systems, logistics infrastructure, and public space design operate in parallel to manage higher volumes of movement.",

        image: {
            url: "/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
            alt: "Midday urban environment with pedestrians, autonomous electric vehicles, delivery drones, and coordinated movement across public space",
        },

        category: "Midday Flow",
        signalFocus: ["density", "logistics", "coordination", "autonomous systems"],
        landingUrl: "/smart-city/human-daily-flow-midday",
    },

    eveningFlow: {
        title: "Evening Flow — Slowing Down and Transition",
        paragraph:
            "Evening activity shifts toward reduced mobility intensity. Lighting systems, walkability conditions, street environments, and transport availability influence how residents return home and engage in evening activities.",

        image: {
            url: "/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
            alt: "Early evening urban environment with pedestrians, illuminated streets, active storefronts, moderate traffic flow, and visible public safety conditions",
        },

        category: "Evening Flow",
        signalFocus: ["safety", "public space", "evening mobility", "urban transition"],
        landingUrl: "/smart-city/human-daily-flow-evening",
    },

    purpose: "Facilitate recognition of recurring urban patterns",
    narrativeRole: "Present complex urban systems through familiar daily routines",
    section: "Human Daily Flow",
    category: "Smart City Media",
    lang: "en",
};