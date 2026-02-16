import {IEditorialPositioning} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const EditorialPositioningDataNL: IEditorialPositioning = {
    headline: "Van Dagelijks Leven naar Systeeminzichten",
    paragraphs: [
        "Dit platform voorspelt niet de toekomst van steden. Het observeert hoe steden functioneren via het dagelijkse menselijke leven.",
        "Door te focussen op routines, beweging, pauzes en coördinatie worden stedelijke systemen zichtbaar zonder te worden teruggebracht tot taal van technologie of beleid.",
        "Het doel is niet om oplossingen te promoten, maar om gedeeld begrip te ondersteunen over steden, culturen en schaalniveaus heen."
    ],
    principles: [
        {
            title: "Mensgerichte Observatie",
            description:
                "Stedelijke systemen worden begrepen via geleefde ervaring. Menselijke routines en dagelijkse keuzes worden gezien als primaire signalen, niet als secundaire uitkomsten.",
            image: {
                url: "/smart-city/editorial/human-first-observation.png",
                alt: "Mensen die zich door een rustige stadsstraat bewegen als het primaire signaal van stedelijke systemen",
            },
            landingUrl: "/smart-city/editorial-human-first-observation",
        },
        {
            title: "Systeem vóór Technologie",
            description:
                "Technologie wordt alleen meegenomen wanneer zij gedrag, veiligheid, toegang of comfort betekenisvol vormt — niet als een op zichzelf staande functie.",
            image: {
                url: "/smart-city/editorial/system-before-technology.png",
                alt: "Stedelijke mobiliteit en infrastructuur die stil op de achtergrond van het dagelijks leven functioneren",
            },
            landingUrl: "/smart-city/editorial/system-before-technology",
        },
        {
            title: "Lokaal als Mondiaal Prototype",
            description:
                "Middelgrote steden kunnen fungeren als levende laboratoria. Lokale patronen kunnen uitgroeien tot bredere stedelijke systemen wanneer ze zorgvuldig worden geobserveerd.",
            image: {
                url: "/smart-city/editorial/local-as-global-prototype.png",
                alt: "Een lokale straat die patronen weerspiegelt die door steden wereldwijd worden gedeeld",
            },
            landingUrl: "/smart-city/editorial-local-as-global-prototype",
        },
    ],
}
