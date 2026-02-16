//data/smart-city-media/SystemExplainersDataDA.ts

import {ISystemExplainers} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const SystemExplainersDataDA: ISystemExplainers = {
    headline: "Systemer bag daglig bevægelse",
    paragraph:
        "Daglig bevægelse, der fremstår naturlig, understøttes ofte af løbende koordinering. Disse systemer kræver sjældent direkte opmærksomhed, men påvirker, hvordan byer fungerer i større skala.",

    systems: [
        {
            title: "Mobilitetskoordinering",
            description:
                "Trafiksignaler, fodgængerstrømme, autonome køretøjer og offentlig transport fungerer inden for koordineret tidsstyring. Under stabile forhold kan bevægelse fremstå mere kontinuerlig frem for eksplicit styret.",
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "Urbane mobilitetssystemer, der koordinerer fodgængere, køretøjer og autonom transport",
            },
        },
        {
            title: "Urban logistik",
            description:
                "Varer bevæger sig gennem byer via budtjenester, mikrokøretøjer og automatiserede systemer. Disse logistiske processer understøtter daglige aktiviteter og kan reducere forstyrrelser, når de integreres med urbane bevægelsesmønstre.",
            image: {
                url: "/smart-city/system-explainers/urban-logistics.png",
                alt: "Daglig logistik, der fungerer kontinuerligt gennem byens gader",
            },
        },
        {
            title: "Koordinering af offentlige rum",
            description:
                "Fortove, fodgængerfelter, belysning og gadeaktivitet påvirker, hvordan mennesker deler rum i løbet af dagen. Disse elementer har indflydelse på bevægelsesforhold og den samlede anvendelighed af offentlige områder.",
            image: {
                url: "/smart-city/system-explainers/public-space-orchestration.png",
                alt: "Offentligt rum udformet til at understøtte fælles byliv",
            },
        },
    ],
};