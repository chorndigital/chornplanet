//data/smart-city-media/MobilityFocusDataDA.ts

import {IMobilityFocus} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const MobilityFocusDataDA: IMobilityFocus = {
    headline: "Mobilitet observeres, før den forstås",
    paragraph:
        "Mennesker forholder sig ikke altid direkte til mobilitetssystemer. De møder dem gennem små situationer — at krydse en gade, vente på en tur eller dele plads med andre. Når mobilitet fungerer med konsistens, fylder den mindre i opmærksomheden og understøtter rutinemæssig bevægelse i hverdagen.",

    signals: [
        {
            title: "Forudsigelig bevægelse i delte gader",
            description:
                "Koordineret mobilitet kan reducere usikkerhed i bevægelse. Fodgængere kan krydse med tydeligere forventninger, køretøjer sænker hastigheden under forhold med delte gader, og delte gader kan fortolkes med mindre stress. Forudsigelighed kan bidrage til hverdagssikkerhed.",
            image: {
                url: "/smart-city/mobility-focus/predictable-shared-street.png",
                alt: "Bygade hvor fodgængere, el-køretøjer og leveringsrobotter bevæger sig roligt med tydelige visuelle signaler og forudsigeligt flow",
            },
            signalFocus: [
                "pedestrian confidence",
                "shared space",
                "predictability",
                "street readability"
            ],
            landingUrl: "/smart-city/mobility-focus-predictable-movement",
        },
        {
            title: "Sameksistens af blandet mobilitet",
            description:
                "Bygader kan omfatte flere transportformer. Mennesker kan gå side om side med autonome køretøjer, små leveringsrobotter og let elektrisk transport. Under designforhold, der understøtter fælles brug, behøver ingen enkelt form at dominere opmærksomheden, og flere former kan fungere parallelt.",
            image: {
                url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                alt: "Bygade med fodgængere, autonome el-køretøjer, små leveringsrobotter og scootere, der deler plads",
            },
            signalFocus: [
                "mixed mobility",
                "autonomous vehicles",
                "delivery robots",
                "human-centered design"
            ],
            landingUrl: "/smart-city/mobility-focus-mixed-mobility",
        }
    ],
};