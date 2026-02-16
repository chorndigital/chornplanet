//data/smart-city-media/UrbanSignalsDataNL.ts

import {IUrbanSignals} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const UrbanSignalsDataNL: IUrbanSignals = {
    headline: "Stedelijke signalen die in het dagelijks leven worden waargenomen",
    paragraph:
        "Steden communiceren via kleine, observeerbare signalen — hoe straten aanvoelen, hoe mensen zich verplaatsen en hoe ruimte in de tijd verandert. Deze momenten worden niet altijd als systemen beschreven, maar kunnen aangeven hoe stedelijke omstandigheden functioneren.",

    signals: [
        {
            title: "Voorspelbaar gedrag in de straat",
            description:
                "Wanneer voetgangers, fietsers en voertuigen zich verplaatsen met duidelijke verwachtingen, kan dit gedeelde normen en ruimtelijke duidelijkheid aangeven, zelfs zonder expliciete handhaving.",

            signalFocus: ["predictability", "shared space", "human trust"],

            image: {
                url: "/smart-city/urban-signals/predictable-shared-street.png",
                alt: "Mensen, fietsen en voertuigen die soepel samen bewegen op een gedeelde stedelijke straat zonder zichtbare congestie of spanning",
            },

            landingUrl: "/smart-city/urban-signals-predictable-street",
        },

        {
            title: "Logistiek geïntegreerd in het dagelijks leven",
            description:
                "Bezorgrobots, kleine elektrische voertuigen en koeriers kunnen opereren zonder de aandacht te domineren, wat kan aangeven dat logistiek is geïntegreerd in dagelijkse verplaatsingspatronen.",

            signalFocus: ["logistics", "integration", "low friction"],

            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Kleine bezorgvoertuigen en robots die rustig opereren naast het dagelijkse straatleven in een moderne stad",
            },

            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },

        {
            title: "Openbare ruimte gebruikt zoals bedoeld",
            description:
                "Wanneer mensen blijven hangen, pauzeren en ruimte op routinematige wijze delen, kan dit een balans weerspiegelen tussen verplaatsingsefficiëntie en bruikbaarheid van openbare gebieden.",

            signalFocus: ["public space", "comfort", "social rhythm"],

            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "Mensen die zitten, lopen en comfortabel met elkaar omgaan in een goed ontworpen stedelijke openbare ruimte",
            },

            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
    ],
}