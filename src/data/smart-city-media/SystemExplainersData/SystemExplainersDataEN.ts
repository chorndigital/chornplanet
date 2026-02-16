//data/smart-city-media/SystemExplainersDataEN.ts

import {ISystemExplainers} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const SystemExplainersDataEN: ISystemExplainers = {
    headline: "Systems Behind Everyday Movement",
    paragraph:
        "Daily movement that appears natural is often supported by ongoing coordination. These systems rarely require direct attention, yet they influence how cities operate at broader scale.",

    systems: [
        {
            title: "Mobility Coordination",
            description:
                "Traffic signals, pedestrian flow, autonomous vehicles, and public transport operate within coordinated timing. Under stable conditions, movement can appear more continuous rather than explicitly managed.",
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "Urban mobility systems coordinating pedestrians, vehicles, and autonomous transport",
            },
        },
        {
            title: "Urban Logistics",
            description:
                "Goods move through cities through delivery riders, micro-vehicles, and automated systems. These logistics operations support daily activity and can reduce disruption when integrated with urban movement patterns.",
            image: {
                url: "/smart-city/system-explainers/urban-logistics.png",
                alt: "Everyday logistics operating quietly through city streets",
            },
        },
        {
            title: "Public Space Orchestration",
            description:
                "Sidewalks, crossings, lighting, and street activity influence how people share space throughout the day. These elements affect movement conditions and the overall usability of public areas.",
            image: {
                url: "/smart-city/system-explainers/public-space-orchestration.png",
                alt: "Public space designed to support shared urban life",
            },
        },
    ],
}