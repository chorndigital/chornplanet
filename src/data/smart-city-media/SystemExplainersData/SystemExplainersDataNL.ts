//data/smart-city-media/SystemExplainersDataNL.ts

import {ISystemExplainers} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const SystemExplainersDataNL: ISystemExplainers = {
    headline: "Systemen achter dagelijkse verplaatsing",
    paragraph:
        "Dagelijkse verplaatsing die natuurlijk lijkt, wordt vaak ondersteund door voortdurende coördinatie. Deze systemen vragen zelden om directe aandacht, maar beïnvloeden wel hoe steden op grotere schaal functioneren.",

    systems: [
        {
            title: "Mobiliteitscoördinatie",
            description:
                "Verkeerslichten, voetgangersstromen, autonome voertuigen en openbaar vervoer functioneren binnen gecoördineerde tijdsstructuren. Onder stabiele omstandigheden kan verplaatsing meer continu lijken in plaats van expliciet aangestuurd.",
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "Stedelijke mobiliteitssystemen die voetgangers, voertuigen en autonoom vervoer coördineren",
            },
        },
        {
            title: "Stedelijke logistiek",
            description:
                "Goederen bewegen zich door steden via bezorgdiensten, microvoertuigen en geautomatiseerde systemen. Deze logistieke processen ondersteunen dagelijkse activiteiten en kunnen verstoringen verminderen wanneer zij worden geïntegreerd met stedelijke verplaatsingspatronen.",
            image: {
                url: "/smart-city/system-explainers/urban-logistics.png",
                alt: "Dagelijkse logistiek die continu door stedelijke straten opereert",
            },
        },
        {
            title: "Inrichting van openbare ruimte",
            description:
                "Trottoirs, oversteekplaatsen, verlichting en straatactiviteiten beïnvloeden hoe mensen gedurende de dag ruimte delen. Deze elementen beïnvloeden de verplaatsingscondities en de algemene bruikbaarheid van openbare gebieden.",
            image: {
                url: "/smart-city/system-explainers/public-space-orchestration.png",
                alt: "Openbare ruimte ontworpen om gedeeld stedelijk leven te ondersteunen",
            },
        },
    ],
};