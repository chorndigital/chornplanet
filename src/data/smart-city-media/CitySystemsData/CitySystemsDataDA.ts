import {ICitySystems} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const CitySystemsDataDA: ICitySystems = {
    headline: "Bysystemer og Hverdagsbalance",
    paragraph:
        "Byens systemer opleves sjældent direkte som teknologi eller politik. De opleves som balance — mellem bevægelse og pause, aktivitet og hvile, effektivitet og komfort — og former, hvordan mennesker bevæger sig gennem byen hver dag.",
    systems: [
        {
            title: "Bevægelse og Pause",
            description:
                "Byer fungerer bedst, når bevægelse ikke udvisker stilhed. Gader, krydsninger og fællesrum gør det muligt for flow at sænke tempoet naturligt og skaber øjeblikke, hvor mennesker føler sig trygge nok til at stoppe, observere og interagere.",
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Bygade i balance mellem fodgængerpause og mobilitetsflow"
            },
            balanceSignals: ["speed vs safety", "flow vs rest"],
            landingUrl: "/smart-city/city-systems-movement-and-pause"
        },
        {
            title: "Tæthed og Komfort",
            description:
                "Tæthed bliver beboelig, når plads, lys og grønne elementer blødgør nærheden. Velafbalancerede bysystemer gør det muligt for mennesker at dele rum uden at føle sig klemt eller hastet.",
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Komfortabel bytæthed med grønne områder og fælles rum"
            },
            balanceSignals: ["proximity vs privacy", "activity vs calm"],
            landingUrl: "/smart-city/city-systems-density-and-comfort"
        },
        {
            title: "Effektivitet og Menneskelig Rytme",
            description:
                "Effektive systemer understøtter daglige rytmer i stedet for at overstyre dem. Transport, logistik og service tilpasser sig menneskets tempo og gør, at byen føles forudsigelig frem for forhastet.",
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "Byinfrastruktur tilpasset menneskets daglige rytme"
            },
            balanceSignals: ["automation vs control", "speed vs predictability"],
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm"
        }
    ]
};
