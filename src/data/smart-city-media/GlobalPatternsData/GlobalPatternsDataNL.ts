import {IGlobalPatterns} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const GlobalPatternsDataNL: IGlobalPatterns = {
    headline: "Wereldwijd waargenomen patronen in alledaagse steden",
    paragraph:
        "In steden met verschillende culturen, groottes en inkomensniveaus worden in toenemende mate vergelijkbare mobiliteits- en openbare-ruimtepatronen waargenomen. Deze ontwikkelingen worden niet uitsluitend door technologie gestuurd, maar ontstaan door de afstemming van menselijke routines, ruimtelijke beperkingen en systeemcoördinatie in de tijd. Het observeren van deze signalen helpt te verklaren hoe steden in verschillende regio’s vergelijkbare operationele kenmerken vertonen, terwijl zij hun lokale identiteit behouden.",

    signals: [
        {
            title: "Voorspelbare straten ondersteunen het openbare leven",
            description:
                "Wanneer bewegingssystemen voorspelbaar zijn, ervaren mensen meer vertrouwen in gedeelde omgevingen. In meerdere regio’s worden straten die onzekerheid verminderen in plaats van snelheid te maximaliseren, geassocieerd met stabieler en comfortabeler gebruik van de openbare ruimte.",
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "Een rustige gedeelde straat waar voetgangers, fietsers en voertuigen zich voorspelbaar verplaatsen"
            },
            signalFocus: [
                "shared streets",
                "predictable mobility",
                "human comfort",
                "street behavior"
            ],
            landingUrl: "/smart-city/global-patterns-predictable-shared-street"
        },
        {
            title: "Gemengde mobiliteit wordt vaker waargenomen in stedelijke context",
            description:
                "Lopen, fietsen, scooters, kleine elektrische voertuigen en bezorgrobots zijn in veel steden steeds vaker aanwezig. In verschillende regio’s worden mobiliteitsomgevingen ingericht om co-existentie tussen meerdere vervoersvormen mogelijk te maken, als reactie op ruimtelijke en operationele omstandigheden.",
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Meerdere mobiliteitsvormen die samen functioneren in een stedelijke omgeving"
            },
            signalFocus: [
                "mixed mobility",
                "coexistence",
                "last-mile movement",
                "urban adaptation"
            ],
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence"
        },
        {
            title: "Integratie van stedelijke logistiek in dagelijkse systemen",
            description:
                "Kleinschalige logistiek, waaronder lokale elektrische bezorgvoertuigen, grondrobots en luchtsystemen waar regelgeving dit toestaat, wordt geleidelijk geïntegreerd in de dagelijkse stedelijke operatie. Steden die logistiek coördineren binnen bestaande ruimtelijke en veiligheidskaders behouden doorgaans publiek comfort terwijl de operationele efficiëntie wordt verbeterd.",
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "Kleine bezorgvoertuigen en robots die opereren in een stedelijke omgeving"
            },
            signalFocus: [
                "urban logistics",
                "last-mile delivery",
                "system coordination",
                "integrated infrastructure"
            ],
            landingUrl: "/smart-city/global-patterns-urban-logistics"
        }
    ]
}